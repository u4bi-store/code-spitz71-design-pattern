const CsvData = class extends Data{
    
    constructor(dataUrl){
        super();
        
        if(!dataUrl || typeof dataUrl !== 'string') throw 'invalid url';
        
        this._url = dataUrl;
    }

    async _getData(){

        const response = await fetch(this._url);        
        if(!response.ok) throw 'data load failed';


        const data = await response.text();
        

        const csv = data.split('\n').reduce((p, c)=>{
            
            p.push(c.split(','));
                        
            return p;
        }, []);


        this._title = csv[0].join();
        this._header = csv[1];
        this._items = csv.reduce((p, c, idx)=>{
            
            if(idx > 1) p.push(c);
            
            return p;
        }, []);

    }
};