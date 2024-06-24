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

const printWeather = (response, icon) => {
    console.log(dedent`
    ${chalk.bgMagenta("Weather")}
    City : ${response.name}
    ${icon}  : ${response.weather[0].description}
    Temperature : ${response.main.temp}°C (feels like ${response.main.feels_like})
    Humidity : ${response.main.humidity}
    Wind : ${response.wind.speed}

    `)
}

export  {printSucces,printError,printHelp,printWeather}