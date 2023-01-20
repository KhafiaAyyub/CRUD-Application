import mongoose from 'mongoose'

const Connection = () => {
    const URL = '';

    try {
        mongoose.connect(URL,{ useUnifiedTopology:true,userNewUrlParser:true});
    } catch(error) {
        console.log('Error while connecting with the database ',error);
    }
}