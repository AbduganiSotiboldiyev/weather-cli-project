import getArgs from "./helpers/arg.js"
import {getWeather, getIcon } from "./services/api.service.js"
import { printError, printHelp, printSucces, printWeather } from "./services/log.service.js"
import { TOKEN_DIC, getKeyValue, saveKeyValue } from "./services/storage.service.js"

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

const saveCity = async (city) => {
    
    if(!city.length){
        printError("City doesn't exist")
        return
    }
    try {
        await saveKeyValue(TOKEN_DIC.city , city)
        printSucces("City was saved ")
    } catch (error) {
        printError(error.message)
    }
}

const getForecast = async ()=> {
    try {
        const city = process.env.CITY ?? (await getKeyValue(TOKEN_DIC.city))
        const response = await  getWeather(city)
        printWeather(response, getIcon(response.weather[0].icon))
        
    } catch (error) {
        if(error?.response?.status == 404) {
            printError("City not foound")
        }else if(error?.response?.status == 402){
            printError("API key is not valid")
    }else{
        printError(error.message)
    }

}}

const startCli = () => {
    const args = getArgs(process.argv)
   
    
    if(args.s){
       return saveCity(args.s)
    }
    if(args.h){
       return printHelp()
    }
    if(args.t){
        return saveToken(args.t)
    }
    return getForecast()
   

    // return result
}

startCli()