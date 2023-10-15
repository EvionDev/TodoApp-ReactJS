const Task = require('../../models/Task')
const jwt = require('jsonwebtoken')

const createTask = async (req, res) => {
	const { token, description } = req.body
	try {
		if (description != '') {
			jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
				const id = user.id

				await Task.create({
					description,
					complete: false,
					author: id,
				})
			})

			return res.json({ status: 400, message: 'Notatka stworzona' })
		} else {
			return res.json({ status: 400, message: 'Pole nie może być puste' })
		}
	} catch {
		return res.json({ status: 400, message: 'Nie można stwórzyć zadania' })
	}
}

module.exports = createTask
