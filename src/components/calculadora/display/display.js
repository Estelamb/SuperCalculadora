import React from 'react';

const Display = (props) =>{
    const{numeroA, numeroB, descricao, calculo} = props;

    return(
        <div>
            {descricao} : {calculo(+numeroA, +numeroB)}
        </div>
    );
};

export default Display;