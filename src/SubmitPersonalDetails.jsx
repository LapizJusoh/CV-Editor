export default function submitPersonalDetails(event, userName, phone, email) {
  event.preventDefault();
  alert(`
  The username is ${userName}\n
  The phone number, ${phone}\n
  And email, ${email}\n
  Thank you for using our services~
  `)
};