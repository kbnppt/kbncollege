module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['kbncollege.ac.in','*.googleusercontent.com','drive.google.com'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
}