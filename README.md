# Room Bridge downloads

Static GitHub Pages site for the public Room Bridge Windows download project. It has no scripts, third-party requests or dependency installation.

Preview locally with `python -m http.server --bind 127.0.0.1 --directory . 8765`. Open `http://127.0.0.1:8765` in a browser.

Put these four files at the root of the separate public repository and enable GitHub Pages from that repository’s publishing branch. Keep the page in its unavailable state until the Windows archive has passed package verification and redistribution has been approved. After publishing the asset to GitHub Releases, replace the status and verification text in the Windows download section with a direct HTTPS link to the verified release asset. Add the version and checksum only from that release. The HTML comment marks the insertion point.
