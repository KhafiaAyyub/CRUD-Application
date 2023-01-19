import styled from "@emotion/styled";
import { useState } from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, } from "@mui/material";
// import { Container } from "@mui/system";
import { addUser } from '../service/api';

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    & >  div {
        margin-top: 20px;
    }
`


const defaultValue = {
    name:'',
    username:'',
    email:'',
    phone:''
}

const AddUser = () => {   //functional based components

    const [user, setUser] = useState(defaultValue);

    const onValueChange = (e) => {                 //created onvValueChange function
        console.log(e.target.name,e.target.value)
        setUser ({ ...user,[e.target.name]:e.target.value})
    }

    //call on button click
    const addUserDetails = async () => {
        await addUser(user);     //passed "user" as an argument
    }
    
    return (
        <Container>                    {/*parent components}      
            {/* replacing formgroup with container */}
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addUserDetails()}>AddUser</Button>
            </FormControl>
        </Container>
        )
}

export default AddUser; 