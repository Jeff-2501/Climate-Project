const API_KEY = '9891a7811e8077fee1f13a421a2fed57'

const fetchData = position => {     //ME TRAE LA POSICION DEL USUARIO.   //FECTHDATA = OBETENER LA DATA DEL CLIMA.
    const { latitud, longitude } = position.coords;  //OBTENER LA INFORMACION DE POSITION = LONGITUDE & LATITUD. //VAMOS A UTILIZARLAS PARA HACER LA LLAMADA A LA API.
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => console.log(response));   //CONSOLE.LOG PARA MIRAR QUE DATA NOS DEVUELVE RESPONSE ES LO IMPORTANTE.
    console.log(position);
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}