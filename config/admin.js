module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '70b43acb41e2e7eff1d1546975971dc3'),
  },
});
