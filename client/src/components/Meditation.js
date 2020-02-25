import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  expansion: {
    background: "#ededed"
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: "33.33%",
    flexShrink: 0,
    color: theme.palette.text.secondary
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  details: {
    color: theme.palette.text.secondary
  }
}));

const StaticPaper = styled(Paper)`
  width: 90%;
  margin: 10px auto;
  background-color: #353c52;
  justify-content: center;
  align-items: center;
  padding: 4%;
  background-image: url(http://www.transparenttextures.com/patterns/cubes.png);
`;

const StaticPaper2 = styled(Paper)`
  width: 90%;
  margin: 10px auto;
  background-color: #353c52;
  justify-content: center;
  align-items: center;
  padding: 1%;
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px auto;
`;

const Text = styled.p`
  line-height: 1.5;
  font-size: 1.5em;
  font-weight: normal;
  margin: 15px;
`;

export default function Meditation(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => event => {
    setExpanded(prevEx => (prevEx !== panel ? panel : false));
  };

  const handleEnd = meditationId => {
    axios
      .request({
        url: "/meditations",
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
      .then(function(response) {
        console.log(response); // here we could maybe do like a "congrats for finishing a meditation thing!"
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const meditations = props.meditations.map(meditation => {
    return (
      <ExpansionPanel
        expanded={expanded === `panel${meditation.id}`}
        key={meditation.id}
        onChange={handleChange(`panel${meditation.id}`)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${meditation.id}bh-content`}
          id={`panel${meditation.id}bh-header`}
          className={classes.expansion}
        >
          <Typography className={classes.heading}>{meditation.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <audio
            controls
            src={meditation.URL}
            onEnded={() => handleEnd(meditation.id)}
          ></audio>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });

  return (
    <main className="meditations">
      <Title>Meditations</Title>
      <StaticPaper2 elevation={10}>
        <Text>
          Mindfulness is a process where we purposely bring our attention to
          things happening in the present moment. It means taking your time to
          really notice, without judgement, what's happening right now.
          Practicing mindfulness has been shown to reduce symptoms of anxiety -
          by focusing your attention on the here and now, your mind gets a break
          from worrying about the future or past. Use the guided medidations
          below to help you relax and start practicing your mindfulness skills.
        </Text>
        <Text>
          These meditations have been <strong>specifically made for students with test
          anxiety</strong>, and it’s OK if it seems a little weird at first. To get the
          hang of it, try practicing with one of the longer recordings in the
          days leading up to a test. The shorter ones are great for doing the
          day of a test, like on your lunch break!{" "}
        </Text>
      </StaticPaper2>
      <StaticPaper elevation={10}>{meditations}</StaticPaper>
    </main>
  );
}
