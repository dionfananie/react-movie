import React from 'react'

const showImage = ({image}) =>{
    if (image) {
        var divStyle = {
            backgroundImage: 'url(' + image.image.original + ')',
        };
        return (
            <div className="card">
                <div className="card-body" style={divStyle}>
                </div>
            </div>
        )
    }
}

const Images = (props) =>{
    return(
        <div className="col-md-4 my-4 card__detail-movies" key="1">
            {showImage(props)}
        </div>
    )
}

export default Images;