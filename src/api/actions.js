import axios from "axios";

const BASIC_URL = "https://api.github.com/";

export const fetchOrganizations = name => {
  const url = `${BASIC_URL}orgs/${name}`;
  return axios.get(url);
};

export const fetchMembers = org => {
  const url = `${BASIC_URL}orgs/${org}/public_members`;
  return fetch(url).then(res => res.json());
};

export const fetchEvents = user => {
  const url = `${BASIC_URL}users/${user}/events/public`;
  return fetch(url).then(res => res.json());
};
