import { connect } from 'react-redux';
import { showSearchAction } from '../../state/actions';
import HeaderWithDetails from './HeaderWithDetails';

export default connect(
    null,
    {
        handleBackToSearchClick: showSearchAction
    }
)(HeaderWithDetails);
