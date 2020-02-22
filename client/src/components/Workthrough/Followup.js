import React from "react";
import personalizeText from "./HelperFunction"
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

// styling for later: https://stackoverflow.com/questions/36759985/how-to-style-material-uis-tooltip/54606987#54606987

const useStyles = makeStyles(theme => ({
  customWidth: {
    maxWidth: 500,
  }
}));

const TooltipText = styled.span`
  font-style: italic;
  font-weight: 600;
  font-size: 1rem;
`;

const Tooltiptip = styled.span`
  font-size: 1rem;
  line-height: 150%;
  display: inline-block;
  margin: 10px;
`;

export default function Followup(props) {
  const classes = useStyles();


  return (
    <main className="followup">
      <p>{personalizeText(props.interests, props.followup[0].text)}</p>
      <Tooltip TransitionComponent={Zoom} title={<Tooltiptip>{props.thinkingTrap.definition}</Tooltiptip>} classes={{ tooltip: classes.customWidth }} arrow>
        <TooltipText>Related thinking trap: {props.thinkingTrap.name}<sup>[?]</sup></TooltipText>
      </Tooltip>
    </main>
  )
}
