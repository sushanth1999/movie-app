import React from 'react';
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import {data} from '../data'

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
      
      
      store.subscribe(()=>{
        this.forceUpdate();
      });
      
      //male api call
      //dispatch action.
      this.props.store.dispatch({
        type: 'ADD_MOVIES',
        movies: data
      });


      console.log('State',this.props.store.getState());
  }
  render(){
        const movies = this.props.store.getState();
        // console.log(movies);
        return (
          <div className="App">
            <Navbar>

            </Navbar>
            <div className='main'>
              
              <div className='tabs'>
                <div className='tab'>Movies</div>
                <div className='tab'>Favourite</div>
              </div>
              
              <div className='list'>
                  {movies.map((movie,index)=>(
                      <MovieCard movie={movie} key = {`movies-${index}`}/>
                  ))}

              </div>
            </div>
          </div>
        );
      }
}


export default App;
