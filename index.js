const fs = require('fs')
const pprint = require('poke-print')
const config = require('./src/config')
const generate = require('./src/generate')
const validate = require('./src/validate')

const main = async () => {
    let username = generate()
    pprint(`generated: ${username}`, 'instagram', true)
    let response = await validate(username)
    if (response._body.code == 0) {
        fs.writeFile('./output.txt', `${username}\n`, {encoding: "utf8", flag: "a"}, ()=> {
            pprint(`valid username: ${username}`, 'summer', true)
        })
    }
}

pprint('!! poke-gen started !!', 'red.underline.bold')
setInterval(() => {main()}, config.misc.time_between_checks * 1000)