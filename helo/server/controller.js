const bcrypt = require("bcryptjs");

module.exports = {
    register: async(req, res) => {
        const {username, password} = req.body,
        db = req.app.get('db'); 

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        const newUser = await db.users.register_user(username, hash);

        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    }
}