function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const password_pattern = /[a-zA-Z0-9]{8,}$/;

  if (values.username === "") {
    error.username = "userName should not be empty";
  }
  if (values.email === "") {
    error.email = "userName should not be empty";
  }
  if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  }
  if (values.password === "") {
    error.password = "Password should not be empty";
  }

  if (values.confirmPassword[0].length < 8 || values.password[0].length < 8) {
    error.password = "Must be at least 8 characters";
  }

  if (
    values.confirmPassword === "" ||
    String(values.confirmPassword) !== String(values.password)
  ) {
    error.confirmPassword = "Password not matched";
  }

  return error;
}

export default Validation;
