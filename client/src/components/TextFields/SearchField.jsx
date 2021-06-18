import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import theme from '../../themes/themes';

const StyledSearchField = withStyles({
    root:{
        width: '577px',
        height: '48px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '28px',
        color: theme.palette.secondary.main,
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '1.25px',
        textTransform: 'uppercase',
        display: 'flex',
        alignContent: 'flex-start',
        margin: '20px auto',
        padding: '0 10px'
    }
})(Paper);

const StyledInputBase = withStyles({
    root: {
        width: '100%'
    }
})(InputBase)

const SearchField = (props) => {
    return(
        <StyledSearchField>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <StyledInputBase 
                placeholder={props.placeholder} />
        </StyledSearchField>
    )
};

export default SearchField;