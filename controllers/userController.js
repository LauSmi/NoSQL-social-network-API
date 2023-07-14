const User = require('../models/User');

module.exports = {
    //GET ALL users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    //GET a user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // CREATE a new user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    // DELETE a user
    deleteUser(req, res) {
        userModel.findByIdAndDelete(req.params.id).exec()
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : false
            )
            .then(() => res.json({ message: 'user deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    // UPDATE a user
    updateUser(req, res) {
        userModel.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
};
