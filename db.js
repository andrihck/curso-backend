//inicio express node_modules
const express = require('express')
const { Client } = require ('pg')
require("dotenv").config()

const client = new Client({
    host: process.env.host,
    port: process.env.host,
    user: process.env.host,
    password: process.env.host,
    database:  process.env.host, 

})

const app = express
const connectDB = () =>{
    client
    .connect()
    .then(() => {
    console.log('a conexao funfou');
    }).catch((err) => {
        console.error('erro ao conectar na db')
    });
}

module.exports = connectDB


//fim express

//inico da atividade de pares
function filtrarPares(arr){
    nova_arr=[]
    for(let i=0; i < arr.length; i++){
        if (arr[i] %2 ===0) {
            nova_arr.push(arr[i])
        }
    }
    return nova_arr
}    

arr=[1, 2, 3, 4, 5]
//fim numeros pares

//inicio api
//const express = require('express')

//const app = express()



//fim api    