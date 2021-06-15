export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => response.json())
}

export const postUrl = ({ title, urlToShorten }) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    body: JSON.stringify({
      long_url: urlToShorten,
      title: title
    }),
    headers: {'Content-type': 'application/json'}
  })
    .then(response => checkForErrors(response))
}

const checkForErrors = (response) => {
  if (!response.ok) {
    throw new Error(response.message)
  } else {
    return response.json()
  }
}