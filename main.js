const TOKEN = '5701788034:AAE2ltDvrdPnBl9DLFxDlccDPtec0SDKClE';
const CHAT_ID = '-1001595741712';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.querySelector("#tg").addEventListener("submit", function(e) {
  e.preventDefault();

  let message = `<b>Message from the site</b>\n`;
      message += `<b>Name: </b> ${this.name.value}\n`;
      message += `<b>Email: </b> ${this.email.value}\n`;
      message += `<b>Message: </b> ${this.message.value}\n`;

  if (this.name.value === '' || this.email.value  === '' || this.message.value === '') {
    document.querySelector("#error").style.display = 'block';
  } else {
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })
    .then((res) => {
      this.name.value = '';
      this.email.value = '';
      this.message.value = '';
      document.querySelector("#success").style.display = 'block';
      document.querySelector("#error").style.display = 'none';
    })
    .catch(err => {
      document.querySelector("#success").style.display = 'none';
      document.querySelector("#error").style.display = 'block';
      throw err;
    })
    .finally(() => {
      document.querySelector("#finally").style.display = 'block';
    })
  }
})