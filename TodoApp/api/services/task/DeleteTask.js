const Task = require('../../models/Task')

const editCompleteTask = async (req, res) => {
	const id = req.headers.idtask
	try {
		if (id) {
			await Task.findByIdAndDelete({ _id: id })
			return res.json({ status: 400, message: 'Zadanie zostało usunięte' })
		} else {
			return res.json({ status: 400, message: 'Nie można znaleźć zadania' })
		}
	} catch {
		return res.json({ status: 400, message: 'Spróbuj później' })
	}
}

module.exports = editCompleteTask
