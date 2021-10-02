export default function getEmailDomain(email) {
  for (let i = email.length - 1; i >= 0; i--) {
    if (email[i] === '@') return email.substring(i + 1);
  }
  return false;
}