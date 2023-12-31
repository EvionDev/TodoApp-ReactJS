// Import
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Auth
const register = require('./auth/Register')
const login = require('./auth/Login')

// Task
const getTask = require('./services/task/GetTask')
const createTask = require('./services/task/CreateTask')
const deleteTask = require('./services/task/DeleteTask')
const editTask = require('./services/task/EditTask')
const editCompleteTask = require('./services/task/EditCompleteTask')

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	res.setHeader('cache-control', 'no-cache')
	next()
})

app.use(
	cors({
		credentials: true,
		origin: 'http://localhost:5173',
	})
)

app.post('/register', register)
app.post('/login', login)
app.post('/createTask', createTask)
app.get('/getTasks', getTask)
app.delete('/deleteTask', deleteTask)
app.put('/editCompleteTask', editCompleteTask)
app.put('/editTask', editTask)

app.listen(4000, () => {
	console.log('Server running')
})
