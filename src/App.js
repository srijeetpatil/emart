import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/MainPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { UserDatabase } from "./data/userData";

const store = ConfigureStore();

function App(props) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  useEffect(() => {
    var logged = JSON.parse(localStorage.getItem("logged"));
    if (logged && logged.length != 0) {
      UserDatabase("Users/" + logged + "/firstname/").on(
        "value",
        function (snapshot) {
          setFirstName(snapshot.val());
        }
      );

      UserDatabase("Users/" + logged + "/lastname/").on(
        "value",
        function (snapshot) {
          setLastName(snapshot.val());
        }
      );
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App" style={{ backgroundColor: "#f0edf3" }}>
          <Main firstname={firstname} lastname={lastname} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
