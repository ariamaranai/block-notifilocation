chrome.runtime.onInstalled.addListener(() => {
  let { notifications, location } = chrome.contentSettings;
  let value = { primaryPattern: "<all_urls>", setting: "block" };
  notifications.set(value);
  location.set(value);
});