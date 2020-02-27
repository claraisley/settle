import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

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
`;

const Text = styled.p`
  line-height: 1.5;
  font-size: 1.5em;
  font-weight: normal;
  margin: 15px;
`;
const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
  margin-top: 3%;
  align-items: center;
`;
const BackButton = styled(Button)`
  height: 45px;
  width: 45px;
`;
const BackImg = styled.img`
  height: 40px;
  width: 40px;
`;

export default function ThinkingTraps(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => event => {
    setExpanded(prevEx => (prevEx !== panel ? panel : false));
  };
  const history = useHistory();

  const items = props.data.map(data => {
    return (
      <ExpansionPanel
        expanded={expanded === `panel${data.id}`}
        key={data.id}
        onChange={handleChange(`panel${data.id}`)}
      >
        <ExpansionPanelSummary
          className={classes.expansion}
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${data.id}bh-content`}
          id={`panel${data.id}bh-header`}
        >
          <Typography className={classes.heading}>{data.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.details}>
            {data.text}<br /><br />
            <strong>Example Statements</strong><br /><br />
            {data.example_statement1}<br /><br />
            {data.example_statement2}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });

  return (
    <main className="static">
      <StyledDiv>
        <BackButton onClick={() => history.push("/menu")}>
          <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582400198/arrow_xph8bj.svg" />
        </BackButton>
        <Title>Thinking Traps</Title>
        <div></div>
      </StyledDiv>
      <StaticPaper2 elevation={10}>
        <Text>
          Just because you think something doesn’t mean it’s true or that it
          will happen. For example, thinking that you will fail a test doesn’t
          mean you will actually fail. Certain types or patterns of thoughts
          tend to trap us in anxiety. These patterns, called Thinking Traps, are
          unfair or overly negative ways of seeing things. Thinking Traps
          prevent us from seeing ourselves, others, and the world, in a balanced
          and realistic way. Explore some of the common Thinking Traps below and consider
          which of them may be contributing to your own anxiety.{" "}
        </Text>
      </StaticPaper2>
      <StaticPaper elevation={10}>
        <div className={classes.root}>{items}</div>
      </StaticPaper>
    </main>
  );
}
