const Data = class{
    
    constructor(){
        this._title = null;
        this._header = null;
        this._items = null;
    }
    
    async getData(){
        await this._getData();
        
        if(this._title === null || this._header === null || this._items === null) throw 'no data available';
        
        return new Info({
            title  : this._title,
            header : this._header,
            items  : this._items
        });
        
    }
    
    async _getData(){
        throw '_getData must be overridden';
    }
};
