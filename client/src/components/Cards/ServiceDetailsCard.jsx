import React from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Rating from '@material-ui/lab/Rating';
import IconButton from "@material-ui/core/IconButton";
import theme from "../../themes/themes";
import { Divider, Grid, Box } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const StyledCard = withStyles({
  root: {
    width: "90% ",
    margin: "20px auto",
  },
})(Card);

const StyledCardMedia = withStyles({
  root: {
    height: "0",
    paddingTop: "41%",
  },
})(CardMedia);

const StyledCardActions = withStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
})(CardActions);

const StyledButton = withStyles({
  root: {
    color: theme.palette.primary.main,
  },
})(Button);

const StyledBody2 = withStyles({
  root: {
    color: theme.cardLetter.primary.main,
  },
})(Typography);

const StyledCaption = withStyles({
  root: {
    marginRight: "5%",
    color: theme.cardLetter.primary.main,
  },
})(Typography);

const StyledBody3 = withStyles({
  root: {
    color:theme.palette.primary.main,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    justifyContent:'space-around'
  },
})(Typography);

/*Configuración componentes */
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ServiceDetailsCard = () => {
  const [valuestar, setValuestart] = React.useState(2);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <StyledCard>
      {/*Cambiar los datos por informaciónde la bd*/}
      <Grid container spacing={12} sm={12} alignItems='flex-end' justifyContent='center'>
          <Grid container xs={12}  sm={8} spacing={12}>
          <CardHeader title="TÍTULO DEL SERVICIO" />
          </Grid>
          <Grid container xs={12}  sm={4} spacing={12} alignItems='flex-end' justifyContent='space-evenly'>
          <Box mb={2}>
          <StyledBody3 >
          S/. 120.00
          </StyledBody3>
          </Box>
          </Grid>        
      </Grid>     
      <Divider /><Divider />
      <Grid container spacing={12} sm={12} alignItems='flex-end' justifyContent='center' >
          <Grid container xs={12}  sm={9} spacing={12}  alignItems='flex-end' >
                <Box ml={1}>
                 <Rating name="read-only" value={valuestar} readOnly />                 
                </Box>
          </Grid>
          <Grid container xs={12}  sm={3} marginTop= "10%" alignItems='flex-end'>
                <Box mt={1}>
                <PrimaryButton
                  variant="contained"
                  color="primary"
                  name="+SOLICITAR"
                ></PrimaryButton>
                </Box>
          </Grid>
      </Grid>  
      <Grid container spacing={12} sm={10} justifyContent='center'>
          <Grid container xs={12}  sm={3} spacing={12}  justifyContent='flex-end' >
             <NavigateBeforeIcon />
          </Grid>
          <Grid container xs={12}  sm={6} spacing={12}  justifyContent='center' >
             <StyledCardMedia image="../../assets/CardTest.jpeg" />
          </Grid>
          <Grid container xs={12}  sm={3} spacing={12}  justifyContent='flex-start' >
             <NavigateNextIcon />
          </Grid>                    
      </Grid>
      <Grid container spacing={12} sm={12} justifyContent='center'>
    <Box sx={{ bgcolor: 'background.paper', width: 650}}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Descripción" {...a11yProps(0)} />
          <Tab label="Ubicación" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas culpa
          maxime mollitia velit sunt, rem sint, nam iusto placeat ratione quae
          omnis qui? Veritatis fugit maxime sed repellendus. Quibusdam, quis!
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas culpa
          maxime mollitia velit sunt, rem sint, nam iusto placeat ratione quae
          omnis qui? Veritatis fugit maxime sed repellendus. Quibusdam, quis!
        </TabPanel>
      </SwipeableViews>
    </Box>                  
      </Grid>      
    </StyledCard>
  );
};

export default ServiceDetailsCard;
