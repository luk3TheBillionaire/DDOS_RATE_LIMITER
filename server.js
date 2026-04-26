require('dotenv').configDotenv();
const express = require('express');

const app=express();
const PORT = process.env.PORT;

app.use(express.urlencoded({urlencoded:true}));
app.use(express.json());
app.set('trust proxy',1);


app.get('/api/getsomething',(req,res)=>{
    const userID = req.socket.address();
    console.log(userID);
    res.send({userID})
})

app.listen(PORT,`localhost`,100,
    (error)=>{
        (!error)?console.log(`Your Application is currently running on port ${PORT}`):console.error(error);
    }
)
