import PropTypes from 'prop-types'
import { MainTitle } from './Section.styled';

export const Section = ({ title, children }) => {
   return (
   <section className='section'>
     <MainTitle>{title}</MainTitle>
     {children}  
    </section>)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
  };
  