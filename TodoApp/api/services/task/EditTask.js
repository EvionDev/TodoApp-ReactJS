const Task = require('../../models/Task')

const editTask = async (req, res) => {
	const taskId = req.headers.idtask
	const editText = req.headers.edittext

	try {
		if (editText != '') {
			await Task.findByIdAndUpdate(taskId, { description: editText })

			return res.json({ status: 400, message: 'Zadanie zostało edytowane' })
		} else {
			return res.json({ status: 400, message: 'Pole nie może być puste' })
		}
	} catch {
		return res.json({ status: 400, message: 'Nie można edytować zadania' })
	}
}

module.exports = editTask
