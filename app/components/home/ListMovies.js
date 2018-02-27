import React from 'react';
import { Link } from 'react-router-dom';

const showList = ({list}) =>{
    if(list){
        
        return list.map((item)=>{
            var divStyle = {
                backgroundImage: 'url(' + item.image.medium + ')',
            };
            return(
                
                <div className="col mb-4 card__list-movies" key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                        <div className="card">
                            <div className="card-body" style={divStyle}>
                            <div className="card-body-cover">
                                <button type="button" className="btn btn-sm btn-outline-warning btn-pill">Watch</button>
                            </div>
                            </div>
                        </div>
                    </Link>
                </div>
               
            )
        })
    }
}

const ListMovies = (props) =>{
    return(
        <div className="row">
            {showList(props)}
        </div>
    )
}

export default ListMovies;