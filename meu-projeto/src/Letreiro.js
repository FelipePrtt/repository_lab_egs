import React, { useState, useEffect } from 'react'; 
//useState é pra controlar o(s) contadores, já useEffect controla os efeitos "segundarios" 
// dos componentes funcionais

function Letreiro(){
    const [index, setIndex] = useState(0);
    const texto = "Venha estudar na FATEC!";

    //Adaptação da função "tick" do exercício da semana 7
    const tick = () => {
        setIndex(i => { //i esta representando o valor atual do index, e não precisar ser declarado antes, além de poder receber qualquer nome
            if (i < texto.length){ 
                return i + 1;
            }else{
                return i; //Essa linha retorna o valor atual de i sem incrementos, para "parar" o incremento
                //return i = 0; faria o letreiro sempre se reiniciar
            }
        });  
    }

    useEffect(() => {
        const intervalID =  setInterval(tick, 100);//Chama a função "tick" a cada 100 milesegundos

        return () => clearInterval(intervalID);
    }, []); //O retorno do array vazio É necessário apenas para que o objeto seja renderizado uma vez durante o object render

    const resp = texto.slice(0, index);

    return(
        <>
            <h1>{resp}</h1>
        </>
    );
}

export default Letreiro;