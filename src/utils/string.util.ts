export default {
  convertYnToBoolean: (yn?: string): boolean => {
    if (yn.toUpperCase() === "Y") {
      return true;
    }
    if (yn.toUpperCase() === "N") {
      return false;
    }
    return false;
  },
};
