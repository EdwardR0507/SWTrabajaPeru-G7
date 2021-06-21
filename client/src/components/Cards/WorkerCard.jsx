import React from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Typography from '@material-ui/core/Typography';

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


const WorkerCard = () => {
    return(
    <StyledCard>
        <StyledCardMedia 
            image="src/assets/CardTest.jpeg"
        />
        <CardContent>
            <Typography
                variant="h6">
                Nombre Usuario
            </Typography>
            <Typography
                variant="body2">
                Distrito/Provincia/Ciudad
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton>
                <StarBorderIcon 
                    fontSize="small" style={{padding: 0}}/>
            </IconButton>
            <IconButton>
                <StarBorderIcon 
                    fontSize="small"style={{padding: 0}}/>
            </IconButton>
            <IconButton>
                <StarBorderIcon 
                    fontSize="small"/>
            </IconButton>
            <IconButton>
                <StarBorderIcon 
                    fontSize="small"/>
            </IconButton>
            <IconButton>
                <StarBorderIcon 
                    fontSize="small"/>
            </IconButton>
        </CardActions>
    </StyledCard>
    )
}

export default WorkerCard;