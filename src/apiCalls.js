export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => response.json())
}

export const postUrl = ({ urltoShorten, title }) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    body: JSON.stringify({
      long_url: urltoShorten,
      title: title
    }),
    headers: {'Content-type': 'application/json'}
  })
    .then(response => response.json())
}