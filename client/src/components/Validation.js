const Validation = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "Username is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalied";
  }
  if (!values.secret) {
    errors.secret = "Password is required";
  } else if (values.secret.length < 5) {
    errors.password = "Pasword must be more than five characters";
  }
  if (!values.first_name) {
    errors.first_name = "First name is required";
  }
  if (!values.lastt_name) {
    errors.last_name = "First name is required";
  }

  return errors;
};

export default Validation;
