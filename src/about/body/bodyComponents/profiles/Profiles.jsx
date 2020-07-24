import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import hamada from './hamadaa.png';
import ramez from './ramez.png';
import alisio from './alisio.png';
import tamim from './tamim.png';
import yasser from './yasser.png';
import './profiles.css'
import './responsiveProfiles.css'




const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '300px',
    height: '140px'


  },
  details: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    width: '50%',
    backgroundColor: '#2FAB99',
    color: "white",
    fontWeight: "Bold",

  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '180px',
    display: 'flex',
    justifyContent: 'center'
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(-1),
    marginBottom: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

}));

const Profiles = () => {

  const classes = useStyles();



  return (
    <div className='mainProfile'>




      <div className='row1'>
        <Card className={classes.card}>

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography>
                <span className="team"> Ramez Alsbai</span>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Front-end
          </Typography>
            </CardContent>

            <div className={classes.icons}>
              <LinkedInIcon></LinkedInIcon>
              <FacebookIcon></FacebookIcon>
              <TwitterIcon></TwitterIcon>
              <GitHubIcon></GitHubIcon>
            </div>
          </div>

          <CardMedia
            className={classes.cover}
            image={ramez}
            title="me"
          />
        </Card>





        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography>
                <span className="team"> Ahmad Ghanem</span>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Full-stack
          </Typography>
            </CardContent>

            <div className={classes.icons}>
              <LinkedInIcon></LinkedInIcon>
              <FacebookIcon></FacebookIcon>
              <TwitterIcon></TwitterIcon>
              <GitHubIcon></GitHubIcon>
            </div>
          </div>

          <CardMedia
            className={classes.cover}
            image={hamada}
            title="me"
          />
        </Card>
      </div>



      <div className='row2'>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography>
                <span className="team">Tamim Abo Tafesh</span>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
              Front-end
          </Typography>
            </CardContent>

            <div className={classes.icons}>
              <LinkedInIcon></LinkedInIcon>
              <FacebookIcon></FacebookIcon>
              <TwitterIcon></TwitterIcon>
              <GitHubIcon></GitHubIcon>
            </div>
          </div>

          <CardMedia
            className={classes.cover}
            image={tamim}
            title="me"
          />
        </Card>
      </div>








      <div className='row3'>

        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography>
                <span className="team">Yaser Alrifai</span>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Back-end
          </Typography>
            </CardContent>

            <div className={classes.icons}>
              <LinkedInIcon></LinkedInIcon>
              <FacebookIcon></FacebookIcon>
              <TwitterIcon></TwitterIcon>
              <GitHubIcon></GitHubIcon>
            </div>
          </div>

          <CardMedia
            className={classes.cover}
            image={yasser}
            title="me"
          />
        </Card>


        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography>
                <span className="team">Alisio Delgado</span>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
              Front-end
          </Typography>
            </CardContent>

            <div className={classes.icons}>
              <LinkedInIcon></LinkedInIcon>
              <FacebookIcon></FacebookIcon>
              <TwitterIcon></TwitterIcon>
              <GitHubIcon></GitHubIcon>
            </div>
          </div>

          <CardMedia
            className={classes.cover}
            image={alisio}
            title="me"
          />
        </Card>



      </div>




    </div>




  )
};

export default Profiles