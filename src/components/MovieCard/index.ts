import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import MovieCard from './MovieCard';
import movieCardStyles from './MovieCard.styles';

export default withRouter(withStyles(movieCardStyles)(MovieCard));
