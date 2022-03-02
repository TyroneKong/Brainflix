import React from "react";
import axios from "axios";

class testData extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key='5fb42916-1146-4e86-8046-9b41e6cb4c0f'"
      )
      .then((response) => {
        const data = response;
        this.setState({ data });
      });
  }
}

console.log(this.data);
