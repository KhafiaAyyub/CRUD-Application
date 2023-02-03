import mongoose from "mongoose" 


const Connection = async () => {        //function
    //with the help of third party library we can connect to database
    //1.mongodb
    //2.mongnoose (some extra feature)
    const URL = `mongodb+srv://khafiaayyub_:khafiaayyub@crud-app.lrarmgn.mongodb.net/?retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(URL,{ 
            useUnifiedTopology:true,
            userNewUrlParser:true});
        console.log('Database connected succesfully');
    } catch(error) {
        console.log('Error while connecting with the database ',error);
    }
}

export default Connection; 