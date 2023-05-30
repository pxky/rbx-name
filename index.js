const fs = require('fs')
const config = require('./src/config')
const generate = require('./src/generate')
const validate = require('./src/validate')
const globals = require('./src/globals')
const chalk = require('chalk')
const tocheck = fs.readFileSync('./tocheck.txt', 'utf8').split(/\r\n/)


const checkUsername = async (username) => {
    config.misc.type == 1 ? validate.userName(encodeURI(username)) : validate.groupName(encodeURI(username))
}

const main = async () => {
    if (config.misc.mode == 1) {
        setInterval(() => {
            let username = generate()
            console.log(chalk.blue(`checking: ${username}`))
            checkUsername(username)
        }, config.misc.time_between_checks * 1000)
    }
    else if (config.misc.mode == 2) {
        for (let i in tocheck) {
            let username = tocheck[i]
            console.log(chalk.blue(`checking: ${username}`))
            checkUsername(username)
            await globals.delay(config.misc.time_between_checks * 1000)
        }
    }
}

console.log('!! poke-gen started !!')
main()