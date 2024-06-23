import os from "os"
import fs from "fs"
import path from "path"

const filePath = path.join(os.homedir(), "weather-data.json")

const TOKEN_DIC = {
    token : "token" ,
    city : "city"  
}
let data = {}

const saveKeyValue = async (key, value) => {
// ------- kerak ham bolmadi -------------------------
// --------------Oxirida ham sinab kor----------------
    if(await isExit(filePath)) {
        const file =  await fs.promises.readFile(filePath)
        data = JSON.parse(file)
    }
// ----------------------------------------------------
// ----------------------------------------------------
    
     data[key] = value
    await fs.promises.writeFile(filePath,JSON.stringify(data))

}

const getKeyValue = async key => {
    if(await isExit(filePath)){
        const file = await fs.promises.readFile(filePath)
        data = JSON.parse(file)
        return data[key]
    }
    return undefined
}


const isExit = async (path) => {
    try {
        await fs.promises.stat(path)
        return true
    } catch (error) {
        return false
    }
}

export {saveKeyValue,isExit,getKeyValue,TOKEN_DIC}