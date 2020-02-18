import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: 20,
    flexBasis: '33.33%',
    flexShrink: 0,
    color: theme.palette.text.secondary
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    color: theme.palette.text.secondary,
  }
}));

export default function StaticPage(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event) => {
    setExpanded(prevEx => prevEx !== panel ? panel : false);
  };

  const items = props.data.map(data => {
    return (
      <ExpansionPanel expanded={expanded === `panel${data.id}`} key={data.id} onChange={handleChange(`panel${data.id}`)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${data.id}bh-content`}
          id={`panel${data.id}bh-header`}
        >
          <Typography className={classes.heading}>{data.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.details}>{data.text}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  })

  return (
    <main className="static">
      <h2>{props.title}</h2>
      <div className={classes.root}>
      </div>
      {items}
    </main>
  )
}
