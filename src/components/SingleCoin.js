import React from 'react'
import { withStyles } from '@material-ui/core/styles';
// import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default function SingleCoin(props) {
  return (
    <div>
     {/* <h1>{props.id}</h1>
     <h3>${props.price}</h3>
     <h3>{props.symbol}</h3>
     <h3>{props.rank}</h3>
     <h3>{props.price_usd}</h3>
     <h3>{props.price_btc}</h3>
     <h3>{props.market_cap_usd}</h3> */}
     <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
       <div>
        <Typography>
      <h2> {props.name}</h2>
        </Typography>
       </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
       <div></div>
       <div>
        <Chip label={props.symbol} />
       </div>
       <div>
        <Typography>
       <h3> Price(USD):${props.price_usd} </h3>
        </Typography>
       </div>
      </ExpansionPanelDetails>
       <Divider />
       <ExpansionPanelActions></ExpansionPanelActions>
     </ExpansionPanel>
    </div>
  )
}
