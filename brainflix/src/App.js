import { Component } from "react";
import "./App.scss";
import "./assets/Font/AvenirNextLTPro-Bold.otf";
import Header from "./components/Header/header";

import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import Video from "./components/VideoList/video";
import Upload from "./pages/Upload/Upload";

class App extends Component {
  render() {
    // console.log(numberComments);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/video" component={Video} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </div>
    );
  }
}

export default App;
