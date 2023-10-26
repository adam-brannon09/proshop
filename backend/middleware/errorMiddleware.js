const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404); //This sets the status code to 404. 
    next(error); //This passes the error to the next middleware. 
};

const errorHandler = (err, req, res, next) => {

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode; //If the status code is 200, set the status code to 500. Otherwise, set the status code to the res.statusCode.
    let message = err.message;

    // check for mongoose bad object id error
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 400;
        message = 'Resource not found';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? ':(' : err.stack
    });
};

export { notFound, errorHandler };