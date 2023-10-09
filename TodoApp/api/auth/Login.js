const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('../database')

const register = async (req, res) => {
	const { email, password } = req.body
	try {
		if (email != '' && password != '') {
			const UserDoc = await User.findOne({ email })
			if (!UserDoc) {
				return res.json({ status: 401, message: 'Hasło lub email jest niepoprawne' })
			}
			if (bcrypt.compareSync(password, UserDoc.password)) {
				const token = jwt.sign(
					{
						id: UserDoc._id,
					},
					process.env.JWT_SECRET
				)
				return res.json({ status: 200, message: 'Pomyślnie zalogowano', token })
			}
			return res.json({ status: 400, message: 'Hasło lub email jest niepoprawne' })
		} else {
			return res.json({ status: 400, message: 'Pola muszą być uzupełnione' })
		}
	} catch {
		return res.json({ status: 400, message: 'Spróbuj pózniej' })
	}
}

module.exports = register
