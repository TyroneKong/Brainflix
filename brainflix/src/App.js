import { Component } from "react";
import "./App.scss";
import "./assets/Font/AvenirNextLTPro-Bold.otf";
import Header from "./components/Header/header";
import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import Video from "./components/VideoList/video";
import Upload from "./pages/Upload/Upload";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    // console.log(numberComments);
    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/video/:id" component={Home} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
