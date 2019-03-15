import { connect } from 'react-redux';
import { showSearchAction } from '../../state/actions';
import HeaderWithDetails from './HeaderWithDetails';

// const mapStateToProps = (state: State) => ({
//     selectedMovie: state.selectedMovie,
//     movies: state.movies
// });

export default connect(
    null,
    {
        onBackToSearchClick: showSearchAction
    }
)(HeaderWithDetails);
