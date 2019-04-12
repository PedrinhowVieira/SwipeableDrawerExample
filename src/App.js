import React, { Component, Fragment } from 'react';
import './App.css';
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItemText from '@material-ui/core/ListItemText';


class App extends Component {
  state = {
    left: false,
    dashboard: 'none_yet',
  };
  
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  changeDashboardState = (dashboardValue) => {
    this.setState({
      dashboard: dashboardValue,
    }) 
  }
  
  render() {
    const sideList = (
      <Fragment>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}onClick={() => this.changeDashboardState(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Fragment>
    );
    return (
      <div>
        <Button onClick={this.toggleDrawer("left", true)}>Open Left</Button>
        <p>{this.state.dashboard}</p>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
          onOpen={this.toggleDrawer("left", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default App;
