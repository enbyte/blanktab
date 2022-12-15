function setblank() {
  document.title = 'blank';
}


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.scripting.executeScript({
    target: {tabId: tabId},
    func: setblank,
    args: [],
  })
});




