const superagent = require('superagent')

const verify = (username) => {
    let url = `https://auth.roblox.com/v2/usernames/validate?request.username=${username}&request.birthday=1-1-2000&request.context=Signup`
    return superagent.get(url)
}

module.exports = verify