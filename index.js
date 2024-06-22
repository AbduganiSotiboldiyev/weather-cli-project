const getArgs = require("./helpers/arg")

const startCli = () => {
    const args = getArgs(process.argv)
    console.log(args)
}

startCli()