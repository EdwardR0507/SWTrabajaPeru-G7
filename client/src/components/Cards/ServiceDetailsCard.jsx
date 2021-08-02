/*Importamos las librerias principales*/
import React from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Rating from '@material-ui/lab/Rating';
import theme from "../../themes/themes";
<<<<<<< Updated upstream
import { Divider, Grid, Box, IconButton, Typography, Container} from "@material-ui/core";
=======
import { Divider, Grid, Box, IconButton} from "@material-ui/core";
>>>>>>> Stashed changes
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
/*Declaramos los estilos que se van a usar por cada componente*/
/*Declaramos el estilo del botón*/ 

const StyledCardContainer = withStyles({
  root: {
    margin: "0 10px",
    display: "flex",
  },
})(Container);

const StyledIconButton = withStyles({
  root: {
    height: "50px",
    margin: "auto 0",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
})(IconButton);
/*Declaramos el estilo del card*/ 

const StyledCard = withStyles({
  root: {
    width: "90% ",
    margin: "20px auto",
  },
})(Card);
<<<<<<< Updated upstream
/*Declaramos el estilo del card media*/ 
=======

/*Declaramos el estilo del card media*/
>>>>>>> Stashed changes
const StyledCardMedia = withStyles({
  root: {
    height: "200",
    paddingTop: "100%",
    component:"img",
  },
})(CardMedia);
<<<<<<< Updated upstream
/*Declaramos el estilo de la letra*/ 
=======

/*Declaramos el estilo de la letra*/
>>>>>>> Stashed changes
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
/*Funcion del tab panel para que  se desplace*/ 
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
/*Declaramos la función principal*/ 
const ServiceDetailsCard = () => {
  const [valuestar] = React.useState(2);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
/*Declaramos lo que nos va a retornar la funcion*/ 
  return (
    <StyledCard>
      {/*Cambiar los datos por informaciónde la bd*/}
<<<<<<< Updated upstream
      <StyledCardContainer>
          <Grid item  sm={8}>
            <CardHeader title="TÍTULO DEL SERVICIO" />
          </Grid>
          <Grid item  sm={4} alignItems='flex-end' justifyContent='space-evenly'>
            <Box mb={2}>
            <StyledBody3 >
            S/. 120.00
            </StyledBody3>
            </Box>
          </Grid>        
      </StyledCardContainer>
      {/*declaramos sivider para dal estilo al borde*/}
      <Divider /><Divider />
      <Grid container spacing={12} alignItems='flex-end' justifyContent='center' >
          <Grid item xs={12}  sm={9}  alignItems='flex-end' >
                <Box ml={1}>
                 <Rating name="read-only" value={valuestar} readOnly />                 
                </Box>
          </Grid>
          <Grid item xs={12}  sm={3}  alignItems='flex-end'>
                <Box mt={1}>
                <PrimaryButton
                  variant="contained"
                  color="primary"
                  name="+SOLICITAR"
                ></PrimaryButton>
                </Box>
          </Grid>
      </Grid>  
      <Grid container spacing={12} justifyContent="center" alignItems="center" >
          <Grid item xs={3}  sm={2}  justifyContent='flex-end' >
             <StyledIconButton>
             <NavigateBeforeIcon />  
             </StyledIconButton>
          </Grid>
          <Grid item xs={6}  sm={8}  justifyContent="center" alignItems="center" >
             <StyledCardMedia image="../../assets/CardTest.jpeg" />
          </Grid>
          <Grid item xs={3}  sm={2}  justifyContent='flex-start' >
             <StyledIconButton>
              <NavigateNextIcon />              
             </StyledIconButton>
          </Grid>                    
      </Grid>
      <Grid container spacing={12} justifyContent='center'>
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
=======
      <Grid
        container
        spacing={12}
        alignItems="flex-end"
        justifyContent="center"
      >
        <Grid item xs={12} sm={8}>
          <CardHeader title="TÍTULO DEL SERVICIO" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}>
          <Box mb={2}>
            <StyledBody3>S/. 120.00</StyledBody3>
          </Box>
        </Grid>
      </Grid>
      {/*declaramos sivider para dal estilo al borde*/}
      <Divider />
      <Divider />
      <Grid
        container
        spacing={12}
        alignItems="flex-end"
        justifyContent="center"
      >
        <Grid item xs={12} sm={8} >
          <Box ml={2}>
            <Rating name="read-only" value={valuestar} readOnly />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box mt={1} mr={2}>
            <PrimaryButton
              variant="contained"
              color="primary"
              name="+SOLICITAR"
            ></PrimaryButton>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={12}
        alignItems="center">
        <Grid item xs={3} sm={2}>
          <Box ml={4}>
          <StyledIconButton >
            <NavigateBeforeIcon />
          </StyledIconButton>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sm={8}>
          <StyledCardMedia image="../../assets/Carpintera2.jpg"/>
        </Grid>
        <Grid item xs={3} sm={2} >       
          <StyledIconButton>
            <NavigateNextIcon />
          </StyledIconButton>
        </Grid>
      </Grid>
      <Grid container spacing={12} justifyContent="center">
        <Box sx={{ bgcolor: "background.paper", width: 650 }}>
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
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Box mx={2} my={2}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              culpa maxime mollitia velit sunt, rem sint, nam iusto placeat
              ratione quae omnis qui? Veritatis fugit maxime sed repellendus.
              Quibusdam, quis!
              </Box>

            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Box mx={2} my={2}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              culpa maxime mollitia velit sunt, rem sint, nam iusto placeat
              ratione quae omnis qui? Veritatis fugit maxime sed repellendus.
              Quibusdam, quis!
              </Box>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Grid>
>>>>>>> Stashed changes
    </StyledCard>
  );
};

export default ServiceDetailsCard;
