import React from 'react';
import PropTypes from 'prop-types';
import Close from './alert-close';

const Alert = props => {
  const {
    children
  } = props;

  return (
    <div data-uk-alert>
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Alert.Close = Close;

export default Alert;
