const http = require('http'); // task 2  import http module

//  create server
const server = http.createServer((req,res)=> {
    // definir header de response avec le type de contenu  'text/html'
    res.writeHead(200, {"Content-type": 'text/html'})
    // send response / envoyer reponse
    res.end('<h1>Bonjour Node !!!!</h1>\n ');
});

// on a demarré le serveur en ecoutant sur le port 3000
server.listen(3000, () => {
    console.log('server en cours d execution sur http://localhost:3000')
})
