chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'gpt-trigger',
    title: 'Ask AI',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log('coming here...');
  if (info.menuItemId === 'gpt-trigger' && info.selectionText) {
    chrome.windows.create({
      url: `index.html?text=${encodeURIComponent(info.selectionText)}`,
      type: 'popup',
      width: 500,
      height: 800,
      top: 100,
    });
  }
});
