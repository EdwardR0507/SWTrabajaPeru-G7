import { Box, Card, CardHeader, Avatar, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";

export default function ProfileCard() {
  return (
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
                style={{ width: 100, height: 100, borderRadius: 75 }}   
              ></Avatar>
            }
          />
        </Box>

        <CardHeader
          title="Kori Antunez Palomino"
          style={{ textAlign: "center" }}
        />
        <CardContent>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PhoneAndroidIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Teléfono / Celular" secondary="923585728" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Correo electrónico"
              secondary="kori.antunez@gmail.com"
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
              secondary="Lima/Lima/Jesús María"
            />
          </ListItem>          
        </CardContent>
      </Card>
  );
}
