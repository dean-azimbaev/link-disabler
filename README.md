# Link disabler

This lightweight Chrome extension blocks all link navigation (<a> tags) on any webpage. You can toggle the blocking behavior on or off from the extension popup.

---

## Table of contents

1. [Test task requirements](#requirements)
2. [Installation and usage](#how-to-install-and-use-link-disabler)


## Requirements:
 1. Event Interception:
The extension must intercept all click events on <a> tags in the DOM and prevent the browser from navigating to the href target.
 2. Blocking Mechanism:
Use JavaScript to cancel the default behavior of the click event. No redirection should occur when a user clicks any link.
 3. Scope:
 • The blocking should apply to all links on any page the extension is active on.
 • The extension can be active on all domains or a pre-defined set of domains (configurable in manifest.json).
 4. UI :
A simple popup showing the extension status (e.g., “Blocking links: ON”) would be a plus but is not mandatory.
 5. Packaging:
Deliver the extension in a folder with:
 • manifest.json
 • content.js (or any script used to inject functionality)
 • Any other required files

---

## How to install and use Link disabler

1. Download extension files

```
git clone https://github.com/dean-azimbaev/link-disabler
cd link-disabler
```

2. Open Chrome Extensions Page

Open Chrome and navigate to: `chrome://extensions` or click ⋮ -> More Tools -> Extensions

3. Enable Developer Mode
In the top-right corner, toggle Developer Mode ON.

4. Load Unpacked Extension

Click the "Load unpacked" button.

Then select the folder that you downloaded from step 1

5. Done
You’ll now see the Link disabler extension icon in your toolbar.

Click it to open the popup and enable or disable link blocking.
