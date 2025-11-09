chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  chrome.storage.local.get("blockCount", (data) => {
    let updatedCount = (data.blockCount || 0) + 1;
    chrome.storage.local.set({ blockCount: updatedCount });

    chrome.action.setBadgeText({ text: updatedCount.toString() });
  });
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ blockCount: 0 });
  chrome.action.setBadgeBackgroundColor({ color: "red" });
  chrome.action.setBadgeText({ text: "0" });
});
