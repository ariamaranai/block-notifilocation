chrome.runtime.onInstalled.addListener(() => {
  let contentSettings = chrome.contentSettings;
  let value = { primaryPattern: "<all_urls>", setting: "block" };
  contentSettings.notifications.set(value);
  contentSettings.location.set(value);
});