import React from 'react';
import Layout from './Layout';

function App ({ props }) {
  const menuItems = [
    {
      label: 'Home',
      icon: (iconColor) => (
        <i
          class='fab fa-react'
          style={{
            border: 'none',
            fontSize: '2.8em',
            cursor: 'pointer',
            color: iconColor
          }}
        />
      ),
      action: () => {
        console.log('change click icon')
      }
    }
  ]

  const iconTopBar = (
    <i
      class='fas fa-bars'
      style={{
        border: 'none',
        fontSize: '2.0em',
        cursor: 'pointer',
        color: 'yellow'
      }}
    />
  )

  const colors = {
    topMenu: {
      textColor: 'black',
      backgroundColor: 'pink'
    },
    slidingMenu: {
      iconColor: 'black',
      textColor: 'black',
      backgroundColor: 'red',
      highlightColor: 'rgb(52, 125, 209)',
      highlightIconColor: 'white',
      highlightTextColor: 'white'
    }
  }

  const topBarContent = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginLeft: 25
      }}
    >
      MENU
    </div>
  )
  return (
    <Layout
      colors={colors}
      backgroundImage="url('https://i.redd.it/qnh4bu6cva901.jpg')"
      menuItems={menuItems}
      containerStyle={{}}
      topBarMenuIcon={iconTopBar}
      topBarContent={topBarContent}
    >
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      <div>
        Hello World Hello World Hello World Hello World Hello World Hello World
      </div>
      Hello World Hello World
    </Layout>
  )
}

App.propTypes = {}

export default App
