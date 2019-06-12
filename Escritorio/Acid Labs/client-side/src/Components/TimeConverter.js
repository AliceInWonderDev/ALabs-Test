import React from 'react';


const TimeConverter = ({response}) => {
    let newDate = new Date(response.time * 1000); //por mil para que sea en segundos y no milisegundos
    let allMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let year = newDate.getFullYear(); //returns 4 numbers (numbers of the year -of course-)
    let month = allMonths[newDate.getMonth()];
    let date = newDate.getDate();
    let hour = newDate.getHours();
    let min = newDate.getMinutes();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    
    return time;
}

export default TimeConverter;



// function TimeConverter(UNIX_timestamp, {response}){
    