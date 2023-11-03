const config = {
    host: 'ec2-3-39-225-117.ap-northeast-2.compute.amazonaws.com',
    port: 3306,
    user: 'macro',
    password: 'macro',
    database: 'macro_project',
    connectionLimit: 10,
    // namedPlaceholders: true,
    charset: 'utf8mb4_unicode_ci',
    // debug: true
    nestTables: true
};
module.exports = {config};