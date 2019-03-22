import { connect } from 'react-redux';
import { showDetailsAction } from '../../state/actions';
import { State } from '../../state/reducers';
import App from './App';

const mapStateToProps = (state: State) => ({
    selectedMovie: state.selectedMovie,
    movies: state.movies
});

export default connect(
    mapStateToProps,
    {
        handleMovieCardClick: showDetailsAction
    }
)(App);
