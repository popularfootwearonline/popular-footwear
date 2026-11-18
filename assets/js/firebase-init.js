(() => {
  const runtime = {
    status: "not-configured",
    auth: null,
    db: null,
  };
  window.popularFootwearFirebase = runtime;

  if (!window.firebase) {
    runtime.status = "sdk-unavailable";
    console.error("Firebase SDK scripts did not load.");
    return;
  }

  const config = window.POPULAR_FOOTWEAR_FIREBASE_CONFIG;
  const requiredKeys = ["apiKey", "authDomain", "projectId", "appId"];
  if (!config || requiredKeys.some((key) => typeof config[key] !== "string" || !config[key].trim())) return;

  try {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);
    runtime.auth = app.auth();
    runtime.db = app.firestore();
    runtime.status = "ready";
  } catch (error) {
    runtime.status = "error";
    runtime.error = error;
    console.error("Firebase could not be initialized.", error);
  }
})();
