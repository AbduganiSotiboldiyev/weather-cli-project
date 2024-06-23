import getArgs from "./helpers/arg.js"
import { printError, printHelp, printSucces } from "./services/log.service.js"
import { saveKeyValue } from "./services/storage.service.js"

const saveToken = async(token) => {
    try {
        await saveKeyValue("token" , token)
        printSucces("Token was saved ")
    } catch (error) {
        printError(error.message)
    }
}

const startCli = () => {
    const args = getArgs(process.argv)
    
    if(args.s){
        // save
    }
    if(args.h){
        printHelp()
    }
    if(args.t){
        return saveToken(args.t)
    }

    // return result
}

startCli()