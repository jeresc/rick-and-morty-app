export default function validate(userData) {
  const errors = {};

  // Email Validation
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      userData.email
    )
  ) {
    errors.email = "Invalid Email";
  }
  if (userData.email.length > 35) {
    errors.email = "Email must have less than 35 characters";
  }

  // Password Validation
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "Passwords must have at least one number";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Must have between 6 and 10 characters";
  }

  return errors;
}
