import React from 'react';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PageFooter from './PageFooter';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image from '../images/javascript-fullstack.jpg';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  gridcontainer:{
    maxWidth: "100%",
    padding: theme.spacing(5),
    background: "#222"
  }, 
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

const tileData = [
  {
    img: image,
    title: 'Mcdonalds',
    year:'2013-16', 
    cols: 2
  }, 
  {
    img: image,
    title: 'Dominos',
    year:'2017', 
    cols: 1
  }, 
  {
    img: image,
    title: 'Viva Leisure',
    year:'2017-Present', 
    cols: 2
  }, 
]

const Resume = () => {
  const classes = useStyles();
return (
  <React.Fragment>
    <CssBaseline/>
      <Navbar/>
         {/* Hero unit */}
          <main>
            <div className={classes.heroContent}>
               <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Resume
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Resume Description
                </Typography>
              </Container>
            </div>
            <div className={classes.gridcontainer}>
             
      <GridList cellHeight={180} className={classes.gridList}>
        
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Year(s): {tile.year}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
          </main>  
      <PageFooter/>
</React.Fragment>
)
}


export default Resume
