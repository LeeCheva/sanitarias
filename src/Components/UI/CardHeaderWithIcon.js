import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  textSize: {
    fontSize: '0.9em'
  }
});

function CardHeaderWithIcon(props) {

  const { classes, onDrawerToggle } = props;

  let Extra = props.extra || false;

  return (
     <CardHeader title={
      <span className={classes.textSize}>
         <i className={props.icon}></i> {props.title} {Extra && <Extra />}
      </span>
    } />
  );
}

CardHeaderWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  extra: PropTypes.node
};

export default withStyles(styles)(CardHeaderWithIcon);