import { React, useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableServicesRow from "./TableServicesRow";
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

export default function TableServices({ mood, getToken, serviceData }) {
  const classes = useStyles();
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
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
            <StyledTableCell align="center">
              {mood === "CLIENT" ? "Trabajador" : "Cliente"}
            </StyledTableCell>
            <StyledTableCell align="center">
              Calificación del{" "}
              {mood === "CLIENT" ? "servicio" : "trato del cliente"}
            </StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">
              Gestión de Solicitud
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.length !== 0 ? (
            dataTable.map((row) => (
              <TableServicesRow
                key={row.id}
                row={row}
                mood={mood}
                getToken={getToken}
                serviceData={serviceData}
              />
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell align="center" colSpan={8}>
                No tiene solicitudes
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
