import axios from 'axios';

const URL = '';

export const addUser = async (data) => {            //follow cameCase
//for error handling
try{
    await axios.post('$(URL)/add', data)      //post api, pass two arguments,,await works on with asyn function

} catch (error) {
    console.log('Error while calling add User Api', error);
}

}

