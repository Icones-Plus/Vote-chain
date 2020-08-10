import React, {Component} from "react";
import NavAdmin from "../../components/admin/admin";
import AddCandidate from "../../components/admin/addCandidate";
import Feedback from "../../components/admin/feedback";

class AdminPanel extends Component {
  state = {
    toggle: "cand",
  };
  handleToggle(val) {
    this.setState({
      toggle: val,
    });
  }
  render() {
    return (
      <div className="AdminPanel">
        <NavAdmin handleToggle={this.handleToggle.bind(this)} />
        {this.state.toggle === "cand" ? <AddCandidate /> : <Feedback />}
      </div>
    );
  }
}

export default AdminPanel;
