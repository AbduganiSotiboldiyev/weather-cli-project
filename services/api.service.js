import https from "https"
import { TOKEN_DIC, getKeyValue } from "./storage.service.js"
import axios from "axios"

const getIcon = icon => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️'
		case '02':
			return '🌤️'
		case '03':
			return '☁️'
		case '04':
			return '☁️'
		case '09':
			return '🌧️'
		case '10':
			return '🌦️'
		case '11':
			return '🌩️'
		case '13':
			return '❄️'
		case '50':
			return '🌫️'
	}
}
const getWeather = async (city) => {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const token = process.env.TOKEN ?? ( await getKeyValue(TOKEN_DIC.token))
    if(!token) {
        throw new Error('No token found')
    }

    // -------------1 way -------------------------------------
    // const url = new URL("https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=8a8ba139e3ce9c07ed0d771227424f19")
    // url.searchParams.append('q',city)
    // url.searchParams.append('appid', token)
    // url.searchParams.append('lang', 'en')
    // url.searchParams.append("units", 'metric')


    // https.get(url, (response) => {
    //     let res = ''
    //     response.on("data" , (chunk) =>{
    //         res += chunk
    //     })
    //     response.on("end", () => {
    //         console.log(res)
    //     })
    // })
// -------------1 way -------------------------------------
// -----------------2 way  with axios----------------------------------

const {data} =    await axios.get('https://api.openweathermap.org/data/2.5/weather' , {
    params: {
        q: city,
        appid: token,
        lang: "en",
        units: 'metric'
    }
})

return data

// -----------------2 way ----------------------------------

}

export  {getWeather,getIcon}