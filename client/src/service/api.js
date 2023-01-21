import axios from 'axios';  //axios  library

const URL = 'http://localhost:8000/';

export const addUser = async (data) => {            //follow cameCase //declare wit the help of "const"
//for error handling
try{
    await axios.post('$(URL)/add', data)      //post api, pass two arguments,,await works on with asyn function

} catch (error) {
    console.log('Error while calling add User Api', error);
}

}

