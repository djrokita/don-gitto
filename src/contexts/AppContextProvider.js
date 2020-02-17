import React, { Component, createContext } from "react";

import Layout from "../components/layout";
import { fetchOrganizations, fetchMembers } from "../api/actions";
import { ERROR_NOT_FOUND } from "../api/constans";

export const AppContext = createContext();

export default class AppContextProvider extends Component {
  state = {
    input: "",
    organizations: {},
    members: {},
    currentLogin: "",
    events: {},
    error: "",
    processing: false,
    page: 1
  };

  fetchMembersHandler = async ({ login, page }) => {
    const processing = false;

    try {
      const membersData = await fetchMembers({ login, page });
      const members = {
        ...this.state.members,
        [login]: membersData
      };

      this.setState(state => ({
        members,
        processing
      }));
      return membersData;
    } catch ({ response: { statusText } }) {
      if (statusText === ERROR_NOT_FOUND) {
        return this.setState(state => ({
          error: "Sorry, cannot find organization's members",
          processing
        }));
      }

      return this.setState(state => ({
        error: "Sorry, something went wrong",
        processing
      }));
    }
  };

  submitHandler = async e => {
    e.preventDefault();
    const { input, members } = this.state;
    console.log("TCL: input", input);
    let login;
    let membersData = [];

    this.setState({ error: "", page: 1 });

    if (members[input]) {
      return this.setState(state => ({ currentLogin: input }));
    }

    this.setState({ processing: true });

    try {
      const organization = await fetchOrganizations(input);
      login = organization.login;
      const organizations = {
        ...this.state.organizations,
        [login]: organization
      };
      this.setState(state => ({
        currentLogin: login,
        organizations,
        input: ""
      }));
    } catch ({ response: { statusText } }) {
      const processing = false;
      if (statusText === ERROR_NOT_FOUND) {
        return this.setState(state => ({
          error: "Sorry, cannot find your organization",
          processing
        }));
      }

      return this.setState(state => ({
        error: "Sorry, something went wrong",
        processing
      }));
    }

    if (!members[login]) {
      membersData = await this.fetchMembersHandler({ login, page: 1 });
    }

    if (!membersData.length) {
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

  paginationHandler = direction => {
    let { page } = this.state;

    if (direction === "next") {
      page += 1;
    } else {
      page -= 1;
    }

    if (page > 0) {
      this.setState(state => ({ page, processing: true }));
      this.fetchMembersHandler({ login: this.state.currentLogin, page });
    }
  };

  render() {
    const {
      submitHandler,
      inputHandler,
      paginationHandler,
      eventsHandler,
      state: { currentLogin, members, events, organizations }
    } = this;

    return (
      <AppContext.Provider
        value={{
          ...this.state,
          submitHandler,
          inputHandler,
          paginationHandler,
          organization: organizations[currentLogin]
        }}
      >
        <Layout
          members={members[currentLogin] || []}
          eventsHandler={eventsHandler}
          events={events}
        ></Layout>
      </AppContext.Provider>
    );
  }
}
