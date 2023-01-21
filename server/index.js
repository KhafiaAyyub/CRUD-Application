import express from 'express';


const app = express();  //inialize express as func

const PORT = 8000;

app.listen(PORT,() => console.log(`server is running successfully on PORT ${PORT}`));    
                       //function call //listen func takes two arguments
                        //  1st argument  is PORT number and 2nd argument is call back function