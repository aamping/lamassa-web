import React, { Component } from 'react';
import ListScreen from './containers/ListScreen';
import AppBarTitle from './components/AppBarTitle';
import DrawerBar from './components/DrawerBar';

const styles = {
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.appFrame}>
        <AppBarTitle />
        <DrawerBar />
        <ListScreen />
      </div>
    );
  }
}

export default App;
