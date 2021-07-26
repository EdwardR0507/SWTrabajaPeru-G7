import { React, useState } from "react";
import { useLocation } from "react-router";
import NavBar from "../../layouts/NavBar";
import { Container, Typography, withStyles, Grid} from "@material-ui/core/";
import ServiceDetailsCard from "../../components/Cards/ServiceDetailsCard";
import WorkerDetailsCard from "../../components/Cards/WorkerDetailsCard";

const StyledContainer = withStyles({
  root: {
    marginTop: "0.9em",
    paddingLeft: "9.4em",
    display: "flex",
    alignItems: "center",
  },
})(Container);

const arrObj = [
  {
    id: null,
    name: "",
    description: "",
  },
];

const ServiceDetails = () => {
  const location = useLocation();
  const state = location.state;
  const [data, setData] = useState(arrObj);

  return (
    <>
      <NavBar />
      <StyledContainer>
      <Grid container xs={12}  sm={8} spacing={12}>
         <ServiceDetailsCard />
      </Grid>
      <Grid container xs={12}  sm={4} spacing={12}>
          <WorkerDetailsCard />
      </Grid>
      </StyledContainer>
    </>
  );
};
export default ServiceDetails;
