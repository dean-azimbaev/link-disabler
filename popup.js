const blockingLinksCheckbox = document.getElementById('blocking-links');

renderExtensionSettings();

chrome.storage.sync.get(['linkBlockingEnabled'], (result) => {
  blockingLinksCheckbox.checked = result.linkBlockingEnabled ?? true;
  renderStatus(blockingLinksCheckbox.checked)
});

blockingLinksCheckbox.addEventListener('change', () => {
  chrome.storage.sync.set({ linkBlockingEnabled: blockingLinksCheckbox.checked });
  renderStatus(blockingLinksCheckbox.checked)
});

function renderStatus(enabled) {
    const extensionStatus = document.getElementById('extension-status');
    extensionStatus.innerHTML = `<b style="color: ${enabled ? 'green' : 'gray'}">${enabled ? 'ON' : 'OFF'}</b>`
}

function renderExtensionSettings() {
    const manifest = chrome.runtime.getManifest();
    const properties = document.getElementById('exetnsion-settings-list');

    const propertiesToShow = {
        name: true,
        version: true,
        description: true,
        permissions: true,
        host_permissions: true
    };

    Object.keys(propertiesToShow).forEach((propertyName) => {
        if (propertiesToShow[propertyName] && manifest[propertyName]) {
            const property = document.createElement('li');
            property.innerHTML = `<b>${propertyName}</b>: ${JSON.stringify(manifest[propertyName])}`;
            properties.append(property);
        }
    });
}

