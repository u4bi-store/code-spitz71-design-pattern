const Table = ( _=> {

    // static private
    const Private = Symbol(),
            render  = Symbol();

    return class{
        /*
            constructor                        
            public methods
            private methods                        
        */
        constructor(parent){
            /* Hika Maeng : 여러분 코드 습관을 들이실 때 무조건 validation이 있고
                            기본적으로 개발을 할 때 throw를 해야겠다라고 생각하세요
                            ...
                            ...
                            그래서 throw는 런타임 언어에서 기본적인 안전장치

                            https://youtu.be/ymG40FJe2cM?t=12m10s
            */
            if(typeof parent != 'string' || !parent) throw 'invalid param';
            
            this[Private] = { parent };

            console.log('constructor', parent);

        }
        
        /*                    
        load(dataUrl){

                // fatch
            
                // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
                // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
                
            fetch(dataUrl)
                .then( resp =>{
                    
                    return resp.json();

                }).then( json => {
                    
                    console.log('json object', json);

                    this[render]();

                });

            console.log('load', dataUrl);

        }
        */


        /* async function
            
            ECMAScript 2017
            
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
        
        */
        async load(dataUrl){

            const response = await fetch(dataUrl);
            if(!response.ok) throw "invaild response";

            const json = await response.json();
            console.log('json object', json);
            
            const {title, header, items} = json;
            if(!items.length) throw "no items";

            /* assign
                
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
            
            */
            Object.assign(this[Private], {title, header, items});

            this[render]();

        }

        [render](){ // private(symbol) method 
            console.log('table render');
            
            /* Hika Maeng : 여러분 코드를 짜실 때 항상 알고리즘을 짤때는 의사코드를 먼저 짠다.
                            의사 코드는 알고리즘을 짤 때
                            알고리즘은 ? 변수의 상태와 제어문을 사용하는 것을 알고리즘, 이러한 행위를 하는 것 모두 알고리즘
                            .....
                            알고리즘을 짤 때 항상 알고리즘을 덩어리로 나눠서 의사코드를 짜고 그 다음 짠다.

                            https://youtu.be/ymG40FJe2cM?t=26m30s
            */

            // [1] 부모, 데이터 체크 
            // [2] table 생성
            // [3] 캡션을 title로
            // [4] header를 thead로
            // [5] items를 tr로
            // [6] 부모에 table삽입
            
            const fields = this[Private],
                    parent = document.querySelector(fields.parent);

            /* [1] */
            if(!parent) throw 'invaild parent';                        
            if(!fields.items || !fields.items.length) throw 'invaild data';                        
            /* [2] */
            const table = document.createElement('table');
            /* [3] */
            const caption = document.createElement('caption');
            caption.innerHTML = fields.title;
            
            table.appendChild(caption);

            /* [4] */
            table.appendChild(
                /* reduce : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce */
                fields.header.reduce( (thead, data /*이전값, 현재값, 인덱스 */) => {
                    console.log(thead, data);

                    const th = document.createElement('th');
                    th.innerHTML = data;
                    
                    thead.appendChild(th);
                    return thead;

                }, document.createElement('thead')/* 초기값 */)
            
            //
            );

            /* [6] */
            parent.appendChild(
                fields.items.reduce( (table, row) => {
                    console.log(table, row);

                    /* [5] */
                    table.appendChild(
                        row.reduce( (tr, data) => {
                            console.log(tr, data);

                            const td = document.createElement('td');
                    
                            td.innerHTML = data;
                            tr.appendChild(td);

                            return tr;
                            
                        }, document.createElement('tr'))
                    );

                    return table;

                }, table)
            );

        }

    }

})();
