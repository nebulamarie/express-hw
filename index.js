const cors = require ('cors');
const express = require('express');
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "company",
    password: "",
    port: 5432
})

const app = express();

const port = 5432;

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('home directory');
});

app.get('/employees', (req,res) =>{
    pool.query("SELECT * FROM employees", (error, results) => {
        if(error){
            console.log(error);
            res.status(500)
    
        }else{
            res.status(200).json(results.rows);
        }
    })
});

app.get('/departments', (req,res) =>{
    pool.query("SELECT * FROM departments", (error, results) => {
        if(error){
            console.log(error);
            res.status(500)
    
        }else{
            res.status(200).json(results.rows);
        }
    })
})

app.listen(3003, () => {
    console.log(`Server running on port 5432`)
})
