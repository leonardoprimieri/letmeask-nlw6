import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRouter = ({ component: RouteComponent, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? <RouteComponent {...routeProps} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default PrivateRouter;
