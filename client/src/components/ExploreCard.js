import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    color: theme.palette.text.secondary,
  },
  media: {
    // height: 140,
  },
  cardTitle: {
    color: theme.palette.text.secondary,
  },
  body2: {
    color: theme.palette.text.secondary,
  },
  subheading: {
    color: theme.palette.text.secondary,
  }
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/150"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content} >
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
            Lizard
          </Typography>
          <Typography color='grey[500]' variant={"caption"} className={"MuiTypography--subheading"} component="p" classes={{root: classes.cardText}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
