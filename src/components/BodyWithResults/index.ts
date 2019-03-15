import { connect } from 'react-redux';
import { State } from '../../state/reducers';
import BodyWithResults from './BodyWithResults';

const mapStateToProps = (state: State) => ({
    isEmpty: state.isEmpty,
});

export default connect(mapStateToProps)(BodyWithResults);
