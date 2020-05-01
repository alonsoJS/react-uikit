import React from 'react';
import PropTypes from 'prop-types';

const Close = () => {
  return (
    <a className='uk-alert-close' data-uk-close />
  );
};

Close.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Close;
