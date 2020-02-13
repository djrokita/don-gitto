import React, { Component } from "react";

import Layout from "../components/layout";
import { fetchOrganizations, fetchMembers } from "../api/actions";

export default class LayoutContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "adobe",
      organizations: {},
      currentLogin: ""
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  async submitHandler() {
    const { input, organizations } = this.state;

    if (organizations[input]) {
      return this.setState(state => ({ currentLogin: input }));
    }

    const { login } = await fetchOrganizations(input);
    this.setState(state => ({ currentLogin: login }));

    if (!organizations[this.state.currentLogin]) {
      fetchMembers(login).then(members => {
        const organizations = { ...this.state.organizations, [login]: members };
        this.setState(state => ({
          organizations
        }));
      });
    }
  }

  inputHandler({ target: { value } }) {
    this.setState(state => ({ input: value }));
  }

  render() {
    const { input, currentLogin, organizations } = this.state;

    return (
      <Layout
        inputHandler={this.inputHandler}
        inputValue={input}
        submitHandler={this.submitHandler}
        members={organizations[currentLogin] || []}
      >
        Lorem
      </Layout>
    );
  }
}
