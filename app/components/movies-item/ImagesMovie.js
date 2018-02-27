import React from 'react'

const showImage = ({image}) =>{
    if (image) {
        return (
            <div className="card">
                <img className="img__movie" src={image.image.original} />
            </div>
        )
    }
}

const Images = (props) =>{
    return(
        <div className="col-md-5 my-4 card__detail-movies" key="1">
            {showImage(props)}
        </div>
        
       
    )
}

export default Images;