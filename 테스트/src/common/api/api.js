import axios from 'axios'

export const createUser = async (user) =>
  await axios.post('/honjaya/user/signup', user); 