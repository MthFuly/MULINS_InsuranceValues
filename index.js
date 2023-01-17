const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const req = require('express/lib/request');
const { response } = require('express');
const port = process.env.PORT || 21263

// Configurando o servidor
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

let db = {
    "returnCod":"0", 
    "message":""
  }

  let dberror = {
    "returnCod":"4", 
    "message":""
  }

  // Buscar dados
  app.get('/users/insuranceValues', (req, res) =>{
    return res.json(db);
  });

  // Inserir dados
  app.post('/users/insuranceValues', (req, res) =>{
      const body = req.body;
    if(!body){
         return res.json(dberror);
    }
    else{
        return res.json(db);
    }
  });

app.listen(port, () =>{
    console.log('Servidor está rodando ');
})
// app.listen(21263, () => {
//     console.log('Express started at http://localhost:21263');
// })


