//const http = require('http')

//CommonJS => require
//Esmodule => import/export para o js entender o novo padrão precisa colocar no `package.json`"type": "module"
import http from 'node:http'

// Criar um usuario (name, email, senha)

//arrow fuction função anonima
const server = http.createServer((req, res) => {
    return res.end('Hello World')
})

server.listen(3333) //localhost:3333