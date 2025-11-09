chrome.storage.local.get("blockCount", (data) => {
  document.getElementById("count").innerText = data.blockCount || 0;
});

document.getElementById("reset").addEventListener("click", () => {
  chrome.storage.local.set({ blockCount: 0 });
  chrome.action.setBadgeText({ text: "0" });
  document.getElementById("count").innerText = 0;
});
