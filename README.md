# bin-pls
An npm package to upload code to a pastbin.

## Example 
```js
const binPls = require("bin-pls");
const bin = new binPls()
const postBin = async (content) => {
    bin.setContent(content);
    await bin.post();
    console.log(bin.link);
}  

postBin("hello hasteb from bin-pls");
```