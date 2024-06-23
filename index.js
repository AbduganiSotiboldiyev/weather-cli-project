import getArgs from "./helpers/arg.js"
import getWeather from "./services/api.service.js"
import { printError, printHelp, printSucces } from "./services/log.service.js"
import { TOKEN_DIC, saveKeyValue } from "./services/storage.service.js"

const saveToken = async(token) => {
    if(!token.length){
        printError("Token doesn't exist")
        return
    }

    try {
        await saveKeyValue(TOKEN_DIC.token , token)
        printSucces("Token was saved ")
    } catch (error) {
        printError(error.message)
    }
}

const startCli = () => {
    const args = getArgs(process.argv)
    
    if(args.s){
        console.log(args)
    }
    if(args.h){
        printHelp()
    }
    if(args.t){
        return saveToken(args.t)
    }
    getWeather("uzbekistan")

    // return result
}

startCli()