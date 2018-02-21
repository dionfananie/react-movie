import React from 'react';
import { Link } from 'react-router-dom';

const showList = ({list}) =>{
    if(list){
        
        return list.map((item)=>{
            var divStyle = {
                backgroundImage: 'url(' + item.image.medium + ')',
            };
            return(
                <Link to={`/movies/${item.id}`} key={item.id}>
                    <div className="col mb-4 card__list-movies">
                        <div className="card">
                            <div className="card-body" style={divStyle}>
                                {/* <div className="card-content">
                                    <h5 className="card-title">{item.name}</h5>
                                    <img className="icon_card" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ0SURBVGhD7VjPaxNBFA6CIh4FqT+plCYzW3Mp7U38dRDEg3ry5E0oFDxo/SMULHgobQ8K9iCKFBEvWj3Ug9gkm1YQ9OrBuwjW2trWWb9v8tJmdjc1SbOaQD54sJn33ve9mczOj0110EEH/xfG11ma/GxfmIJ6TJOf7YlgPqNNQf+m8Vma2w+YUg8DXwc0Pktze8HkvLTx1dpmR9Qa28TdPgh8NVXuxKapKXG3BwI/3VP5b5St1JbukbDWBwq+F+5E2eiTsNZGkFNHsdyuxnWCZn2IkfDWBVanSadwX3+nhdomJbw1YfK9hzHiv9yi1S2a04YYxkpa6wEFjocK/mHe9+6zhueQb1zSWgtmQR3ElFl2ivX1qLg55UZDvmXmiLs1EASpHRjhsVChP00u2yUh2CCzXWxzYpiDXAn5dzD+sSMmr86giCGcn+5g7j+DfcLzSmWBUuRdSdsA26JxesVykAucaBuiBrUkrTEEhb79Ju+dgF3lSwryaYzkBxSxFC6imlWbNnHTbyujZkmbNaAW1oTaWKNQxsMU9bU4wnoN4lWXV/ricuo11iqU8YDQdYyAiUveypiDEfyC/NmtjiGl44uetbGN6qBGodsappAZriYCks+wGRQyjpgR/OUX8DsbvOneLek1gznMtRzkIie5oRGrbQcrMyzptaH0juj1CJmvnwTzAzslrOkgt9WI6q6zJgmrD8bPXIntTEE9DT727ZKwpoGcljusx06gFglrDPgrL4M8cgjE3/y8mZ0pdQKcER21yhokbHsI8t4lEDpnqJKIftHIuxGGfVfIFeGHJrQlrDkwRe88/uLIHoAX9RXm9R4JqxvMtRwRXuxF0JSw5gJr91mMUmRjRNvrRjpjO8HcKN8StSQsGWCkTkFoMUb8poTUDObE8CxSQ0KShSlmjmM6OHdytF0Ud81gjsPBLy3gFnfyMHN9eysLsEUseN3irhnMifCAW9zJwxS8k444rrLiqhvMdbjALa7kwWOCI+6rOXHVDeY6XPUeQbYDjOKEI+6r++JyEBTVaewP72h8lmYHzHW59IS4kgcKe+uIF/UNcVkY3+tHQTOVMTbOHgi9fgmzYK4TA25xJQ+M4ldHXNZ8s9DXi+XzEYqpejynz8Yg1uYg1/GDm+2Jw8ylD1UKW/GCGoThWB89xlQzxkrOYMQHDZFLDngZz0WEYzbIssH3jRbno8XlUkPkkgOmxkhYOM5QII4y6jb3hdK+g+ca7/3UELnkgBf2QZx42VAsp8wY5v4BSdkA26zvL1OQGpKSHCA0HxamQRwXMDVVywdqxjC2lBPlgs1LaDKQD3GhT59chfS0yaU9CasZzLG5oVXOaiT54Y5LpiPo65dBXg+Iu2GQw3JVcsvynAh4W7Mi2LT4oUyamwZyktt2ptk3w0rw2J3Yra0C9jbawLWggw46qIZU6g9z2dGFDJAkjQAAAABJRU5ErkJggg=="/>
                                    <span className="card-rating ml-1">{item.rating.average}</span>
                                </div> */}
                                {/* <a href="#" className="btn btn-primary">Read More</a> */}
                            <div className="card-body-cover">
                                <button type="button" className="btn btn-sm btn-outline-warning btn-pill">Watch</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </Link>
               
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