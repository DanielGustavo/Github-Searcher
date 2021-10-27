import HttpError from '../errors/HttpError';

import api from '../helpers/api';

export async function getUserFromUsername(username) {
  const { data: user } = await api
    .get(`https://api.github.com/users/${username}`)
    .catch((error) => {
      if (error.statusCode === 404) {
        throw new HttpError({
          ...error,
          message: `User "${username}" couldn't be found`,
        });
      }

      throw error;
    });

  return user;
}

export async function getRepositoriesFromUsername(username) {
  const { data: repositories } = await api.get(
    `https://api.github.com/users/${username}/repos`
  );

  return repositories;
}

export async function getStarsFromUsername(username) {
  const response = await api.get(
    `https://api.github.com/users/${username}/starred?per_page=1`
  );

  const starsString = response.headers
    ?.get('link')
    ?.split(',')[1]
    ?.split('&page=')[1]
    ?.split('>')[0];
  const stars = starsString !== undefined ? parseInt(starsString) : 0;

  return stars;
}
