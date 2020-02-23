import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

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

const StaticPaper = styled(Paper)`
  width: 90%;
  margin: 6% auto 5% auto;
  background-color: #353c52;
  justify-content: center;
  align-items: center;
  padding: 4%;
`;

export default function Meditation(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event) => {
    setExpanded(prevEx => prevEx !== panel ? panel : false);
  };


  const handleEnd = (meditationId) => {
    axios
      .request({
        url: "http://localhost:3001/meditations",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        params: {
          user_id: props.user.id,
          meditation_id: meditationId
        },
        withCredentials: true
      })
      .then(function (response) {
        console.log(response) // here we could maybe do like a "congrats for finishing a meditation thing!"
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const meditations = props.meditations.map(meditation => {
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
          <audio controls src={meditation.URL} onEnded={() => handleEnd(meditation.id)}></audio>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  })

  return (
    <main className="meditations">
      <StaticPaper elevation={10}>
        <h2>Meditations</h2>
        {meditations}
      </StaticPaper>
    </main>
  )
}
