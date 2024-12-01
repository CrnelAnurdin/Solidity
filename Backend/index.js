const express = require('express');
const app = express();
const port = 3000;
const {Web3} =  require('web3');
const web3 = new Web3("https://eth.llamarpc.com");

app.get('/', async (req, res) => {
    const block = await web3.eth.getBlockNumber();      
    console.log(block) ;
    res.send('Hello World!');
});

app.listen(port, ()=>{
    console.log(`Server running at <http://localhost>:${port}/`);
}); 


