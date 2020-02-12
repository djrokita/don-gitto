import React, { Component } from "react";

import Layout from "../components/layout";
import { fetchOrganizations, fetchMembers } from "../api/actions";

export default class LayoutContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      organizations: {},
      members: []
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  async submitHandler() {
    const { input, organizations } = this.state;

    if (organizations[input]) {
      console.log("organizations", organizations);
      return this.setState(state => ({ members: organizations[input] }));
    }

    const { login } = await fetchOrganizations(input);

    fetchMembers(login).then(members => {
      const organizations = { ...this.state.organizations, [login]: members };
      this.setState(state => ({
        organizations,
        members
      }));
      this.setState(state => ({
        members
      }));
    });
  }

  inputHandler({ target: { value } }) {
    this.setState(state => ({ input: value }));
  }

  render() {
    const { input, members } = this.state;
    return (
      <Layout
        inputHandler={this.inputHandler}
        inputValue={input}
        submitHandler={this.submitHandler}
        members={members}
      >
        Lorem
      </Layout>
    );
  }
}
