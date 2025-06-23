const express=require('express');
const cors=require('cors');
const pool=require('./config/db');
const routesHandler=require('./routes/handler');

const app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use('/', routesHandler);

//DB connection
pool.getConnection((err, con) => {
    if (err) throw err;
});

const PORT=4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})