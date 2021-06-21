import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Avatar from '@material-ui/core/Avatar';
import theme from '../../themes/themes';

const StyledCard = withStyles({
    root:{
        width: '25%',
        margin: '20px auto' 
    }
})(Card);

const StyledCardMedia = withStyles({
    root:{
        height: '0',
        paddingTop: '41%'
    }
})(CardMedia);

const StyledCardActions = withStyles({
    root:{
        display: 'flex',
        justifyContent: 'space-between'
    }
})(CardActions);

const StyledH2 = withStyles({
    root:{
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '23px',
        letterSpacing: '-0.02em'
    }
})(Typography);

const StyledButton = withStyles({
    root:{
        color: theme.palette.primary.main
    }
})(Button);

const StyledBody2 = withStyles({
    root:{
        color: '#000000 60 %'
    }
})(Typography);

const StyledCaption = withStyles({
    root:{
        marginRight: '5%',
        color: '#000000 60 %'
    }
})(Typography);

const ServiceCard = () => {
    return(
        <StyledCard>
            {/*Cambiar los datos por informaciónde la bd*/}
            <CardHeader
                avatar={
                    <Avatar></Avatar>
                }
                title="Título del servicio"
                subheader="Juan Alejandro"
                action={
                    <IconButton
                        aria-label="share">
                        <ShareIcon />
                    </IconButton>
                }
                />
            <StyledCardMedia 
                image="src/assets/CardTest.jpeg"
            />
            <CardContent>
                <StyledH2
                    variant="h2">
                    Precio
                </StyledH2>
                <StyledBody2
                    variant="body2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas culpa maxime mollitia velit sunt, rem sint, nam iusto placeat ratione quae omnis qui? Veritatis fugit maxime sed repellendus. Quibusdam, quis!
                </StyledBody2>
            </CardContent>
            <StyledCardActions>
                <StyledButton>
                    Ver Más
                </StyledButton>
                <StyledCaption
                    variant="caption">
                    Fecha
                </StyledCaption>
            </StyledCardActions>
        </StyledCard>
    )
}

export default ServiceCard;