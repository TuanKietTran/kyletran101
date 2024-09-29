export default ({ env }) => ({
  host: env("CONTENT_HOST", "0.0.0.0"),
  port: env.int("CONTENT_PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
