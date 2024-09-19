// content.js

// Listen for context menu click event
// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   console.log('Context menu clicked 👏👏');
//   // Send message to background script to open extension window
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, { action: 'openPopup' });
//   });
// });

const handleMessage = (message) => {
  console.log('message', message);
  if (message.type === 'selectedText') {
    console.log(message.text);
  }
};

// Listen for messages from background script
chrome.runtime.onMessage.addListener(handleMessage);
