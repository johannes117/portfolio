import React from 'react'
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import project1 from "../applewatch1.jpg"
import project2 from "../images/playground-07-desktop.jpg"
import project3 from "../images/comingsoon.jpg"
import PageFooter from './PageFooter'


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: "#222",
   
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    
  },
  cardContent: {
    flexGrow: 1,
  },
  
  gridcontainer:{
    maxWidth: "100%",
    background: "#222"
  }, 


}));

const cards = [
  {
    listImage: project1,
    listText: "Aerabyte Fitness App", 
    listHeading: "Aerabyte Fitness App", 
    listContent: "Technologies Used: Swift, Firebase, WatchKit, HealthKit, Git", 
    listLink: "https://aerabyte.com",
    listLink2: "https://github.com/johannes117/AerabyteFitnessTracker"
  
},
{
  listImage: project2,
  listText: "Portfolio Website", 
  listHeading: "React Portfolio Website", 
  listContent: "Technologies Used: React, JavaScript, HTML, CSS, Git, Github", 
  listLink: "https://johannesduplessis.tech",
  listLink2: "https://github.com/johannes117/portfolio"

},
{
  listImage: project3,
  listText: "Coming Soon", 
  listHeading: "More Projects coming soon...", 
  listContent: "Check back soon for more projects!", 
  listLink: "https://johannes117.github.io/portfolio/",
  listLink2: "https://github.com/johannes117"

},
];



export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar/>
      <main >
        {/* Hero unit */}
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
            <Typography component="h1" variant="h1" align="center" style={{color: "#38AECC"}} gutterBottom>
             My Projects
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here is where I display all of the projects that I am currently working on or have previously worked on. 
              Feel free to have a browse, and checkout each project's Github repository!
            </Typography>
            
          </Container>
          </div>
         <Container className={classes.gridcontainer}>
        <Container className={classes.cardGrid} >
          {/* End hero unit */}
          <Grid container spacing={4} >
            {cards.map((list, card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    height= "140"
                    image= {list.listImage}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {list.listHeading}
                    </Typography>
                    <Typography>
                      {list.listContent}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" component={Link} href={list.listLink} target="_blank">
                      Website
                    </Button>
                    <Button size="small" color="primary" component={Link} href={list.listLink2} target="_blank">
                      Github
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Container>
        
      </main>
      <PageFooter/>
    </React.Fragment>
  );
}

