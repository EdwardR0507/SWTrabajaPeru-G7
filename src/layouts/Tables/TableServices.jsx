import { React, useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import DetailsRequestModal from "../../components/Modals/DetailsRequestModal";

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    width: "100%",
    marginBottom: "1rem",
  },
  image: {
    maxWidth: "100%",
    objectFit: "cover",
  },
  containerImage: {
    width: "150px",
  },
});

export default function TableServices({ getToken, serviceData }) {
  const classes = useStyles();
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    console.log("service data");
    console.log(serviceData);
    setDataTable(serviceData);
  }, [serviceData]);
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table
        style={{ width: "100%" }}
        className={classes.table}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Imagen</StyledTableCell>
            <StyledTableCell align="center">Servicio</StyledTableCell>
            <StyledTableCell align="center">Descripción</StyledTableCell>
            <StyledTableCell align="center">Cliente</StyledTableCell>
            <StyledTableCell align="center">
              Calificación del trato del cliente
            </StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">
              Gestión de Solicitud
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <StyledTableRow key={`${row.sol_id}-${row.cat_nombre}`}>
              <StyledTableCell align="center">
                <div className={classes.containerImage}>
                  <img
                    src={
                      "https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg"
                    }
                    className={classes.image}
                    alt={"imagen"}
                  />
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">{row.cat_nombre}</StyledTableCell>
              <StyledTableCell align="center">
                {row.ser_descripcion}
              </StyledTableCell>
              <StyledTableCell align="center">{row.us_nombres}</StyledTableCell>
              <StyledTableCell align="center">
                <Rating
                  name="read-only"
                  value={parseInt(row.us_calificacion)}
                  readOnly
                />
              </StyledTableCell>
              <StyledTableCell align="center">{row.sol_estado}</StyledTableCell>
              <StyledTableCell align="center">
                <DetailsRequestModal
                  solEstado={row.sol_estado}
                  getToken={getToken}
                  serviceData={serviceData}
                  solId={row.sol_id}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
