import { response } from "express";


export const addUser = (request,response) => {
    const user = request.body;

    console.log.log(user);
}