// Desc: Middleware to handle async functions
// the asyncHandler is a custom middleware to handle errors
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};


export default asyncHandler;