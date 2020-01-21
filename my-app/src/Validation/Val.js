import React from 'react';



const validation = (props) => {
    return (
        <div>
            {
                props.len_input < 5 ?
            <p>
                Can you change the input? It is too short...
            </p>
            :
            <p>
                Can you change the input? It is too long...
            </p>
            }
        </div>
    )
};

export default validation;