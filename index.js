import express from 'express'; 
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/employee-route';

const app = express(); 
const PORT = 4000; 

mongoose.connect('mongodb://localhost/ujwaldb', {useNewUrlParser:true}); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);

// tester 
app.get("/", (req, res) => {
    res.send("Hello From NodeJS"); 
})

app.listen(PORT, () => {
    console.log("web server hosted on ", PORT);
})


