/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* View my profile
*
* returns Profile
* */
const getProfile = () => new Promise(
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
/**
* Edit my profile
* Updates only the fields included in the request body.
*
* profileUpdate ProfileUpdate 
* returns Profile
* */
const updateProfile = ({ profileUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        profileUpdate,
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
  getProfile,
  updateProfile,
};
