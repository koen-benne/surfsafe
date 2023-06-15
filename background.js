browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'closeTab') {
    // Close the current tab
    browser.tabs.remove(sender.tab.id);
  }
});
