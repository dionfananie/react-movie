import React from 'react';
import ContentLoader, { List } from 'react-content-loader'


const MyLoader = () => <List />

const titleMovie = ({info}) =>{
    if (info) {
        return (
            <h4>{info.name}</h4>
        )
    }
}

const descMovie = ({info}) =>{
    if (info) {
        let summary =info.summary
        return(
            <div>
                <h4>{info.name}</h4>
                <div className="info__rating mb-2">
                    <i className="icon__star icon mr-2"></i><span>{info.rating.average}</span>
                </div>
                <div className="info__genre">
                    Genre: <span>{info.genres[0]}, {info.genres[1]}, {info.genres[2]}</span>
                </div>
                <div>Official Site: <a href={info.officialSite}>{info.name}</a></div>
                <section className="info__summary mt-4">
                    <div dangerouslySetInnerHTML={{ __html: summary }}/>
                </section>
            </div>
           
        )
    }else{
        return(
            <MyLoader />
            
        )
    }
}



const InfoMovie = (props) =>{
    return (
        <div className="col-md-6 my-4">
            {descMovie(props)}
        </div>
    )
}



export default InfoMovie;