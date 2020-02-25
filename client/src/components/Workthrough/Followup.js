import React, { useState, useEffect } from "react";
import personalizeText from "./HelperFunction";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// styling for later for tooltip: https://stackoverflow.com/questions/36759985/how-to-style-material-uis-tooltip/54606987#54606987

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#353c52",
    textAlign: "center"
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: "#353c52"
  }
}))(MuiDialogActions);

const useStyles = makeStyles(theme => ({
  customWidth: {
    maxWidth: 500
  }
}));

const Text = styled(Typography)`
  margin: 2em;
  font-size: 1rem;
`;
const Div = styled.div`
  justify-content: center;
  text-align: center;
  background-color: #353c52;
`;
const CardTooltip = styled(Card)`
  margin-left: 25%;
  margin-right: 25%;
  padding: 1em;
  background-color: #353c52;
`;
const TooltipText = styled.span`
  font-style: italic;
  font-weight: 600;
  font-size: 0.875rem;
`;
const Tooltiptip = styled.span`
  font-size: 1rem;
  line-height: 150%;
  display: inline-block;
  margin: 10px;
`;

export default function Followup(props) {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) setIsMobile(true);
  }, []);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Div>
      <Dialog
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogContent dividers>
          <Text>
            {personalizeText(
              props.interests,
              props.followup[0] ? props.followup[0].text : ""
            )}
          </Text>
          <CardTooltip elevation={7}>
            {isMobile ? (
              <Tooltip
                TransitionComponent={Zoom}
                title={<Tooltiptip>{props.thinkingTrap.definition}</Tooltiptip>}
                classes={{ tooltip: classes.customWidth }}
                arrow
                onClose={handleTooltipClose}
                open={open}
              >
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <TooltipText onClick={handleTooltipOpen}>
                    Related thinking trap: {props.thinkingTrap.name}
                    <sup>[?]</sup>
                  </TooltipText>
                </ClickAwayListener>
              </Tooltip>
            ) : (
              <Tooltip
                TransitionComponent={Zoom}
                title={<Tooltiptip>{props.thinkingTrap.definition}</Tooltiptip>}
                classes={{ tooltip: classes.customWidth }}
                arrow
              >
                <TooltipText>
                  Related thinking trap: {props.thinkingTrap.name}
                  <sup>[?]</sup>
                </TooltipText>
              </Tooltip>
            )}
          </CardTooltip>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.nextQuestion} color="primary">
            Next Question
          </Button>
        </DialogActions>
      </Dialog>
    </Div>
  );
}
