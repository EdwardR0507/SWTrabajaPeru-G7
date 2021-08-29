import { React } from "react";
import { Divider, CardHeader, Avatar } from "@material-ui/core/";

const ClientCard = ({ nombres, imagen, servicio }) => {
  return (
    <>
      <CardHeader
        avatar={<Avatar>{imagen}</Avatar>}
        title={nombres}
        subheader={`Quiere solicitar el servicio de ${servicio}`}
      />

      <Divider />
    </>
  );
};
export default ClientCard;
