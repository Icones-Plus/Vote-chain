const model = require('../database/index');
const bcrypt = require('bcrypt');
// const UserModel = model.UserModel;

const UserModel = model.userModel;
const { sign } = require('jsonwebtoken');

exports.createPassword = function (req, res) {
    const jwt = req.headers;
    console.log(jwt, 'jwt hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    let { body } = req;
    let { password, id } = body;
    function generateHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    }
    newPassword = generateHash(password);
    UserModel.findOneAndUpdate({
        id: id
    }, {
        password: newPassword
    }).then(result => {
        var payload = {
            id: result._id
        }
        var token = sign(payload, process.env.SECRET, (err, token) => {
            if (err) {
                console.log('Err: ', err);
            } else {
                res.cookie('jwt', token, {
                    maxAge: 6048000000
                })
                res.send('signup cookie set')
            }
        })
    }).catch(err => {
        console.log(err, 'Err');
    })
}
