import React from 'react';

function Error({message}){
    return(
        <div className="card-panel white darken-5 error col s12 m10">
            <b>  {message}  </b>
        </div>
    )

}

export default Error;