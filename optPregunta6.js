/**
 * Tomando como datasource data/users.json
 * 1. Desarrollar una API REST con los endpoints que permita:
 *      1.1. Listar todos los usuarios 
 *      1.2. Devuelva un usuario por ID, por ejemplo /api/users/4 devuelve el usuario cuyo id es 4:
 *      1.3. Inserte el siguiente user y retorne el listado de todos
 * {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
 *
 */

    const express = require('express');
    const bodyParser = require('body-parser')
    const fs = require('fs');
    const datasource = './data/users.json';
    
    // Create the server
    const server = express();
    
    // The server will listen from port 8085
    const port = 8085;
    server.listen(port, () => console.log('Server running on port 8085'));
    
    /* RESTful API METHODS */
    
    // GET
    server.get('/api/users', (_req, res) => {
      fs.readFile(datasource, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        }
    
        return res.json(JSON.parse(data));
      })
    })
    
    // GET User
    server.get('/api/users/:id', (req, res) => {
      fs.readFile(datasource, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        }
    
        const aux = [...JSON.parse(data)];
        const index = aux.findIndex(({ id }) => id == parseInt(req.params.id, 10))
        return res.json(aux[index]);
      })
    })
    
    var jsonParser = bodyParser.json()

    // POST
    server.post('/api/users', jsonParser, (req, res) => {
      fs.readFile(datasource, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        }
    
        const formattedData = JSON.parse(data)
        const updatedData = [...formattedData, req.body]
    
        fs.writeFile(datasource, JSON.stringify(updatedData, null, 2), (err) => {
          if (err) {
            console.log(err);
          }
          
          return res.send(updatedData);
        });
      })
    })

    
