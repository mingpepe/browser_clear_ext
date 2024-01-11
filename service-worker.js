chrome.commands.onCommand.addListener(async function (command) {
    if (command === "clearBrowserData") {
        const newTab = await chrome.tabs.create({});
        const tabs = await chrome.tabs.query({});
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].id !== newTab.id) {
                chrome.tabs.remove(tabs[i].id);
            }
        }
        clearBrowserData();
    }
});

function clearBrowserData() {
    chrome.browsingData.remove({}, {
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "pluginData": true,
        "passwords": true,
        "webSQL": true
    }, function () {
        showNotification("Browser data cleared successfully!");
    });
}

function showNotification(message) {
    chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "Clear Browser Data",
        message: message
    });
}
