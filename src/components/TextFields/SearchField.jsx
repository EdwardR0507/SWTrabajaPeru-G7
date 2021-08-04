import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import theme from "../../themes/themes";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const StyledSearchField = withStyles({
  root: {
    width: "577px",
    height: "48px",
    background: theme.colorLetter.primary.main,
    boxShadow: theme.boxShadowButton.primary.main,
    borderRadius: "28px",
    color: theme.palette.secondary.main,
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
    display: "flex",
    alignContent: "flex-start",
    margin: "20px auto",
    padding: "0 10px",
  },
})(Paper);

const StyledInputBase = withStyles({
  root: {
    width: "100%",
  },
})(InputBase);

//Estilo de componente Autocomplete
const StyledAutocomplete = withStyles({
  root: {
    width: "100%",
    // paddingBottom: "2.4em",
    marginTop: "16px",
  },
})(Autocomplete);

const Prueba1 = [
  { Name: 'Arian Zambrano', Servicio: "Albañilería" },
  { Name: 'Gianela Malqui', Servicio: "Secretaría" },
  { Name: 'Jose Caicedo', Servicio: "Limpieza" },
];


const SearchField = (props) => {
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

export default SearchField;
