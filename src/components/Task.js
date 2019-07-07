import React from 'react';

class Task extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        task: "Basic Layout"
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <div style={{display: 'inline-block'}}>
            <h6>
            InProgress Task : {this.state.task}
            </h6>
        </div>
      );
    }
  } 

export default Task;