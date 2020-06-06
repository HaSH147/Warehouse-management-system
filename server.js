const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const morgan = require('morgan');
const main = require ('./main');
const mainarticles = require ('./main2');
const mainFrs = require ('./main3');
const maininv = require('./main5');
const maincom = require('./main6');


require('dotenv').config()

const helmet = require('helmet');
const app = express();
const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '1testdb4',
    database : 'GestiondestockV2'
  }
});

//this returns a promise so we are gonna do .then()
db.select('*').from('users').then(data => {
	console.log(data);
} )


app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));



app.get('/', (req, res)=>{
	res.send(database.users);
} )

 
app.post('/signin', (req, res) =>{
	db.select('email', 'hash').from('login')
		.where('email', '=', req.body.email)
		.then(data => {
			const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
			if(isValid) {
				return db.select('*').from('users')
					.where('email', '=', req.body.email)
					.then(user => {
						res.json(user[0])
					})
					.catch( err => res.status(400).json('unable to get user'))
			} else {
				res.status(400).json('wrong credentials')
			}
		})
		.catch(err => res.status(400).json('wrong credentials'))
})


app.post('/register', (req, res) => {
	const { email, username, password } = req.body;
	const hash = bcrypt.hashSync(password);
		db.transaction(trx => {
			trx.insert({
				hash: hash,
				email: email,
			})
			.into('login')
			.returning('email')
			.then(loginEmail => {
			return trx('users')
			    .returning('*')
				.insert({
					email: loginEmail[0],
					name: username,
					joined: new Date()
			 	})
			    .then(user => {
				res.json(user[0]);
			    })
		  })
		  .then(trx.commit)
		  .catch(trx.callback)
		})
		  .catch(err => res.status(400).json('unable to register'))
})

app.get('/clients', (req, res) => main.getTableData(req, res, db))
app.post('/clients', (req, res) => main.postTableData(req, res, db))
app.put('/clients', (req, res) => main.putTableData(req, res, db))
app.delete('/clients', (req, res) => main.deleteTableData(req, res, db))


app.get('/articles', (req, res) => mainarticles.getTableData(req, res, db))
app.post('/articles', (req, res) => mainarticles.postTableData(req, res, db))
app.put('/articles', (req, res) => mainarticles.putTableData(req, res, db))
app.delete('/articles', (req, res) => mainarticles.deleteTableData(req, res, db))


app.get('/fournisseurs', (req, res) => mainFrs.getTableData(req, res, db))
app.post('/fournisseurs', (req, res) => mainFrs.postTableData(req, res, db))
app.put('/fournisseurs', (req, res) => mainFrs.putTableData(req, res, db))
app.delete('/fournisseurs', (req, res) => mainFrs.deleteTableData(req, res, db))

app.get('/inventaires', (req, res) => maininv.getTableData(req, res, db))
app.post('/inventaires', (req, res) => maininv.postTableData(req, res, db))
app.put('/inventaires', (req, res) => maininv.putTableData(req, res, db))
app.delete('/inventaires', (req, res) => maininv.deleteTableData(req, res, db))

app.get('/commandes', (req, res) => maincom.getTableData(req, res, db))
app.post('/commandes', (req, res) => maincom.postTableData(req, res, db))
app.put('/commandes', (req, res) => maincom.putTableData(req, res, db))
app.delete('/commandes', (req, res) => maincom.deleteTableData(req, res, db))


app.listen(3000, ()=>{
	console.log('app is running on port 3000');
})




