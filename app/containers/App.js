import React, { Component } from 'react';
import { getListMovies} from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import Banner from '../components/home/Banner';
import ListMovies from '../components/home/ListMovies';

class App extends Component{
  componentDidMount(){
        this.props.getListMovies();
    }
  render(){
    return (
      <div>
        <Banner/>
        <div className="container my-5">
          <div className="example col-md-12 ml-auto mr-auto">
              <div className="navbar navbar-expand-lg mb-4">
                  <ListMovies list={this.props.listMovies.list}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        listMovies: state.listMovies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getListMovies}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
