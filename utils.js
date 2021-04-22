const fs = require("fs")
const util = require("util")

const readFilePromise = util.promisify(fs.readFile)
const writeFilePromise = util.promisify(fs.writeFile)

/**
 *   readFile - reads db.json
 * @returns a parsed array of character objects
 */
const readFile = async () => {
    let data = await readFilePromise("./db/db.json", "utf8")
    return JSON.parse(data)
}

/**
 * writeFile - writes an array of character objects to db.json
 * @param {*} data - is an array of objects to be stringified
 */
const writeFile = async (data) => {
    data = JSON.stringify(data, null, 2)
    await writeFilePromise("./db/db.json", data)
}

module.exports = {
    readFile,
    writeFile
}