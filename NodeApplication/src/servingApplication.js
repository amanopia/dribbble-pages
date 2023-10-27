// node imports
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
// npm imports
import express from 'express';
import anime from 'animejs';


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")))

app.set('view engine', 'hbs');


const viewsPath = path.join(__dirname, "../templates/views");
app.set('views', viewsPath);
hbs.registerPartials(path.join(__dirname, "../templates/partials"))

//! ROUTES
app.get('', (req, res)=>{
    res.render('index', {
        img: "/assets/star.png",
        alt : "img"
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/services', (req, res) => {
    res.render('services');
})

app.get('/contact-us', (req, res) => {
    res.render('contact-us');
})

app.get("*", (req, res) => {
    res.render("404", {
        src: "/assets/404.jpg",
        alt: "404 image"
    });
})
const port = 3002;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

