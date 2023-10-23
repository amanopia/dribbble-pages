import express from 'express';

const app = express();


//! ROUTES
app.get('/', (req, res)=>{
    res.send({
        name: "jOHN",
        age: 45
    });
})

app.get('/about', (req, res) => {

})

app.get('/services', (req, res) => {

})

app.get('/contact-us', (req, res) => {
    res.send('<h1>Hola</h1>')
})


const port = 3002;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

