import api from '../helpers/api';

export async function getUserFromUsername(username) {
  const user = await api.get(`https://api.github.com/users/${username}`)

  return user;
}
