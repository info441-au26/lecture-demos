/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Echo endpoint, returning back the text that was received, both as JSON
*
* body oas_any_type_not_mapped  (optional)
* returns oas_any_type_not_mapped
* */
const echo = ({ body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        body,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* liveness check, just returning a string
*
* no response value expected for this operation
* */
const hello = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse("OK"));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  echo,
  hello,
};
