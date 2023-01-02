import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListTodosComponent from "./components/ListTodosComponent";
import HeaderComponent from "./components/HeaderComponent";
import CreateTodoComponent from "./components/CreateTodoComponent";
import UpdateTodoComponent from "./components/UpdateTodoComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="" container>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListTodosComponent}></Route>
              <Route path="/todos" component={ListTodosComponent}></Route>
              <Route path="/add-todo" component={CreateTodoComponent}></Route>
              <Route path="/update-todo/:id" component={UpdateTodoComponent}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
