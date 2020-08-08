import React, { Component } from "react";
import Navigation from "../../components/navigation";
import Header from "../../components/header";
import SignIn from "../../components/registeration/index"
import About from "../../components/about";
import Team from "../../components/Team";
import Contact from "../../components/contact";
import JsonData from "../../data/data.json";

export class LandingPage extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }
  componentDidMount() {
    this.getlandingPageData();
  }
  render() {
    return (
      <div className="LandingPage">
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <SignIn data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    );
  }
}

export default LandingPage;
