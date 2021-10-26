import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

const Home = lazy(() => import("../pages/Home"));
const SignIn = lazy(() => import("../pages/login"));
const SignUp = lazy(() => import("../pages/register"));
const EditProfile = lazy(() => import("../pages/editProfile"));
const ManageServices = lazy(() => import("../pages/ManageServices"));
const SocialProfile = lazy(() => import("../pages/socialProfile"));
const ServiceDetails = lazy(() => import("../pages/serviceDetails"));
const SolicitedServices = lazy(() => import("../pages/solicitedServices"));
const HiredServices = lazy(() => import("../pages/HiredServices"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/editProfile" component={EditProfile} />
          <Route path="/manageservices" component={ManageServices} />
          <Route path="/servicedetails" component={ServiceDetails} />
          <Route path="/myAccount" component={SocialProfile} />
          <Route path="/profile" component={SocialProfile} />
          <Route path="/serviceDetails" component={ServiceDetails} />
          <Route path="/solicitedServices" component={SolicitedServices} />
          <Route path="/hiredServices" component={HiredServices} />
          <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
