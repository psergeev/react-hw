import { connect } from 'react-redux';
import { sortByAction } from '../../state/actions';
import { State } from '../../state/reducers';
import ResultsSorter from './ResultsSorter';

const mapStateToProps = (state: State) => ({
    sortBy: state.sortBy,
});

export default connect(
    mapStateToProps,
    {
        handleSortByChange: sortByAction,
    }
)(ResultsSorter);
