const api = {
  get: async (url, options) => {
    const res = (await fetch(url, { method: 'GET', ...options })).json()

    return res
  },
  post: async (url, options) => {
    const res = (await fetch(url, { method: 'POST', ...options })).json()

    return res
  },
  put: async (url, options) => {
    const res = (await fetch(url, { method: 'PUT', ...options })).json()

    return res
  },
  delete: async (url, options) => {
    const res = (await fetch(url, { method: 'DELETE', ...options })).json()

    return res
  },
  patch: async (url, options) => {
    const res = (await fetch(url, { method: 'PATCH', ...options })).json()

    return res
  },
}

export default api
