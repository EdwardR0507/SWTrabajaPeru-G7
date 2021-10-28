import React, { useState } from "react";
import { useHistory } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import theme from "../../themes/themes";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import GlobalEnv from "../../GlobalEnv";

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

//Estilo de componente Autocomplete
const StyledAutocomplete = withStyles({
  root: {
    width: "100%",
    // paddingBottom: "2.4em",
    marginTop: "16px",
  },
})(Autocomplete);

const SearchField = (props) => {
  const [searched, setSearched] = useState([]);
  const history = useHistory();

  const handleChange = (evt) => {
    axios
      .post(
        `${GlobalEnv.host}/user-auth`,
        {
          command: "SEARCH",
          transaction: evt.target.value,
        },
        {
          headers: {
            authorization: `Bearer ${props.token}`,
          },
        }
      )
      .then((res) => {
        console.log("res data search: ", res.data.resultado);
        setSearched(res.data.resultado);
      });
  };

  const redirect = (evt, value) => {
    evt.preventDefault();
    if (value) {
      const email = value.split("-")[1];
      console.log("value: ", value);
      let elementFound = searched.find((el) => el.extra === email);
      if (elementFound.type === "user") {
        history.push({
          pathname: "/profile",
          search: `email=${elementFound.extra}`,
          state: {
            token: props.token,
            us_id: elementFound["us_id"],
          },
        });
      } else if (elementFound.type === "service") {
        const servicio = value.split("-")[0];
        const usuario = value.split("-")[1];
        elementFound = searched.find(
          (el) => el.nombre === servicio && el.extra === usuario
        );
        console.log("Element found: ", elementFound);
        history.push({
          pathname: "/serviceDetails",
          search: `user=${elementFound["us_id"]}&?service=${elementFound["id_alt"]}`,
          state: {
            token: props.token,
            us_id: elementFound["us_id"],
            cat_id: elementFound["id_alt"],
          },
        });
      }
    }
  };

  return (
    <StyledSearchField>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <StyledAutocomplete
        /*Mostrará info de service y user */
        options={searched.map((option) => `${option.nombre}-${option.extra}`)}
        onChange={redirect}
        renderInput={(params) => (
          <TextField {...params} width="577px" onChange={handleChange} />
        )}
      />
    </StyledSearchField>
  );
};

export default SearchField;
