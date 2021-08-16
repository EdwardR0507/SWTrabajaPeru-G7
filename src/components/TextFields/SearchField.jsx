import React, { useState } from "react";
import { useHistory } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import theme from "../../themes/themes";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import GlobalEnv from '../../GlobalEnv';

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

const SearchField = (props) => {
  const [searched, setSearched] = useState([])
  const history = useHistory();

  const handleChange = (evt) => {
    axios
      .post(`${GlobalEnv.host}/user-auth`, {
        command: "SEARCH",
        transaction: evt.target.value
      }, {
        headers: {
          authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) => {
        console.log(res.data.resultado)
        setSearched(res.data.resultado)
      })
  }

  const redirect = (evt, value) => {
    evt.preventDefault();
    if (value.includes("user")) {
      history.push({
        pathname: "/profile",
        search: `email=${value.extra}`,
        state: { token: props.token,
                 idUser: value["id user"] }
      })
    }
  }

  return (
    <StyledSearchField>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <StyledAutocomplete

        /*Mostrará info de service y user */
        options={searched.map((option) => `${option.nombre} - ${option.type}`)}
        onChange={redirect}
        renderInput={(params) => (
          <TextField {...params} width="577px" onChange={handleChange}
          />
        )}
      />
    </StyledSearchField>
  );
};

export default SearchField;
