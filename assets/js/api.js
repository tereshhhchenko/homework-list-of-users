import axios from 'axios'

export const getUsers = ({ offset, limit, query }) =>
  axios.get(`${process.env.API_BASE}/users`, {
    params: {
      offset,
      limit,
      name: query,
    },
  })
