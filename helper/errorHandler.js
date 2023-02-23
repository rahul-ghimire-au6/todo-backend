const handleError = (res, err, statusCode) => {
  if (statusCode === 400) {
    console.log(`error name => ${err.name}`);
    console.log(`error message => ${err.message}`);
    return res.status(statusCode).json({
      success: false,
      errName: err.name,
      errMessage: err.message,
    });
  }
};

module.exports = handleError;
