const config = require('./config')

const smallestCharLength = config.username.characters[0].length

const username = () => {
    let name = ''
    let prefix = config.username.prefix
    let suffix = config.username.suffix
    
    while (prefix.length + name.length + suffix.length < config.username.length) {
        if (name.length + smallestCharLength > config.username.length) {
            return username()
        }
        let character = config.username.characters[Math.floor(Math.random() * config.username.characters.length)]
        if (prefix.length + name.length + character.length + suffix.length <= config.username.length) {
            name += character
        }
    }
    name = config.username.prefix + name + config.username.suffix

    // cant have a _ at start or end of username
    if (name.charAt(0) === '_' || name.charAt(name.length - 1) === '_') {
        return username()
    }
    // cant have more than 1 _ in a username
    if (Array.isArray(name.match(/_/g)) && name.match(/_/g).length > 1) {
        return username()
    } 
    return name
}

module.exports = username