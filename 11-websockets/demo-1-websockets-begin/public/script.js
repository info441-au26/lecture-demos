(() => {
  function init() {
    id('sendBtn').addEventListener('click', e => {
      e.preventDefault();
      sendChat();
    })
  }

  function sendChat() {
      const chatMsg = id("textInput").value;
  }

  const id = elemId => document.getElementById(elemId);

  window.addEventListener('load', init);
})();