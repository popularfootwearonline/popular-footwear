(() => {
  const runtime = {
    status: "not-configured",
    auth: null,
    database: null,
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

  let app;
  try {
    app = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);
    runtime.auth = app.auth();
    runtime.status = "ready";
  } catch (error) {
    runtime.status = "error";
    runtime.error = error;
    console.error("Firebase could not be initialized.", error);
    return;
  }

  if (typeof config.databaseURL !== "string" || !config.databaseURL.trim()) {
    runtime.databaseStatus = "not-configured";
    return;
  }

  try {
    if (typeof app.database !== "function") throw new Error("The Firebase Realtime Database SDK did not load.");
    runtime.database = app.database();
    runtime.databaseStatus = "ready";
  } catch (error) {
    runtime.databaseStatus = "error";
    runtime.databaseError = error;
    console.error("Firebase Realtime Database could not be initialized.", error);
  }
})();
