import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0,
    provinces: [
      { id: 1, code: "PRV1", name: "Central" },
      { id: 2, code: "PRV2", name: "Eastern" },
      { id: 3, code: "PRV3", name: "North Central" },
      { id: 4, code: "PRV4", name: "Northern" },
      { id: 5, code: "PRV5", name: "North Western" },
      { id: 6, code: "PRV6", name: "Sabaragamuwa" },
      { id: 7, code: "PRV7", name: "Southern" },
      { id: 8, code: "PRV8", name: "Uva" },
      { id: 9, code: "PRV9", name: "Western" }
    ]
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value, provinces } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            {provinces.map(counter => (
              <Tab label={provinces[counter.id - 1]["name"]} />
            ))}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonForce);
