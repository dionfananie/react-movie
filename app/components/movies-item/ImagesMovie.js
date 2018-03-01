import React from 'react'
import ContentLoader, { List } from 'react-content-loader'

const MyLoader = () => <ContentLoader />

const showImage = ({image}) =>{
    if (!image) {
        return(
            <MyLoader/>
        )
    }
    return (
            <div className="card">
                <img className="img__movie" src={image.image.original} />
            </div>
        )
}

const Images = (props) =>{
    return(
        <div className="col-md-4 my-4 card__detail-movies" key="1">
            {showImage(props)}
        </div>
        
       
    )
}

export default Images;