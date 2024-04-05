function isValidEmail(email) {

  if (typeof email!== 'string') {
    return false;
  }


  if (email.split('@').length - 1!== 1) {
    return false;
  }

  if (email.split('@')[1].split('.').length - 1 < 1) {
    return false;
  }

  return true;
}

// Log the result of calling isValidEmail with the input string 'test@example.com' to the console
console.log(isValidEmail("test@example.com"));