/*
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['inject.js'] // this is your evilbot code
  });
});*/

const targetSites = [
  "shuffle.com", "shuffle.game"
];

chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    files: ['inject.js']
  });
}, {
  url: targetSites.map(host => ({ hostEquals: host }))
});