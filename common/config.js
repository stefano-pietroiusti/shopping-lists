/* or use env file instead but should be excluded from git */
module.exports = {
    "port": 3600,
    "jwt_secret": "",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev",
    "permissions": {
        "GUEST": 1,
        "ADMIN": 9
    }
};