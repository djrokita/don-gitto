import React, { Component } from "react";

import Layout from "../components/layout";
import { fetchOrganizations, fetchMembers } from "../api/actions";

export default class LayoutContainer extends Component {
  state = {
    input: "adobe",
    organizations: {},
    currentLogin: "",
    events: {}
  };

  submitHandler = async () => {
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
  };

  inputHandler = async ({ target: { value } }) => {
    this.setState(state => ({ input: value }));
  };

  eventsHandler = (user, event) => {
    const events = { ...this.state.events, [user]: event };
    this.setState(state => ({ events }));
  };

  render() {
    const { input, currentLogin, organizations, events } = this.state;

    return (
      <Layout
        inputHandler={this.inputHandler}
        inputValue={input}
        submitHandler={this.submitHandler}
        members={organizations[currentLogin] || []}
        eventsHandler={this.eventsHandler}
        events={events}
      >
        Lorem
      </Layout>
    );
  }
}
