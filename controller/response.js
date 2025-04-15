const response = (statusCode, data, message, res) => {
  const responseData = {
    payload: {
      status_code: statusCode,
      data: data,
      message: message
    }
  };
  res.status(statusCode).json(responseData);
};

module.exports = response