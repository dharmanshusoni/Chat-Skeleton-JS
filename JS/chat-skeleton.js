function toggleChat() {
    var chatPopup = document.getElementById('chat-popup');
    chatPopup.style.display = (chatPopup.style.display === 'none' || chatPopup.style.display === '') ? 'block' : 'none';
  }

  function getCurrentTime() {
    var now = new Date();
    return now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
  }

  function sendMessage() {
    var userInput = document.getElementById('user-message-input');
    var messageContent = userInput.value;

    if (messageContent.trim() !== "") {
      var chatContent = document.querySelector('#chat-popup .content');
      var userMessage = document.createElement('div');
      userMessage.className = 'message bot-message';
      var userHeader = document.createElement('div');
      userHeader.textContent = 'You @' + getCurrentTime();
      userHeader.style.fontSize = 'small';
      userHeader.style.color = "gray";
      userMessage.appendChild(userHeader);
      userMessage.appendChild(document.createTextNode(messageContent));
      chatContent.appendChild(userMessage);

      // You can add logic here to handle the bot's response
      // For now, let's add a dummy response
      var botMessage = document.createElement('div');
      botMessage.className = 'message user-message';
      var botHeader = document.createElement('div');
      botHeader.textContent = 'Bot @' + getCurrentTime();
      botHeader.style.fontSize = 'small';
      botHeader.style.color = "#b9bce3";
      botMessage.appendChild(botHeader);
      botMessage.appendChild(document.createTextNode('Processing: ' + messageContent));
      chatContent.appendChild(botMessage);

      // Clear the input field
      userInput.value = "";
    }
  }