import React, {Component} from "react";
import NavAdmin from "../../components/admin/admin";
import AddCandidate from "../../components/admin/addCandidate";
class AdminPanel extends Component {
  render() {
    return (
      <div className="AdminPanel">
        <NavAdmin  />

        <AddCandidate/>
      </div>
    );
  }
}
class AddCan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             name: "",
             img:"",
             description:""
            };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default AdminPanel;
