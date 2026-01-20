/* -----HANDLER REGISTRY----- */

// Maps HTTP methods to their corresponding handler fuctions.
// This allows router.js to delegate requests cleanly.
// Any new HTTP method handler added here will automatically be available to the router.

module.exports = {
    DELETE: require('./deleteHandler'),
    GET: require('./getHandler'),
    HEAD: require('./headHandler'),
    OPTIONS: require('./optionsHandler'),
    PATCH: require('./patchHandler'),
    POST: require('./postHandler'),
    PUT: require('./putHandler'),
};