import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import SlidingMenu from './SlidingMenu';
const DEFAULT_COLORS = {
  topMenu: {
    iconColor: 'black',
    textColor: 'black',
    backgroundColor: 'white'
  },
  slidingMenu: {
    iconColor: 'black',
    textColor: 'black',
    backgroundColor: 'white',
    highlightColor: 'rgb(52, 125, 209)',
    highlightIconColor: 'white',
    highlightTextColor: 'white'
  }
};
const MenuBar = posed.div({
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        type: 'spring',
        stiffness: 50,
        damping: 15
      },
      default: 300
    }
  },
  hidden: {
    y: ({
      menuHeight
    }) => -menuHeight,
    opacity: 0,
    transition: 300
  }
});
const HoverRotate = posed.div({
  idle: {
    rotate: 0
  },
  hovered: {
    rotate: 90
  }
});

function Layout({
  colors = DEFAULT_COLORS,
  topMenuHeight,
  backgroundImage,
  menuItems,
  containerStyle,
  topBarMenuIcon,
  topBarContent,
  children,
  menuRight = false
}) {
  const [isVisible, setVisible] = useState(false);
  const [menuIconHover, setMenuIconHover] = useState('idle');
  const sliderMenu = useRef(null);
  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setVisible(true);
    }, 300);
    return () => {
      fadeInTimer && clearTimeout(fadeInTimer);
    };
  }, []);

  const toggleMenu = state => () => sliderMenu && sliderMenu.current && sliderMenu.current.toggle(state);

  const burgerButton = () => /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: topMenuHeight || 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    onMouseEnter: () => {
      toggleMenu('mouseIn');
      setMenuIconHover('hovered');
    },
    onMouseLeave: () => {
      toggleMenu('mouseOut');
      setMenuIconHover('idle');
    },
    onClick: toggleMenu('click')
  }, /*#__PURE__*/React.createElement(HoverRotate, {
    style: {
      cursor: 'pointer'
    },
    pose: menuIconHover
  }, topBarMenuIcon));

  const contentMenuTop = () => /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1,
      width: '50%',
      height: '100%'
    }
  }, topBarContent);

  return /*#__PURE__*/React.createElement("div", {
    style: { ...styles.backgroundStyle,
      ...(backgroundImage ? {
        backgroundImage
      } : {})
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      zIndex: 20,
      position: 'relative',
      height: topMenuHeight || 50
    }
  }, /*#__PURE__*/React.createElement(SlidingMenu, {
    ref: sliderMenu,
    menuItems: menuItems,
    menuRight: menuRight,
    colors: colors.slidingMenu
  }), /*#__PURE__*/React.createElement(MenuBar, {
    style: { ...styles.barStyle,
      height: 50,
      backgroundColor: colors.topMenu.backgroundColor
    },
    pose: isVisible ? 'visible' : 'hidden',
    menuHeight: topMenuHeight || 50
  }, menuRight ? /*#__PURE__*/React.createElement(React.Fragment, null, contentMenuTop(), burgerButton()) : /*#__PURE__*/React.createElement(React.Fragment, null, burgerButton(), contentMenuTop()))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'scroll',
      height: '100%'
    }
  }, children));
}

const styles = {
  backgroundStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat'
  },
  barStyle: {
    width: '100%',
    boxShadow: '0px 2px 2px rgba(100, 100, 100, 0.5)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
};
Layout.propTypes = {
  backgroundImage: PropTypes.string,
  children: PropTypes.object
};
export default Layout;