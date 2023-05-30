const fs = require('fs')
const superagent = require('superagent')

const userName = async (name) => {
    let url = `https://auth.roblox.com/v2/usernames/validate?request.username=${name}&request.birthday=1-1-2000&request.context=Signup`
    let request = await superagent.get(url)

    request._body.code == 0 ? fs.writeFile('../valid.txt', `${name}\n`, {encoding: "utf8", flag: "a"}, () => { console.log(`valid username: ${name}`)}) : console.log(`invalid user: ${name}`)
}

const groupName = async (name) => {
    let url = `https://groups.roblox.com/v1/groups/search/lookup?groupName=${name}`
    let request = await superagent.get(url)

    // checks the first result only. eg: https://groups.roblox.com/v1/groups/search/lookup?groupName=test
    // admire my ternary hell >:)
    request._body.data[0] ? request._body.data[0].name.toLowerCase() == name ? console.log(`taken group name: ${name}`): console.log(`available group name (surprisingly): ${name}`) : console.log(`available group name: ${name}`)
}

module.exports = { userName, groupName }