<<<<<<< Updated upstream
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import theme from '../../themes/themes';
=======
//Importacion de Librerias
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import theme from "../../themes/themes";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
>>>>>>> Stashed changes

//
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

/*
const StyledInputBase = withStyles({
<<<<<<< Updated upstream
    root: {
        width: '100%'
    }
})(InputBase)
=======
  root: {
    width: "100%",
  },
})(InputBase);
*/
>>>>>>> Stashed changes

//Estilo de componente Autocomplete
const StyledAutocomplete = withStyles({
  root: {
    width: "100%",
    // paddingBottom: "2.4em",
    marginTop: "16px",
  },
})(Autocomplete);


const Prueba1 = [
  { Name: 'Gianela Malqui', Servicio: "Secretaria" },
  { Name: 'Gianela Malqui', Servicio: "Secretaria" },
  { Name: 'Gianela Malqui', Servicio: "Secretaria" },
];

//
const SearchField = (props) => {
<<<<<<< Updated upstream
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

=======
  return (
    <StyledSearchField>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <StyledAutocomplete

        /*Mostrará info de service y user */
        options={Prueba1.map((option) => option.Name)}

        renderInput={(params) => (
          <TextField {...params} width="577px"
          />
        )}
      />
    </StyledSearchField>
  );
};
//Exportacion de elemento SearchField
>>>>>>> Stashed changes
export default SearchField;