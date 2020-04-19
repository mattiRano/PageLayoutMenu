import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
const modalMenu = document.getElementById('modal-menu');
const MENU_WIDTH = 300;
const MINI_WIDTH = 100;
const ORANGE = '#F28C2C';

function MenuItem({
  item: {
    label,
    icon,
    action
  },
  pose,
  navigate
}) {
  const [isHovered, setisHovered] = useState(false);
  const slidingMenuDiv = {
    display: 'flex',
    alignItems: 'center',
    minHeight: '3rem',
    cursor: 'pointer',
    padding: '1rem 2rem'
  };

  const updateHoverStatus = boolean => e => setisHovered(boolean);

  return /*#__PURE__*/React.createElement("div", {
    onClick: action,
    style: { ...slidingMenuDiv,
      backgroundColor: isHovered ? ORANGE : ''
    },
    onMouseEnter: updateHoverStatus(true),
    onMouseLeave: updateHoverStatus(false)
  }, icon(isHovered ? 'white' : ORANGE), /*#__PURE__*/React.createElement(TextContainer, {
    pose: pose
  }));
}

class SlidingMenu extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.state = {
      visible: 0
    };
    this.toggle = this.toggle.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  toggle(type) {
    const {
      visible
    } = this.state;
    const trasitions = {
      hide: 0,
      mouseIn: visible > 1 ? 2 : 1,
      mouseOut: visible > 1 ? 2 : 0,
      hoverInDiv: 2,
      click: visible < 2 ? 2 : 0
    };
    this.setState({
      visible: trasitions[type]
    });
  }

  componentDidMount() {
    modalMenu.appendChild(this.el);
  }

  componentWillUnmount() {
    modalMenu.removeChild(this.el);
  }

  renderDivision() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        backgroundColor: 'white',
        border: '1px solid #F28C2C'
      }
    });
  }

  navigate(page) {
    if (page === 'Logout') {
      window.location.reload();
      return false;
    }

    this.toggle('hide');
  }

  renderMenu() {
    const screenHeight = 1001;
    const screenWidth = 111;
    const {
      visible
    } = this.state;
    const {
      menuItems
    } = this.props;
    const poseStates = ['hidden', 'mini', 'visible'];
    const shadowStates = ['none', '4px 0 78px 0px rgba(100, 100, 100, 0.7)', '4px 0 58px 0px rgba(100, 100, 100, 0.7)'];
    const overlaySize = [0, screenWidth - MINI_WIDTH, screenWidth - MENU_WIDTH];
    return /*#__PURE__*/React.createElement(MenuContainer, {
      pose: poseStates[visible],
      height: screenHeight - 50
    }, /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => this.toggle('hoverInDiv'),
      style: {
        width: MENU_WIDTH,
        backgroundColor: 'white',
        boxShadow: shadowStates[visible]
      }
    }, menuItems.map((item, ind) => /*#__PURE__*/React.createElement(MenuItemContainer, {
      key: ind,
      pose: poseStates[visible],
      height: screenHeight - 50
    }, /*#__PURE__*/React.createElement(MenuItem, {
      item: item,
      visible: visible,
      pose: poseStates[visible],
      navigate: this.navigate
    })))), /*#__PURE__*/React.createElement("div", {
      onClick: () => this.toggle('hide'),
      style: {
        height: '100%',
        width: overlaySize[visible]
      }
    }));
  }

  render() {
    return ReactDOM.createPortal(this.renderMenu(), this.el);
  }

}

const commonMenuContainerStyle = {
  height: props => props.height,
  display: 'flex',
  flexDirection: 'row',
  position: 'absolute',
  zIndex: 19,
  marginTop: 50,
  top: 0,
  left: 0
};
const MenuContainer = posed.div({
  visible: { ...commonMenuContainerStyle,
    x: 0,
    transition: {
      duration: 300
    }
  },
  mini: { ...commonMenuContainerStyle,
    x: -(MENU_WIDTH - MINI_WIDTH),
    transition: {
      duration: 300
    }
  },
  hidden: { ...commonMenuContainerStyle,
    x: -MENU_WIDTH,
    transition: {
      duration: 300
    }
  }
});
const MenuItemContainer = posed.div({
  visible: {
    x: 0,
    transition: {
      duration: 300
    }
  },
  mini: {
    x: MENU_WIDTH - 100,
    transition: {
      duration: 300
    }
  }
});
const TextContainer = posed.div({
  visible: {
    opacity: '100%',
    transition: {
      duration: 2000
    }
  },
  mini: {
    opacity: '0%',
    transition: {
      duration: 0
    }
  }
});
export default SlidingMenu;