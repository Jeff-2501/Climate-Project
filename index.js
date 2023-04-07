const API_KEY = '9891a7811e8077fee1f13a421a2fed57'

const fetchData = position => {     //ME TRAE LA POSICIÓN DEL USUARIO.   //FECTHDATA = OBETENER LA DATA DEL CLIMA.
    const { latitude , longitude } = position.coords;  //OBTENER LA INFORMACION DE POSITION = LONGITUDE & LATITUD. //VAMOS A UTILIZARLAS PARA HACER LA LLAMADA A LA API.
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())   //CONSOLE.LOG PARA MIRAR QUE DATA NOS DEVUELVE RESPONSE ES LO IMPORTANTE.
        .then(data => setWeatherData(data));
}

const setWeatherData = data => {
    console.log(data);                          //LO QUE VAMOS HACER AQUÍ ADENTRO ES PONER TODA LA INFO QUE RECIBIMOS EN EL HTML.
    const weatherData = {                       //UNA VARIABLE PARA JUNTAR TODA LA INFORMACIÓN.
        location: date.name,    
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pleassure: data.main.pressure,
        temperature: data.main.temp,
        date: 'date',
    }                            
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}