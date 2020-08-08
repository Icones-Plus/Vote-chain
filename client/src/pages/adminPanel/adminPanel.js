import React, { Component } from "react";
import NavAdmin from "../../components/admin/admin";
import AddCandidate from "../../components/admin/addCandidate";
class AdminPanel extends Component {
  render() {
    return (
      <div className="AdminPanel">
        <NavAdmin />

        <AddCandidate />
      </div>
    );
  }
}


export default AdminPanel;
