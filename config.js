const conf = {cf: {target: {}}};

const env = process.env;

conf.interval = env.INTERVAL && parseInt(env.INTERVAL);

conf.cf.email = env.CF_EMAIL;
conf.cf.zone = env.CF_ZONE;
conf.cf.key = env.CF_KEY;

conf.cf.target.id = env.CF_TARGET_ID || undefined;
conf.cf.target.type = env.CF_TARGET_TYPE || undefined;
conf.cf.target.name = env.CF_TARGET_NAME || undefined;

module.exports = conf;
