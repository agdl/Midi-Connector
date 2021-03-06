import request from 'superagent'

// const API_URL = 'http://localhost:3000'
// const API_URL = 'http://raspberrypi.local:3000'

const backend = {
  fetchMidiConnections: () =>
    request
      .get('/midi-devices')
      .set('Content-Type', 'application/json'),

  createConnection: ({ sourceId, targetId }) => {
    const body = { sourceId, targetId }
    return request
      .post('/connect')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(body))
  },

  disconnectAll: () =>
    request
      .del('/disconnect-all')
      .set('Content-Type', 'application/json')
}

export default backend
