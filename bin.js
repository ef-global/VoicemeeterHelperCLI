const prettyprint = require('.') /* the current working directory so that means main.js because of package.json */
let command = process.argv[2] /* what the user enters as first argument */

console.log(
    prettyprint(command)
)