# link-disabler test task

Requirements:
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
