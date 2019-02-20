import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { styled } from '@material-ui/styles' ;
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
 secondaryHeading: {
  color: '#1A237E',
  textShadow: 5,
 }
})

const ExpPanel = styled(ExpansionPanel)({
 background: '#90A4AE',
 width: "50%"
})

function SingleCoin(props) {
 const { classes } = props
  return (
    <div>
     {/* <h1>{props.id}</h1>
     <h3>${props.price}</h3>
     <h3>{props.market_cap_usd}</h3> */}
     <ExpPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
       <div>
        <Typography className={classes.secondaryHeading}>
      <h2> {props.name}</h2>
        </Typography>
       </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
       <div></div>
       <div>
        <Chip label={`Rank: ${props.rank}`} /> {' '}
       </div>
       <div>
        <Typography>
       <h3> Price(USD): ${props.price_usd} </h3>
       <h3> Price(BTC): {props.price_btc} </h3>
        </Typography>
        
       </div>
      </ExpansionPanelDetails>
       <Divider />
       <ExpansionPanelActions>
        <Button>Cancel</Button>
       </ExpansionPanelActions>
     </ExpPanel>
    </div>
  )
}

export default withStyles(styles)(SingleCoin)