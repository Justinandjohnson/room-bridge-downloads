# Room Bridge downloads

Static GitHub Pages site for the public Room Bridge download project. A local script recommends the download for the visitor’s operating system. Both links remain available without JavaScript. The page has no build dependencies or third-party scripts.

Preview locally with `python -m http.server --bind 127.0.0.1 --directory . 8765`, then open `http://127.0.0.1:8765`.

The capture preview renders the Room Bridge plug-in editor with synthetic test audio. Keep the preview image alongside the HTML, CSS, and JavaScript when publishing.

Publish these files at the root of the separate public Pages repository. After package verification and redistribution approval, replace the corresponding platform status in the download section with the direct HTTPS link to its verified GitHub Releases asset. Use the release’s version and checksum if listed.
