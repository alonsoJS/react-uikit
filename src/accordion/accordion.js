import React, { useEffect, useRef } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import Element from './accordion-element';
import Content from './accordion-content';
import Title from './accordion-title';

export const Accordion = props => {
  const accordionElement = useRef(null);
  const {
    children,
    className = '',
    active = false,
    animate = true,
    collapsible = true,
    duration = 200,
    multiple = false,
    transition = 'ease',
    offset = 0,
    beforeshow = null,
    show = null,
    shown = null,
    beforehide = null,
    hide = null,
    hidden = null
  } = props;

  useEffect(() => {
    const accordion = UIkit.accordion(accordionElement.current, {
      active,
      animate,
      collapsible,
      duration,
      multiple,
      transition,
      offset
    });

    accordionElement.current.addEventListener('beforeshow', beforeshow);
    accordionElement.current.addEventListener('beforehide', beforehide);
    accordionElement.current.addEventListener('hidden', hidden);
    accordionElement.current.addEventListener('shown', shown);
    accordionElement.current.addEventListener('shown', show);
    accordionElement.current.addEventListener('hide', hide);

    return () => {
      accordion.$destroy();
    };
  }, []);

  return (
    <ul ref={accordionElement} className={className}>
      {children}
    </ul>
  );
};

Accordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  active: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  animate: PropTypes.bool,
  collapsible: PropTypes.bool,
  duration: PropTypes.number,
  multiple: PropTypes.bool,
  transition: PropTypes.string,
  offset: PropTypes.number,
  beforeshow: PropTypes.func,
  show: PropTypes.func,
  shown: PropTypes.func,
  beforehide: PropTypes.func,
  hide: PropTypes.func,
  hidden: PropTypes.func
};

Accordion.Element = Element;
Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;
