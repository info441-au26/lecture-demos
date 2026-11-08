(() => {
  const socketURL = ((window.location.protocol === "https:") ? "wss:" : "ws:")
                  + "//" + window.location.host + "/chatSocket"

  const webSocket = new WebSocket(socketURL)

  function init() {
    webSocket.onmessage = event => {
        const chatMsg = event.data;
        id("output").innerText += chatMsg + "\n";
    }

    id('sendBtn').addEventListener('click', e => {
      e.preventDefault();
      sendChat();
    })
  }

  function sendChat() {
      const chatMsg = id("textInput").value;
      webSocket.send(chatMsg);
  }

  const id = elemId => document.getElementById(elemId);

  window.addEventListener('load', init);
})();