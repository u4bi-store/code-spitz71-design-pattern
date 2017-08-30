const Loader = class{
    
    constructor(dataUrl){
        
        if(!dataUrl || typeof dataUrl !== 'string') throw 'Invalid url';
        this._url = dataUrl;
        
    }

    async load(end){
        
        const response = await fetch(this._url);
        if(!response.ok) throw 'Data Load Failed';
        
        const json = await response.json();
        if(!json.title || !json.header || !json.items) throw 'Invalid data';
        
        end(json);

    }

};