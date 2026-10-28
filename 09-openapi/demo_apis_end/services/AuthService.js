/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Log in
* Checks the credentials and returns a session token to send with later requests.
*
* loginRequest LoginRequest 
* returns LoginResponse
* */
const login = ({ loginRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        loginRequest,
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
* Log out
* Invalidates the current session token.
*
* no response value expected for this operation
* */
const logout = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  login,
  logout,
};
