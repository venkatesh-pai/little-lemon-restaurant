const fetchAPI = function (date) {
  let result = [];

  for (let i = 9; i < 11; i++) {
    if (Math.random() < 0.5) {
      result.push(parseInt(i) + ":00 AM");
    }
  }

  for (let i = 12; i < 22; i++) {
    if (Math.random() < 0.5) {
      result.push((parseInt(i) % 12 || 12) + ":00 PM");
    }
  }

  return result;
};

const submitAPI = function (formData) {
  console.log("submitAPI:");
  console.log(formData);
  return true;
};

export { fetchAPI, submitAPI };
