const getArgs = require("./helpers/arg")

const startCli = () => {
    const args = getArgs(process.argv)
    console.log(args)
    if(args.s){
        // save
    }
    if(args.h){
        // help
    }
    if(args.t){
        // save token
    }

    // return result
}

startCli()