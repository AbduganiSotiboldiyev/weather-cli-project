import chalk from "chalk"
import dedent from "dedent-js"

const printSucces = (message) => {
    console.log(chalk.bgGreen(`Succes`) + " " + message)
}
const printError = (error) => {
    console.log(chalk.bgRed(`Error`) + " "+ error)

}

const printHelp = ( ) => {
    console.log(dedent`
        -s - for saving [City]
        -h - for help
        -t - [API_KEY] for saving token
    `)
}

export  {printSucces,printError,printHelp}