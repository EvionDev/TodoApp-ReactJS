const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('../database')

const register = async (req, res) => {
	const { name, email, password } = req.body
	try {
		if (email != '' && password != '') {
			const OtherUser = await User.findOne({ email })
			if (!OtherUser) {
				const UserDoc = await User.create({
					name,
					email,
					password: bcrypt.hashSync(password, Number(process.env.SECRET_KEY)),
				})
				const token = jwt.sign(
					{
						id: UserDoc._id,
					},
					process.env.JWT_SECRET
				)
				return res.json({ status: 200, message: 'Konto zostało utworzone', token })
			} else {
				return res.json({ status: 400, message: 'Posiadasz już konto' })
			}
		} else {
			return res.json({ status: 400, message: 'Pola muszą być uzupełnione' })
		}
	} catch {
		return res.json({ status: 400, message: 'Spróbuj pozniej' })
	}
}

module.exports = register
