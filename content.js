chrome.storage.sync.get(['linkBlockingEnabled'], (storage) => {
    updateListener(storage.linkBlockingEnabled ?? true)
});

chrome.storage.sync.onChanged.addListener((changes) => {
    if (changes.linkBlockingEnabled) {
        updateListener(changes.linkBlockingEnabled.newValue);
    }
});

function updateListener(linkBlockingEnabled) {
    if (linkBlockingEnabled) {
        document.addEventListener('click', handleClickAnchor, true);
    }  else {
        document.removeEventListener('click', handleClickAnchor, true);
    }
}

function handleClickAnchor(e) {
    const link = e.target.closest("a");

    if (link) {
      e.preventDefault();
      e.stopPropagation();
    }
}