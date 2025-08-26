export function validateEmail(email: string): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? null : 'Invalid email address.';
}

export function validatePassword(password: string): string | null {
  if (!password) return 'Password is required';

  if (password.length < 6) {
    return 'Password must be at least 6 characters.';
  }

  return null;
}

export function validateName(name: string): string | null {
  return name.trim().length < 2 ? 'Name must be at least 2 characters.' : null;
}

export const validateSignupForm = (data:{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}): string | null => {
  const nameError = validateName(data.name);
  if (nameError) return nameError;

  const emailError = validateEmail(data.email);
  if (emailError) return emailError;

  const passwordError = validatePassword(data.password);
  if (passwordError) return passwordError;

  if (data.password !== data.confirmPassword) {
    return 'Passwords do not match';
  }
  return null;
};

export const validateLoginForm = (data: {
  email: string;
  password: string;
}): string | null => {
  const emailError = validateEmail(data.email);
  if (emailError) return emailError;

  const passwordError = validatePassword(data.password);
  if (passwordError) return passwordError;

  return null;
};