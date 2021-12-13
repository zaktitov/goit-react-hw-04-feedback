import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className={s.section}>
    <h2 className="">{title}</h2>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
