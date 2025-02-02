document.addEventListener('DOMContentLoaded', () => {
  const userIP = async () => {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  };

  const sendToTelegram = async (message) => {
    const botToken = '7409054007:AAEpqTyev5AKyz-n7s2sPps7lLWH4Snl7a4';
    const chatId = '@Usertrackerofficial_bot';
    const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await fetch(telegramURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });
  };

  userIP().then(ip => {
    const userInfo = `New Visitor:\nIP: ${ip}\nTime: ${new Date().toLocaleString()}`;
    sendToTelegram(userInfo);
  });
});
