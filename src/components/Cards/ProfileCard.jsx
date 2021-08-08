/*Importamos las librerias principales*/
import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  CardContent,
} from "@material-ui/core/";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";
/*Declaramos la función principal*/
export default function ProfileCard(props) {
  /*Declaramos lo que nos va a retornar la funcion*/

  return props.user ? (
    <Card>
      <Box
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              style={{ width: 150, height: 150, borderRadius: 75 }}
            ></Avatar>
          }
        />
      </Box>

      <CardHeader
        title={props.user.us_nombres}
        subheader="Especialista"
        style={{ textAlign: "center" }}
      />
      <CardContent>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneAndroidIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Teléfono / Celular"
            secondary={props.user.us_celular}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Correo electrónico"
            secondary={props.user.us_correo}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <RoomIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Ubicación"
            secondary={`${props.user.us_departamento}/${props.user.us_provincia}/${props.user.us_distrito}`}
          />
        </ListItem>
      </CardContent>
    </Card>
  ) : (
    <div>Cargando...</div>
  );
}
