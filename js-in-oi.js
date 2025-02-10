const OI={
    IO:{
        Scanner:class{
            constructor(buf){
                this.buffer=buf;
                this.current=0;
            }
            getCharASCII(){
                if(this.current>=this.buffer.length){
                    return undefined;
                }else{
                    return this.buffer[this.current++];
                }
            }
            getCharASCIIUntilNotNull(){
                let c=this.getCharASCII();
                while(c==10||c==9||c==32){
                    c=this.getCharASCII();
                }
                return c;
            }
            getString(){
                let c=this.getCharASCIIUntilNotNull(),res=[];
                while(c&&c!=10&&c!=9&&c!=32){//c非空且c不是\n \t 空格
                    res.push(String.fromCharCode(c));
                    c=this.getCharASCII();
                }
                if(res.length==0){
                    return undefined;
                }
                return res.join('');
            }
            getLine(){
                let c=this.getCharASCII(),res=[];
                while(c&&c!=10){//c非空且c不是\n
                    res.push(String.fromCharCode(c));
                    c=this.getCharASCII();
                }
                if(res.length==0){
                    return undefined;
                }
                return res.join('');
            }
            getNumber(){
                return new Number(this.getString());
            }
        },
        readStream(stream,res,err){
            data=[];
            stream.on('data',(chunk)=>{
                data.push(chunk);
            });
            stream.on('end',()=>{
                res(Buffer.concat(data));
            });
            stream.on('error',(er)=>{
                err(er);
            });
        }
    }
};

module.exports=OI;