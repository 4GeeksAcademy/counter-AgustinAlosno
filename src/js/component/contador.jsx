import React from 'react';
import Digito from './digito'; //Importamos el componete Digito

let segundos = 0 //Esta variable determinará la cantidad de segundos.

const Contador = () => {

    //Convertimos el número segundos a string ya que estos permiten acceder a cada parte del mismo con índices.
    let segundosString = segundos.toString() 

    //Incrementamos la variable segundos
    segundos++

    //En este punto, la variable segundos está una unidad adelantada al numero de segundosString, esto se tiene en cuenta en las condiciones de los ifs.
    
    //Cada condicional verifica el valor de los segundos, y devuelve el html con las cards ordenadas en funcion de la cantidad de cifras del número, para que visualmente el contador aumente desde el final hacia atrás.

    if (segundos <= 10) return (<div className="col-12 bg-secondary row d-flex justify-content-center">
        <Digito value={'🕟'} />
        <Digito value={0} />
        <Digito value={0} />
        <Digito value={0} />
        <Digito value={0} />
        <Digito value={0} />
        <Digito value={segundosString[0]} />
    </div>)
    else if (segundos > 9 && segundos <= 100) return (<div className="col-12 bg-secondary row d-flex justify-content-center">
        <Digito value={'🕟'} />
        <Digito value={0} />
        <Digito value={0} />
        <Digito value={0} />
        <Digito value={0} />
        <Digito value={segundosString[0]} />
        <Digito value={segundosString[1]} />
    </div>)
    else if (segundos > 99 && segundos <= 1000) return (<div className="col-12 bg-secondary row d-flex justify-content-center">
        <Digito value={'🕟'} />
        <Digito value={0} />
        <Digito value={0} />
        <Digito value={0} />
        <Digito value={segundosString[0]} />
        <Digito value={segundosString[1]} />
        <Digito value={segundosString[2]} />
    </div>)
    else if (segundos > 999 && segundos <= 10000) return (<div className="col-12 bg-secondary row d-flex justify-content-center">
        <Digito value={'🕟'} />
        <Digito value={0} />
        <Digito value={0} />
        <Digito value={segundosString[0]} />
        <Digito value={segundosString[1]} />
        <Digito value={segundosString[2]} />
        <Digito value={segundosString[3]} />
    </div>)
    else if (segundos > 9999 && segundos <= 100000) return (
        <div className="col-12 bg-secondary row d-flex justify-content-center">
            <Digito value={'🕟'} />
            <Digito value={0} />
            <Digito value={segundosString[0]} />
            <Digito value={segundosString[1]} />
            <Digito value={segundosString[2]} />
            <Digito value={segundosString[3]} />
            <Digito value={segundosString[4]} />
        </div>)
    else return (<div>
        <div className="col-12 bg-secondary row d-flex justify-content-center">
            <Digito value={'🕟'} />
            <Digito value={segundosString[0]} />
            <Digito value={segundosString[1]} />
            <Digito value={segundosString[2]} />
            <Digito value={segundosString[3]} />
            <Digito value={segundosString[4]} />
            <Digito value={segundosString[5]} />
        </div>
    </div>)

}

export default Contador;
