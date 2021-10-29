import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import DetailsRequestModal from "../../components/Modals/DetailsRequestModal";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  tableCell: {
    fontSize: 14,
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
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
}));

const TableServicesRow = ({ row, mood, getToken, serviceData }) => {
  const classes = useStyles();

  const [solEstado, setSolEstado] = useState(row.sol_estado);
  const [rating, setRating] = useState(
    parseInt(mood === "CLIENT" ? row.ser_calificacion : row.us_calificacion)
  );

  return (
    <TableRow className={classes.row} key={`${row.sol_id}-${row.cat_nombre}`}>
      <TableCell className={classes.tableCell} align="center">
        <div className={classes.containerImage}>
          <img src={row.ser_imagen} className={classes.image} alt={"imagen"} />
        </div>
      </TableCell>
      <TableCell className={classes.tableCell} align="center">
        {row.cat_nombre}
      </TableCell>
      <TableCell className={classes.tableCell} align="center">
        {row.ser_descripcion}
      </TableCell>
      <TableCell className={classes.tableCell} align="center">
        {row.us_nombres}
      </TableCell>
      <TableCell className={classes.tableCell} align="center">
        <Rating name="read-only" value={rating} readOnly />
      </TableCell>
      <TableCell className={classes.tableCell} align="center">
        {solEstado}
      </TableCell>
      <TableCell className={classes.tableCell} align="center">
        <DetailsRequestModal
          solId={row.sol_id}
          solEstado={solEstado}
          setRating={setRating}
          setSolEstado={setSolEstado}
          getToken={getToken}
          serviceData={serviceData}
          mood={mood}
        />
      </TableCell>
    </TableRow>
  );
};

export default TableServicesRow;
