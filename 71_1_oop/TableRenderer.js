const TableRenderer = class extends Renderer{
    constructor(parent){
        super();
    
        if(!parent) throw 'invalid parent';
    
        this._parent = parent;

    }

    _render(){
        
        const parent = document.querySelector(this._parent);
        if(!parent) throw 'invalid parent element';

        const table = document.createElement('table'),
              caption = document.createElement('caption');
        
        caption.innerHTML = this._title;        
        table.appendChild(caption);
        
        table.appendChild(

            this._header.reduce((thead, data)=>{
                
                const th = document.createElement('th');
                
                th.innerHTML = data;
                thead.appendChild(th);
                
                return thead;

            }, document.createElement('thead'))
            
        );

        parent.appendChild(table);
        parent.appendChild(
            
            this._items.reduce((table, row)=>{
                
                table.appendChild(
                    row.reduce((tr, data)=>{
                        
                        const td = document.createElement('td');
                        td.innerHTML = data;
                        
                        tr.appendChild(td);
                        
                        return tr;
                    }, document.createElement('tr'))
                );
                //
                return table;
                
            }, table)
            //
        );

    }
};