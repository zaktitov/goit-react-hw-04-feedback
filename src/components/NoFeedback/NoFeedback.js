import s from './NoFeedback.module.css';
import PropTypes from 'prop-types';

const NoFeedback = ({ message }) => <h3 className={s.title}>{message}</h3>;

export default NoFeedback;

NoFeedback.propTypes = {
  message: PropTypes.string,
};
