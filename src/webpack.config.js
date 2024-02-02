resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      buffer: require.resolve('buffer'),
      timers: require.resolve('timers-browserify'),
      stream: require.resolve('stream-browserify'),
      url: require.resolve('url')
    }
  }
  