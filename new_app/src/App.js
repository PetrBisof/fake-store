import { BrowserRouter } from "react-router-dom";
import Router from "./components/core/Router";
import RouteBar from "./components/core/RouteBar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RouteBar />
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
