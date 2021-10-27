import HttpError from '../errors/HttpError';

async function request(url, options) {
  const res = await fetch(url, options)
    .then(async (response) => {
      response.data = await response.json();

      if (!response.ok) {
        throw new HttpError({
          statusCode: response.status,
          message: response.statusText,
          response: response,
        });
      }

      return response;
    });

  return res;
}

const api = {
  get: async (url, options) => {
    const res = await request(url, { method: 'GET', ...options })

    return res
  },
  post: async (url, options) => {
    const res = await request(url, { method: 'POST', ...options })

    return res
  },
  put: async (url, options) => {
    const res = await request(url, { method: 'PUT', ...options })

    return res
  },
  delete: async (url, options) => {
    const res = await request(url, { method: 'DELETE', ...options })

    return res
  },
  patch: async (url, options) => {
    const res = await request(url, { method: 'PATCH', ...options })

    return res
  },
}

export default api
