const fs = require("fs")
const superagent = require("superagent")
const chalk = require("chalk")

function logName(name, taken, typeOfName) {
  typeOfName = typeOfName == 1 ? (typeOfName = "user") : (typeOfName = "group")
  taken == false
    ? fs.writeFile(
        "./valid.txt",
        `${name}\n`,
        { encoding: "utf8", flag: "a" },
        () => {
          console.log(chalk.green(`${typeOfName}: "${name}" AVAILABLE`))
        }
      )
    : console.log(chalk.red(`${typeOfName}: "${name}" TAKEN`))
}

const userName = async (name) => {
  let url = `https://auth.roblox.com/v2/usernames/validate?request.username=${name}&request.birthday=1-1-2000&request.context=Signup`
  let request = await superagent.get(url)

  request._body.code == 0 ? logName(name, false, 1) : logName(name, true, 1)
}

const groupName = async (name) => {
  let url = `https://groups.roblox.com/v1/groups/search/lookup?groupName=${name}`
  let request = await superagent.get(url)

  // checks the first result on search page only. does not know if username is appropriate or not
  request._body.data[0]
    ? request._body.data[0].name.toLowerCase() == name
      ? logName(name, true, 2)
      : logName(name, false, 2)
    : logName(name, false, 2)
}

module.exports = { userName, groupName }
