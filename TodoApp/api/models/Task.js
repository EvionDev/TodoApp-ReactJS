const mongoose = require('mongoose')

const { Schema, model } = mongoose
const taskSchema = new Schema(
	{
		description: { type: String, required: true },
		complete: { type: Boolean },
		author: { type: Schema.Types.ObjectId, ref: 'Users' },
	},
	{
		timestamps: true,
	}
)

const TaskModel = model('Task', taskSchema)

module.exports = TaskModel
