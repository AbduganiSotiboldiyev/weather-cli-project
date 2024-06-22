import getArgs from "./helpers/arg.js"
import { printError, printHelp, printSucces } from "./services/log.service.js"

const startCli = () => {
    const args = getArgs(process.argv)
    
    if(args.s){
        // save
    }
    if(args.h){
        printHelp()
    }
    if(args.t){
        // save token
    }

    // return result
}

startCli()