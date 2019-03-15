import { connect } from 'react-redux';
import { fetchMoviesAction, searchByAction } from '../../state/actions';
import { State } from '../../state/reducers';
import HeaderWithSearch from './HeaderWithSearch';

const mapStateToProps = (state: State) => ({
    searchBy: state.searchBy,
    sortBy: state.sortBy,
    search: state.search
});

export default connect(
    mapStateToProps,
    {
        onSearchByChange: searchByAction,
        onSearchClick: fetchMoviesAction.request,
    }
)(HeaderWithSearch);
