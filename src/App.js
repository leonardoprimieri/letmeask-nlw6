import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import Room from "./pages/Room";
import GlobalStyle from "./styles/GlobalStyle";

import AuthProvider from "./contexts/AuthContext";
import ReactNotification from "react-notifications-component";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "react-notifications-component/dist/theme.css";
import AdminRoom from "./pages/AdminRoom";
import PrivateRouter from "./utils/PrivateRouter";
function App() {
  return (
    <BrowserRouter>
      <ReactNotification />
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <PrivateRouter path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
