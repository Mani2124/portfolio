# Manikandan Somu — Real Earth portfolio (repaired)

## Run locally
Open a terminal in this folder and run `python -m http.server 8000`, then open http://localhost:8000 . Do NOT double-click index.html because ES modules may be restricted under file:// .

The realistic 3D Earth uses Three.js and NASA-derived imagery served online. An animated Earth and orbit fallback remains visible when the 3D library cannot initialize. For the realistic image, the browser must have access to cdn.jsdelivr.net and threejs.org and WebGL must be enabled.

If the Earth is missing: press F12 > Console, check errors and verify WebGL in Chrome at chrome://gpu.
