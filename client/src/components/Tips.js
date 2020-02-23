import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  expansion:{
    background: "#ededed"
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
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

const StaticPaper = styled(Paper)`
  width: 90%;
  margin: 6% auto 5% auto;
  background-color: #353c52;
  justify-content: center;
  align-items: center;
  padding: 4%;
`;

// const PanelHeader = styled(ExpansionPanelSummary)` // this turns the header the same yellow but it's not great
//   background-color: #deb559;
// `;

export default function Tips(props) {
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
          className={classes.expansion}
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
      <StaticPaper elevation={10}>
        <h2>Dos and Dont's For Test Success</h2>
        <div className={classes.root}>
        </div>
        {items}
      </StaticPaper>
    </main>
  )
}
