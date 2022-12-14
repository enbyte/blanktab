chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (1 == 1) {
    chrome.tabs.executeScript(null, {code:"document.title='blank'"});
  }
});




