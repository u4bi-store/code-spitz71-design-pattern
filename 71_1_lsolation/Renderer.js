const Renderer = (_=>{
    
    const Private = Symbol();
    
    return class{
        
        constructor(parent){
            if(!parent) throw 'Invalid parent';
            this[Private] = {parent};
        }

        setData(data){
            if(!data || !data.title || !data.header || !data.items) throw 'Invalid data';
            Object.assign(this[Private], data);
        }

        render(){
            const fields = this[Private];
            
            console.log(fields);

        }
    }

})();
