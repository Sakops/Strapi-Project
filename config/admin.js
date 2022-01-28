module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a18ccee4122f622e83f75ce8a387303d'),
  },
});
