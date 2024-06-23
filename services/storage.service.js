import os from "os"
import fs from "fs"
import path from "path"

const filePath = path.join(os.homedir(), "weather-data.json")

const saveKeyValue = async (key, value) => {
    let data = {}
// ------- kerak ham bolmadi -------------------------
// --------------Oxirida ham sinab kor----------------
    if(await isExit(filePath)) {
        const file = fs.promises.readFile(filePath)
        data = JSON.parse(file)
    }
// ----------------------------------------------------
// ----------------------------------------------------
    
     data[key] = value
    await fs.promises.writeFile(filePath,JSON.stringify(data))

}

const getKeyValue = async (key) => {
    if(isExit(filePath)){
        const file = fs.promises.readFile(filePath)
        data = JSON.parse(file)
    }
    return data[key]
}


const isExit = async (path) => {
    try {
        await fs.promises.stat(path)
    } catch (error) {
        return false
    }
}

export {saveKeyValue,isExit}