const https = require("https");
module.exports = class{
    constructor(content){
        this.content = content || "";
        this.raw = null;
        this.json = null;
        this.link = null;
    }

    setContent(content){
        this.content = content;
        return this;
    }

    async post(){
        const requestOpts = {
            method: "POST",
            hostname: "hasteb.in",
            path: "/documents",
        };

        let data = "";

        await new Promise(resolve => {
            const req = https.request(requestOpts, (res) => {
                res.once("data", chunk => {
                    data += chunk
                    this.raw = data;
                    this.json = JSON.parse(data.raw);
                    this.link = `https://hasteb.in/${data.json.key}`
                    resolve()
                });
            });
            req.write(this.content.toString());
            req.end();
        })
    }
   
}