chrome.runtime.onInstalled.addListener(() => (
  chrome.contentSettings.notifications.set({
    primaryPattern: "<all_urls>",
    setting: "block"
  }),
  chrome.contentSettings.location.set({
    primaryPattern: "<all_urls>",
    setting: "block"
  })
));
