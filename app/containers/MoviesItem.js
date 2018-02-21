import React, { Component } from 'react';
import { getDetailMovies, clearSelectedMovies } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImagesMovie from '../components/movies-item/ImagesMovie';

// COMPONENT DETAIL MOVIES
// import DetailMovies from '../components/movies-item/DetailMovies';

class MoviesItem extends Component {
    componentDidMount() {
        this.props.getDetailMovies(this.props.match.params.id)
    }
    componentWillUnmount() {
        this.props.clearSelectedMovies();
    }
    render() {
        return (
            <div>
                <ImagesMovie image={this.props.detailMovies.list}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        detailMovies: state.detailMovies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getDetailMovies, clearSelectedMovies }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesItem);