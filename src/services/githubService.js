import api from '../helpers/api';

export async function getUserFromUsername(username) {
  const user = await api.get(`https://api.github.com/users/${username}`)

  return user;
}

export async function getRepositoriesFromUsername(username) {
  const repositories = await api.get(`https://api.github.com/users/${username}/repos`)

  return repositories;
}

export async function getStarsFromUsername(username) {
  let stars = 0;

  await fetch(`https://api.github.com/users/${username}/starred?per_page=1`).then(res => {
    stars = res.headers.get('link').split(',')[1].split('&page=')[1].split('>')[0];
    stars = parseInt(stars)
  });

  return stars;
}


