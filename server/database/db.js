import mongoose from 'mongoose'

const Connection = async () => {        //function
    //with the help of third party library we can connect to database
    //1.mongodb
    //2.mongnoose (some extra feature)
    const URL = '';

    try {
        await mongoose.connect(URL,{ useUnifiedTopology:true,userNewUrlParser:true});
    } catch(error) {
        console.log('Error while connecting with the database ',error);
    }
}

export default Connection; 