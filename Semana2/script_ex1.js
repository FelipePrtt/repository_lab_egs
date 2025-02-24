let data = new Date();

let diasemana = data.getDay();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();


let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


document.write(diasSemana[diasemana] + ", " + dia + " de " + meses[mes] + " de " + ano);
