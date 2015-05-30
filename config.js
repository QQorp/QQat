var redisAdapter = require('sails-redis');

module.exports = {

  // Setup Adapters
  // Creates named adapters that have have been required
  adapters: {
    'default': redisAdapter,
    redis: redisAdapter
  },

  // Build Connections Config
  // Setup connections using the named adapter configs
  connections: {
    redis: {
      adapter: 'redis',
      port: 6379,
      host: 'localhost',
      password: null,
      database: null,
      options: {
        // low-level configuration
        // (redis driver options)
        // parser: 'hiredis',
        return_buffers: false,
        detect_buffers: false,
        socket_nodelay: true,
        no_ready_check: false,
        enable_offline_queue: true
      }
    }
  },

  defaults: {
    migrate: 'alter'
  }

};
