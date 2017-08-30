const Renderer = class{

    constructor(){

    }

    async render(data){
        
        if(!data || !(data instanceof Data)) throw 'invalid data type';
        
        const info = await data.getData();
        
        this._title = info.title;
        this._header = info.header;
        this._items = info.items;

        this._render();
    }
    
    _render(){
        '_render must be overridden';
    }

};