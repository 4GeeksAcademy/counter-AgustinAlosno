import React from 'react';



const Digito = (prop) => {
    return (
        <div className="card col-2 m-2 px-2 py-5 bg-dark" style={{ width: "10rem" }}>
            <div className="card-body text-center text-light text-bolder">
                <h1 className="display-1">{prop.value}</h1>
            </div>
        </div>
    )

}

export default Digito