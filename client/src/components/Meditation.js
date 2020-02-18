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
    fontSize: theme.typography.pxToRem(15),
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

export default function Meditation(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event) => {
    setExpanded(prevEx => prevEx !== panel ? panel : false);
  };


  const meditationData = [
    { "id": 1, "name": "One minute", "value": "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav" },
    { "id": 2, "name": "Two minutes", "value": "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav" },
    { "id": 3, "name": "Three minutes", "value": "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav" }
  ]

  const meditations = meditationData.map(meditation => {
    return (
      <ExpansionPanel expanded={expanded === `panel${meditation.id}`} key={meditation.id} onChange={handleChange(`panel${meditation.id}`)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${meditation.id}bh-content`}
          id={`panel${meditation.id}bh-header`}
        >
          <Typography className={classes.heading}>{meditation.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <audio controls src={meditation.value}></audio>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  })

  return (
    <main className="meditations">
      <h2>Meditations</h2>
      {meditations}
    </main>
  )
}
