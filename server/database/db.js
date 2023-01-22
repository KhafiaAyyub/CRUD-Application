import mongoose from 'mongoose'

const Connection = () => {        //funciton
    //with the help of third party library we can connect to database
    //1.mongodb
    //2.mnognoose (some extra feature)
    const URL = '';

    try {
        mongoose.connect(URL,{ useUnifiedTopology:true,userNewUrlParser:true});
    } catch(error) {
        console.log('Error while connecting with the database ',error);
    }
}