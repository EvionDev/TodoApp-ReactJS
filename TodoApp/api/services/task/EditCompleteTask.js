const Task = require('../../models/Task')

const editCompleteTask = async (req, res) => {
	const taskId = req.headers.idtask
	const completed = req.headers.completed
	try {
		if (taskId) {
			await Task.findByIdAndUpdate(taskId, { complete: completed })
			return res.json({ status: 400, message: `Zmieniono stan zadania na ${completed}` })
		} else {
			return res.json({ status: 400, message: 'Nie można znaleźć zadania' })
		}
	} catch {
		return res.json({ status: 400, message: 'Spróbuj później' })
	}
}

module.exports = editCompleteTask
