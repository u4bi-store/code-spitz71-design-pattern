const JsonData = class extends Data{
    
    constructor(dataUrl){
        super();

        if(!dataUrl || typeof dataUrl !== 'string') throw 'Invalid url';
        
        this._url = dataUrl;
    }

    async _getData(){
        let json;

        const response = await fetch(this._url);
        if(!response.ok) throw 'data load failed';
        
        json = await response.json();
        if(!json) throw 'data parsing failed';

        this._title = json.title;
        this._header = json.header;
        this._items = json.items;
                
    }
};