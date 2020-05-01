import React from 'react';
import PropTypes from 'prop-types';

const Element = ({ children }) => {
  return (
    <li>
      {children}
    </li>
  );
};

Element.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Element;
