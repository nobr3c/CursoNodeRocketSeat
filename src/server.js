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

//Stateful - Stateless

//JSON - JavaScript Object Notation

//Cabeçalhos (Requisição/Resposta) => Metadados

const users = []

//arrow fuction função anonima
const server = http.createServer((req, res) => {
    const { method, url} = req

    if(method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users'){        
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com'
        })

        return res.end('Criação de usuários')
    }
    return res.end('Hello World')
})

server.listen(3333) //localhost:3333