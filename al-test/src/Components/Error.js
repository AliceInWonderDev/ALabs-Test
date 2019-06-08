import React from 'react';

function Error({message}){
    return(
        <div className="card red darken-6 error col s12 m6">
            {message}
        </div>
    )

}

export default Error;