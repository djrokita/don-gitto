import React, { Component } from "react";

import Layout from "../components/layout";
import { fetchOrganizations, fetchMembers } from "../api/actions";
import { ERROR_NOT_FOUND, ERROR_NO_RESPONSE } from "../api/constans";

export default class LayoutContainer extends Component {
  state = {
    input: "adobe",
    organizations: {},
    currentLogin: "",
    events: {},
    error: ""
  };

  submitHandler = async () => {
    const { input, organizations } = this.state;
    let login;
    let members;

    this.setState({ error: "" });

    if (organizations[input]) {
      return this.setState(state => ({ currentLogin: input }));
    }

    try {
      login = await fetchOrganizations(input);
      this.setState(state => ({ currentLogin: login }));
    } catch ({ response: { statusText } }) {
      if (statusText === ERROR_NOT_FOUND) {
        return this.setState(state => ({
          error: "Sorry, cannot find your organization"
        }));
      }
      this.setState(state => ({
        error: "Sorry, something went wrong"
      }));
    }

    if (!organizations[login]) {
      try {
        members = await fetchMembers(login);
        const organizations = {
          ...this.state.organizations,
          [login]: members
        };
        this.setState(state => ({
          organizations
        }));
      } catch ({ response: { statusText } }) {
        if (statusText === ERROR_NOT_FOUND) {
          return this.setState(state => ({
            error: "Sorry, cannot find organization's members"
          }));
        }
        this.setState(state => ({
          error: "Sorry, something went wrong"
        }));
      }
    }

    if (!members.length) {
      this.setState({ error: "Public members are not available" });
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
    const { input, currentLogin, organizations, events, error } = this.state;

    return (
      <Layout
        inputHandler={this.inputHandler}
        inputValue={input}
        submitHandler={this.submitHandler}
        members={organizations[currentLogin] || []}
        eventsHandler={this.eventsHandler}
        events={events}
        error={error}
      >
        Lorem
      </Layout>
    );
  }
}
