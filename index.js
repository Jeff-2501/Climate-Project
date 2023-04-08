const API_KEY = '9891a7811e8077fee1f13a421a2fed57';

const fetchData = position => {     //ME TRAE LA POSICIÓN DEL USUARIO.   //FECTHDATA = OBETENER LA DATA DEL CLIMA.
    const { latitude , longitude } = position.coords;  //OBTENER LA INFORMACION DE POSITION = LONGITUDE & LATITUD. //VAMOS A UTILIZARLAS PARA HACER LA LLAMADA A LA API.
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())   //CONSOLE.LOG PARA MIRAR QUE DATA NOS DEVUELVE RESPONSE ES LO IMPORTANTE.
        .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);                          //LO QUE VAMOS HACER AQUÍ ADENTRO ES PONER TODA LA INFO QUE RECIBIMOS EN EL HTML.
    const weatherData = {                       //UNA VARIABLE PARA JUNTAR TODA LA INFORMACIÓN.
        location: data.name,    
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: getDate(),
    }                            
    
    Object.keys(weatherData).forEach( key => {
        document.getElementById(key).textContent = weatherData[key];                                                                        //VAMOS A SETIAR LA INFO EN NUESTRO HTML
    });

    cleanUp();                                                                                                      //CREAR UNA FUNCION 

}

const cleanUp = () => {
    let container = document.getElementById('container');
    let loader = document.getElementById('loader');

    loader.style.display = 'none';
    container.style.display = 'flex';
} 

const getDate = () => {                                                                 //SETAIAR Y RETORNAR LA DATA DEL DIA.
    let date = new Date();                                                              //VARIABLE DATE //NEW DATE DONDE SE GUARDARA TODA LA INFORMACION 
    return `${date.getDate()}-${( '0' + (date.getMonth() +1)).slice(-2)}-${date.getFullYear()}`;                //SETEAR DIA,MES,AÑO
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}