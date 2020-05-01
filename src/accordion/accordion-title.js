import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => {
  return (
    <a className='uk-accordion-title' href='#'>{children}</a>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Title;
