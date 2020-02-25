import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Backpack } from "react-kawaii";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  expansion: {
    background: "#dadde0"
  },
  grid: {
    flexGrow: 1,
    flexWrap: "wrap",
    display: "grid"
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
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

const WhatIsPaper = styled(Paper)`
  margin-left: 3%;
  margin-right: 3%;
  margin-bottom: 3%;
  padding: 3%;
  background-color: #353c52;
`;

const NotePaper = styled(Paper)`
  margin-left: 3%;
  margin-right: 3%;
  margin-bottom: 3%;
  padding: 3%;
  background-color: #353c52;
`;

const Text = styled.p`
  line-height: 1.5;
  font-size: 1.5em;
  font-weight: normal;
  margin: 5%;
`;
const StyledBackPack = styled(Backpack)`
  justify-content: center;
  margin-left: 35%;
  margin-top: 7%;
  margin-bottom: 5%;
`;
const TitlePaper = styled(Paper)`
  background-color: #353c52;
  margin: 5%;
  padding: 3%;
`;
const Title = styled.h1`
  text-align: center;
`;
const SymptomsTitle = styled.h1`
  text-align: center;
`;
const WhatIsPaperBackground = styled(Paper)`
  background-color: #353c52;
  background-image: url(http://www.transparenttextures.com/patterns/cubes.png);
  margin: 5%;
  margin-top: 0%;
  padding: 5%;
`;

export default function WhatIs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => event => {
    setExpanded(prevEx => (prevEx !== panel ? panel : false));
  };

  const data = [
    {
      id: 1,
      name: "Physical",
      text:
        "headaches, nausea or diarrhea, extreme body temperature changes, excessive sweating, shortness or breath, light-headedness or fainting, rapid heart beat, and/or dry mouth"
    },
    {
      id: 2,
      name: "Behavioural",
      text: "fidgeting, pacing, substance abuse, avoidance"
    },
    {
      id: 3,
      name: "Cognitive",
      text:
        "racing thoughts, 'going blank', difficulty concentrating, negative self-talk, feelings of dread, comparing yourself to others, difficulty organizing your thoughts."
    },
    {
      id: 4,
      name: "Emotional",
      text:
        "excessive feelings of fear, disappointment, anger, depression, uncontrollable crying or laughing, feelings of helplessness "
    }
  ];

  const items = data.map(data => {
    return (
      <ExpansionPanel
        expanded={expanded === `panel${data.id}`}
        key={data.id}
        onChange={handleChange(`panel${data.id}`)}
      >
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
    );
  });

  return (
    <main>
      <div className={classes.grid}>
        <Grid container spacing={3}>
          <Grid item sm={9} xs={12}>
            <TitlePaper elevation={12}>
              <Title>What is Test Anxiety?</Title>
            </TitlePaper>
          </Grid>
          <Grid item sm={3} xs={12}>
            <StyledBackPack size={150} mood="blissful" color="#FFD882" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.grid}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <WhatIsPaper elevation={10}>
              <Text>
                Anxiety is a normal human emotion that causes increased
                alertness, fear, and physical signs, such as a rapid heart rate.
                Almost everyone experiences some nervousness or anxiety before,
                during, or even after an exam. It is perfectly natural to be
                anxious before a test and believe it or not, this stress can
                actually be a good thing since some stress is required for you
                to perform optimally!
              </Text>
              <Text>
                In some cases however, a student may experience frequent and
                intense fears or worries before a test or exam, causing them to
                feel too much anxiety. Too much anxiety means your body’s 'fight
                or flight' response is over-stimulated and all the extra
                adrenaline being released actually becomes distracting and your
                performance declines. This extra anxiety, commonly referred to
                as Test Anxiety, makes it difficult for a student to demonstrate
                what they know during a test or exam.
              </Text>
              <Text>
                <strong>
                  This is because Test Anxiety creates a kind of 'noise' or
                  'mental static' in the brain, blocking our ability to grab
                  facts and knowledge stored in our memory, while also messing
                  with our ability to understand questions and solve them.
                </strong>
              </Text>
              <Text>
                Because it’s natural for students to base some of their
                self-worth on their academic performance, it makes sense that
                test anxiety can lead to a host of problems in those who suffer
                with it.
              </Text>
            </WhatIsPaper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <WhatIsPaperBackground>
              <NotePaper elevation={11}>
                <Text>
                  <strong>
                    It’s important to note that each person who deals with test
                    anxiety will experience a different collection of symptoms
                    with differing degrees of intensity.
                  </strong>
                </Text>
              </NotePaper>
              <SymptomsTitle>Symptoms</SymptomsTitle>
              {items}
            </WhatIsPaperBackground>
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
