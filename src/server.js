//const http = require('http')

//CommonJS => require
//Esmodule => import/export para o js entender o novo padrão precisa colocar no `package.json`"type": "module"
import http from 'node:http'

// Criar um usuario (name, email, senha)

// - HTTP
//    - Método HTTP
//    - URL

// GET, POST, PUT, PATCH, DELETE

//GET => Buscar um recurso do Back-end
//POST => Criar um recurso do Back-end
//PUT => Atualizar um recurso do Back-end
//PATCH => Atualizar uma informação especifica de um recurso do Back-end

//GET / users => buscando usuarios no back-end
//POST / users => criando usuarios no back-end

//arrow fuction função anonima
const server = http.createServer((req, res) => {
    const { method, url} = req

    if(method === 'GET' && url === '/users'){
        return res.end('Listagem de usuários')
    }

    if(method === 'POST' && url === '/users'){
        return res.end('Criação de usuários')
    }
    return res.end('Hello World')
})

server.listen(3333) //localhost:3333