import React from 'react';

const titleMovie = ({info}) =>{
    if (info) {
        return (
            <h4>{info.name}</h4>
        )
    }
}

const descMovie = ({info}) =>{
    if (condition) {
        
    }
}

const InfoMovie = (props) =>{
    return (
        <div className="col-md-6 my-4">
            {titleMovie(props)}
        </div>
    )
}


export default InfoMovie;