const Info = class{

    constructor(data){

        const { title, header, items } = data;

        if(typeof title != 'string' || !title) throw "invalid title";
        if(!Array.isArray(header) || !header.length) throw "invalid header";
        if(!Array.isArray(items) || !items.length) throw "invalid items";

        items.forEach( (v, idx) => {

            if(!Array.isArray(v) || v.length != header.length) throw `invalid items: ${ idx }`;

        });


        this._private = {
            title,
            header,
            items
        };

    }

    get title(){  return this._private.title;  }
    get header(){ return this._private.header; }
    get items(){  return this._private.items;  }

};
