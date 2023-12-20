chrome.commands.onCommand.addListener(function (command) {
    if (command === "clearBrowserData") {
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
