import { connect } from 'react-redux';
import { fetchMovieAction, showSearchAction } from '../../state/actions';
import { State } from '../../state/reducers';
import HeaderWithDetails from './HeaderWithDetails';

const mapStateToProps = (state: State) => ({
    movie: state.selectedMovie,
    search: state.search
});

export default connect(
    mapStateToProps,
    {
        handleBackToSearchClick: showSearchAction,
        fetchMovie: fetchMovieAction.request
    }
)(HeaderWithDetails);
