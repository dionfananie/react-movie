import React, { Component } from 'react';
import { getDetailMovies, clearSelectedMovies } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENT DETAIL MOVIES
import ImagesMovie from '../components/movies-item/ImagesMovie';
import InfoMovies from '../components/movies-item/InfoMovie';

class MoviesItem extends Component {
    componentDidMount() {
        this.props.getDetailMovies(this.props.match.params.id)
       
    }
    componentWillUnmount() {
        this.props.clearSelectedMovies();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ImagesMovie image={this.props.detailMovies}/>
                    <InfoMovies info={this.props.detailMovies}/>
                </div>
            </div>
        );
    }
}

const Image = (image) =>{
    if (image) {
        return image.image.original
    }
}
function mapStateToProps(state) {
    let detailMovies = state.detailMovies.list
    if (detailMovies) {
        return {
            detailMovies: detailMovies,
        }
    }
    
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getDetailMovies, clearSelectedMovies }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesItem);