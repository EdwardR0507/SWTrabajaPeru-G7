import React from "react";
import { withStyles, makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Rating from "@material-ui/lab/Rating";
/*Declarando los estilos de la tabla*/

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

/*Función para crear la data de la tabla*/
function createData(item, image, service, description, client, calification, gestion) {
  return { item, image, service, description, client, calification, gestion };
}
/*Columnas de la tabla*/
const rows = [
  createData("1", "https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg", "Pintura", "Servicio de Pintura","Kori Antunez", 4.0, "+ DETALLE"),
  createData("1", "https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg", "Pintura", "Servicio de Pintura","Kori Antunez", 4.0, "+ DETALLE"),
  createData("1", "https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg", "Pintura", "Servicio de Pintura","Kori Antunez", 4.0, "+ DETALLE"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table style={{ width: 1000}} className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="left">Imagen</StyledTableCell>
            <StyledTableCell align="left">Servicio</StyledTableCell>
            <StyledTableCell align="left">Descripción</StyledTableCell>
            <StyledTableCell align="left">Cliente</StyledTableCell>
            <StyledTableCell align="left">Calificación</StyledTableCell>
            <StyledTableCell align="left">Gestión de Solicitud</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.item}>
              <StyledTableCell component="th" scope="row">
                {row.item}
              </StyledTableCell>
              <StyledTableCell align="left"><img src={row.image} style={{width : '100px', height : '100px'}}/></StyledTableCell>
              <StyledTableCell align="left">{row.service}</StyledTableCell>
              <StyledTableCell align="left">{row.description}</StyledTableCell>
              <StyledTableCell align="left">{row.client}</StyledTableCell>
              <StyledTableCell align="left"><Rating name="read-only" value={row.calification}/> 
              </StyledTableCell>
              <StyledTableCell align="left"><SecondaryButton name={row.gestion}></SecondaryButton></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}