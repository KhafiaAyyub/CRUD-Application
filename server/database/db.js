// import mongoose from 'mongoose';


// const Connection = async () => {        //function
//     //with the help of third party library we can connect to database
//     //1.mongodb
//     //2.mongnoose (some extra feature)
//     const URL = `mongodb+srv://khafiaayyub_:khafiaayyub@crud-app.lrarmgn.mongodb.net/?retryWrites=true&w=majority`;
    
//     try {
//         await mongoose.connect(URL,{ 
//             maxPoolSize: 50,
//             wtimeoutMS: 2500,
//             useUnifiedTopology:true,
//             userNewUrlParser:true});
//         console.log('Database connected succesfully');
//     } catch(error) {
//         console.log('Error while connecting with the database ',error);
//     }
// }

// export default Connection;


const mongoose = require('mongoose');
require('dotenv').config();
const user = process.env.mongoUser;
const pass = process.env.mongoPass;
// const url = `;
  const url = `mongodb+srv://khafiaayyub_:khafiaayyub@crud-app.lrarmgn.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(console.log('connecting'))
.catch(err => console.log(`error: ${err}`))
