const express = require('express');
const app = express();
let port = 5000;
app.listen(port, ()=> console.log(`Server listen on port: ${port}...`));
app.get('/',(req,res)=>{
    res.send('Raboti!!!!!')
})  