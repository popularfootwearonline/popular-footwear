# Firebase setup

The storefront uses Firebase Authentication (email/password) and Cloud Firestore for accounts, demo orders, purchase eligibility, and product reviews. The product catalog remains in `assets/js/app.js`.

The Firebase Web App config for project `popular-web-9f0bf` is in `assets/js/firebase-config.js`. It is client-side configuration, not a service-account credential.

## Project structure

```text
footwear/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   ├── js/
│   │   ├── app.js
│   │   ├── firebase-config.js
│   │   └── firebase-init.js
├── firebase.json
├── firestore.rules
└── FIREBASE_SETUP.md
```

Keep Firebase CLI commands running from the project root so `firebase.json` and `firestore.rules` are found.

## Configure a Firebase project

1. In project `popular-web-9f0bf`, enable the **Email/Password** provider in Authentication.
2. Confirm the default Cloud Firestore database is created.
3. Install the Firebase CLI, sign in, and select this project from this folder:

   ```powershell
   npm.cmd install --global firebase-tools
   firebase.cmd login
   firebase.cmd use --add
   firebase.cmd deploy --only firestore:rules
   ```

4. In Authentication settings, add the deployed Hosting domain (and `localhost` if you serve it locally) to authorized domains.

Open the deployed Hosting URL, not `index.html` via `file://`. Firebase Authentication needs an authorized HTTP(S) origin. For local testing, run `python -m http.server 8000` from the project root and open `http://localhost:8000/#account`. Keep the server running while using the storefront.

Choose `popular-web-9f0bf` when selecting the Firebase project. Deploy the Firestore rules before creating accounts; without the matching rules, the profile write will be denied. From VS Code Live Server, use its `http://localhost:...` URL and authorize `localhost` in Firebase Authentication.

## Firestore data and demo checkout

Signup creates `user/{Firebase Auth UID}` with exactly the user's UID, name, email, and creation timestamp. Passwords and confirmation values are never written to Firestore; Firebase Authentication manages credentials. If an existing account has an empty or legacy profile document, sign in over HTTP(S), open **Profile**, and save the profile form to replace it with the current schema. Signup also uses a randomized arithmetic check verified in the browser, which is only a basic check and not strong bot protection.

Orders and purchase records are stored in that user's `orders` and `purchases` subcollections. Saved products and delivery addresses are stored in the user's `wishlist` and `addresses` subcollections. `firestore.rules` limits profile, order, wishlist, address, and purchase data to its signed-in owner. Product reviews are public to read, but only the signed-in user who owns a purchase record for that product can create one review.

Checkout is still a **demo**: no payment is processed or verified. The client writes a `demo-completed` order and its purchase records together, so this is appropriate for a prototype only. A production shop must create paid orders and purchase entitlements from a trusted backend after a payment provider confirms payment; do not treat these client-created demo orders as proof of purchase.

If the config is absent or Firebase fails to initialize, browsing remains available and account/review screens show an explicit setup message rather than silently using local demo authentication.
