const UserModel = require('../Models/UserModel')

exports.handleSignup = async (req, res) => {
    try {
        const { email, username, password } = req.body

        // Check if email already exists
        const emailCount = await UserModel.countDocuments({ email })
        if (emailCount > 0) {
            return res.json({
                status: 400,
                message: 'error',
                data: {
                    info: 'User already exists'
                }
            })
        }

        // Check user count
        const userCount = await UserModel.countDocuments()

        const newUser = new UserModel({
            uid: userCount + 1,
            email,
            password,
            username
        })

        await newUser.save()

        res.json({
            status: 200,
            message: 'success',
            data: {
                uid: userCount + 1,
                email,
                username,
                info: 'User signed up successfully'
            }
        })
    } catch {
        res.status(500).json({
            status: 500,
            message: 'error',
            data: {
                info: 'Internal server error'
            }
        })
    }
}

exports.handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(400).json({
                status: 400,
                message: 'error',
                data: {
                    info: 'Invalid user email'
                }
            })
        }

        if (user.password !== password) {
            return res.status(400).json({
                status: 400,
                message: 'error',
                data: {
                    info: 'Incorrect password'
                }
            })
        }

        res.json({
            status: 200,
            message: 'success',
            data: {
                user,
                info: 'User logged in successfully'
            }
        })
    } catch {
        res.status(500).json({
            status: 500,
            message: 'error',
            data: {
                info: 'Internal server error'
            }
        })
    }
}
