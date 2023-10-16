const Task = require('../../models/Task')
const jwt = require('jsonwebtoken')

const getTask = async (req, res) => {
	const token = req.headers.authorization
	try {
		if (token) {
			jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
				const id = user.id

				const allUserTask = await Task.find({
					author: id,
				})
				const allUserCompleteTask = await Task.find({
					author: id,
					complete: true,
				})
				return res.json({
					status: 400,
					message: 'Pobrano zadania',
					tasks: allUserTask,
					completeTasks: allUserCompleteTask,
				})
			})
		} else {
			return res.json({ status: 400, message: 'Nie ma aktywnego tokena' })
		}
	} catch {
		return res.json({ status: 400, message: 'Nie można pobrać zadań' })
	}
}

module.exports = getTask
