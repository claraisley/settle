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

const StaticPaper = styled(Paper)`
  width: 90%;
  margin: 10px auto;
  background-color: #353c52;
  justify-content: center;
  align-items: center;
  padding: 4%;
`;
const Title = styled.h1`
  text-align: center;
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

export default function Tips(props) {
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
      <StyledDiv>
        <BackButton onClick={() => history.push("/menu")}>
          <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582400198/arrow_xph8bj.svg" />
        </BackButton>
        <Title>Dos and Don'ts of Dealing with Test Anxiety</Title>
        <div></div>
      </StyledDiv>
      <StaticPaper elevation={12}>
        <div className={classes.root}></div>
        {items}
      </StaticPaper>
    </main>
  );
}
