const config = require('./config')

const username = () => {
    let name = ''
    // pick random characters until username length fulfilled
    while (config.username.prefix.length + name.length + config.username.suffix.length < config.username.length) {
        let character = config.username.characters[Math.floor(Math.random() * config.username.characters.length)]
        if (name.length + character.length <= config.username.length) {
            name += character
        }
    }
    name = config.username.prefix + name + config.username.suffix

    // cant have a _ at start or end of username
    if (name.charAt(0) === '_' || name.charAt(name.length - 1) === '_') {
        // generate a new username
        return username()
    }
    // cant have more than 1 _ in a username
    if (Array.isArray(name.match(/_/g)) && name.match(/_/g).length > 1) {
        return username()
    } 
    return name
}

module.exports = username