
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const user = require('../../User');
const mongoos = require('mongoose')

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/game', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {

       db.db('game').collection('players')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Get levels
router.get('/levels', (req, res) => {
    connection((db) => {

       db.db('game').collection('level')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//insert player
router.post('/user', (req,res)=> {
    let newUser = req.body;
    connection((db) => {

        db.db('game').collection('players')
            .insertOne({"firstname" : newUser.firstname, "lastname" : newUser.lastname, "user" : newUser.username, "email" : newUser.email, "password" : newUser.password,"level":1})
            .then((user) => {
                response.data = user;
                res.json(response);
            })
            .catch((error) => {
                sendError(error,res);
            })
        })

});
//insert admin
router.post('/admin', (req,res)=> {
    let newUser = req.body;
    connection((db) => {

        db.db('game').collection('admin')
            .insertOne({"firstname" : newUser.firstname, "lastname" : newUser.lastname, "user" : newUser.username, "email" : newUser.email, "password" : newUser.password})
            .then((user) => {
                response.data = user;
                res.json(response);
            })
            .catch((error) => {
                sendError(error,res);
            })
        })

});

// Update player
router.put('/user/:id',(req,res) => {
    let NewUser =req.body;
    connection((db)=> {
        db.db('game').collection('players')
        .update({"_id":ObjectID(req.params.id)},{
            $set : {
                "firstname": NewUser.firstname,
                "lastname" : NewUser.lastname,
                "user" : NewUser.user,
                "email" : NewUser.email,
                "password" : NewUser.password,
            }
            }
        )
        .then((user) => {
            response.data = user;
            res.json(response);
        }).catch((error) => {
            sendError(error,res);
        })
    })
    
})

//Update level of player
router.put('/level/:id',(req,res) => {
    connection((db)=> {
        db.db('game').collection('players')
        .update({"_id":ObjectID(req.params.id)},{
            $set : {
                "level":req.body.lvl
            }
            }
        )
        .then((user) => {
            response.data = user;
            res.json(response);
        }).catch((error) => {
            sendError(error,res);
        })
    })
    
})

//delete player
router.delete('/user/:id',(req,res) => {
    var query ={
       _id:ObjectID(req.params.id)

    }
    connection((db) => {
        db.db('game').collection('players')
            .remove(query)
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
            
    })
}); 

//Get player by query
router.get('/user/:id', (req, res) => {
    var query ={
        _id:ObjectID(req.params.id)
     }
    connection((db) => {

       db.db('game').collection('players')
            .find(query)
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
//Get player by email and password
router.get('/userer&email=:email&password=:password', (req, res) => {
     let query =req.params;
    connection((db) => {
       db.db('game').collection('players')
            .find(
                {"email":query.email,"password":query.password}
            )
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Get Admin by email and password
router.get('/admins&email=:email&password=:password', (req, res) => {
    let query =req.params;
   connection((db) => {
      db.db('game').collection('admin')
           .find(
               {"email":query.email,"password":query.password}
           )
           .toArray()
           .then((users) => {
               response.data = users;
               res.json(response);
           })
           .catch((err) => {
               sendError(err, res);
           });
   });
});

module.exports = router;