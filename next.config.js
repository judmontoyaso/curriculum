module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/likes',
        destination: 'http://localhost:3000/api/likes'
      }
    ]
  }
}
