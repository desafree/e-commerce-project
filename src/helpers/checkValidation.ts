const checkValidityName = (value: string) => {
  if (value.length >= 6) return true;
  return false;
};

const checkValidityEmail = (value: string) => {
  if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }
  return false;
};

const checkValidityNumber = (value: string) => {
  if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value)) return true;
  return false;
};

const checkValidityZip = (value: string) => {
  if (value.length >= 5 && /^\d+$/.test(value)) {
    return true;
  }
  return false;
};

const checkValidityCity = (value: string) => {
  if (value.length > 3) {
    return true;
  }
  return false;
};

const checkValidityPassword = (value: string) => {
  if (value.length >= 6) {
    return true;
  }
  return false;
};

export default {
  checkValidityName,
  checkValidityEmail,
  checkValidityNumber,
  checkValidityZip,
  checkValidityCity,
  checkValidityPassword,
};
