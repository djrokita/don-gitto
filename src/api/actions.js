import axios from "axios";

const BASIC_URL = "https://api.github.com/";

export const fetchOrganizations = name => {
  const url = `${BASIC_URL}orgs/${name}`;
  return axios.get(url).then(({ data }) => data);
};

export const fetchMembers = ({ login, page }) => {
  const url = `${BASIC_URL}orgs/${login}/public_members`;
  return axios
    .get(url, { params: { page, per_page: 30 } })
    .then(({ data }) => data);
};

export const fetchEvents = user => {
  const url = `${BASIC_URL}users/${user}/events/public`;
  return axios.get(url).then(({ data }) => data);
};
