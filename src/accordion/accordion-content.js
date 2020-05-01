import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => {
  return (
    <div className='uk-accordion-content'>{children}</div>
  );
};

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Content;
