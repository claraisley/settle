import React from "react";

import personalizeText from "./HelperFunction"
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card} from "@material-ui/core";

// styling for later: https://stackoverflow.com/questions/36759985/how-to-style-material-uis-tooltip/54606987#54606987

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

// const DialogTitle = withStyles(styles)(props => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// export default function CustomizedDialogs() {



//   return (
//     <div>
//       <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//         <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
//           Modal title
//         </DialogTitle>
//         <DialogContent dividers>
//           <Typography gutterBottom>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </Typography>
//           <Typography gutterBottom>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </Typography>
//           <Typography gutterBottom>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={props.startNextQuestion} color="primary">
//             Save changes
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }


const useStyles = makeStyles(theme => ({
  customWidth: {
    maxWidth: 500,
  }
}));

// const ButtonDiv = styled.div`
//   justify-content: center;
//   text-align: center;
// `;
const CardFollowup = styled(Card)`
width: 35%;
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
  padding: 1em;
  background-color: #353C52;


`;
const PaperFollowUp = styled(Paper)`
  padding-top: 7em;
  padding-bottom: 7em;
  background-color: #353C52;
  text-align: center; 
   justify-content: center;
`;

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
    <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
      <main className="followup">
        <PaperFollowUp elevation={10}>
        <p>{personalizeText(props.interests, props.followup[0] ?  props.followup[0].text : '')}</p>
        <CardFollowup>
        <Tooltip TransitionComponent={Zoom} title={<Tooltiptip>{props.thinkingTrap.definition}</Tooltiptip>} classes={{ tooltip: classes.customWidth }} arrow>
          <TooltipText>Related thinking trap: {props.thinkingTrap.name}<sup>[?]</sup></TooltipText>
        </Tooltip>
        </CardFollowup>
        <Button autoFocus onClick={props.nextQuestion} color="primary">
           Next Question      
          </Button>
        </PaperFollowUp>
      </main>
    </Dialog>
  )
}
