//This middleware will be used in server.js after the routes.
const notFound = (req, res, next) => {
    //This creates a new error object with the message 'Not Found - ${req.originalUrl}'.
    const error = new Error(`Not Found - ${req.originalUrl}`);
    //This sets the status code to 404. 
    res.status(404);
    //This passes the error to the next middleware.
    next(error);
};

//the errorHandler middleware will be used in server.js after the routes.
const errorHandler = (err, req, res, next) => {
    //If the status code is 200, set the status code to 500. Otherwise, set the status code to the res.statusCode.
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    //set the message to the error message.
    let message = err.message;

    // check for mongoose bad object id error (cast error)
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 400;
        message = 'Resource not found';
    }
    // check for mongoose duplicate key error
    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? ':(' : err.stack
    });
};

export { notFound, errorHandler };