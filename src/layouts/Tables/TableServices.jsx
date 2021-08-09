import { React, useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Rating from "@material-ui/lab/Rating";
import { height } from "@material-ui/system";

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
function createData(
  item,
  image,
  service,
  description,
  client,
  calification,
  gestion
) {
  return { item, image, service, description, client, calification, gestion };
}
/*Columnas de la tabla*/
const rows = [
  createData(
    "1",
    "https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg",
    "Pintura",
    "Servicio de Pintura",
    "Kori Antunez",
    4.0,
    "+ DETALLE"
  ),
  createData(
    "1",
    "https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg",
    "Pintura",
    "Servicio de Pintura",
    "Kori Antunez",
    4.0,
    "+ DETALLE"
  ),
  createData(
    "1",
    "https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg",
    "Pintura",
    "Servicio de Pintura",
    "Kori Antunez",
    4.0,
    "+ DETALLE"
  ),
];

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

export default function TableServices({ serviceData }) {
  const classes = useStyles();
  const [dataTable, setDataTable] = useState(serviceData);

  useEffect(() => {
    console.log("serviceData");
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
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="center">Imagen</StyledTableCell>
            <StyledTableCell align="center">Servicio</StyledTableCell>
            <StyledTableCell align="center">Descripción</StyledTableCell>
            <StyledTableCell align="center">Cliente</StyledTableCell>
            <StyledTableCell align="center">Calificación</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">
              Gestión de Solicitud
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <StyledTableRow
              key={`${row.cat_id}-${row.cat_nombre}-${row.ser_descripcion}`}
            >
              <StyledTableCell component="th" scope="row">
                {row.cat_id}
              </StyledTableCell>
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
              <StyledTableCell align="center">
                Daniel Cifuentes Michuy
              </StyledTableCell>
              <StyledTableCell align="center">
                <Rating name="read-only" value={row.ser_calificacion} />
              </StyledTableCell>
              <StyledTableCell align="center">Pendiente</StyledTableCell>
              <StyledTableCell align="center">
                <SecondaryButton name="Gestion"></SecondaryButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
