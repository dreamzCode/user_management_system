const axios = require('axios')

exports.homeRoutes = (req, res) => {
    //Make a request to API users
    axios.get('http://localhost:3000/api/users')
        .then(function(response) {
            res.render('index', { users: response.data })
        })
        .catch(error => {
            res.send(error)
        })
}

exports.add_user = (req, res) => {
    res.render('add_user')
}

exports.update_user = (req, res) => {
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
        .then(userdata => {
            res.render('update-user', {user: userdata.data})
        })
        .catch(error => {
            res.send(error)
        })
}