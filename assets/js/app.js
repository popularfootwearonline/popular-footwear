let products = [];
let productLoadStatus = "idle";
let productLoadError = "";
let productLoadPromise = null;
const productLoadTimeoutMs = 12000;
const productAdminUid = "eFXrLX8bhUa6Pa5s8REHCLayHZg1";

const main = document.querySelector("#app-main");
const searchInput = document.querySelector("#product-search");
const cartCount = document.querySelector(".cart-count");
const cartButton = document.querySelector(".cart-button");
const cartStorageKey = "popular-footwear-cart-v1";
const themeButton = document.querySelector(".theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const accountButton = document.querySelector("#account-button");
const accountMenu = document.querySelector("#account-menu");
const accountMenuIcons = {
  profile: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"></circle><path d="M5 21v-1.5a7 7 0 0 1 14 0V21"></path></svg>',
  signIn: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17l5-5-5-5m5 5H3"></path><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"></path></svg>',
  signUp: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 21v-1.5a6.5 6.5 0 0 1 13 0V21M19 8v6m-3-3h6"></path></svg>',
  signOut: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 17l5-5-5-5m5 5H9"></path><path d="M12 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path></svg>',
  privacy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"></path><path d="m9 12 2 2 4-4"></path></svg>',
  contact: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4.8A2.5 2.5 0 0 1 4 13V5.5Z"></path><path d="M8 8h8m-8 4h5"></path></svg>',
  email: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3A2 2 0 0 1 19 19C10.7 19 5 13.3 5 5a2 2 0 0 1 2-2Z"></path></svg>',
  orders: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-3-6 3V3Z"></path><path d="M9 8h6m-6 4h6"></path></svg>',
  wishlist: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z"></path></svg>',
  addresses: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>',
  addProduct: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14m-7-7h14"></path><rect x="3" y="3" width="18" height="18" rx="4"></rect></svg>',
  manageOrders: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16M4 12h16M4 19h16"></path><circle cx="7" cy="5" r="1"></circle><circle cx="7" cy="12" r="1"></circle><circle cx="7" cy="19" r="1"></circle></svg>',
  manageSlider: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"></rect><circle cx="8.5" cy="9" r="1.5"></circle><path d="m21 15-5-5L5 20"></path></svg>',
};
const authFieldIcons = {
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"></circle><path d="M5 21v-1.5a7 7 0 0 1 14 0V21"></path></svg>',
  email: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>',
  password: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 1 1 8 0v3m-4 5v2"></path></svg>',
  confirmPassword: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3Z"></path><path d="m9 12 2 2 4-4"></path></svg>',
  captchaAnswer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5H5v3m11-3h3v3M5 16v3h3m11-3v3h-3"></path><path d="m9 9 6 6m0-6-6 6"></path></svg>',
  eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z"></path><circle cx="12" cy="12" r="2.5"></circle></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18M10.6 6.2A10.7 10.7 0 0 1 12 6c6.2 0 9.5 6 9.5 6a15 15 0 0 1-3 3.6M6.2 6.2C3.8 7.8 2.5 12 2.5 12s3.3 6 9.5 6c1 0 2-.2 2.8-.5"></path><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"></path></svg>',
};
const cart = new Map();
const reservedCartStock = new Map();
const filters = { category: "", query: "", sizes: new Set(), brands: new Set(), minPrice: "10", maxPrice: "" };
const selectedColors = new Map();
const homePageSize = 8;
const reviewLoadTimeoutMs = 8000;
const cartLoadTimeoutMs = 12000;
const homeSliderLoadTimeoutMs = 10000;
const firebaseRuntime = window.popularFootwearFirebase ?? { status: "sdk-unavailable", auth: null };
const firebaseAuth = firebaseRuntime.auth;
const homeSliderState = { status: "idle", slides: [], error: null };
let homeSliderReference = null;
let homeSliderValueListener = null;
let homeSliderTimeout = 0;
let homeSliderAutoplay = 0;
let homeSliderActiveIndex = 0;
let adminSliderStatus = "idle";
let adminSliderSlides = [];
let adminSliderError = null;
let adminSliderEditingId = "";
let adminSliderSaving = false;
let adminSliderLoadPromise = null;
const reviewCache = new Map();
const reviewLoadStatus = new Map();
const reviewLoadErrors = new Map();
const reviewLoads = new Map();
const purchasedProductIds = new Set();
const wishlistProductIds = new Set();
const wishlistWrites = new Set();

let toastTimeout;
let currentUser = null;
let authStateReady = !firebaseAuth;
let cartSyncStatus = "guest";
let guestCartLoadError = null;
let guestCartSaveError = null;
let cartRemoteKeys = new Set();
let cartWriteQueue = Promise.resolve();
let purchaseStatus = "idle";
let orderHistory = [];
let orderHistoryStatus = "idle";
let wishlistStatus = "idle";
let wishlistLoadPromise = null;
let wishlistLoadError = null;
let savedAddresses = [];
let addressBookStatus = "idle";
let addressBookError = null;
let addressEditingId = "";
let selectedCheckoutAddressId = "";
let accountMode = "sign-in";
let captchaChallenge = null;
let userProfile = null;
let profileStatus = "idle";
let pendingProfileName = "";
let profileEditing = false;
let checkoutInventory = { fingerprint: "", status: "idle", availability: [], error: null };
let adminOrderHistory = [];
let adminOrderHistoryStatus = "idle";
let adminOrderHistoryError = null;
let adminOrderLoadPromise = null;

function setTheme(theme, persist = false) {
  document.documentElement.dataset.theme = theme;
  const nextTheme = theme === "dark" ? "light" : "dark";
  themeButton.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
  themeButton.title = `Switch to ${nextTheme} theme`;
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  themeColorMeta.content = theme === "dark" ? "#171b19" : "#f7f8f7";
  if (persist) {
    try {
      window.localStorage.setItem("popular-footwear-theme", theme);
    } catch (error) {
      console.error("Could not save the storefront theme preference.", error);
      showToast("Your theme changed, but this browser could not save the preference.");
    }
  }

  async function declineAdminOrderRequest(orderId, userId) {
    if (!window.confirm("Decline this customer request?")) return;
    try {
      await orderApiRequest("decline-order-request", { orderId, userId });
      showToast("Customer request declined.");
      adminOrderHistoryStatus = "idle";
      await loadAdminOrders(true);
      if (currentUser?.uid === userId) {
        orderHistoryStatus = "idle";
        void loadUserOrders(currentUser, true);
      }
    } catch (error) {
      console.error("Could not resolve the customer order request.", error);
      showToast(error.message || "The request could not be updated.");
    }
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function money(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

function selectedVariant(product, colorName = selectedColors.get(product.id)) {
  return product.colors.find((variant) => variant.name === colorName) ?? product.colors[0];
}

function productSizes(product) {
  return Array.isArray(product.sizes) ? product.sizes : [];
}

function priceForSize(product, size) {
  const override = product.sizePricing?.[size] ?? {};
  return {
    price: override.price ?? product.price,
    mrp: override.mrp ?? product.mrp,
  };
}

function productPriceValues(product) {
  const sizes = productSizes(product);
  return (sizes.length ? sizes : ["One size"])
    .map((size) => priceForSize(product, size).price);
}

function productPriceLabel(product) {
  const prices = productPriceValues(product);
  const lowestPrice = Math.min(...prices);
  return prices.every((price) => price === lowestPrice) ? money(lowestPrice) : `From ${money(lowestPrice)}`;
}

function maximumProductPrice() {
  return Math.max(10, ...products.flatMap(productPriceValues));
}

function availableProductSizes() {
  return [...new Set(products.flatMap(productSizes))].sort((left, right) => (
    Number(left.replace(/\D/g, "")) - Number(right.replace(/\D/g, ""))
  ));
}

function selectedPriceSize(product, variant, preferredSize) {
  const sizes = productSizes(product);
  if (!sizes.length) return "One size";
  if (preferredSize && variant.stock[preferredSize] > 0) return preferredSize;
  return sizes.find((size) => variant.stock[size] > 0) ?? sizes[0];
}

function updateDisplayedProductPrice(product, size) {
  const { price, mrp } = priceForSize(product, size);
  const currentPrice = main.querySelector(".detail-current-price");
  const currentMrp = main.querySelector(".detail-current-mrp");
  const discount = main.querySelector(".detail-discount");
  if (currentPrice) currentPrice.textContent = money(price);
  if (currentMrp) currentMrp.textContent = `MRP ${money(mrp)}`;
  if (discount) discount.textContent = `${discountPercent(product, size)}% off`;
}

function variantImages(variant) {
  if (Array.isArray(variant.images) && variant.images.length) return variant.images;
  return variant.image ? [variant.image] : [];
}

function variantHasStock(product, variant) {
  const sizes = productSizes(product);
  return sizes.length
    ? sizes.some((size) => (variant.stock?.[size] ?? 0) > 0)
    : (variant.stock?.["One size"] ?? 0) > 0;
}

function discountPercent(product, size) {
  const { price, mrp } = priceForSize(product, size);
  return Math.round((1 - price / mrp) * 100);
}

function colorSwatch(variant) {
  return /^#[\da-f]{6}$/i.test(variant.code ?? "") ? variant.code : "#87918b";
}

function cartSize() {
  return [...cart.values()].reduce((total, item) => total + item.quantity, 0);
}

function updateCartBadge() {
  const count = cartSize();
  cartCount.textContent = String(count);
  cartButton.setAttribute("aria-label", `Shopping bag, ${count} ${count === 1 ? "item" : "items"}`);
}

function cartItemKey(item) {
  return `${item.productId}:${item.size}:${item.color}`;
}

function cartDocumentId(item) {
  return encodeURIComponent(cartItemKey(item));
}

function normalizeCartItem(item) {
  if (!item || typeof item !== "object"
    || typeof item.productId !== "string" || !item.productId
    || typeof item.size !== "string" || !item.size
    || typeof item.color !== "string" || !item.color
    || !Number.isSafeInteger(item.quantity) || item.quantity < 1) {
    throw new TypeError("The saved cart contains an invalid item.");
  }
  return {
    productId: item.productId,
    size: item.size,
    color: item.color,
    quantity: item.quantity,
  };
}

function readGuestCart() {
  try {
    const savedCart = window.localStorage.getItem(cartStorageKey);
    guestCartLoadError = null;
    if (!savedCart) return [];
    const items = JSON.parse(savedCart);
    if (!Array.isArray(items)) throw new TypeError("The saved cart is not a list.");
    return items.map(normalizeCartItem);
  } catch (error) {
    guestCartLoadError = error;
    console.error("Could not load the saved guest cart.", error);
    showToast("Your saved bag could not be loaded from this browser.");
    return [];
  }
}

function saveGuestCart() {
  try {
    window.localStorage.setItem(cartStorageKey, JSON.stringify([...cart.values()]));
    guestCartLoadError = null;
    guestCartSaveError = null;
    updateCartPageSyncNote();
    return true;
  } catch (error) {
    guestCartSaveError = error;
    console.error("Could not save the guest cart in this browser.", error);
    showToast("Your bag changed, but this browser could not save it.");
    updateCartPageSyncNote();
    return false;
  }
}

function clearGuestCart() {
  try {
    window.localStorage.removeItem(cartStorageKey);
  } catch (error) {
    console.error("Could not clear the saved guest cart.", error);
  }
}

function reserveStockForCart() {
  reservedCartStock.clear();
  for (const [key, item] of cart) {
    const product = products.find((entry) => entry.id === item.productId);
    if (!product) continue;
    const stock = selectedVariant(product, item.color).stock;
    const available = stock[item.size];
    if (!Number.isSafeInteger(available) || available < 0) continue;
    const reserved = Math.min(available, item.quantity);
    stock[item.size] -= reserved;
    if (reserved > 0) reservedCartStock.set(key, reserved);
  }
}

function releaseCartStock() {
  for (const [key, reserved] of reservedCartStock) {
    const item = cart.get(key);
    const product = item && products.find((entry) => entry.id === item.productId);
    if (!product) continue;
    const stock = selectedVariant(product, item.color).stock;
    if (Number.isSafeInteger(stock[item.size])) stock[item.size] += reserved;
  }
  reservedCartStock.clear();
}

function adjustCartStock(item, change) {
  const product = products.find((entry) => entry.id === item.productId);
  if (!product) return;
  const stock = selectedVariant(product, item.color).stock;
  if (!Number.isSafeInteger(stock[item.size])) return;
  const key = cartItemKey(item);
  const reserved = reservedCartStock.get(key) ?? 0;
  if (change > 0) {
    stock[item.size] -= change;
    reservedCartStock.set(key, reserved + change);
  } else if (change < 0 && reserved > 0) {
    const released = Math.min(-change, reserved);
    stock[item.size] += released;
    if (reserved === released) reservedCartStock.delete(key);
    else reservedCartStock.set(key, reserved - released);
  }
}

function replaceCart(items) {
  if (products.length) releaseCartStock();
  cart.clear();
  items.forEach((item) => {
    const normalized = normalizeCartItem(item);
    cart.set(cartItemKey(normalized), normalized);
  });
  if (products.length) reserveStockForCart();
  updateCartBadge();
}

function mergeCartItems(...collections) {
  const merged = new Map();
  collections.flat().forEach((item) => {
    const normalized = normalizeCartItem(item);
    const key = cartItemKey(normalized);
    const quantity = (merged.get(key)?.quantity ?? 0) + normalized.quantity;
    if (!Number.isSafeInteger(quantity)) throw new RangeError("The combined cart quantity is too large.");
    merged.set(key, { ...normalized, quantity });
  });
  return [...merged.values()];
}

async function loadUserCart(user) {
  cartSyncStatus = "loading";
  if (currentUser?.uid === user.uid) refreshCartRoute();
  const guestItems = [...cart.values()];
  try {
    const documents = await withFirestoreReadTimeout(
      readFirestoreRestCollection(user, `user/${user.uid}/cart`),
      "saved bag",
      cartLoadTimeoutMs,
    );
    if (currentUser?.uid !== user.uid) return;
    const remoteItems = documents.map((document) => normalizeCartItem(document));
    const mergedItems = mergeCartItems(remoteItems, [...cart.values()]);
    cartRemoteKeys = new Set(documents.map((document) => document.id));
    replaceCart(mergedItems);
    cartSyncStatus = "ready";
    guestCartLoadError = null;
    const didSync = await persistCart();
    if (guestItems.length && didSync && currentUser?.uid === user.uid) {
      showToast("Your saved bag is now synced to your account.");
    }
    if (currentUser?.uid === user.uid) refreshCartRoute();
  } catch (error) {
    if (currentUser?.uid !== user.uid) return;
    cartSyncStatus = "error";
    console.error("Could not load the signed-in user's cart from Firestore.", error);
    showToast("Your account bag could not be loaded. Check your connection and try again.");
    updateCartPageSyncNote();
    if (currentUser?.uid === user.uid) refreshCartRoute();
  }
}

function persistCart() {
  if (window.location.protocol === "file:") {
    saveGuestCart();
    return Promise.resolve();
  }
  if (!currentUser) {
    if (cartSyncStatus === "guest") saveGuestCart();
    return Promise.resolve();
  }
  if (cartSyncStatus === "error") return loadUserCart(currentUser);
  if (!["ready", "write-error"].includes(cartSyncStatus)) return Promise.resolve();

  const user = currentUser;
  const items = [...cart.values()].map((item) => ({ ...item }));
  const itemKeys = new Set(items.map(cartDocumentId));
  cartWriteQueue = cartWriteQueue.catch(() => {}).then(async () => {
    if (currentUser?.uid !== user.uid) return;
    for (const item of items) {
      const documentId = cartDocumentId(item);
      await writeFirestoreRestDocument(user, `user/${user.uid}/cart`, documentId, item);
    }
    for (const key of cartRemoteKeys) {
      if (!itemKeys.has(key)) {
        await firestoreRestRequest(user, `user/${user.uid}/cart/${key}`, "DELETE");
      }
    }
    if (currentUser?.uid !== user.uid) return;
    cartRemoteKeys = itemKeys;
    cartSyncStatus = "ready";
    clearGuestCart();
    updateCartPageSyncNote();
    return true;
  }).catch((error) => {
    if (currentUser?.uid === user.uid) {
      cartSyncStatus = "write-error";
      updateCartPageSyncNote();
    }
    console.error("Could not save the signed-in user's cart to Firestore.", error);
    showToast("Your bag changed, but it could not sync to your account. Try again.");
    return false;
  });
  return cartWriteQueue;
}

function updateCartPageSyncNote() {
  const note = main.querySelector(".cart-sync-note");
  if (!note) return;
  const isAuthPending = firebaseIsReady() && window.location.protocol !== "file:" && !authStateReady;
  const isCartPending = Boolean(currentUser) && cartSyncStatus === "loading";
  note.hidden = false;
  note.classList.remove("is-error", "is-loading");
  note.removeAttribute("aria-busy");
  if (isAuthPending || isCartPending) {
    note.innerHTML = '<span class="cart-sync-loading"><span class="cart-sync-skeleton skeleton-block" aria-hidden="true"></span><span>Loading your saved bag…</span></span>';
    note.setAttribute("aria-busy", "true");
    note.classList.add("is-loading");
  } else if (currentUser && (cartSyncStatus === "error" || cartSyncStatus === "write-error")) {
    note.innerHTML = 'Your bag could not sync. <button class="cart-sync-retry" type="button" data-action="retry-cart">Try again</button>';
    note.classList.add("is-error");
  } else if (guestCartLoadError) {
    note.innerHTML = 'Your saved bag could not be read on this device. <button class="cart-sync-retry" type="button" data-action="retry-cart">Try again</button>';
    note.classList.add("is-error");
  } else if (guestCartSaveError) {
    note.innerHTML = 'Your bag could not be saved on this device. <button class="cart-sync-retry" type="button" data-action="retry-cart">Try again</button>';
    note.classList.add("is-error");
  } else if (window.location.protocol === "file:") {
    note.textContent = currentUser
      ? "Saved on this device. Open the storefront over HTTP(S) to sync your bag to your account."
      : "Saved on this device.";
  } else if (!currentUser) {
    note.innerHTML = 'Saved on this device. <a href="#account" data-route="account">Sign in to sync your bag</a> across devices.';
  } else {
    note.textContent = "Your bag is saved to your account and syncs across devices.";
  }
}

function cartLoadingSkeletonMarkup() {
  const skeletonItem = `<article class="cart-item cart-item-skeleton" aria-hidden="true">
    <span class="cart-product-image skeleton-block cart-skeleton-image"></span>
    <div class="cart-item-info cart-skeleton-info">
      <span class="skeleton-block cart-skeleton-brand"></span>
      <span class="skeleton-block cart-skeleton-name"></span>
      <span class="skeleton-block cart-skeleton-details"></span>
      <span class="skeleton-block cart-skeleton-price"></span>
    </div>
    <div class="cart-item-actions cart-skeleton-actions">
      <span class="skeleton-block cart-skeleton-quantity"></span>
      <span class="skeleton-block cart-skeleton-remove"></span>
    </div>
  </article>`;
  return `<div class="cart-loading-skeleton" role="status" aria-busy="true">
    <span class="visually-hidden">Loading your saved bag…</span>
    ${skeletonItem}${skeletonItem}
  </div>`;
}

function addToCart(product, size) {
  const variant = selectedVariant(product);
  const sizes = productSizes(product);
  const selectedSize = size ?? (sizes.length
    ? sizes.find((availableSize) => variant.stock[availableSize] > 0)
    : "One size");
  if (!selectedSize || variant.stock[selectedSize] <= 0) {
    showToast(`Sorry, ${product.name} is sold out in that size.`);
    return;
  }
  const color = variant.name;
  const key = `${product.id}:${selectedSize}:${color}`;
  const item = cart.get(key);
  const updatedItem = { productId: product.id, size: selectedSize, color, quantity: (item?.quantity ?? 0) + 1 };
  cart.set(key, updatedItem);
  adjustCartStock(updatedItem, 1);
  updateCartBadge();
  void persistCart();
  updateSizeAvailability(product, variant);
  showToast(`${product.name} · ${color} · ${selectedSize} added to your bag.`);
}

function renderSizeOptions(product, variant, preferredSize) {
  const sizes = productSizes(product);
  if (!sizes.length) return "";
  const selectedSize = selectedPriceSize(product, variant, preferredSize);
  return sizes.map((size) => {
    const safeSize = escapeHtml(size);
    const quantity = variant.stock[size] ?? 0;
    const selected = size === selectedSize;
    return `<button type="button" class="size-button ${selected ? "is-selected" : ""} ${quantity === 0 ? "out-of-stock" : ""}" data-action="size" data-size="${safeSize}" aria-label="${safeSize}, ${quantity ? `${quantity} left` : "out of stock"}" aria-pressed="${selected}" ${quantity === 0 ? "disabled" : ""}><span>${safeSize}</span><small>${quantity ? `${quantity} left` : "Out of stock"}</small></button>`;
  }).join("");
}

function updateSizeAvailability(product, variant) {
  main.querySelectorAll(`[data-product-card="${product.id}"]`).forEach((card) => {
    const addButton = card.querySelector('[data-action="add"]');
    const inStock = variantHasStock(product, variant);
    addButton.disabled = !inStock;
    addButton.textContent = inStock ? "Add to bag" : "Sold out";
  });
  const sizeOptions = main.querySelector(".size-options");
  const selectedSize = main.querySelector(".size-button.is-selected")?.dataset.size;
  const inStock = variantHasStock(product, variant);
  const stockMessage = main.querySelector(".size-stock-message");
  if (stockMessage) {
    stockMessage.textContent = !inStock
      ? productSizes(product).length
        ? "This color is sold out in every size. Choose another color."
        : "This color is sold out. Choose another color."
      : selectedSize && variant.stock[selectedSize] === 0
        ? `${selectedSize} is out of stock in ${variant.name}. Choose an available size.`
        : "";
  }
  if (sizeOptions) sizeOptions.innerHTML = renderSizeOptions(product, variant, selectedSize);
  updateDisplayedProductPrice(product, selectedPriceSize(product, variant, selectedSize));
  const addButton = main.querySelector(".detail-add-button");
  if (addButton) {
    addButton.disabled = !inStock;
    addButton.innerHTML = inStock ? 'Add to bag <span aria-hidden="true">→</span>' : "Sold out";
  }
}

function productGalleryMarkup(product, variant) {
  return variantImages(variant).map((image, index) => `
    <button type="button" class="thumbnail ${index === 0 ? "is-active" : ""}" data-action="gallery" data-image-index="${index}" aria-label="Product image ${index + 1} of ${escapeHtml(variant.name)}">
      <img src="${escapeHtml(image)}" alt="${escapeHtml(variant.name)} footwear, image ${index + 1}" loading="lazy" />
    </button>`).join("");
}

function updateProductImage(product, variant) {
  const thumbnails = main.querySelector(".gallery-thumbnails");
  if (thumbnails) thumbnails.innerHTML = productGalleryMarkup(product, variant);
  const mainImage = main.querySelector(".gallery-main-image");
  const image = variantImages(variant)[0];
  if (mainImage && image) {
    mainImage.src = image;
    mainImage.alt = `${variant.name} footwear`;
  }
}

function renderColorOptions(product, variant) {
  return product.colors.map((option) => {
    const selected = variant.name === option.name;
    const colorName = escapeHtml(option.name);
    return `<button type="button" class="color-swatch color-swatch-large ${selected ? "is-selected" : ""}" style="--swatch-color:${colorSwatch(option)}" aria-label="${colorName} (${escapeHtml(option.code)})" aria-pressed="${selected}" data-action="color" data-product-id="${product.id}" data-color="${colorName}"><span class="visually-hidden">${colorName}</span></button>`;
  }).join("");
}

function updateProductColor(product, variant) {
  main.querySelectorAll(".detail-color-name").forEach((name) => {
    name.textContent = variant.name;
  });
  main.querySelectorAll(".color-options").forEach((container) => {
    container.innerHTML = renderColorOptions(product, variant);
  });
  updateProductImage(product, variant);
  updateSizeAvailability(product, variant);
}

function imageMarkup(product, extraClass = "", variant = selectedVariant(product)) {
  const image = variantImages(variant)[0] ?? "";
  return `<img class="${extraClass}" src="${escapeHtml(image)}" alt="${escapeHtml(variant.name)} footwear" loading="lazy" />`;
}

function wishlistControlMarkup(product) {
  const saved = currentUser && wishlistProductIds.has(product.id);
  const actionLabel = saved ? "Remove from wishlist" : "Add to wishlist";
  const visibleLabel = saved ? "Added to wishlist" : "Add to wishlist";
  return `<button type="button" class="wishlist-toggle detail-wishlist-toggle" data-action="wishlist-toggle" data-product-id="${product.id}" aria-label="${actionLabel}: ${escapeHtml(product.name)}" aria-pressed="${Boolean(saved)}" title="${actionLabel}">${accountMenuIcons.wishlist}<span class="wishlist-label visually-hidden">${visibleLabel}</span></button>`;
}

function productCard(product, compact = false) {
  const variant = selectedVariant(product);
  const inStock = variantHasStock(product, variant);
  const saved = Boolean(currentUser && wishlistProductIds.has(product.id));
  const wishlistAction = saved ? "Remove from wishlist" : "Add to wishlist";
  const productName = escapeHtml(product.name);
  const variantName = escapeHtml(variant.name);
  const productId = escapeHtml(product.id);
  return `
    <article class="product-card" data-product-card="${productId}">
      <div class="product-image-wrap">
        <a class="product-image" href="#product/${encodeURIComponent(product.id)}" data-route="product" data-product-id="${productId}" aria-label="View ${productName}">
        ${imageMarkup(product, "", variant)}
        <span class="product-tag">${escapeHtml(product.label)}</span>
        <span class="delivery-tag">Fast delivery</span>
        </a>
        <button type="button" class="wishlist-toggle card-wishlist-toggle" data-action="wishlist-toggle" data-product-id="${productId}" aria-label="${wishlistAction}: ${productName}" aria-pressed="${saved}" title="${wishlistAction}">${accountMenuIcons.wishlist}</button>
      </div>
      <div class="product-info">
        <div class="product-title-row"><h3>${productName}</h3><span class="product-brand">${escapeHtml(product.brand)}</span></div>
        <p class="product-description">${compact ? "Everyday comfort, thoughtful details." : escapeHtml(product.description)}</p>
        <div class="card-color-line"><span class="card-color-name">${variantName}</span><div class="card-color-options" aria-label="Choose a color for ${productName}">${product.colors.map((option) => {
          const colorName = escapeHtml(option.name);
          return `<button type="button" class="color-swatch ${variant.name === option.name ? "is-selected" : ""}" style="--swatch-color:${colorSwatch(option)}" aria-label="${colorName} (${escapeHtml(option.code)})" aria-pressed="${variant.name === option.name}" data-action="color" data-product-id="${productId}" data-color="${colorName}"><span class="visually-hidden">${colorName}</span></button>`;
        }).join("")}</div></div>
        <div class="product-buy"><strong>${productPriceLabel(product)}</strong><button class="add-button" type="button" data-action="add" data-product-id="${productId}" ${inStock ? "" : "disabled"}>${inStock ? "Add to bag" : "Sold out"}</button></div>
      </div>
    </article>`;
}

function observeHomeProducts() {
  handleHomeScroll();
}

function handleHomeScroll() {
  if (window.location.hash && !window.location.hash.startsWith("#home")) return;
  const sentinel = main.querySelector("#product-sentinel");
  if (!sentinel || sentinel.getBoundingClientRect().top > window.innerHeight + 250) return;
  const start = Number(sentinel.dataset.loadedCount);
  const batch = products.slice(start, start + homePageSize);
  if (!batch.length) {
    sentinel.remove();
    return;
  }
  main.querySelector("#home-product-grid").insertAdjacentHTML("beforeend", batch.map((product) => productCard(product)).join(""));
  const loadedCount = start + batch.length;
  if (loadedCount >= products.length) {
    sentinel.remove();
  } else {
    sentinel.dataset.loadedCount = String(loadedCount);
    sentinel.querySelector("span").textContent = `${loadedCount} of ${products.length} styles loaded — keep scrolling`;
  }
}

function homeSliderText(record, keys, fallback, maxLength = 180) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value.trim().slice(0, maxLength);
  }
  return fallback;
}

function safeHomeImageSource(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  try {
    const url = new URL(value.trim(), window.location.href);
    if (url.protocol === "https:") return url.href;
    if (url.protocol === "http:" && url.origin === window.location.origin) return url.href;
    console.warn("A home slider image URL must use HTTPS or this site's origin.");
  } catch (error) {
    console.warn("A home slider image URL is invalid.", error);
  }
  return "";
}

function normalizeHomeSliderData(value) {
  const imageKeys = ["image", "imageUrl", "image_url", "img", "imgUrl", "img_url", "banner", "bannerImage", "banner_image", "photo", "url"];
  let entries = [];
  if (Array.isArray(value)) {
    entries = value;
  } else if (value && typeof value === "object") {
    const isSingleSlide = imageKeys.some((key) => Object.prototype.hasOwnProperty.call(value, key));
    entries = isSingleSlide
      ? [value]
      : Object.entries(value).map(([id, slide]) => (
        slide && typeof slide === "object" && !Array.isArray(slide) ? { id, ...slide } : slide
      ));
  }

  return entries.map((entry, index) => {
    const record = typeof entry === "string" ? { image: entry } : entry;
    if (!record || typeof record !== "object" || Array.isArray(record)) return null;
    const activeValue = record.active ?? record.enabled ?? record.isActive ?? record.is_active;
    if ([false, 0, "false", "0", "no"].includes(activeValue)) return null;
    if (["false", "inactive", "disabled", "hidden"].includes(String(record.status ?? "").toLowerCase())) return null;

    let image = "";
    for (const key of imageKeys) {
      image = safeHomeImageSource(record[key]);
      if (image) break;
    }
    if (!image) return null;

    const orderValue = record.order ?? record.position ?? record.sortOrder ?? record.sort_order;
    const order = Number.isFinite(Number(orderValue)) && orderValue !== "" && orderValue != null
      ? Number(orderValue)
      : index;
    return {
      image,
      eyebrow: homeSliderText(record, ["eyebrow", "label", "tagline", "badge"], "", 70),
      title: homeSliderText(record, ["title", "heading", "headline", "name", "text"], "", 100),
      description: homeSliderText(record, ["description", "subtitle", "subTitle", "sub_title", "caption", "body"], "", 220),
      order,
      index,
    };
  }).filter(Boolean).sort((a, b) => a.order - b.order || a.index - b.index).slice(0, 10);
}

function homeSliderSlideMarkup(slide, index) {
  const active = index === homeSliderActiveIndex;
  return `<article class="hero-slide${active ? " is-active" : ""}" data-home-slide="${index}" aria-hidden="${!active}">
    <img class="hero-slide-image" src="${escapeHtml(slide.image)}" alt="" ${active ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
    <div class="hero-image-unavailable" hidden>Featured image unavailable</div>
    <div class="hero-copy">
      ${slide.eyebrow ? `<p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>` : ""}
      ${slide.title ? `<h1 id="hero-title-${index}">${escapeHtml(slide.title)}</h1>` : ""}
      ${slide.description ? `<p class="hero-description">${escapeHtml(slide.description)}</p>` : ""}
    </div>
  </article>`;
}

function renderHomeHero() {
  if (homeSliderState.status === "idle" || homeSliderState.status === "loading") {
    return `<section class="hero hero-loading" aria-label="Featured footwear" aria-busy="true">
      <div class="hero-skeleton-media"></div>
      <div class="hero-copy hero-skeleton-copy"><span class="hero-skeleton-line short"></span><span class="hero-skeleton-line title"></span><span class="hero-skeleton-line title"></span><span class="hero-skeleton-line description"></span></div>
    </section>`;
  }

  if (!homeSliderState.slides.length) {
    return homeSliderState.status === "error"
      ? `<section class="hero-slider-empty" role="status"><div><p class="eyebrow">Featured collections</p><p>Featured images couldn’t be loaded.</p></div><button type="button" class="hero-retry-button" data-action="retry-home-slider">Try again</button></section>`
      : "";
  }
  const slides = homeSliderState.slides;
  homeSliderActiveIndex %= slides.length;
  const errorNote = homeSliderState.status === "error"
    ? `<div class="hero-slider-error" role="status"><span>Featured images couldn’t be loaded.</span><button type="button" class="hero-retry-button" data-action="retry-home-slider">Try again</button></div>`
    : "";
  const controls = slides.length > 1
    ? `<div class="hero-slider-controls" aria-label="Featured slides">
        <button type="button" class="hero-slider-arrow" data-action="home-slide-previous" aria-label="Previous slide">←</button>
        <div class="hero-slider-dots">${slides.map((slide, index) => `<button type="button" class="hero-slider-dot${index === homeSliderActiveIndex ? " is-active" : ""}" data-action="home-slide-select" data-slide-index="${index}" aria-label="Show slide ${index + 1}" aria-current="${index === homeSliderActiveIndex ? "true" : "false"}"></button>`).join("")}</div>
        <button type="button" class="hero-slider-arrow" data-action="home-slide-next" aria-label="Next slide">→</button>
      </div>`
    : "";
  return `<section class="hero home-hero" data-home-hero aria-label="Featured footwear" aria-roledescription="carousel">
    ${slides.map(homeSliderSlideMarkup).join("")}
    ${errorNote}${controls}
  </section>`;
}

function showHomeSlide(index) {
  const hero = main.querySelector("[data-home-hero]");
  if (!hero) return;
  const slides = [...hero.querySelectorAll("[data-home-slide]")];
  if (slides.length < 2) return;
  homeSliderActiveIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === homeSliderActiveIndex;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
  });
  hero.querySelectorAll(".hero-slider-dot").forEach((dot, dotIndex) => {
    const active = dotIndex === homeSliderActiveIndex;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-current", String(active));
  });
}

function stopHomeSliderAutoplay() {
  window.clearInterval(homeSliderAutoplay);
  homeSliderAutoplay = 0;
}

function startHomeSliderAutoplay() {
  stopHomeSliderAutoplay();
  const hero = main.querySelector("[data-home-hero]");
  if (!hero || hero.querySelectorAll("[data-home-slide]").length < 2) return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  homeSliderAutoplay = window.setInterval(() => {
    if (document.hidden || hero.matches(":hover") || hero.contains(document.activeElement)) return;
    showHomeSlide(homeSliderActiveIndex + 1);
  }, 6500);
}

function stopHomeSliderListener() {
  window.clearTimeout(homeSliderTimeout);
  homeSliderTimeout = 0;
  if (homeSliderReference && homeSliderValueListener) {
    homeSliderReference.off("value", homeSliderValueListener);
  }
  homeSliderReference = null;
  homeSliderValueListener = null;
}

function renderHomeIfVisible() {
  if (currentRoute().route === "home") renderHome();
}

function loadHomeSlider(retry = false) {
  if (!retry && (homeSliderReference || homeSliderState.status === "loading")) return;
  if (retry) stopHomeSliderListener();
  const database = firebaseRuntime.database;
  if (!database || typeof database.ref !== "function") {
    const error = firebaseRuntime.databaseError ?? new Error("Firebase Realtime Database is not configured.");
    homeSliderState.status = "error";
    homeSliderState.error = error;
    console.error("Could not load the home slider because Realtime Database is unavailable.", error);
    renderHomeIfVisible();
    return;
  }

  homeSliderState.status = "loading";
  homeSliderState.error = null;
  renderHomeIfVisible();

  let reference;
  try {
    reference = database.ref("image_slider");
    homeSliderReference = reference;
    homeSliderValueListener = (snapshot) => {
      if (homeSliderReference !== reference) return;
      window.clearTimeout(homeSliderTimeout);
      homeSliderTimeout = 0;
      const data = snapshot?.val?.();
      homeSliderState.slides = normalizeHomeSliderData(data);
      homeSliderState.status = homeSliderState.slides.length
        ? "loaded"
        : data == null ? "empty" : "error";
      homeSliderState.error = homeSliderState.status === "error"
        ? new Error("The image_slider data contains no valid HTTPS image entries.")
        : null;
      if (homeSliderState.error) console.error("The home slider data is present but contains no valid slides.", homeSliderState.error);
      homeSliderActiveIndex = 0;
      renderHomeIfVisible();
    };
    const onError = (error) => {
      if (homeSliderReference !== reference) return;
      stopHomeSliderListener();
      homeSliderState.status = "error";
      homeSliderState.error = error;
      console.error("Could not load home slider data from Realtime Database.", error);
      renderHomeIfVisible();
    };
    homeSliderTimeout = window.setTimeout(() => {
      onError(new Error("Timed out while loading home slider data."));
    }, homeSliderLoadTimeoutMs);
    reference.on("value", homeSliderValueListener, onError);
  } catch (error) {
    stopHomeSliderListener();
    homeSliderState.status = "error";
    homeSliderState.error = error;
    console.error("Could not subscribe to the home slider in Realtime Database.", error);
    renderHomeIfVisible();
  }
}

function renderHome() {
  const productState = productCollectionStateMarkup();
  const hasProducts = productLoadStatus === "loaded" && products.length > 0;
  const minimumPrice = hasProducts
    ? Math.min(...products.flatMap(productPriceValues))
    : 0;
  stopHomeSliderAutoplay();
  main.innerHTML = `
    ${renderHomeHero()}
    <section class="trending-section" id="trending" aria-labelledby="trending-title">
      <div class="section-heading">
        <div><p class="eyebrow">The pairs everyone's talking about</p><h2 id="trending-title">Trending now</h2></div>
        <a class="view-all" href="#catalog" data-route="catalog">View all <span aria-hidden="true">→</span></a>
      </div>
      ${hasProducts
        ? `<div class="product-grid">${products.slice(0, 6).map((product) => productCard(product, true)).join("")}</div>`
        : productState}
    </section>
    ${hasProducts ? `<section class="infinite-products" aria-labelledby="all-styles-title">
      <div class="section-heading">
        <div><p class="eyebrow">Good shoes, for all your everyday</p><h2 id="all-styles-title">Explore every style</h2></div>
        <span class="results-count">Prices from ${money(minimumPrice)}</span>
      </div>
      <div class="product-grid catalog-grid home-product-grid" id="home-product-grid">${products.slice(0, homePageSize).map((product) => productCard(product)).join("")}</div>
      ${products.length > homePageSize ? `<div class="product-sentinel" id="product-sentinel" data-loaded-count="${Math.min(homePageSize, products.length)}" aria-live="polite"><span>${Math.min(homePageSize, products.length)} of ${products.length} styles loaded — keep scrolling</span></div>` : ""}
    </section>` : ""}
  `;
  if (hasProducts) observeHomeProducts();
  startHomeSliderAutoplay();
}

function productMatches(product) {
  const query = filters.query.toLowerCase();
  const min = filters.minPrice === "" ? 10 : Number(filters.minPrice);
  const max = filters.maxPrice === "" ? Number.POSITIVE_INFINITY : Number(filters.maxPrice);
  return (!filters.category || filters.category === "Collections" || (filters.category === "New Arrivals" ? ["Just landed", "New"].includes(product.label) : product.category === filters.category))
    && (!query || `${product.name} ${product.brand} ${product.colors.map((variant) => variant.name).join(" ")}`.toLowerCase().includes(query))
    && (filters.sizes.size === 0 || [...filters.sizes].some((size) => productSizes(product).includes(size) && product.colors.some((variant) => variant.stock[size] > 0)))
    && (filters.brands.size === 0 || filters.brands.has(product.brand))
    && productPriceValues(product).some((price) => price >= min && price <= max);
}

function filterCheckbox(label, group) {
  const safeLabel = escapeHtml(label);
  const checked = filters[group].has(label) ? "checked" : "";
  return `<label class="filter-option"><input type="checkbox" data-filter-group="${group}" value="${safeLabel}" ${checked}><span>${safeLabel}</span></label>`;
}

function catalogProductResultsMarkup(filtered) {
  if (productLoadStatus !== "loaded") return productCollectionStateMarkup();
  if (filtered.length) return `<div class="product-grid catalog-grid">${filtered.map((product) => productCard(product)).join("")}</div>`;
  return products.length
    ? '<p class="empty-state">No styles match these filters. Try changing your search or clearing the filters.</p>'
    : productCollectionStateMarkup();
}

function updateCatalogProductResults() {
  const results = main.querySelector(".catalog-product-results");
  const count = main.querySelector(".results-count");
  if (!results || !count) return;
  const filtered = productLoadStatus === "loaded" ? products.filter(productMatches) : [];
  count.textContent = productLoadStatus === "loaded" ? `${filtered.length} styles` : "";
  results.innerHTML = catalogProductResultsMarkup(filtered);
}

function syncPriceRangeControls() {
  const minSlider = main.querySelector('[data-price-slider="min"]');
  const maxSlider = main.querySelector('[data-price-slider="max"]');
  if (!minSlider || !maxSlider) return;

  const overallMax = maximumProductPrice();
  const minValue = Math.min(overallMax, Math.max(10, Number(filters.minPrice) || 10));
  const maxValue = filters.maxPrice === ""
    ? overallMax
    : Math.min(overallMax, Math.max(minValue, Number(filters.maxPrice)));
  const span = Math.max(1, overallMax - 10);
  minSlider.max = String(maxValue);
  minSlider.value = String(minValue);
  maxSlider.min = String(minValue);
  maxSlider.value = String(maxValue);

  const minInput = main.querySelector('[data-price="min"]');
  const maxInput = main.querySelector('[data-price="max"]');
  minInput.value = filters.minPrice;
  maxInput.value = filters.maxPrice;
  minInput.max = String(maxValue);
  maxInput.min = String(minValue);

  const range = main.querySelector(".price-range");
  range.style.setProperty("--price-min", `${((minValue - 10) / span) * 100}%`);
  range.style.setProperty("--price-max", `${((maxValue - 10) / span) * 100}%`);
  const limits = main.querySelector(".price-limits");
  limits.textContent = `${money(minValue)} – ${money(maxValue)}`;
}

function renderCatalog() {
  const filtered = productLoadStatus === "loaded" ? products.filter(productMatches) : [];
  const title = filters.category && filters.category !== "Collections" ? filters.category : filters.category || "All footwear";
  const sizes = availableProductSizes();
  const brands = [...new Set(products.map((product) => product.brand))].sort();
  const maxPrice = maximumProductPrice();
  const minPriceValue = Math.min(maxPrice, Math.max(10, Number(filters.minPrice) || 10));
  const maxPriceValue = filters.maxPrice === ""
    ? maxPrice
    : Math.min(maxPrice, Math.max(minPriceValue, Number(filters.maxPrice)));
  const priceSpan = Math.max(1, maxPrice - 10);
  const minPricePercent = ((minPriceValue - 10) / priceSpan) * 100;
  const maxPricePercent = ((maxPriceValue - 10) / priceSpan) * 100;
  main.innerHTML = `
    <div class="catalog-layout">
      <aside class="filter-sidebar" aria-label="Product filters">
        <div class="filter-group"><h2>Size</h2>${sizes.map((size) => filterCheckbox(size, "sizes")).join("") || '<p class="filter-empty">No sizes available</p>'}</div>
        <div class="filter-group"><h2>Brand</h2>${brands.map((brand) => filterCheckbox(brand, "brands")).join("") || '<p class="filter-empty">No brands available</p>'}</div>
        <div class="filter-group price-filter">
          <h2>Price range</h2>
          <div class="price-range" style="--price-min: ${minPricePercent}%; --price-max: ${maxPricePercent}%;">
            <input type="range" min="10" max="${maxPriceValue}" value="${minPriceValue}" data-price-slider="min" aria-label="Minimum price">
            <input type="range" min="${minPriceValue}" max="${maxPrice}" value="${maxPriceValue}" data-price-slider="max" aria-label="Maximum price">
          </div>
          <div class="price-inputs">
            <label><span class="visually-hidden">Minimum price</span><input type="number" min="10" max="${maxPriceValue}" placeholder="10" value="${filters.minPrice}" data-price="min"></label>
            <span>—</span>
            <label><span class="visually-hidden">Maximum price</span><input type="number" min="${minPriceValue}" max="${maxPrice}" placeholder="${maxPrice}" value="${filters.maxPrice}" data-price="max"></label>
          </div>
          <output class="price-limits">${money(minPriceValue)} – ${money(maxPriceValue)}</output>
        </div>
        <button class="clear-filters" type="button" data-action="clear-filters">Clear all filters</button>
      </aside>
      <section class="catalog-results" aria-labelledby="catalog-title">
        <div class="catalog-heading"><div><p class="eyebrow">Find your next everyday pair</p><h1 id="catalog-title">${title}</h1></div><span class="results-count">${productLoadStatus === "loaded" ? `${filtered.length} styles` : ""}</span></div>
        <div class="catalog-product-results">${catalogProductResultsMarkup(filtered)}</div>
      </section>
    </div>`;
}

function renderProduct(productId) {
  if (productLoadStatus !== "loaded") {
    main.innerHTML = `<section class="simple-page">${productCollectionStateMarkup()}</section>`;
    return;
  }
  const product = products.find((item) => item.id === productId);
  if (!product) {
    main.innerHTML = `<section class="simple-page"><p class="eyebrow">That pair got away</p><h1>We couldn't find that style.</h1><a class="primary-button" href="#catalog" data-route="catalog">Browse all footwear</a></section>`;
    return;
  }
  const productName = escapeHtml(product.name);
  const productBrand = escapeHtml(product.brand);
  const productDescription = escapeHtml(product.description);
  const variantName = escapeHtml(selectedVariant(product).name);
  if (currentUser && purchaseStatus === "idle") {
    if (window.location.protocol === "file:") purchaseStatus = "error";
    else loadUserPurchases(currentUser);
  }
  const variant = selectedVariant(product);
  const hasStock = variantHasStock(product, variant);
  const initialSize = selectedPriceSize(product, variant);
  const initialPrice = priceForSize(product, initialSize);
  const reviews = reviewCache.get(product.id) ?? [];
  const reviewStatus = window.location.protocol === "file:"
    ? "error"
    : reviewLoadStatus.get(product.id) ?? "loading";
  const reviewLabel = reviewStatus === "loading"
    ? "Loading reviews…"
    : reviewStatus === "error"
      ? "Reviews unavailable"
      : reviews.length
        ? `${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}`
        : "Be the first to review";
  const reviewAccess = getReviewAccess(product.id);
  const averageRating = reviews.length
    ? (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1)
    : null;
  main.innerHTML = `
    <section class="detail-page">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#home" data-route="home">Home</a><span>›</span><a href="#catalog/${encodeURIComponent(product.category)}" data-route="catalog" data-category="${product.category}">${escapeHtml(product.category)}</a><span>›</span><span>Shoes</span></nav>
      <div class="detail-layout">
        <div class="detail-gallery">
          <div class="gallery-thumbnails">${productGalleryMarkup(product, variant)}</div>
          <div class="detail-main-image">${imageMarkup(product, "gallery-main-image")}${wishlistControlMarkup(product)}</div>
        </div>
        <div class="detail-info">
          <p class="eyebrow">${productBrand} / ${escapeHtml(product.category)} / Shoes</p>
          <h1>${productName} — <span class="detail-color-name">${variantName}</span></h1>
          <div class="rating"><span aria-label="${averageRating ? `${averageRating} out of 5 stars` : "No ratings yet"}">${averageRating ? "★".repeat(Math.round(Number(averageRating))) : "☆☆☆☆☆"}</span><strong>${averageRating ?? (reviewStatus === "loading" ? "…" : "New")}</strong><button type="button" data-action="reviews">${reviewLabel}</button></div>
          ${productSizes(product).length
            ? `<fieldset class="size-picker"><legend>Choose your size</legend><div class="size-options">${renderSizeOptions(product, variant)}</div><p class="size-stock-message" role="status">${hasStock ? "" : "This color is sold out in every size. Choose another color."}</p></fieldset>`
            : `<p class="size-stock-message" role="status">${hasStock ? "" : "This color is sold out. Choose another color."}</p>`}
          <div class="detail-price"><div class="detail-price-values"><span>Offer price</span><strong class="detail-current-price">${money(initialPrice.price)}</strong><del class="detail-current-mrp">MRP ${money(initialPrice.mrp)}</del></div><span class="discount-pill detail-discount">${discountPercent(product, initialSize)}% off</span></div>
          <p class="detail-description">${productDescription}</p>
          <fieldset class="color-picker"><legend>Color: <span class="detail-color-name">${variant.name}</span></legend><div class="color-options">${renderColorOptions(product, variant)}</div></fieldset>
          <ul class="feature-list"><li>Free delivery on orders above ₹999</li><li>Fast delivery options available to Gangasagar</li><li>Breathable lining and cushioned everyday comfort</li></ul>
          <div class="detail-product-actions"><button type="button" class="primary-button detail-add-button" data-action="add" data-product-id="${escapeHtml(product.id)}" ${hasStock ? "" : "disabled"}>${hasStock ? 'Add to bag <span aria-hidden="true">→</span>' : "Sold out"}</button></div>
          <p class="delivery-note">Free delivery above ₹999 · Secure transaction</p>
        </div>
      </div>
      <section class="product-benefits" aria-label="Shopping benefits">
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h16v13H4zM8 7V4h8v3M8 12h8" /></svg></span><strong>No returns or exchanges</strong><span>Replacement only for defective or incorrect items</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M2 7h13v11H2zM15 11h4l3 3v4h-7zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg></span><strong>Free delivery</strong><span>On orders above ₹999</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg></span><strong>Top brand</strong><span>${productBrand} footwear</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 11-13h-7l1-7Z" /></svg></span><strong>Fast delivery</strong><span>Quick dispatch to your address</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></svg></span><strong>Secure transaction</strong><span>Protected checkout</span></article>
      </section>
      <section class="reviews-section" id="reviews" aria-labelledby="reviews-title">
        <div class="reviews-heading"><div><p class="eyebrow">Your experience matters</p><h2 id="reviews-title">Ratings &amp; reviews</h2></div><div class="reviews-average"><strong>${averageRating ?? "—"}</strong><span>${averageRating ? "★★★★★" : "☆☆☆☆☆"}</span><small>${reviewStatus === "loading" ? "Loading…" : reviewStatus === "error" ? "Unavailable" : `${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}`}</small></div></div>
        <div class="reviews-layout${reviewAccess.reason === "purchase-error" ? " reviews-layout-no-form" : ""}">
          ${renderReviewAccess(product.id, reviewAccess)}
          <div class="review-list" aria-live="polite">${renderReviewList(product.id)}</div>
        </div>
      </section>
    </section>`;
  if (firebaseIsReady() && window.location.protocol !== "file:" && !reviewCache.has(product.id)) {
    void loadProductReviews(product.id);
  }
}

function normalizeEmail(email) {
  return String(email ?? "").trim().toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function savedAddressRecords() {
  return Array.isArray(savedAddresses)
    ? savedAddresses.filter((address) => (
      address
      && typeof address === "object"
      && !Array.isArray(address)
      && typeof address.id === "string"
      && address.id.trim()
    ))
    : [];
}

function firebaseIsReady() {
  const config = window.POPULAR_FOOTWEAR_FIREBASE_CONFIG;
  return firebaseRuntime.status === "ready"
    && Boolean(firebaseAuth && firestoreIsConfigured());
}

function firestoreIsConfigured() {
  const config = window.POPULAR_FOOTWEAR_FIREBASE_CONFIG;
  return Boolean(config?.projectId && config?.firestoreDatabaseId);
}

function isProductAdmin() {
  return currentUser?.uid === productAdminUid;
}

function firebaseSetupMessage() {
  if (firebaseRuntime.status === "sdk-unavailable") return "The Firebase SDK could not load. Check your internet connection and reload.";
  if (firebaseRuntime.status === "error") return "Firebase could not initialize. Check the browser console and Firebase Web App config.";
  return "Firebase is not configured yet. Add your public Web App config to assets/js/firebase-config.js.";
}

function getAuthErrorMessage(error) {
  const messages = {
    "auth/email-already-in-use": "That email already has an account. Sign in instead.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/invalid-credential": "The email or password is incorrect.",
    "auth/operation-not-allowed": "Enable Email/Password sign-in in Firebase Authentication settings.",
    "auth/too-many-requests": "Too many attempts. Wait a little and try again.",
    "auth/weak-password": "Choose a stronger password with at least 8 characters.",
    "auth/network-request-failed": "Firebase could not connect. Check your internet connection.",
    "auth/user-disabled": "This account is disabled. Contact the store administrator.",
    "auth/unauthorized-domain": "This website is not authorized for Firebase sign-in. Add its domain in Firebase Authentication settings.",
    "auth/invalid-api-key": "Firebase sign-in is not configured correctly. Check the Firebase Web App configuration.",
  };
  return messages[error.code] ?? "Firebase sign-in failed. Check your details and try again.";
}

async function loadUserPurchases(user) {
  if (!firebaseIsReady() || !user) return;
  purchaseStatus = "loading";
  try {
    const purchases = await withFirestoreReadTimeout(
      readFirestoreRestCollection(user, `user/${user.uid}/purchases`),
      "purchases",
    );
    if (currentUser?.uid !== user.uid) return;
    purchasedProductIds.clear();
    purchases.forEach((purchase) => purchasedProductIds.add(purchase.id));
    purchaseStatus = "loaded";
  } catch (error) {
    if (currentUser?.uid !== user.uid) return;
    purchaseStatus = "error";
    console.error("Could not load this user's purchase records from Firestore.", error);
  } finally {
    if (currentUser?.uid === user.uid && currentRoute().route === "product") {
      renderProduct(currentRoute().value);
    }
  }
}

function getReviewAccess(productId) {
  if (!firebaseIsReady()) return { allowed: false, reason: "firebase" };
  if (!authStateReady) return { allowed: false, reason: "auth-loading" };
  if (!currentUser) return { allowed: false, reason: "sign-in" };
  if (purchaseStatus === "loading" || purchaseStatus === "idle") return { allowed: false, reason: "purchase-loading" };
  if (purchaseStatus === "error") return { allowed: false, reason: "purchase-error" };
  if (!purchasedProductIds.has(productId)) return { allowed: false, reason: "purchase" };
  if (reviewLoadStatus.get(productId) === "error") return { allowed: false, reason: "review-error" };
  if (reviewLoadStatus.get(productId) !== "loaded") return { allowed: false, reason: "review-loading" };
  if ((reviewCache.get(productId) ?? []).some((review) => review.userId === currentUser.uid)) {
    return { allowed: false, reason: "reviewed" };
  }
  return { allowed: true };
}

function renderReviewAccess(productId, access) {
  if (access.allowed) {
    return `<form class="review-form" id="product-review-form" data-product-id="${escapeHtml(productId)}">
      <h3>Write a review</h3>
      <fieldset class="review-rating-picker"><legend>Your rating</legend><div class="review-star-options">${[1, 2, 3, 4, 5].map((score) => `<label><input type="radio" name="rating" value="${score}" aria-label="${score} ${score === 1 ? "star" : "stars"}" required><span aria-hidden="true">★</span></label>`).join("")}</div></fieldset>
      <label>Your review<textarea name="review" rows="4" minlength="8" maxlength="800" placeholder="What did you think of this pair?" required></textarea></label>
      <label>Your name <span class="optional-label">(optional)</span><input name="reviewer" type="text" maxlength="40" placeholder="Name" /></label>
      <button class="primary-button" type="submit">Submit review</button>
      <p class="review-demo-note">Reviews are linked to your Firebase account. Demo orders are not payment verified.</p>
    </form>`;
  }
  if (access.reason === "firebase") {
    return `<div class="review-access-gate"><h3>Connect Firebase to review</h3><p>${escapeHtml(firebaseSetupMessage())}</p></div>`;
  }
  if (access.reason === "auth-loading" || access.reason === "purchase-loading" || access.reason === "review-loading") {
    return `<div class="review-access-gate"><h3>Checking review access</h3><p>Loading your account and purchase history…</p></div>`;
  }
  if (access.reason === "purchase-error") {
    return "";
  }
  if (access.reason === "review-error") {
    return `<div class="review-access-gate"><h3>Review form unavailable</h3><p>Review access will be checked again after the reviews load successfully.</p></div>`;
  }
  if (access.reason === "sign-in") {
    return `<div class="review-access-gate"><h3>Sign in to review</h3><p>Only signed-in customers with a completed demo order for this product can leave a review.</p><a class="primary-button" href="#account" data-route="account">Sign in</a></div>`;
  }
  if (access.reason === "purchase") {
    return `<div class="review-access-gate"><h3>Completed purchase required</h3><p>Complete a demo checkout with this Firebase account before reviewing this product.</p><a class="secondary-button" href="#catalog" data-route="catalog">Continue shopping</a></div>`;
  }
  return `<div class="review-access-gate"><h3>Review already submitted</h3><p>You can leave one review for this product from this signed-in account.</p></div>`;
}

function loadProductReviews(productId, retry = false) {
  if (!firebaseIsReady()) return Promise.resolve();
  if (reviewLoads.has(productId)) return reviewLoads.get(productId);
  if (!retry && ["loaded", "error"].includes(reviewLoadStatus.get(productId))) return Promise.resolve();

  const retryingAfterError = reviewLoadStatus.get(productId) === "error";
  reviewLoadStatus.set(productId, "loading");
  reviewLoadErrors.delete(productId);
  const request = withFirestoreReadTimeout(
    readFirestoreRestCollection(currentUser, `products/${productId}/reviews`),
    "product reviews",
    reviewLoadTimeoutMs,
  ).then((documents) => {
      const reviews = documents.map((data) => {
        const createdAt = dateFromFirestoreValue(data.createdAt);
        return {
          userId: data.userId,
          name: data.name,
          rating: data.rating,
          text: data.text,
          date: createdAt instanceof Date && !Number.isNaN(createdAt.getTime())
            ? createdAt.toISOString()
            : "",
        };
      }).filter((review) => {
        const valid = typeof review.userId === "string"
          && typeof review.name === "string"
          && Number.isInteger(review.rating)
          && review.rating >= 1
          && review.rating <= 5
          && typeof review.text === "string"
          && review.date !== "";
        if (!valid) console.error(`Ignoring malformed Firestore review for product "${productId}".`);
        return valid;
      }).sort((left, right) => Date.parse(right.date) - Date.parse(left.date));
      reviewCache.set(productId, reviews);
      reviewLoadStatus.set(productId, "loaded");
      reviewLoadErrors.delete(productId);
    })
    .catch((error) => {
      reviewLoadStatus.set(productId, "error");
      reviewLoadErrors.set(productId, error);
      console.error(`Could not load reviews for product "${productId}" from Firestore.`, error);
    })
    .finally(() => {
      reviewLoads.delete(productId);
      const route = currentRoute();
      if (route.route === "product" && route.value === productId) renderProduct(productId);
    });
  reviewLoads.set(productId, request);
  if (retryingAfterError && currentRoute().route === "product" && currentRoute().value === productId) {
    renderProduct(productId);
  }
  return request;
}

function reviewLoadErrorMessage(error) {
  if (firestoreAppCheckEnforcementError(error)) {
    return "Firestore is blocking this request because App Check enforcement is enabled. This app uses Authentication and Firestore rules instead; disable App Check enforcement in Firebase Console, then try again.";
  }
  if (error?.code === "permission-denied") {
    return "Firestore denied access. Check that public review reads are allowed and the rules are deployed to the named default database.";
  }
  return "There was a problem connecting to reviews. Check your connection and try again.";
}

function firestoreAppCheckEnforcementError(error) {
  return typeof error?.message === "string" && /app.?check/i.test(error.message);
}

function renderReviewList(productId) {
  if (window.location.protocol === "file:") {
    return `<div class="review-state review-load-error" role="status"><span class="review-state-icon" aria-hidden="true">!</span><div><h3>Open the store over HTTP(S)</h3><p>Reviews need a web origin to connect to Firebase. Start the local web server and reload this page.</p></div></div>`;
  }
  if (!firebaseIsReady()) {
    return `<div class="review-state review-load-error" role="status"><span class="review-state-icon" aria-hidden="true">!</span><div><h3>Reviews are unavailable</h3><p>${escapeHtml(firebaseSetupMessage())}</p></div></div>`;
  }
  if (reviewLoadStatus.get(productId) === "loading" || !reviewLoadStatus.has(productId)) {
    return `<div class="review-list-skeleton" aria-label="Loading reviews" aria-busy="true">
      ${Array.from({ length: 2 }, () => `<article class="review-skeleton-card"><span class="skeleton-block review-skeleton-name"></span><span class="skeleton-block review-skeleton-stars"></span><span class="skeleton-block review-skeleton-line"></span><span class="skeleton-block review-skeleton-line review-skeleton-line-short"></span></article>`).join("")}
    </div>`;
  }
  if (reviewLoadStatus.get(productId) === "error") {
    return `<div class="review-state review-load-error" role="alert"><span class="review-state-icon" aria-hidden="true">!</span><div><h3>Reviews couldn’t be loaded</h3><p>${escapeHtml(reviewLoadErrorMessage(reviewLoadErrors.get(productId)))}</p><button class="secondary-button" type="button" data-action="retry-reviews" data-product-id="${escapeHtml(productId)}">Try again</button></div></div>`;
  }
  const reviews = reviewCache.get(productId) ?? [];
  if (!reviews.length) {
    return `<div class="review-state review-empty-state"><span class="review-empty-icon" aria-hidden="true">☆</span><div><h3>No reviews yet</h3><p>Be the first to share your experience with this pair.</p></div></div>`;
  }
  return reviews.map((review) => `
    <article class="review-card">
      <div class="review-card-heading"><strong>${escapeHtml(review.name || "Customer")}</strong><time datetime="${escapeHtml(review.date)}">${new Date(review.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</time></div>
      <p class="review-card-stars" aria-label="${review.rating} out of 5 stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
      <p>${escapeHtml(review.text)}</p>
    </article>`).join("");
}

async function submitProductReview(form) {
  const productId = form.dataset.productId;
  if (!firebaseIsReady() || !currentUser || !getReviewAccess(productId).allowed) {
    showToast("Sign in and complete a demo order for this product before reviewing.");
    renderProduct(productId);
    return;
  }
  const reviewText = form.elements.review.value.trim();
  if (reviewText.length < 8) {
    form.elements.review.setCustomValidity("Please enter at least 8 characters.");
    form.reportValidity();
    form.elements.review.setCustomValidity("");
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  const createdAt = Date.now();
  const review = {
    userId: currentUser.uid,
    name: form.elements.reviewer.value.trim().slice(0, 40) || "Customer",
    rating: Number(form.elements.rating.value),
    text: reviewText.slice(0, 800),
    date: new Date(createdAt).toISOString(),
  };
  try {
    await firestoreRestRequest(currentUser, `products/${productId}/reviews`, "POST", {
      userId: currentUser.uid,
      productId,
      name: review.name,
      rating: review.rating,
      text: review.text,
      createdAt,
    }, { documentId: currentUser.uid });
    reviewCache.set(productId, [review, ...(reviewCache.get(productId) ?? [])]);
    reviewLoadStatus.set(productId, "loaded");
    renderProduct(productId);
    showToast("Thank you — your review has been added.");
    main.querySelector("#reviews")?.scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.error("Could not save your product review to Firestore.", error);
    showToast("Your review could not be saved. Check your purchase eligibility and try again.");
    submitButton.disabled = false;
  }
}

async function orderApiRequest(action, data = {}, authenticated = true) {
  if (window.location.protocol === "file:") {
    throw new Error("Open the storefront over HTTP(S) to use secure checkout.");
  }
  const headers = { "Content-Type": "application/json" };
  if (authenticated) {
    const user = firebaseAuth?.currentUser;
    if (!user) throw new Error("Sign in to continue.");
    headers.Authorization = `Bearer ${await user.getIdToken()}`;
  }
  const response = await fetch(new URL("/api/orders", window.location.origin), {
    method: "POST",
    headers,
    body: JSON.stringify({ action, ...data }),
  });
  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error("The order service is unavailable. Deploy the Firebase Functions API and its Hosting rewrite, then try again.");
  }
  if (!response.ok) {
    const error = new Error(typeof result.message === "string" ? result.message : "The order service could not complete the request.");
    error.code = typeof result.error === "string" ? result.error : "internal";
    error.status = response.status;
    throw error;
  }
  return result;
}

function accountAuthField(name, label, type, placeholder, autocomplete, options = {}) {
  const inputId = `account-${name}`;
  const passwordToggle = options.passwordToggle
    ? `<button class="auth-password-toggle" type="button" data-action="toggle-password" data-password-target="${name}" aria-controls="${inputId}" aria-label="Show ${label.toLowerCase()}" aria-pressed="false">${authFieldIcons.eye}</button>`
    : "";
  const inputMode = options.inputMode ? ` inputmode="${options.inputMode}"` : "";
  const maxLength = options.maxLength ? ` maxlength="${options.maxLength}"` : "";
  const minLength = options.minLength ? ` minlength="${options.minLength}"` : "";
  return `<label class="auth-field" for="${inputId}">${label}<span class="auth-input-wrap"><span class="auth-field-icon" aria-hidden="true">${authFieldIcons[name] ?? authFieldIcons.user}</span><input id="${inputId}" type="${type}" name="${name}" autocomplete="${autocomplete}" placeholder="${placeholder}"${inputMode}${maxLength}${minLength} required>${passwordToggle}</span></label>`;
}

function renderAccountLoading() {
  main.innerHTML = `<section class="simple-page account-page auth-page"><div class="auth-card auth-loading-card" aria-busy="true"><div class="auth-loading-heading"><span class="auth-loading-icon skeleton-block"></span><div class="auth-loading-copy"><span class="skeleton-block"></span><span class="skeleton-block"></span></div></div><div class="auth-loading-fields" aria-hidden="true"><span class="skeleton-block"></span><span class="skeleton-block"></span><span class="skeleton-block"></span></div><p role="status">Checking your sign-in status…</p></div></section>`;
}

function renderFirebaseAccount() {
  if (!firebaseIsReady()) {
    main.innerHTML = `<section class="simple-page account-page auth-page"><div class="auth-card auth-status-card" role="alert"><span class="auth-status-icon" aria-hidden="true">!</span><p class="eyebrow">Account unavailable</p><h1>Sign-in needs setup</h1><p>${escapeHtml(firebaseSetupMessage())}</p><p class="auth-status-help">Once Firebase Authentication and the web app configuration are ready, you can sign in or create an account here.</p><a class="secondary-button" href="#home" data-route="home">Continue browsing</a></div></section>`;
    return;
  }
  if (!authStateReady) {
    renderAccountLoading();
    return;
  }
  if (currentUser) {
    const profileName = userProfile?.name ?? currentUser.displayName ?? "";
    let profileMessage = "";
    if (profileStatus === "saving") profileMessage = "Saving your account profile…";
    else if (profileStatus === "loading") profileMessage = "Loading your account profile…";
    else if (window.location.protocol === "file:") {
      profileMessage = `<div class="account-profile-notice"><strong>Open the storefront over HTTP(S)</strong><p>This local file can show your sign-in, but Firestore account features need a web address. Create the default database and deploy the current rules.</p></div>`;
    }
    else if (profileStatus === "error") {
      profileMessage = `<div class="account-profile-notice"><strong>Profile details could not be saved</strong><p>Check your connection and confirm firestore.rules are deployed to the configured Firestore database, then try again.</p><button class="text-button" type="button" data-action="retry-profile">Try again</button></div>`;
    } else if (profileStatus === "missing") {
      const profileNameValue = escapeHtml(pendingProfileName || currentUser.displayName || "");
      profileMessage = `<div class="account-profile-notice"><strong>Finish setting up your profile</strong><p>Your sign-in exists, but its Firestore profile is missing or incomplete. Add your name to save the profile. Passwords are managed by Firebase Authentication and are never saved here.</p></div><form class="account-form profile-recovery-form" id="profile-recovery-form"><label>Full name<input name="name" autocomplete="name" maxlength="80" value="${profileNameValue}" required></label><button class="primary-button" type="submit">Save profile</button></form>`;
    }
    const profileEditor = profileEditing
      ? `<form class="account-form profile-edit-form" id="profile-edit-form"><label>Full name<input name="name" autocomplete="name" maxlength="80" value="${escapeHtml(profileName)}" required></label><div class="profile-edit-actions"><button class="primary-button" type="submit">Save changes</button><button class="secondary-button" type="button" data-action="cancel-edit-profile">Cancel</button></div></form>`
      : "";
    const profileActions = profileEditing
      ? ""
      : `<div class="profile-card-actions"><button class="secondary-button" type="button" data-action="edit-profile">Edit profile</button><button class="secondary-button" type="button" data-action="sign-out">Sign out</button></div>`;
    const profileContent = `<section class="account-profile-card"><div class="account-profile-summary"><span class="account-profile-avatar" aria-hidden="true">${accountMenuIcons.profile}</span><div><strong>${escapeHtml(profileName || "Account holder")}</strong><span>${escapeHtml(currentUser.email ?? "")}</span></div></div>${profileEditor}${profileMessage ? `<div class="account-profile-message">${profileMessage}</div>` : ""}<div class="account-profile-details"><div><span>Account status</span><strong>Signed in</strong></div><div><span>Checkout</span><strong>Demo only · no payment collected</strong></div></div>${profileActions}</section>`;
    accountFeaturePage("Profile", "Manage your account and shopping preferences.", accountMenuIcons.profile, profileContent);
    return;
  }

  const signingUp = accountMode === "sign-up";
  const title = signingUp ? "Create your account" : "Sign in";
  const description = signingUp
    ? "Join us to save favorite pairs and keep your delivery details close."
    : "Welcome back. Sign in to manage your orders and saved pairs.";
  if (signingUp) {
    const first = Math.floor(Math.random() * 9) + 1;
    const second = Math.floor(Math.random() * 9) + 1;
    captchaChallenge = { question: `${first} + ${second}`, answer: String(first + second) };
  }
  const nameField = signingUp ? accountAuthField("name", "Full name", "text", "Your name", "name", { maxLength: 80 }) : "";
  const confirmationField = signingUp
    ? `${accountAuthField("confirmPassword", "Confirm password", "password", "Re-enter your password", "new-password", { minLength: 8, passwordToggle: true })}
      <fieldset class="captcha-field auth-captcha-field"><legend>Quick security check</legend><div class="captcha-question" id="captcha-question" aria-live="polite">What is ${captchaChallenge.question}?</div><div class="captcha-row">${accountAuthField("captchaAnswer", "Your answer", "text", "Enter the answer", "off", { inputMode: "numeric" })}<button class="secondary-button" type="button" data-action="refresh-captcha" aria-label="Generate a new math question">New question</button></div><small>This quick check helps protect account creation.</small></fieldset>`
    : "";
  const passwordField = accountAuthField("password", "Password", "password", signingUp ? "At least 8 characters" : "Enter your password", signingUp ? "new-password" : "current-password", { minLength: signingUp ? 8 : 6, passwordToggle: true });
  const emailField = accountAuthField("email", "Email address", "email", "name@example.com", "email");
  main.innerHTML = `<section class="simple-page account-page auth-page"><div class="auth-card"><header class="auth-card-heading"><img class="auth-store-illustration" src="assets/images/store.png" alt="Popular Footwear storefront illustration"><div><p class="eyebrow">${signingUp ? "A better fit starts here" : "Good to have you here"}</p><h1>${title}</h1><p>${description}</p></div></header><form class="account-form auth-form" id="account-form" novalidate>${nameField}${emailField}${passwordField}${confirmationField}<button class="primary-button auth-submit-button" type="submit"><span>${signingUp ? "Create account" : "Sign in"}</span><span class="auth-submit-arrow" aria-hidden="true">→</span></button></form><div class="auth-mode-switch"><span>${signingUp ? "Already have an account?" : "New to Popular Footwear?"}</span><button class="text-button" type="button" data-action="toggle-auth-mode">${signingUp ? "Sign in" : "Create an account"}</button></div><p class="auth-security-note">${accountMenuIcons.privacy}<span>Your password is protected by Firebase Authentication.</span></p></div></section>`;
}

function updateAccountMenu() {
  if (!accountMenu || !accountButton) return;
  if (!authStateReady) {
    accountMenu.innerHTML = `<p class="account-menu-heading" role="presentation"><strong>Account</strong><small>Checking sign-in status…</small></p><a class="account-menu-item" role="menuitem" href="#privacy" data-route="privacy">${accountMenuIcons.privacy}<span>Privacy policy</span></a><a class="account-menu-item" role="menuitem" href="#contact" data-route="contact">${accountMenuIcons.contact}<span>Contact us</span></a>`;
  } else if (currentUser) {
    const name = userProfile?.name ?? currentUser.displayName ?? "Your account";
    const adminMenuItems = isProductAdmin()
      ? `<a class="account-menu-item" role="menuitem" href="#admin-orders" data-route="admin-orders">${accountMenuIcons.manageOrders}<span>Manage orders</span></a><a class="account-menu-item" role="menuitem" href="#add-product" data-route="add-product">${accountMenuIcons.addProduct}<span>Add product</span></a><a class="account-menu-item" role="menuitem" href="#admin-slider" data-route="admin-slider">${accountMenuIcons.manageSlider}<span>Manage image slider</span></a>`
      : "";
    accountMenu.innerHTML = `<p class="account-menu-heading" role="presentation"><strong>${escapeHtml(name)}</strong><small>${escapeHtml(currentUser.email ?? "")}</small></p><a class="account-menu-item" role="menuitem" href="#account" data-route="account">${accountMenuIcons.profile}<span>Profile</span></a><a class="account-menu-item" role="menuitem" href="#orders" data-route="orders">${accountMenuIcons.orders}<span>My Orders</span></a><a class="account-menu-item" role="menuitem" href="#wishlist" data-route="wishlist">${accountMenuIcons.wishlist}<span>Wishlist</span></a><a class="account-menu-item" role="menuitem" href="#addresses" data-route="addresses">${accountMenuIcons.addresses}<span>Your Addresses</span></a>${adminMenuItems}<button class="account-menu-item" role="menuitem" type="button" data-action="sign-out">${accountMenuIcons.signOut}<span>Log out</span></button><a class="account-menu-item" role="menuitem" href="#privacy" data-route="privacy">${accountMenuIcons.privacy}<span>Privacy policy</span></a><a class="account-menu-item" role="menuitem" href="#contact" data-route="contact">${accountMenuIcons.contact}<span>Contact us</span></a>`;
  } else {
    accountMenu.innerHTML = `<p class="account-menu-heading" role="presentation"><strong>Welcome</strong><small>Sign in to manage your account and orders.</small></p><a class="account-menu-item" role="menuitem" href="#account" data-route="account">${accountMenuIcons.signIn}<span>Sign in</span></a><button class="account-menu-item" role="menuitem" type="button" data-action="menu-sign-up">${accountMenuIcons.signUp}<span>Create account</span></button><a class="account-menu-item" role="menuitem" href="#privacy" data-route="privacy">${accountMenuIcons.privacy}<span>Privacy policy</span></a><a class="account-menu-item" role="menuitem" href="#contact" data-route="contact">${accountMenuIcons.contact}<span>Contact us</span></a>`;
  }
}

function setAccountMenuOpen(open) {
  if (!accountButton || !accountMenu) return;
  accountMenu.hidden = !open;
  accountButton.setAttribute("aria-expanded", String(open));
}

function setFieldError(input, message) {
  const errorId = `${input.name || input.id}-error`;
  let error = document.getElementById(errorId);
  if (!message) {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
    error?.remove();
    return;
  }
  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", errorId);
  if (!error) {
    error = document.createElement("small");
    error.id = errorId;
    error.className = "field-error";
    input.closest("label")?.append(error);
  }
  error.textContent = message;
}

function showAccountFormError(form, message) {
  let error = form.querySelector(".auth-form-error");
  if (!error) {
    error = document.createElement("p");
    error.className = "auth-form-error";
    error.setAttribute("role", "alert");
    form.insertBefore(error, form.querySelector('button[type="submit"]'));
  }
  error.textContent = message;
}

function clearAccountFormError(form) {
  form.querySelector(".auth-form-error")?.remove();
}

function validateAccountField(form, fieldName) {
  const signingUp = accountMode === "sign-up";
  const field = form.elements.namedItem(fieldName);
  if (!field) return true;
  const value = field.value.trim();
  let message = "";

  if (fieldName === "name" && signingUp && !value) {
    message = "Enter your name.";
  } else if (fieldName === "email") {
    if (!value) message = "Enter your email address.";
    else if (!field.validity.valid) message = "Enter a valid email address (for example, name@example.com).";
  } else if (fieldName === "password") {
    if (!field.value) message = "Enter your password.";
    else if (signingUp && field.value.length < 8) message = "Use at least 8 characters for your password.";
    else if (!signingUp && field.value.length < 6) message = "Password must be at least 6 characters.";
  } else if (fieldName === "confirmPassword" && signingUp) {
    if (!field.value) message = "Confirm your password.";
    else if (field.value !== form.elements.password.value) message = "Passwords do not match.";
  } else if (fieldName === "captchaAnswer" && signingUp) {
    if (!value) message = "Solve the math question to continue.";
    else if (!captchaChallenge || value !== captchaChallenge.answer) message = "That answer is incorrect. Try again.";
  }

  setFieldError(field, message);
  return !message;
}

function validateAccountForm(form, validateAll = false) {
  const fields = accountMode === "sign-up"
    ? ["name", "email", "password", "confirmPassword", "captchaAnswer"]
    : ["email", "password"];
  let isValid = true;
  fields.forEach((fieldName) => {
    const field = form.elements.namedItem(fieldName);
    if (!field) return;
    if (validateAll || field.dataset.validationTouched === "true") {
      if (!validateAccountField(form, fieldName)) isValid = false;
    }
  });
  if (validateAll && !isValid) {
    form.querySelector('[aria-invalid="true"]')?.focus();
  }
  return isValid;
}

async function saveUserProfile(user, name) {
  const createdAt = Date.now();
  const profile = {
    id: user.uid,
    uid: user.uid,
    name,
    fullName: name,
    email: user.email,
    createdAt,
  };
  await writeFirestoreRestDocument(user, "user", user.uid, profile);
  userProfile = profile;
  profileStatus = "ready";
  pendingProfileName = "";
  updateAccountMenu();
}

function isCompleteUserProfile(profile, user) {
  const allowedFields = ["id", "uid", "name", "fullName", "email", "createdAt"];
  return Object.keys(profile).every((key) => allowedFields.includes(key))
    && allowedFields.every((key) => Object.prototype.hasOwnProperty.call(profile, key))
    && profile.id === user.uid
    && profile.uid === user.uid
    && typeof profile.name === "string"
    && profile.name.trim().length > 0
    && profile.fullName === profile.name
    && profile.email === user.email
    && (Number.isSafeInteger(profile.createdAt) || profile.createdAt instanceof Date || typeof profile.createdAt?.toDate === "function");
}

async function loadUserProfile(user) {
  profileStatus = "loading";
  try {
    const profile = await readFirestoreRestDocument(user, "user", user.uid);
    if (currentUser?.uid !== user.uid) return;
    if (profile && isCompleteUserProfile(profile, user)) {
      userProfile = profile;
      pendingProfileName = "";
      profileStatus = "ready";
    } else {
      userProfile = null;
      pendingProfileName = typeof profile?.name === "string" && profile.name.trim()
        ? profile.name.trim()
        : user.displayName ?? "";
      profileStatus = "missing";
    }
  } catch (error) {
    if (currentUser?.uid !== user.uid) return;
    userProfile = null;
    profileStatus = "error";
    console.error("Could not load this user's Firestore profile.", error);
  } finally {
    if (currentUser?.uid === user.uid) {
      updateAccountMenu();
      if (currentRoute().route === "account") renderFirebaseAccount();
    }
  }
}

function refreshCaptcha(form) {
  const first = Math.floor(Math.random() * 9) + 1;
  const second = Math.floor(Math.random() * 9) + 1;
  captchaChallenge = { question: `${first} + ${second}`, answer: String(first + second) };
  const question = form.querySelector("#captcha-question");
  if (question) question.textContent = `What is ${captchaChallenge.question}?`;
  form.elements.captchaAnswer.value = "";
}

async function retryProfileSync() {
  if (!currentUser) return;
  if (window.location.protocol === "file:") {
    showToast(accountDataSetupHint());
    return;
  }
  if (!pendingProfileName) {
    await loadUserProfile(currentUser);
    return;
  }
  profileStatus = "saving";
  renderFirebaseAccount();
  try {
    await saveUserProfile(currentUser, pendingProfileName);
    renderFirebaseAccount();
    showToast("Your account profile has been saved.");
  } catch (error) {
    profileStatus = "error";
    console.error("Could not save this user's Firestore profile.", error);
    renderFirebaseAccount();
    showToast("Your profile could not be saved. Check your connection and try again.");
  }
}

async function saveRecoveredUserProfile(form) {
  if (!currentUser || !form.reportValidity()) return;
  const user = currentUser;
  const name = form.elements.name.value.trim();
  if (!name) return;
  pendingProfileName = name;
  profileStatus = "saving";
  renderFirebaseAccount();
  try {
    await saveUserProfile(user, name);
    if (currentUser?.uid !== user.uid) return;
    renderFirebaseAccount();
    showToast("Your account profile has been saved.");
  } catch (error) {
    if (currentUser?.uid !== user.uid) return;
    profileStatus = "error";
    console.error("Could not save this user's Firestore profile.", error);
    renderFirebaseAccount();
    showToast("Your profile could not be saved. Check your Firestore setup and try again.");
  }
}

async function saveEditedUserProfile(form) {
  if (!currentUser || !form.reportValidity()) return;
  const user = currentUser;
  const name = form.elements.name.value.trim();
  if (!name) return;
  profileStatus = "saving";
  renderFirebaseAccount();
  try {
    await saveUserProfile(user, name);
    if (typeof user.updateProfile === "function") {
      await user.updateProfile({ displayName: name });
    }
    if (currentUser?.uid !== user.uid) return;
    profileEditing = false;
    profileStatus = "ready";
    renderFirebaseAccount();
    showToast("Your profile has been updated.");
  } catch (error) {
    if (currentUser?.uid !== user.uid) return;
    profileStatus = "error";
    profileEditing = false;
    console.error("Could not update this user's profile.", error);
    renderFirebaseAccount();
    showToast("Your profile could not be updated. Please try again.");
  }
}

function continueCheckout() {
  window.alert("Coming Soon");
}

async function handleAccountSubmit(form) {
  if (!validateAccountForm(form, true)) return;
  if (!firebaseIsReady()) {
    showAccountFormError(form, firebaseSetupMessage());
    return;
  }
  if (window.location.protocol === "file:") {
    showAccountFormError(form, 'This page is opened as a local file, which Firebase cannot use. In the project folder, run "python -m http.server 8000", then open http://localhost:8000/#account.');
    return;
  }
  const email = normalizeEmail(form.elements.email.value);
  const password = form.elements.password.value;
  const signingUp = accountMode === "sign-up";
  let name = "";
  let createdUser = null;
  if (signingUp) {
    name = form.elements.name.value.trim();
  }

  clearAccountFormError(form);
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  form.setAttribute("aria-busy", "true");
  submitButton.innerHTML = `<span class="auth-submit-spinner" aria-hidden="true"></span><span>${signingUp ? "Creating account…" : "Signing in…"}</span>`;
  try {
    if (signingUp) {
      pendingProfileName = name;
      profileStatus = "saving";
      const credential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
      createdUser = credential.user;
      await saveUserProfile(credential.user, name);
      renderFirebaseAccount();
      showToast("Your account and profile have been created.");
    } else {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    }
  } catch (error) {
    if (createdUser && pendingProfileName) {
      profileStatus = "error";
      console.error("The Firebase account was created, but its Firestore profile could not be saved.", error);
      renderFirebaseAccount();
      showToast("Your account was created. Complete the profile form to retry saving it.");
    } else {
      pendingProfileName = "";
      profileStatus = "idle";
      console.error("Firebase account authentication failed.", error);
      if (error.code === "auth/invalid-email") {
        setFieldError(form.elements.email, getAuthErrorMessage(error));
        form.elements.email.focus();
      } else if (error.code === "auth/email-already-in-use") {
        setFieldError(form.elements.email, getAuthErrorMessage(error));
        form.elements.email.focus();
      } else if (error.code === "auth/weak-password") {
        setFieldError(form.elements.password, getAuthErrorMessage(error));
        form.elements.password.focus();
      } else if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        const message = getAuthErrorMessage(error);
        setFieldError(form.elements.email, message);
        setFieldError(form.elements.password, message);
        form.elements.email.focus();
      } else {
        showAccountFormError(form, getAuthErrorMessage(error));
      }
    }
  } finally {
    if (form.isConnected) {
      submitButton.disabled = false;
      form.removeAttribute("aria-busy");
      submitButton.innerHTML = `<span>${signingUp ? "Create account" : "Sign in"}</span><span class="auth-submit-arrow" aria-hidden="true">→</span>`;
    }
  }
}

function handleAuthStateChanged(user) {
  const previousUser = currentUser;
  const wasSignedIn = Boolean(previousUser);
  const changedUser = previousUser?.uid !== user?.uid;
  if (changedUser) {
    if (previousUser) {
      replaceCart([]);
      cartRemoteKeys.clear();
    }
    cartSyncStatus = user && window.location.protocol !== "file:" ? "loading" : "guest";
    if (wasSignedIn && !user) clearGuestCart();
    orderHistory = [];
    orderHistoryStatus = "idle";
    wishlistProductIds.clear();
    wishlistStatus = "idle";
    wishlistLoadError = null;
    wishlistWrites.clear();
    savedAddresses = [];
    addressBookStatus = "idle";
    addressBookError = null;
    addressEditingId = "";
    selectedCheckoutAddressId = "";
    profileEditing = false;
    adminSliderStatus = "idle";
    adminSliderSlides = [];
    adminSliderError = null;
    adminSliderEditingId = "";
  }
  currentUser = user;
  authStateReady = true;
  if (wasSignedIn && !user) accountMode = "sign-in";
  updateAccountMenu();
  purchasedProductIds.clear();
  purchaseStatus = "idle";
  if (!user) {
    userProfile = null;
    profileStatus = "idle";
    pendingProfileName = "";
    profileEditing = false;
  } else if (window.location.protocol !== "file:" && profileStatus !== "saving" && !pendingProfileName && userProfile?.uid !== user.uid) {
    void loadUserProfile(user);
  }
  if (user && window.location.protocol !== "file:") {
    void loadUserCart(user);
    void loadUserWishlist(user);
    void loadUserAddresses(user);
  }
  updateCartPageSyncNote();
  const route = currentRoute();
  if (["cart", "checkout", "payment"].includes(route.route)) refreshCartRoute();
  if (route.route === "account") renderAccount();
  if (route.route === "product") renderProduct(route.value);
  if (route.route === "add-product") renderAddProduct();
  if (["orders", "wishlist", "addresses", "address-editor", "admin-orders", "admin-slider"].includes(route.route)) renderRoute();
  if (wasSignedIn && !user) showToast("You have signed out.");
}

function cartEntries() {
  return [...cart.entries()].map(([key, item]) => ({ key, ...item, product: products.find((product) => product.id === item.productId) })).filter((item) => item.product);
}

function orderTotals() {
  const subtotal = cartEntries().reduce((sum, item) => sum + priceForSize(item.product, item.size).price * item.quantity, 0);
  const delivery = 0;
  const tax = subtotal * 0.08;
  return { subtotal, delivery, tax, total: subtotal + delivery + tax };
}

function orderSummary() {
  const totals = orderTotals();
  return `<aside class="order-summary">
    <header class="order-summary-header"><div><p class="eyebrow">Ready when you are</p><h2>Order summary</h2></div><span class="summary-demo-badge">Demo</span></header>
    <div class="summary-lines"><div class="summary-row"><span>Items subtotal</span><span>${money(totals.subtotal)}</span></div><div class="summary-row"><span>Delivery</span><span class="summary-free">${totals.delivery ? money(totals.delivery) : "Free"}</span></div><div class="summary-row"><span>Estimated tax</span><span>${money(totals.tax)}</span></div></div>
    <div class="summary-total"><div><strong>Total</strong><small>Includes estimated tax</small></div><strong>${money(totals.total)}</strong></div>
    <button type="button" class="primary-button checkout-button" data-action="checkout">Continue to checkout <span aria-hidden="true">→</span></button>
  </aside>`;
}

function renderCart() {
  const items = cartEntries();
  const isAuthPending = firebaseIsReady() && window.location.protocol !== "file:" && !authStateReady;
  const isCartPending = Boolean(currentUser) && cartSyncStatus === "loading";
  const isProductDataPending = cart.size > 0 && ["idle", "loading"].includes(productLoadStatus);
  const isLoading = !items.length && (isAuthPending || isCartPending || isProductDataPending);
  const hasAccountCartError = Boolean(currentUser) && cartSyncStatus === "error" && cart.size === 0;
  const hasGuestCartError = !currentUser && Boolean(guestCartLoadError) && cart.size === 0;
  const hasGuestCartSaveError = !currentUser && Boolean(guestCartSaveError) && cart.size === 0;
  const hasProductDataError = productLoadStatus === "error" && cart.size > 0 && !items.length;
  const hasUnmatchedItems = productLoadStatus === "loaded" && cart.size > 0 && !items.length;
  const countLabel = isLoading
    ? "Loading…"
    : hasAccountCartError || hasGuestCartError || hasGuestCartSaveError || hasProductDataError || hasUnmatchedItems
      ? "Unavailable"
      : `${cartSize()} ${cartSize() === 1 ? "item" : "items"}`;
  const itemMarkup = items.map((item) => {
    const productId = encodeURIComponent(item.product.id);
    const safeProductId = escapeHtml(item.product.id);
    const safeKey = escapeHtml(item.key);
    const safeName = escapeHtml(item.product.name);
    const safeSize = escapeHtml(item.size);
    const safeColor = escapeHtml(item.color);
    const brand = typeof item.product.brand === "string" ? escapeHtml(item.product.brand) : "";
    return `
    <article class="cart-item">
      <a class="cart-product-image" href="#product/${productId}" data-route="product" data-product-id="${safeProductId}">${imageMarkup(item.product, "", selectedVariant(item.product, item.color))}</a>
      <div class="cart-item-info">
        ${brand ? `<span class="cart-item-brand">${brand}</span>` : ""}
        <h3><a href="#product/${productId}" data-route="product" data-product-id="${safeProductId}">${safeName}</a></h3>
        <p class="cart-item-meta"><span><small>Size</small>${safeSize}</span><i aria-hidden="true"></i><span><small>Color</small>${safeColor}</span></p>
        <strong class="cart-line-price">${money(priceForSize(item.product, item.size).price * item.quantity)}</strong>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-control" role="group" aria-label="Quantity for ${safeName}"><button type="button" data-action="quantity" data-key="${safeKey}" data-change="-1" aria-label="Remove one ${safeName}">−</button><span aria-live="polite">${item.quantity}</span><button type="button" data-action="quantity" data-key="${safeKey}" data-change="1" aria-label="Add one ${safeName}">+</button></div>
        <button class="remove-item" type="button" data-action="remove" data-key="${safeKey}" aria-label="Remove ${safeName} from your bag"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16m-10 4v6m4-6v6M6 7l1 14h10l1-14M9 7V4h6v3"></path></svg><span>Remove</span></button>
      </div>
    </article>`;
  }).join("");
  let content = itemMarkup;
  if (!items.length) {
    if (isLoading) {
      content = cartLoadingSkeletonMarkup();
    } else if (hasAccountCartError) {
      content = '<div class="cart-load-error" role="alert"><span class="cart-load-error-icon" aria-hidden="true">!</span><h2>Your saved bag is temporarily unavailable.</h2><p>Your account items have not been removed. Try loading them again using the button above.</p></div>';
    } else if (hasGuestCartError) {
      content = '<div class="cart-load-error" role="alert"><span class="cart-load-error-icon" aria-hidden="true">!</span><h2>Your saved bag could not be read.</h2><p>The saved data on this device has not been changed. Try again after checking your connection or browser storage.</p></div>';
    } else if (hasGuestCartSaveError) {
      content = '<div class="cart-load-error" role="alert"><span class="cart-load-error-icon" aria-hidden="true">!</span><h2>Your bag could not be saved.</h2><p>Your current bag is still available in this tab. Try saving it again.</p></div>';
    } else if (hasProductDataError) {
      content = productCollectionStateMarkup();
    } else if (hasUnmatchedItems) {
      content = '<div class="cart-load-error" role="alert"><span class="cart-load-error-icon" aria-hidden="true">!</span><h2>Some saved items are unavailable.</h2><p>We could not match your saved items to the current product list.</p><button class="secondary-button" type="button" data-action="retry-products">Refresh products</button></div>';
    } else {
      content = '<div class="empty-cart"><img class="empty-cart-illustration" src="assets/images/empty-cart.png" alt=""><h2>Your bag is taking a breather.</h2><p>Find a pair that feels like you, and it can be on its way.</p><a class="primary-button" href="#catalog" data-route="catalog">Explore all footwear</a></div>';
    }
  }

  main.innerHTML = `
    <section class="checkout-page cart-page">
      <div class="cart-content">
        <header class="cart-page-heading"><div><p class="eyebrow">Your picks, all in one place</p><div class="cart-title-line"><h1>Your bag</h1><span class="cart-count-pill">${countLabel}</span></div><p class="cart-page-caption">Review your favorites before checkout.</p></div><a class="cart-continue-link" href="#catalog" data-route="catalog"><span aria-hidden="true">←</span> Continue shopping</a></header>
        <p class="cart-sync-note" role="status"></p>
        <div class="cart-items">${content}</div>
      </div>
      ${items.length ? orderSummary() : ""}
    </section>`;
  updateCartPageSyncNote();
}

function refreshCartRoute() {
  const route = currentRoute().route;
  if (route === "cart") renderCart();
  else if (route === "checkout") renderCheckout();
  else if (route === "payment") renderPayment();
}

function renderCheckout() {
  if (cartSize() === 0) {
    renderCart();
    showToast("Add a pair to your bag before checking out.");
    return;
  }
  const items = cartEntries();
  const fingerprint = JSON.stringify(items.map(({ productId, size, color, quantity }) => ({ productId, size, color, quantity })));
  if (checkoutInventory.fingerprint !== fingerprint) {
    checkoutInventory = { fingerprint, status: "idle", availability: [], error: null };
  }
  const addresses = savedAddressRecords();
  const checkoutAddress = addresses.find((address) => address.id === selectedCheckoutAddressId)
    ?? addresses.find((address) => address.isDefault);
  const availabilityFor = (item) => checkoutInventory.availability.find((entry) => (
    entry.productId === item.productId && entry.size === item.size && entry.color === item.color
  ));
  const availabilityNote = checkoutInventory.status === "loading"
    ? '<p class="checkout-stock-message" role="status">Checking live stock availability…</p>'
    : checkoutInventory.status === "error"
      ? `<div class="checkout-stock-message is-error" role="alert"><span>${escapeHtml(checkoutInventory.error?.message ?? "We couldn’t verify stock. Try again before continuing.")}</span><button class="secondary-button" type="button" data-action="${checkoutInventory.error?.code === "price-refresh" ? "retry-price-refresh" : "retry-stock-check"}">${checkoutInventory.error?.code === "price-refresh" ? "Refresh products" : "Try again"}</button></div>`
      : checkoutInventory.status === "unavailable"
        ? '<div class="checkout-stock-message is-error" role="alert"><span>Some items are out of stock. Return to your bag to update or remove them.</span><a class="secondary-button" href="#cart" data-route="cart">Review your bag</a></div>'
        : checkoutInventory.status === "available"
          ? '<p class="checkout-stock-message is-available" role="status">Stock is currently available for every item.</p>'
          : '<p class="checkout-stock-message" role="status">Stock availability has not been checked.</p>';
  const checkoutItems = items.map((item) => {
    const stock = availabilityFor(item);
    const unavailable = checkoutInventory.status === "unavailable" && stock?.outOfStock;
    const stockLabel = checkoutInventory.status === "available"
      ? `<small class="checkout-stock-available">In stock · ${stock?.available ?? 0} available</small>`
      : unavailable
        ? `<small class="checkout-stock-unavailable">Out of stock · ${stock.available} available</small>`
        : "";
    return `<div class="checkout-mini-item${unavailable ? " is-out-of-stock" : ""}">${imageMarkup(item.product, "", selectedVariant(item.product, item.color))}<div><strong>${escapeHtml(item.product.name)}</strong><span>${escapeHtml(item.size)} · ${escapeHtml(item.color)} · Qty ${item.quantity}</span>${stockLabel}</div><strong>${money(priceForSize(item.product, item.size).price * item.quantity)}</strong></div>`;
  }).join("");
  main.innerHTML = `
    <section class="checkout-page checkout-layout">
      <div class="checkout-content">
        <a class="back-link" href="#cart" data-route="cart">← Back to your bag</a>
        <p class="eyebrow">A few details, then you're all set</p><h1>Shipping information</h1>
        ${currentUser ? '<a class="saved-address-link" href="#addresses" data-route="addresses">Choose a saved address</a>' : ""}
        <form class="shipping-form" id="shipping-form">
          <label>Full name<input name="name" autocomplete="name" value="${escapeHtml(checkoutAddress?.fullName ?? "")}" placeholder="Full name" required /></label>
          <label>Email address<input name="email" type="email" autocomplete="email" value="${escapeHtml(currentUser?.email ?? "")}" placeholder="Email address" required /></label>
          <label class="form-wide">Street address<input name="address" autocomplete="street-address" value="${escapeHtml(checkoutAddress?.address ?? "")}" placeholder="Street address" required /></label>
          <label>City<input name="city" autocomplete="address-level2" value="${escapeHtml(checkoutAddress?.city ?? "Gangasagar")}" required /></label>
          <label>State / province<input name="region" autocomplete="address-level1" value="${escapeHtml(checkoutAddress?.region ?? "West Bengal")}" required /></label>
          <label>PIN code<input name="postal" autocomplete="postal-code" value="${escapeHtml(checkoutAddress?.postal ?? "743373")}" required /></label>
          <label>Phone number<input name="phone" type="tel" autocomplete="tel" value="${escapeHtml(checkoutAddress?.phone ?? "")}" placeholder="Phone number" required /></label>
        </form>
        <section class="checkout-cart-items"><h2>Your items</h2>${availabilityNote}${checkoutItems}</section>
      </div>
      ${orderSummary()}
    </section>`;
  if (checkoutInventory.status === "idle") void refreshCheckoutInventory(items, fingerprint);
}

async function refreshCheckoutInventory(items, fingerprint) {
  checkoutInventory = { fingerprint, status: "loading", availability: [], error: null };
  if (currentRoute().route === "checkout") renderCheckout();
  try {
    const result = await orderApiRequest("check-stock", {
      items: items.map((item) => ({
        productId: item.productId,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
      })),
    }, false);
    if (checkoutInventory.fingerprint !== fingerprint || currentRoute().route !== "checkout") return;
    if (!Array.isArray(result.availability)) throw new Error("The stock service returned an invalid response.");
    checkoutInventory = {
      fingerprint,
      status: result.availability.some((item) => item.outOfStock) ? "unavailable" : "available",
      availability: result.availability,
      error: null,
    };
  } catch (error) {
    if (checkoutInventory.fingerprint !== fingerprint || currentRoute().route !== "checkout") return;
    console.error("Could not verify inventory for checkout.", error);
    checkoutInventory = { fingerprint, status: "error", availability: [], error };
  }
  if (currentRoute().route === "checkout") renderCheckout();
}

async function refreshProductPricing() {
  checkoutInventory = {
    fingerprint: "",
    status: "error",
    availability: [],
    error: { code: "price-refresh", message: "Prices changed. Refresh product details before continuing." },
  };
  if (currentRoute().route === "checkout") renderCheckout();
  await loadProducts(true);
  if (currentRoute().route !== "checkout") return;
  checkoutInventory = productLoadStatus === "loaded"
    ? { fingerprint: "", status: "idle", availability: [], error: null }
    : {
      fingerprint: "",
      status: "error",
      availability: [],
      error: { code: "price-refresh", message: "Updated prices couldn’t be loaded. Please try again." },
    };
  renderCheckout();
}

function renderPayment() {
  main.innerHTML = `<section class="simple-page payment-page"><p class="eyebrow">Coming soon</p><h1>Secure checkout is on the way.</h1><p class="page-intro">We’re preparing the payment experience. Your bag and existing order history are still available.</p><a class="primary-button" href="#cart" data-route="cart">Back to your bag</a></section>`;
}

function renderConfirmation() {
  navigate("orders");
}

function renderAccount() {
  renderFirebaseAccount();
}

function renderShipping() {
  main.innerHTML = `<section class="simple-page shipping-page">
    <p class="eyebrow">Straight to your door</p>
    <h1>Shipping &amp; replacement policy</h1>
    <p class="page-intro">Clear, simple information about delivery, replacements, and getting support with your order.</p>
    <div class="shipping-info-grid">
      <article class="shipping-info-card">
        <span class="shipping-info-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 7h11v11H3zM14 11h4l3 3v4h-7" /><circle cx="7.5" cy="18" r="1.5" /><circle cx="17.5" cy="18" r="1.5" /><path d="M3 11h7" /></svg></span>
        <p class="shipping-info-kicker">Delivery</p>
        <h2>Free delivery</h2>
        <p>Delivery is free on orders above ₹999. We’ll show available delivery options at checkout.</p>
      </article>
      <article class="shipping-info-card">
        <span class="shipping-info-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 8V5a3 3 0 0 1 6 0v3" /><path d="m9.5 12.5 5 5m0-5-5 5" /></svg></span>
        <p class="shipping-info-kicker">Please note</p>
        <h2>No returns or exchanges</h2>
        <p>All sales are final. If your order arrives defective or incorrect, contact support to request a replacement.</p>
      </article>
      <article class="shipping-info-card">
        <span class="shipping-info-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 13v-2a9 9 0 0 1 18 0v2" /><rect x="3" y="12" width="4" height="7" rx="2" /><rect x="17" y="12" width="4" height="7" rx="2" /><path d="M17 19a5 5 0 0 1-5 3h-1" /></svg></span>
        <p class="shipping-info-kicker">Customer care</p>
        <h2>Here to help</h2>
        <p>Questions about your order? Our friendly support team is ready to help.</p>
      </article>
    </div>
    <a class="primary-button" href="#catalog" data-route="catalog">Find your next pair</a>
  </section>`;
}

function accountSectionNav() {
  const activeRoute = currentRoute().route;
  const sections = [
    { route: "account", label: "Profile", icon: accountMenuIcons.profile },
    { route: "orders", label: "My Orders", icon: accountMenuIcons.orders },
    { route: "wishlist", label: "Wishlist", icon: accountMenuIcons.wishlist },
    { route: "addresses", label: "Addresses", icon: accountMenuIcons.addresses },
  ];
  if (isProductAdmin()) {
    sections.push({ route: "admin-orders", label: "Manage orders", icon: accountMenuIcons.manageOrders });
    sections.push({ route: "add-product", label: "Add product", icon: accountMenuIcons.addProduct });
    sections.push({ route: "admin-slider", label: "Image slider", icon: accountMenuIcons.manageSlider });
  }
  return `<nav class="account-section-nav" aria-label="Account sections">${sections.map(({ route, label, icon }) => {
    const active = activeRoute === route || (route === "addresses" && activeRoute === "address-editor");
    return `<a href="#${route}" data-route="${route}" class="account-section-link${active ? " is-active" : ""}"${active ? ' aria-current="page"' : ""}>${icon}<span>${label}</span></a>`;
  }).join("")}</nav>`;
}

function accountDataSetupHint() {
  if (window.location.protocol === "file:") {
    return "This page is opened as a local file. Open the storefront through HTTP(S), then make sure the configured Cloud Firestore database exists and firestore.rules are deployed.";
  }
  return "Check your connection. If this keeps happening, confirm the configured Firestore database exists and the current firestore.rules are deployed before retrying.";
}

function accountFeaturePage(title, description, icon, content, busy = false) {
  const displayName = userProfile?.name ?? currentUser?.displayName ?? currentUser?.email ?? "Your account";
  const initial = displayName.trim().charAt(0).toUpperCase() || "U";
  main.innerHTML = `<section class="simple-page account-feature-page" aria-busy="${busy}">
    <div class="account-feature-topline"><p class="eyebrow">Account center</p><div class="account-feature-user"><span class="account-user-avatar" aria-hidden="true">${escapeHtml(initial)}</span><span>${escapeHtml(displayName)}</span></div></div>
    <header class="account-feature-heading"><span class="account-feature-icon" aria-hidden="true">${icon}</span><div><h1>${title}</h1><p>${description}</p></div></header>
    ${accountSectionNav()}
    ${content}
  </section>`;
}

function accountFeatureSkeleton(kind) {
  const block = (className) => `<span class="skeleton-block ${className}"></span>`;
  if (kind === "orders") {
    return `<div class="account-skeleton-list" aria-hidden="true">${Array.from({ length: 2 }, () => `<article class="account-skeleton-card"><div class="skeleton-row">${block("skeleton-medium")} ${block("skeleton-short")}</div>${block("skeleton-long")}${block("skeleton-long")}${block("skeleton-medium")}</article>`).join("")}</div>`;
  }
  if (kind === "wishlist") {
    return `<div class="account-skeleton-products" aria-hidden="true">${Array.from({ length: 3 }, () => `<article class="account-skeleton-product">${block("skeleton-image")}${block("skeleton-medium")}${block("skeleton-long")}${block("skeleton-short")}</article>`).join("")}</div>`;
  }
  if (kind === "address-editor") {
    return `<section class="address-editor address-editor-loading" aria-hidden="true">${block("skeleton-medium")}${block("skeleton-long")}${block("skeleton-long")}${block("skeleton-long")}${block("skeleton-medium")}</section>`;
  }
  return `<div class="account-skeleton-addresses" aria-hidden="true">${Array.from({ length: 2 }, () => `<article class="account-skeleton-card">${block("skeleton-medium")}${block("skeleton-long")}${block("skeleton-long")}${block("skeleton-short")}</article>`).join("")}</div>`;
}

function accountFeatureLoading(title, description, icon, kind) {
  accountFeaturePage(title, description, icon, `${accountFeatureSkeleton(kind)}<span class="visually-hidden" role="status">Loading ${title.toLowerCase()}…</span>`, true);
}

function accountFeatureEmpty(title, description, action = "") {
  return `<div class="account-empty-state"><img class="account-empty-illustration" src="assets/images/empty-cart.png" alt=""><h2>${title}</h2><p>${description}</p>${action}</div>`;
}

function accountFeatureError(title, description, action) {
  return `<div class="account-feedback" role="alert"><span class="account-feedback-icon" aria-hidden="true">!</span><div><strong>${title}</strong><p>${description}</p></div>${action}</div>`;
}

function accountFeatureReady(title, description, icon, kind) {
  if (!authStateReady) {
    accountFeatureLoading(title, description, icon, kind);
    return false;
  }
  if (!currentUser) {
    navigate("account");
    return false;
  }
  if (window.location.protocol === "file:") {
    accountFeaturePage(title, description, icon, accountFeatureError("Open the storefront over HTTP(S)", accountDataSetupHint(), '<a class="secondary-button" href="#home" data-route="home">Back to the store</a>'));
    return false;
  }
  if (!firebaseIsReady()) {
    accountFeaturePage(title, description, icon, accountFeatureError("Account data unavailable", firebaseSetupMessage(), '<a class="secondary-button" href="#account" data-route="account">Account setup</a>'));
    return false;
  }
  return true;
}

function formatOrderDate(value) {
  const date = dateFromFirestoreValue(value);
  if (!date) return "Date unavailable";
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(date);
}

function dateFromFirestoreValue(value) {
  const date = typeof value?.toDate === "function"
    ? value.toDate()
    : value instanceof Date
      ? value
      : Number.isSafeInteger(value)
        ? new Date(value)
        : null;
  return date && !Number.isNaN(date.getTime()) ? date : null;
}

function firestoreValueToMillis(value) {
  const date = dateFromFirestoreValue(value);
  return date ? date.getTime() : Date.now();
}

function withFirestoreReadTimeout(promise, collectionName, timeoutMs = 15000) {
  let timeoutId;
  const timeout = new Promise((resolve, reject) => {
    timeoutId = window.setTimeout(() => reject(new Error(`Loading ${collectionName} timed out.`)), timeoutMs);
  });
  return Promise.race([promise, timeout]).finally(() => window.clearTimeout(timeoutId));
}

async function loadUserOrders(user, force = false) {
  if (!firebaseIsReady() || !user || orderHistoryStatus === "loading" || (orderHistoryStatus === "loaded" && !force)) return;
  orderHistoryStatus = "loading";
  if (currentRoute().route === "orders") renderOrders();
  try {
    const orders = await withFirestoreReadTimeout(
      readFirestoreRestCollection(user, `user/${user.uid}/orders`),
      "orders",
    );
    if (currentUser?.uid !== user.uid) return;
    orderHistory = orders.sort((left, right) => (
      firestoreValueToMillis(right.createdAt) - firestoreValueToMillis(left.createdAt)
    ));
    orderHistoryStatus = "loaded";
  } catch (error) {
    if (currentUser?.uid !== user.uid) return;
    orderHistoryStatus = "error";
    console.error("Could not load this user's orders from Firestore.", error);
  } finally {
    if (currentUser?.uid === user.uid && currentRoute().route === "orders") renderOrders();
  }
}

async function loadUserWishlist(user, force = false) {
  if (!firebaseIsReady() || !user) return false;
  if (wishlistStatus === "loading" && wishlistLoadPromise) return wishlistLoadPromise;
  if (wishlistStatus === "loaded" && !force) return true;
  wishlistStatus = "loading";
  wishlistLoadError = null;
  wishlistLoadPromise = (async () => {
    try {
      const documents = await withFirestoreReadTimeout(
        readFirestoreRestCollection(user, `user/${user.uid}/wishlist`),
        "wishlist",
      );
      if (currentUser?.uid !== user.uid) return false;
      wishlistProductIds.clear();
      documents.forEach((document) => wishlistProductIds.add(document.id));
      wishlistStatus = "loaded";
      wishlistLoadError = null;
      return true;
    } catch (error) {
      if (currentUser?.uid !== user.uid) return false;
      wishlistStatus = "error";
      wishlistLoadError = error;
      console.error("Could not load this user's wishlist from Firestore.", error);
      return false;
    } finally {
      if (currentUser?.uid === user.uid) {
        if (currentRoute().route === "wishlist") renderWishlist();
        else if (["home", "catalog", "product", "new-arrivals", "men", "women", "kids", "collections"].includes(currentRoute().route)) renderRoute();
      }
    }
  })();
  try {
    return await wishlistLoadPromise;
  } finally {
    wishlistLoadPromise = null;
  }
}

async function loadUserAddresses(user, force = false) {
  if (!firebaseIsReady() || !user || addressBookStatus === "loading" || (addressBookStatus === "loaded" && !force)) return;
  addressBookStatus = "loading";
  addressBookError = null;
  try {
    const addresses = await withFirestoreReadTimeout(
      readFirestoreRestCollection(user, `user/${user.uid}/addresses`),
      "addresses",
    );
    if (currentUser?.uid !== user.uid) return;
    savedAddresses = addresses;
    addressBookStatus = "loaded";
  } catch (error) {
    if (currentUser?.uid !== user.uid) return;
    addressBookStatus = "loaded";
    addressBookError = error ?? new Error("Firestore returned an unknown error while loading addresses.");
    console.error("Could not load this user's saved addresses from Firestore.", addressBookError);
  } finally {
    if (currentUser?.uid === user.uid) {
      if (currentRoute().route === "addresses") renderAddresses();
      else if (currentRoute().route === "address-editor") renderAddressEditor(currentRoute().value);
      else if (currentRoute().route === "checkout") renderCheckout();
    }
  }
}

function renderOrders() {
  const title = "My Orders";
  const description = "Review your order history, purchased items, and totals.";
  if (!accountFeatureReady(title, description, accountMenuIcons.orders, "orders")) return;
  if (orderHistoryStatus === "idle") void loadUserOrders(currentUser);
  if (orderHistoryStatus === "loading" || orderHistoryStatus === "idle") {
    accountFeatureLoading(title, description, accountMenuIcons.orders, "orders");
    return;
  }
  if (orderHistoryStatus === "error") {
    accountFeaturePage(title, description, accountMenuIcons.orders, accountFeatureError("Orders didn't load", accountDataSetupHint(), '<button class="secondary-button" type="button" data-action="retry-orders">Try again</button>'));
    return;
  }
  const orderCards = orderHistory.map((order) => {
    const items = Array.isArray(order.items) ? order.items : [];
    const total = Number(order.totals?.total);
    const totalLabel = Number.isFinite(total) ? money(total) : "Unavailable";
    const orderNumber = typeof order.orderNumber === "string" ? order.orderNumber : "Order";
    const status = typeof order.status === "string" ? order.status : "pending";
    const statusLabel = orderStatusLabel(status);
    const itemCountLabel = `${items.length} ${items.length === 1 ? "item" : "items"}`;
    const orderItems = items.map((item) => {
      const quantity = Number(item.quantity);
      const unitPrice = Number(item.unitPrice);
      const lineTotal = Number.isFinite(quantity) && quantity > 0 && Number.isFinite(unitPrice) && unitPrice >= 0
        ? money(unitPrice * quantity)
        : "Unavailable";
      const name = typeof item.name === "string" ? item.name : "Footwear";
      const size = typeof item.size === "string" ? item.size : "";
      const color = typeof item.color === "string" ? item.color : "";
      const product = products.find((entry) => entry.id === item.productId);
      const variant = product?.colors.find((entry) => entry.name === color);
      const image = product && variant
        ? imageMarkup(product, "order-item-image", variant)
        : '<span class="order-item-placeholder" aria-hidden="true">PF</span>';
      const quantityLabel = Number.isFinite(quantity) && quantity > 0 ? quantity : "—";
      return `<li class="order-line-item">
        <div class="order-item-visual">${image}</div>
        <div class="order-item-details"><strong>${escapeHtml(name)}</strong><span>Size ${escapeHtml(size)} <i aria-hidden="true">·</i> ${escapeHtml(color)}</span><small>Quantity: ${quantityLabel}</small></div>
        <strong class="order-item-price">${lineTotal}</strong>
      </li>`;
    }).join("");
    const statusSteps = ["pending", "confirmed", "on-the-way", "delivered"];
    const currentStep = statusSteps.indexOf(status);
    const progress = currentStep >= 0
      ? `<ol class="order-progress" aria-label="Order progress">${statusSteps.map((step, index) => `<li class="${index <= currentStep ? "is-complete" : ""}${index === currentStep ? " is-current" : ""}"><span>${index < currentStep ? "✓" : index + 1}</span><small>${orderStatusLabel(step)}</small></li>`).join("")}</ol>`
      : "";
    const customerRequest = order.customerRequest;
    const requestNote = customerRequest?.status === "pending"
      ? `<p class="order-request-note" role="status">${escapeHtml(orderStatusLabel(customerRequest.type))} request sent · waiting for the store</p>`
      : customerRequest?.status === "resolved"
        ? `<p class="order-request-note" role="status">Your ${escapeHtml(orderStatusLabel(customerRequest.type))} request was ${customerRequest.resolution === "approved" ? "approved" : "declined"}.</p>`
        : "";
    const orderActions = !customerRequest || customerRequest.status !== "pending"
      ? status === "pending" || status === "confirmed"
        ? `<div class="order-customer-actions"><button class="secondary-button" type="button" data-action="request-order-action" data-order-id="${escapeHtml(order.id)}" data-request-type="cancellation">Request cancellation</button></div>`
        : status === "delivered"
          ? `<div class="order-customer-actions"><button class="secondary-button" type="button" data-action="request-order-action" data-order-id="${escapeHtml(order.id)}" data-request-type="return">Request a return</button><button class="secondary-button" type="button" data-action="request-order-action" data-order-id="${escapeHtml(order.id)}" data-request-type="replacement">Request a replacement</button></div>`
          : ""
      : "";
    return `<article class="order-history-card">
      <header class="order-history-heading">
        <div class="order-history-reference"><span>Order number</span><strong>${escapeHtml(orderNumber)}</strong><small>Placed ${formatOrderDate(order.createdAt)}</small></div>
        <div class="order-history-meta"><span class="order-status" data-status="${escapeHtml(status)}"><span class="order-status-dot" aria-hidden="true"></span>${escapeHtml(statusLabel)}</span><span class="order-item-count">${itemCountLabel}</span></div>
      </header>
      ${progress}
      <ul class="order-line-items">${orderItems || '<li class="order-items-unavailable">Item details are unavailable for this order.</li>'}</ul>
      ${requestNote}
      ${orderActions}
      <footer class="order-history-total"><div><strong>Order total</strong><small>Demo payment · no payment collected</small></div><strong class="order-total-value">${totalLabel}</strong></footer>
    </article>`;
  }).join("");
  const content = orderCards || accountFeatureEmpty("No orders yet", "Your orders will appear here after you complete checkout.", '<a class="primary-button" href="#catalog" data-route="catalog">Explore footwear</a>');
  accountFeaturePage(title, description, accountMenuIcons.orders, `<div class="account-feature-content order-history-list">${content}</div>`);
}

function orderStatusLabel(status) {
  const labels = {
    pending: "Pending",
    confirmed: "Confirmed",
    "on-the-way": "On the way",
    delivered: "Delivered",
    cancelled: "Cancelled",
    returned: "Returned",
    replacement: "Replacement",
    cancellation: "Cancellation",
    return: "Return",
    "demo-completed": "Demo completed",
  };
  return labels[status] ?? String(status).replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

async function requestCustomerOrderAction(orderId, type) {
  const actionLabels = {
    cancellation: "cancellation",
    return: "return",
    replacement: "replacement",
  };
  const label = actionLabels[type];
  if (!currentUser || !label || !window.confirm(`Send a ${label} request for this order to the store?`)) return;
  try {
    await orderApiRequest("request-order-action", { orderId, type });
    showToast(`Your ${label} request was sent to the store.`);
    orderHistoryStatus = "idle";
    await loadUserOrders(currentUser, true);
  } catch (error) {
    console.error("Could not submit the order request.", error);
    showToast(error.message || "Your request could not be sent. Please try again.");
  }
}

async function loadAdminOrders(force = false) {
  if (!isProductAdmin() || !firebaseIsReady()) return;
  if (adminOrderHistoryStatus === "loading" && adminOrderLoadPromise) return adminOrderLoadPromise;
  if (adminOrderHistoryStatus === "loaded" && !force) return;
  adminOrderHistoryStatus = "loading";
  adminOrderHistoryError = null;
  adminOrderLoadPromise = (async () => {
    try {
      const result = await orderApiRequest("list-admin-orders");
      if (!Array.isArray(result.orders)) throw new Error("The order service returned an invalid order list.");
      adminOrderHistory = result.orders;
      adminOrderHistoryStatus = "loaded";
    } catch (error) {
      adminOrderHistoryStatus = "error";
      adminOrderHistoryError = error;
      console.error("Could not load orders for the administrator.", error);
    } finally {
      adminOrderLoadPromise = null;
      if (currentRoute().route === "admin-orders") renderAdminOrders();
    }
  })();
  return adminOrderLoadPromise;
}

function renderAdminOrders() {
  const title = "Manage orders";
  const description = "Review new orders, customer requests, and fulfillment progress.";
  if (!accountFeatureReady(title, description, accountMenuIcons.manageOrders, "orders")) return;
  if (!isProductAdmin()) {
    accountFeaturePage(title, description, accountMenuIcons.manageOrders, accountFeatureError("Administrator access required", "Order management is available only to the configured store administrator.", '<a class="secondary-button" href="#account" data-route="account">Back to your account</a>'));
    return;
  }
  if (adminOrderHistoryStatus === "idle") void loadAdminOrders();
  if (adminOrderHistoryStatus === "loading" || adminOrderHistoryStatus === "idle") {
    accountFeatureLoading(title, description, accountMenuIcons.manageOrders, "orders");
    return;
  }
  if (adminOrderHistoryStatus === "error") {
    accountFeaturePage(title, description, accountMenuIcons.manageOrders, accountFeatureError("Orders didn’t load", adminOrderHistoryError?.message ?? accountDataSetupHint(), '<button class="secondary-button" type="button" data-action="retry-admin-orders">Try again</button>'));
    return;
  }
  const cards = adminOrderHistory.map((order) => {
    const customerRequest = order.customerRequest;
    const requestMarkup = customerRequest
      ? `<div class="admin-order-request"><strong>${escapeHtml(orderStatusLabel(customerRequest.type))} request · ${escapeHtml(customerRequest.status)}</strong>${customerRequest.note ? `<p>${escapeHtml(customerRequest.note)}</p>` : ""}${customerRequest.status === "pending" ? `<button class="secondary-button" type="button" data-action="decline-admin-order-request" data-order-id="${escapeHtml(order.id)}" data-user-id="${escapeHtml(order.userId)}">Decline request</button>` : ""}</div>`
      : "";
    const items = (Array.isArray(order.items) ? order.items : []).map((item) => (
      `<li>${escapeHtml(item.name)} · ${escapeHtml(item.color)} · ${escapeHtml(item.size)} × ${Number(item.quantity) || 0}</li>`
    )).join("");
    const shipping = order.shipping && typeof order.shipping === "object" ? order.shipping : {};
    const shippingMarkup = shipping.address
      ? `<address class="admin-order-shipping"><strong>Ship to ${escapeHtml(shipping.fullName ?? "Customer")}</strong><span>${escapeHtml(shipping.address)}, ${escapeHtml(shipping.city)}, ${escapeHtml(shipping.region)} ${escapeHtml(shipping.postal)}</span><span>${escapeHtml(shipping.phone ?? "")}</span></address>`
      : "";
    const nextStatuses = {
      pending: ["confirmed", "cancelled"],
      confirmed: ["on-the-way", "cancelled"],
      "on-the-way": ["delivered"],
      delivered: ["returned", "replacement"],
    };
    const availableStatuses = order.status === "delivered" && customerRequest?.status === "pending"
      ? [customerRequest.type === "return" ? "returned" : "replacement"]
      : nextStatuses[order.status] ?? [];
    const controls = availableStatuses.length
      ? `<div class="admin-order-actions"><label>Update status<select data-order-status="${escapeHtml(order.id)}" data-user-id="${escapeHtml(order.userId)}">${availableStatuses.map((status) => `<option value="${status}">${escapeHtml(orderStatusLabel(status))}</option>`).join("")}</select></label><button class="secondary-button" type="button" data-action="update-admin-order" data-order-id="${escapeHtml(order.id)}" data-user-id="${escapeHtml(order.userId)}">Update order</button></div>`
      : '<p class="order-request-note">This order has reached a final status.</p>';
    return `<article class="order-history-card admin-order-card"><header class="order-history-heading"><div class="order-history-reference"><span>${escapeHtml(order.email ?? "Customer order")}</span><strong>${escapeHtml(order.orderNumber ?? order.id)}</strong><small>Placed ${formatOrderDate(order.createdAt)}</small></div><span class="order-status" data-status="${escapeHtml(order.status)}"><span class="order-status-dot" aria-hidden="true"></span>${escapeHtml(orderStatusLabel(order.status))}</span></header><ul class="admin-order-items">${items || "<li>Item details unavailable</li>"}</ul>${shippingMarkup}${requestMarkup}${controls}</article>`;
  }).join("");
  const content = cards || accountFeatureEmpty("No orders to manage", "New customer orders will appear here.");
  accountFeaturePage(title, description, accountMenuIcons.manageOrders, `<div class="account-feature-toolbar"><button class="secondary-button" type="button" data-action="retry-admin-orders">Refresh orders</button></div><div class="account-feature-content order-history-list">${content}</div>`);
}

async function updateAdminOrderStatus(orderId, userId, status) {
  if (!window.confirm(`Update this order to “${orderStatusLabel(status)}”?`)) return;
  try {
    await orderApiRequest("update-admin-order", { orderId, userId, status });
    showToast(`Order updated to ${orderStatusLabel(status).toLowerCase()}.`);
    adminOrderHistoryStatus = "idle";
    await loadAdminOrders(true);
    if (currentUser?.uid === userId) {
      orderHistoryStatus = "idle";
      void loadUserOrders(currentUser, true);
    }
  } catch (error) {
    console.error("Could not update the order status.", error);
    showToast(error.message || "The order status could not be updated.");
  }
}

function renderWishlist() {
  const title = "Wishlist";
  const description = "Keep the pairs you love close and find them again whenever you're ready.";
  if (!accountFeatureReady(title, description, accountMenuIcons.wishlist, "wishlist")) return;
  if (productLoadStatus === "loading" || productLoadStatus === "idle") {
    accountFeatureLoading(title, description, accountMenuIcons.wishlist, "wishlist");
    return;
  }
  if (productLoadStatus === "error") {
    accountFeaturePage(title, description, accountMenuIcons.wishlist, `<div class="account-feature-content">${productCollectionStateMarkup()}</div>`);
    return;
  }
  if (wishlistStatus === "idle") void loadUserWishlist(currentUser);
  if (wishlistStatus === "loading" || wishlistStatus === "idle") {
    accountFeatureLoading(title, description, accountMenuIcons.wishlist, "wishlist");
    return;
  }
  if (wishlistStatus === "error") {
    accountFeaturePage(title, description, accountMenuIcons.wishlist, accountFeatureError("Wishlist didn't load", accountDataSetupHint(), '<button class="secondary-button" type="button" data-action="retry-wishlist">Try again</button>'));
    return;
  }
  const savedProducts = products.filter((product) => wishlistProductIds.has(product.id));
  const content = savedProducts.length
    ? `<div class="product-grid wishlist-grid">${savedProducts.map((product) => productCard(product)).join("")}</div>`
    : accountFeatureEmpty("Your wishlist is waiting", "Tap the heart on any pair to save it here for later.", '<a class="primary-button" href="#catalog" data-route="catalog">Find your next pair</a>');
  accountFeaturePage(title, description, accountMenuIcons.wishlist, `<div class="account-feature-content">${content}</div>`);
}

function addressMarkup(address) {
  const savedAddress = address && typeof address === "object" ? address : {};
  return `<address>${escapeHtml(savedAddress.address)}<br>${escapeHtml(savedAddress.city)}, ${escapeHtml(savedAddress.region)} ${escapeHtml(savedAddress.postal)}<br>${escapeHtml(savedAddress.phone)}</address>`;
}

function addressPermissionHelp(error) {
  if (firestoreAppCheckEnforcementError(error)) {
    return "Firestore is enforcing App Check. This storefront uses Firebase Authentication and owner-only rules instead, so the Firebase project owner must disable App Check enforcement for Cloud Firestore.";
  }
  return error?.code === "permission-denied"
    ? "Firestore denied access. Confirm you're signed in with the account that owns these addresses and that firestore.rules are deployed to the configured Firestore database."
    : "Check your connection and confirm the configured Firestore database is available.";
}

function renderAddresses() {
  const title = "Your Addresses";
  const description = "Save delivery details once and choose them at checkout.";
  if (!accountFeatureReady(title, description, accountMenuIcons.addresses, "addresses")) return;
  if (addressBookStatus === "idle") void loadUserAddresses(currentUser);
  if (addressBookStatus === "loading" || addressBookStatus === "idle") {
    accountFeatureLoading(title, description, accountMenuIcons.addresses, "addresses");
    return;
  }
  const addresses = savedAddressRecords();
  const addressCards = addresses.map((address) => `<article class="saved-address-card"><div><strong>${escapeHtml(address.fullName)}${address.isDefault ? '<span class="saved-address-default">Default</span>' : ""}</strong>${addressMarkup(address)}</div><div class="saved-address-actions"><button class="secondary-button" type="button" data-action="select-address" data-address-id="${escapeHtml(address.id)}">Use at checkout</button><button class="text-button" type="button" data-action="edit-address" data-address-id="${escapeHtml(address.id)}">Edit</button><button class="text-button address-delete-button" type="button" data-action="delete-address" data-address-id="${escapeHtml(address.id)}">Delete</button></div></article>`).join("");
  const addressLoadStatus = addresses.length
    ? "Previously loaded addresses are still shown."
    : "We couldn't confirm whether you have saved addresses.";
  const addressLoadNotice = addressBookError
    ? `<div class="account-profile-notice" role="status"><strong>Saved addresses couldn't be loaded</strong><p>${addressPermissionHelp(addressBookError)} ${addressLoadStatus} The address form is available, but Firestore may reject saving until access is fixed.</p></div>`
    : "";
  const savedContent = addressCards
    ? `<div class="saved-address-list">${addressCards}</div>`
    : accountFeatureEmpty(
      addressBookError ? "Addresses unavailable" : "No saved addresses",
      addressBookError ? "The address list will be available once Firestore access is restored." : "Add a delivery address to make your next checkout quicker.",
      '<button class="primary-button" type="button" data-action="add-address">Add an address</button>',
    );
  const addButton = addressCards
    ? '<div class="saved-address-toolbar"><button class="primary-button" type="button" data-action="add-address">Add new address</button></div>'
    : "";
  const content = `${addressLoadNotice}${addButton}${savedContent}`;
  accountFeaturePage(title, description, accountMenuIcons.addresses, `<div class="account-feature-content">${content}</div>`);
}

function renderAddressEditor(addressId) {
  const isNewAddress = !addressId || addressId === "new";
  const addresses = savedAddressRecords();
  const editingAddress = isNewAddress ? null : addresses.find((address) => address.id === addressId);
  const title = isNewAddress ? "Add a new address" : "Edit address";
  const description = isNewAddress
    ? "Add a delivery address to make checkout simple and secure."
    : "Update the delivery details saved to your account.";
  if (!accountFeatureReady(title, description, accountMenuIcons.addresses, "address-editor")) return;
  if (addressBookStatus === "idle") void loadUserAddresses(currentUser);
  if (addressBookStatus === "loading" || addressBookStatus === "idle") {
    accountFeatureLoading(title, description, accountMenuIcons.addresses, "address-editor");
    return;
  }
  if (!isNewAddress && !editingAddress) {
    const message = addressBookError
      ? addressPermissionHelp(addressBookError)
      : "This address may have been removed. Choose an address from your saved list to edit it.";
    accountFeaturePage(title, description, accountMenuIcons.addresses, accountFeatureError(
      "Address unavailable",
      message,
      '<a class="secondary-button" href="#addresses" data-route="addresses">Back to addresses</a>',
    ));
    return;
  }
  addressEditingId = editingAddress?.id ?? "";
  const value = (key) => escapeHtml(editingAddress?.[key] ?? "");
  const defaultAddressChecked = editingAddress
    ? Boolean(editingAddress.isDefault)
    : !addressBookError && !addresses.some((address) => address.isDefault);
  const addressLoadNotice = addressBookError
    ? `<div class="account-profile-notice" role="status"><strong>Saved addresses couldn't be loaded</strong><p>${addressPermissionHelp(addressBookError)}</p></div>`
    : "";
  const content = `<div class="account-feature-content">
    <a class="address-editor-back" href="#addresses" data-route="addresses">Back to addresses</a>
    ${addressLoadNotice}
    <section class="address-editor address-editor-page">
      <form class="address-form" id="address-form">
        <label>Full name<input name="fullName" autocomplete="name" maxlength="80" value="${value("fullName")}" required></label>
        <label>Street address<input name="address" autocomplete="street-address" maxlength="160" value="${value("address")}" required></label>
        <label>City<input name="city" autocomplete="address-level2" maxlength="80" value="${value("city")}" required></label>
        <label>State / province<input name="region" autocomplete="address-level1" maxlength="80" value="${value("region")}" required></label>
        <label>PIN / postal code<input name="postal" autocomplete="postal-code" maxlength="20" value="${value("postal")}" required></label>
        <label>Phone number<input name="phone" type="tel" autocomplete="tel" maxlength="30" value="${value("phone")}" required></label>
        <label class="address-default-field"><input name="isDefault" type="checkbox"${defaultAddressChecked ? " checked" : ""}><span>Set as default address</span></label>
        <div class="address-form-actions"><button class="primary-button" type="submit">${editingAddress ? "Save changes" : "Save address"}</button><button class="secondary-button" type="button" data-action="cancel-address-edit">Cancel</button></div>
      </form>
    </section>
  </div>`;
  accountFeaturePage(title, description, accountMenuIcons.addresses, content);
}

function firestoreRestValue(value) {
  if (typeof value === "string") return { stringValue: value };
  if (typeof value === "boolean") return { booleanValue: value };
  if (value instanceof Date && !Number.isNaN(value.getTime())) return { timestampValue: value.toISOString() };
  if (typeof value === "number") {
    return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value };
  }
  if (Array.isArray(value)) return { arrayValue: { values: value.map(firestoreRestValue) } };
  if (value && typeof value === "object") {
    return {
      mapValue: {
        fields: Object.fromEntries(Object.entries(value).map(([key, nestedValue]) => [key, firestoreRestValue(nestedValue)])),
      },
    };
  }
  throw new TypeError("Data contains an unsupported Firestore value.");
}

function decodeFirestoreRestValue(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError("Firestore returned an invalid field value.");
  }
  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return value.doubleValue;
  if ("booleanValue" in value) return value.booleanValue;
  if ("nullValue" in value) return null;
  if ("timestampValue" in value) return new Date(value.timestampValue);
  if ("arrayValue" in value) {
    const arrayValue = value.arrayValue;
    if (!arrayValue || typeof arrayValue !== "object" || Array.isArray(arrayValue)) {
      throw new TypeError("Firestore returned an invalid array field.");
    }
    const values = arrayValue.values ?? [];
    if (!Array.isArray(values)) throw new TypeError("Firestore returned an invalid array field.");
    return values.map(decodeFirestoreRestValue);
  }
  if ("mapValue" in value) {
    const mapValue = value.mapValue;
    if (!mapValue || typeof mapValue !== "object" || Array.isArray(mapValue)) {
      throw new TypeError("Firestore returned an invalid map field.");
    }
    return decodeFirestoreRestFields(mapValue.fields);
  }
  throw new TypeError("Firestore returned an unsupported value.");
}

function decodeFirestoreRestFields(fields) {
  if (fields == null) return {};
  if (typeof fields !== "object" || Array.isArray(fields)) {
    throw new TypeError("Firestore returned invalid document fields.");
  }
  return Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [key, decodeFirestoreRestValue(value)]),
  );
}

function firestoreRestUrl(path) {
  const config = window.POPULAR_FOOTWEAR_FIREBASE_CONFIG;
  if (!config?.projectId || !config.firestoreDatabaseId) {
    throw new Error("The Firestore project or database configuration is unavailable.");
  }
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  return new URL(
    `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(config.projectId)}/databases/${encodeURIComponent(config.firestoreDatabaseId)}/documents/${encodedPath}`,
  );
}

function createFirestoreDocumentId() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomBytes = new Uint8Array(20);
  if (!window.crypto?.getRandomValues) {
    throw new Error("A secure random source is required to create a Firestore document.");
  }
  window.crypto.getRandomValues(randomBytes);
  return Array.from(randomBytes, (byte) => alphabet[byte % alphabet.length]).join("");
}

async function firestoreRestFetch(user, url, method, body, requestPath, forceTokenRefresh = false) {
  if (user && (typeof user.uid !== "string" || !user.uid.trim() || typeof user.getIdToken !== "function")) {
    throw new Error("A valid signed-in Firebase user is required for this Firestore request.");
  }
  const isPublicReadQuery = method === "POST" && url.pathname.endsWith(":runQuery");
  if (!user && method !== "GET" && !isPublicReadQuery) {
    throw new Error("A signed-in Firebase user is required to write to Firestore.");
  }
  const tokenResult = user && typeof user.getIdTokenResult === "function"
    ? await user.getIdTokenResult(forceTokenRefresh)
    : null;
  const idToken = user ? tokenResult?.token ?? await user.getIdToken(forceTokenRefresh) : "";
  if (user && (typeof idToken !== "string" || !idToken.trim())) {
    throw new Error("Firebase did not provide an ID token for this Firestore request.");
  }
  const tokenClaims = tokenResult?.claims ?? {};
  const tokenIssuer = typeof tokenClaims.iss === "string" ? tokenClaims.iss : "";
  const tokenProjectId = typeof tokenClaims.aud === "string"
    ? tokenClaims.aud
    : tokenIssuer.startsWith("https://securetoken.google.com/")
      ? tokenIssuer.slice("https://securetoken.google.com/".length)
      : "";
  const headers = {};
  if (idToken) headers.Authorization = `Bearer ${idToken}`;
  const options = { method, headers };
  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }
  const response = await fetch(url, options);
  const responseText = await response.text();
  const result = responseText ? JSON.parse(responseText) : {};
  if (!result || typeof result !== "object") {
    throw new TypeError("Firestore returned an invalid response.");
  }
  if (!response.ok) {
    const error = new Error(result.error?.message ?? `Firestore request failed with status ${response.status}.`);
    error.code = result.error?.status === "PERMISSION_DENIED"
      ? "permission-denied"
      : result.error?.status === "NOT_FOUND"
        ? "not-found"
        : "firestore-error";
    error.requestInfo = {
      method,
      projectId: window.POPULAR_FOOTWEAR_FIREBASE_CONFIG.projectId,
      databaseId: window.POPULAR_FOOTWEAR_FIREBASE_CONFIG.firestoreDatabaseId,
      path: requestPath,
      authUid: user?.uid ?? "",
      authProjectId: tokenProjectId,
      tokenIssuer,
      tokenUidMatches: Boolean(user && tokenClaims.sub === user.uid),
      httpStatus: response.status,
    };
    throw error;
  }
  return result;
}

async function firestoreRestRequest(user, path, method, data, queryParams = {}, forceTokenRefresh = false) {
  const url = firestoreRestUrl(path);
  Object.entries(queryParams).forEach(([key, value]) => url.searchParams.set(key, value));
  const body = data === undefined
    ? undefined
    : { fields: Object.fromEntries(Object.entries(data).map(([key, value]) => [key, firestoreRestValue(value)])) };
  return firestoreRestFetch(user, url, method, body, path, forceTokenRefresh);
}

async function firestoreRestRunQuery(user, collectionPath, structuredQuery, forceTokenRefresh = false) {
  const config = window.POPULAR_FOOTWEAR_FIREBASE_CONFIG;
  if (!config?.projectId || !config.firestoreDatabaseId) {
    throw new Error("The Firestore project or database configuration is unavailable.");
  }
  const segments = collectionPath.split("/");
  if (!segments.length || segments.length % 2 !== 1 || segments.some((segment) => !segment)) {
    throw new TypeError("Firestore query contains an invalid collection path.");
  }
  const parentPath = segments.slice(0, -1).map(encodeURIComponent).join("/");
  const databasePath = `projects/${encodeURIComponent(config.projectId)}/databases/${encodeURIComponent(config.firestoreDatabaseId)}/documents`;
  const url = new URL(`https://firestore.googleapis.com/v1/${databasePath}${parentPath ? `/${parentPath}` : ""}:runQuery`);
  if (typeof config.apiKey === "string" && config.apiKey) {
    url.searchParams.set("key", config.apiKey);
  }
  return firestoreRestFetch(
    user,
    url,
    "POST",
    { structuredQuery },
    collectionPath,
    forceTokenRefresh,
  );
}

async function firestoreRestCommit(user, writes) {
  const config = window.POPULAR_FOOTWEAR_FIREBASE_CONFIG;
  if (!config?.projectId || !config.firestoreDatabaseId) {
    throw new Error("The Firestore project or database configuration is unavailable.");
  }
  if (!Array.isArray(writes) || writes.length === 0) {
    throw new TypeError("A Firestore commit requires at least one write.");
  }
  const databasePath = `projects/${config.projectId}/databases/${config.firestoreDatabaseId}`;
  const encodedWrites = writes.map(({ path, data }) => {
    const segments = typeof path === "string" ? path.split("/") : [];
    if (!segments.length || segments.length % 2 !== 0 || segments.some((segment) => !segment)) {
      throw new TypeError("Firestore commit contains an invalid document path.");
    }
    return {
      update: {
        name: `${databasePath}/documents/${segments.join("/")}`,
        fields: Object.fromEntries(Object.entries(data).map(([key, value]) => [key, firestoreRestValue(value)])),
      },
    };
  });
  const url = new URL(
    `https://firestore.googleapis.com/v1/${databasePath}/documents:commit`,
  );
  return firestoreRestFetch(user, url, "POST", { writes: encodedWrites }, "documents:commit");
}

async function writeFirestoreRestDocument(user, collectionName, documentId, data) {
  return firestoreRestRequest(user, `${collectionName}/${documentId}`, "PATCH", data);
}

async function readFirestoreRestDocument(user, collectionName, documentId) {
  let document;
  try {
    document = await firestoreRestRequest(user, `${collectionName}/${documentId}`, "GET");
  } catch (error) {
    if (error?.code === "not-found") return null;
    throw error;
  }
  return decodeFirestoreRestFields(document.fields);
}

async function readFirestoreRestCollection(user, collectionPath) {
  const documents = [];
  const segments = collectionPath.split("/");
  if (!segments.length || segments.length % 2 !== 1 || segments.some((segment) => !segment)) {
    throw new TypeError("Firestore collection path is invalid.");
  }
  const collectionId = segments[segments.length - 1];
  const pageSize = 1000;
  let startAfter = "";
  try {
    do {
      const structuredQuery = {
        from: [{ collectionId }],
        orderBy: [{ field: { fieldPath: "__name__" }, direction: "ASCENDING" }],
        limit: pageSize,
        ...(startAfter
          ? { startAt: { values: [{ referenceValue: startAfter }], before: false } }
          : {}),
      };
      let response;
      try {
        response = await firestoreRestRunQuery(user, collectionPath, structuredQuery);
      } catch (error) {
        if (!user || error?.code !== "permission-denied") throw error;
        response = await firestoreRestRunQuery(user, collectionPath, structuredQuery, true);
      }
      if (!Array.isArray(response)) {
        throw new TypeError("Firestore returned an invalid query response.");
      }
      const responseDocuments = response
        .filter((entry) => entry && typeof entry === "object" && !Array.isArray(entry) && entry.document)
        .map((entry) => entry.document);
      responseDocuments.forEach((document) => {
        const documentName = typeof document?.name === "string" ? document.name : "";
        const documentId = documentName.split("/").pop();
        if (!documentId) throw new Error("Firestore returned a collection document without an ID.");
        documents.push({
          ...decodeFirestoreRestFields(document.fields),
          id: documentId,
        });
      });
      if (responseDocuments.length < pageSize) break;
      startAfter = responseDocuments[responseDocuments.length - 1].name;
      if (typeof startAfter !== "string" || !startAfter) {
        throw new TypeError("Firestore returned an invalid query cursor.");
      }
    } while (true);
  } catch (error) {
    if (error?.code === "not-found" && typeof error.message === "string" && /^(?:the )?(?:parent )?(?:document|collection)\b.*(?:not found|does not exist)/i.test(error.message)) {
      return [];
    }
    throw error;
  }
  return documents;
}

function normalizeProductDocument(document) {
  if (!document || typeof document !== "object" || Array.isArray(document)) {
    throw new TypeError("Product data must be an object.");
  }
  const { id, name, brand, category, price, mrp, sizes, colors, description, label } = document;
  if (typeof id !== "string" || !/^[A-Za-z0-9_-]{1,128}$/.test(id)
    || typeof name !== "string" || !name.trim() || name.length > 120
    || typeof brand !== "string" || !brand.trim() || brand.length > 80
    || !["Men", "Women", "Kids"].includes(category)
    || !Number.isSafeInteger(price) || price <= 0
    || !Number.isSafeInteger(mrp) || mrp < price
    || !Array.isArray(sizes) || sizes.length === 0 || sizes.length > 12
    || sizes.some((size) => typeof size !== "string" || !size.trim())
    || !Array.isArray(colors) || colors.length === 0
    || typeof description !== "string" || !description.trim() || description.length > 1000
    || typeof label !== "string" || !label.trim() || label.length > 40) {
    throw new TypeError("Product data is missing required fields or has invalid values.");
  }

  const normalizedColors = colors.map((color) => {
    if (!color || typeof color !== "object" || Array.isArray(color)
      || typeof color.name !== "string" || !color.name.trim() || color.name.length > 40
      || typeof color.code !== "string" || !/^#[\da-f]{6}$/i.test(color.code)
      || !Array.isArray(color.images) || color.images.length === 0
      || color.images.length > 8
      || color.images.some((image) => {
        if (typeof image !== "string") return true;
        try {
          return !["http:", "https:"].includes(new URL(image).protocol);
        } catch {
          return true;
        }
      })
      || !color.stock || typeof color.stock !== "object" || Array.isArray(color.stock)) {
      throw new TypeError("Product color data is invalid.");
    }

    const stock = Object.fromEntries(sizes.map((size) => {
      const quantity = color.stock[size];
      if (!Number.isSafeInteger(quantity) || quantity < 0) {
        throw new TypeError(`Product stock is invalid for ${size}.`);
      }
      return [size, quantity];
    }));
    return {
      name: color.name,
      code: color.code,
      images: [...color.images],
      stock,
    };
  });

  return {
    id,
    name,
    brand,
    category,
    price,
    mrp,
    sizes: [...sizes],
    colors: normalizedColors,
    description,
    label,
  };
}

function productCollectionStateMarkup() {
  if (productLoadStatus === "loading" || productLoadStatus === "idle") {
    return `<div class="product-load-state" role="status" aria-busy="true"><div class="account-skeleton-products product-load-skeleton" aria-hidden="true">${Array.from({ length: 3 }, () => '<article class="account-skeleton-product"><span class="skeleton-block skeleton-image"></span><span class="skeleton-block skeleton-medium"></span><span class="skeleton-block skeleton-long"></span><span class="skeleton-block skeleton-short"></span></article>').join("")}</div><p>Loading products…</p></div>`;
  }
  if (productLoadStatus === "error") {
    return `<div class="product-load-error" role="alert"><h2>Products couldn’t be loaded</h2><p>${escapeHtml(productLoadError)}</p><button class="secondary-button" type="button" data-action="retry-products">Try again</button></div>`;
  }
  return '<p class="empty-state">No products are available right now. Please check back soon.</p>';
}

function productLoadHelp(error) {
  if (firestoreAppCheckEnforcementError(error)) {
    return "Firestore is enforcing App Check. This storefront does not use App Check, so the Firebase project owner must disable enforcement for Cloud Firestore.";
  }
  if (!firestoreIsConfigured()) {
    return firebaseSetupMessage();
  }
  if (error?.code === "permission-denied") {
    return "Firestore denied the public catalog read. Deploy rules that allow read access to /product/{productId} in the default database, and disable App Check enforcement if this app is not using App Check.";
  }
  if (error?.message?.includes("timed out")) {
    return "The product request took too long. Check your connection and try again.";
  }
  return "Check your connection and confirm the default Firestore database and product records are available.";
}

function refreshProductDependentRoute() {
  const { route, value } = currentRoute();
  if (route === "home") renderHome();
  else if (route === "catalog" || ["new-arrivals", "men", "women", "kids", "collections"].includes(route.toLowerCase())) renderCatalog();
  else if (route === "product") renderProduct(value);
  else if (["cart", "checkout", "payment"].includes(route)) refreshCartRoute();
  else if (route === "wishlist") renderWishlist();
}

function loadProducts(force = false) {
  if (productLoadPromise) {
    return force
      ? productLoadPromise.then(() => loadProducts(true))
      : productLoadPromise;
  }
  if (productLoadStatus === "loaded" && !force) return Promise.resolve(products);

  productLoadStatus = "loading";
  productLoadError = "";
  refreshProductDependentRoute();

  productLoadPromise = Promise.resolve()
    .then(async () => {
      if (!firestoreIsConfigured()) {
        throw new Error(firebaseSetupMessage());
      }
      const documents = await withFirestoreReadTimeout(
        readFirestoreRestCollection(null, "product"),
        "products",
        productLoadTimeoutMs,
      );
      const loadedProducts = [];
      documents.forEach((document) => {
        try {
          loadedProducts.push(normalizeProductDocument(document));
        } catch (error) {
          console.error(`Skipping invalid Firestore product "${document?.id ?? "unknown"}".`, error);
        }
      });
      if (documents.length && !loadedProducts.length) {
        throw new Error("The product collection has no valid product records.");
      }
      products = loadedProducts;
      reservedCartStock.clear();
      reserveStockForCart();
      productLoadStatus = "loaded";
      return products;
    })
    .catch((error) => {
      productLoadStatus = "error";
      productLoadError = productLoadHelp(error);
      console.error("Could not load storefront products from Firestore.", error);
      return [];
    })
    .finally(() => {
      productLoadPromise = null;
      refreshProductDependentRoute();
    });
  return productLoadPromise;
}

async function createProductDocument(data) {
  const user = firebaseAuth.currentUser;
  if (!user || user.uid !== productAdminUid) {
    throw new Error("The product administrator or Firestore database configuration is unavailable.");
  }

  const documentId = createFirestoreDocumentId();
  await firestoreRestRequest(user, "product", "POST", { id: documentId, ...data }, { documentId });
  return documentId;
}

function parseAdminImageSlider(value) {
  const entries = Array.isArray(value)
    ? value.map((slide, index) => [String(index), slide])
    : value && typeof value === "object"
      ? Object.entries(value)
      : [];
  return entries.map(([id, value], index) => {
    const record = typeof value === "string" ? { image: value } : value;
    if (!record || typeof record !== "object" || Array.isArray(record)) {
      return { id, invalid: true, image: "", title: "Invalid slide data", active: false, order: index + 1 };
    }
    const normalized = normalizeHomeSliderData({ [id]: { ...record, active: true } })[0];
    if (!normalized) {
      return {
        id,
        invalid: true,
        image: "",
        title: homeSliderText(record, ["title", "heading", "headline", "name"], "Invalid slide data", 100),
        active: record.active !== false && record.enabled !== false,
        order: Number(record.order) || index + 1,
      };
    }
    const activeValue = record.active ?? record.enabled ?? record.isActive ?? record.is_active;
    return {
      ...normalized,
      id,
      invalid: false,
      active: ![false, 0, "false", "0", "no"].includes(activeValue)
        && !["false", "inactive", "disabled", "hidden"].includes(String(record.status ?? "").toLowerCase()),
    };
  }).sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
}

async function loadAdminImageSlider(force = false) {
  if (!isProductAdmin()) return;
  if (adminSliderStatus === "loading" && adminSliderLoadPromise) return adminSliderLoadPromise;
  if (adminSliderStatus === "loaded" && !force) return;
  const database = firebaseRuntime.database;
  if (!database || typeof database.ref !== "function") {
    adminSliderStatus = "error";
    adminSliderError = firebaseRuntime.databaseError ?? new Error("Firebase Realtime Database is not configured.");
    if (currentRoute().route === "admin-slider") renderAdminImageSlider();
    return;
  }

  adminSliderStatus = "loading";
  adminSliderError = null;
  if (currentRoute().route === "admin-slider") renderAdminImageSlider();
  adminSliderLoadPromise = (async () => {
    try {
      const snapshot = await withFirestoreReadTimeout(
        database.ref("image_slider").once("value"),
        "image slider",
        12000,
      );
      if (!isProductAdmin()) return;
      adminSliderSlides = parseAdminImageSlider(snapshot?.val?.());
      adminSliderStatus = "loaded";
    } catch (error) {
      adminSliderStatus = "error";
      adminSliderError = error;
      console.error("Could not load image slider entries for the administrator.", error);
    } finally {
      adminSliderLoadPromise = null;
      if (currentRoute().route === "admin-slider") renderAdminImageSlider();
    }
  })();
  return adminSliderLoadPromise;
}

function adminImageSliderForm(slide = null) {
  const editing = Boolean(slide);
  const value = (key) => escapeHtml(slide?.[key] ?? "");
  const submitLabel = adminSliderSaving ? "Saving…" : editing ? "Save changes" : "Add slide";
  return `<form class="product-entry-form admin-slider-form" id="admin-slider-form" data-slide-id="${escapeHtml(slide?.id ?? "")}">
    <header class="admin-slider-form-heading product-entry-wide"><div><p class="eyebrow">${editing ? "Update a featured slide" : "Create a featured slide"}</p><h2>${editing ? "Edit slide" : "New slide"}</h2></div>${editing ? '<button class="secondary-button" type="button" data-action="cancel-slider-edit">Cancel</button>' : ""}</header>
    <label class="product-entry-wide">Image URL<input name="image_url" type="url" inputmode="url" maxlength="2048" placeholder="https://example.com/featured-shoes.jpg" value="${value("image")}" required><small>Use a public HTTPS image URL. Image uploads are not enabled.</small></label>
    <label>Headline<input name="title" maxlength="100" value="${value("title")}"></label>
    <label>Eyebrow<input name="eyebrow" maxlength="70" value="${value("eyebrow")}"></label>
    <label class="product-entry-wide">Description<textarea name="description" rows="3" maxlength="220">${value("description")}</textarea></label>
    <label>Display order<input name="order" type="number" min="1" max="1000" step="1" value="${escapeHtml(String(slide?.order ?? adminSliderSlides.length + 1))}" required></label>
    <label class="admin-slider-active-field"><input name="active" type="checkbox" ${slide?.active === false ? "" : "checked"}> Show this slide on the home page</label>
    <p class="product-entry-note product-entry-wide">Slides are stored in the <code>image_slider</code> Realtime Database path. Only the configured administrator can change them.</p>
    <p class="product-entry-status product-entry-wide" role="status" aria-live="polite"></p>
    <div class="product-entry-wide admin-slider-form-actions"><button class="primary-button" type="submit" ${adminSliderSaving ? "disabled" : ""}>${submitLabel}</button></div>
  </form>`;
}

function adminSliderCard(slide, index) {
  const status = slide.active ? "Live" : "Hidden";
  const preview = slide.image
    ? `<img src="${escapeHtml(slide.image)}" alt="" loading="lazy" decoding="async">`
    : '<span class="admin-slider-no-image">Image unavailable</span>';
  return `<article class="admin-slider-card${slide.invalid ? " is-invalid" : ""}">
    <div class="admin-slider-preview">${preview}</div>
    <div class="admin-slider-card-copy">
      <p class="admin-slider-card-meta"><span>Slide ${index + 1}</span><span class="admin-slider-status${slide.active ? " is-live" : ""}">${status}</span>${slide.invalid ? '<span class="admin-slider-invalid">Needs attention</span>' : ""}</p>
      <h3>${escapeHtml(slide.title || "Untitled slide")}</h3>
      <p>${escapeHtml(slide.description || slide.image || "No description provided.")}</p>
    </div>
    <div class="admin-slider-card-actions">
      <button class="secondary-button" type="button" data-action="edit-slider" data-slide-id="${escapeHtml(slide.id)}" ${adminSliderSaving ? "disabled" : ""}>Edit</button>
      <button class="secondary-button" type="button" data-action="move-slider" data-slide-id="${escapeHtml(slide.id)}" data-direction="-1" aria-label="Move slide up" ${index === 0 || adminSliderSaving ? "disabled" : ""}>↑</button>
      <button class="secondary-button" type="button" data-action="move-slider" data-slide-id="${escapeHtml(slide.id)}" data-direction="1" aria-label="Move slide down" ${index === adminSliderSlides.length - 1 || adminSliderSaving ? "disabled" : ""}>↓</button>
      <button class="secondary-button" type="button" data-action="toggle-slider" data-slide-id="${escapeHtml(slide.id)}" ${adminSliderSaving ? "disabled" : ""}>${slide.active ? "Hide" : "Publish"}</button>
      <button class="secondary-button admin-slider-delete" type="button" data-action="delete-slider" data-slide-id="${escapeHtml(slide.id)}" ${adminSliderSaving ? "disabled" : ""}>Delete</button>
    </div>
  </article>`;
}

function renderAdminImageSlider() {
  const title = "Manage image slider";
  const description = "Create and organize the featured slides shown on your home page.";
  if (!accountFeatureReady(title, description, accountMenuIcons.manageSlider, "wishlist")) return;
  if (!isProductAdmin()) {
    accountFeaturePage(title, description, accountMenuIcons.manageSlider, accountFeatureError("Administrator access required", "Image slider management is available only to the configured store administrator.", '<a class="secondary-button" href="#account" data-route="account">Back to your account</a>'));
    return;
  }
  if (adminSliderStatus === "idle") void loadAdminImageSlider();
  if (adminSliderStatus === "loading" || adminSliderStatus === "idle") {
    accountFeatureLoading(title, description, accountMenuIcons.manageSlider, "wishlist");
    return;
  }
  if (adminSliderStatus === "error") {
    accountFeaturePage(title, description, accountMenuIcons.manageSlider, accountFeatureError(
      "Slider entries didn’t load",
      escapeHtml(adminSliderError?.message ?? "Check Realtime Database access and try again."),
      '<button class="secondary-button" type="button" data-action="retry-admin-slider">Try again</button>',
    ));
    return;
  }

  const editSlide = adminSliderEditingId
    ? adminSliderSlides.find((slide) => slide.id === adminSliderEditingId)
    : null;
  const formMarkup = adminSliderEditingId && !editSlide
    ? ""
    : adminImageSliderForm(editSlide);
  const slides = adminSliderSlides.length
    ? `<div class="admin-slider-list">${adminSliderSlides.map(adminSliderCard).join("")}</div>`
    : accountFeatureEmpty("No featured slides yet", "Add your first slide to feature a collection on the home page.");
  const toolbar = `<div class="account-feature-toolbar"><span>${adminSliderSlides.length} ${adminSliderSlides.length === 1 ? "slide" : "slides"}</span><button class="secondary-button" type="button" data-action="retry-admin-slider" ${adminSliderSaving ? "disabled" : ""}>Refresh</button>${!adminSliderEditingId ? `<button class="primary-button" type="button" data-action="new-slider" ${adminSliderSaving ? "disabled" : ""}>Add slide</button>` : ""}</div>`;
  const content = `<div class="account-feature-content admin-slider-content">${toolbar}${formMarkup}${slides}</div>`;
  accountFeaturePage(title, description, accountMenuIcons.manageSlider, content);
}

async function saveAdminImageSlider(form) {
  if (adminSliderSaving) return;
  if (!isProductAdmin() || !firebaseRuntime.database) {
    showToast("Administrator access and Realtime Database are required to save slides.");
    return;
  }
  const imageValue = form.elements.image_url.value.trim();
  let imageUrl;
  try {
    imageUrl = new URL(imageValue);
  } catch {
    showToast("Enter a valid HTTPS image URL.");
    form.elements.image_url.focus();
    return;
  }
  if (imageUrl.protocol !== "https:") {
    showToast("Slider images must use HTTPS.");
    form.elements.image_url.focus();
    return;
  }

  const order = Number(form.elements.order.value);
  if (!Number.isSafeInteger(order) || order < 1 || order > 1000) {
    showToast("Display order must be a whole number from 1 to 1000.");
    form.elements.order.focus();
    return;
  }
  const data = {
    image_url: imageUrl.href,
    title: form.elements.title.value.trim(),
    eyebrow: form.elements.eyebrow.value.trim(),
    description: form.elements.description.value.trim(),
    order,
    active: form.elements.active.checked,
  };
  const id = form.dataset.slideId;
  const status = form.querySelector(".product-entry-status");
  adminSliderSaving = true;
  if (status) status.textContent = "";
  renderAdminImageSlider();
  try {
    const reference = firebaseRuntime.database.ref("image_slider");
    if (id) await reference.child(id).set(data);
    else await reference.push().set(data);
    adminSliderEditingId = "";
    adminSliderStatus = "idle";
    await loadAdminImageSlider(true);
    showToast(id ? "Slider slide updated." : "Slider slide added.");
  } catch (error) {
    console.error("Could not save an image slider entry.", error);
    adminSliderSaving = false;
    const message = error.code === "PERMISSION_DENIED"
      ? "Realtime Database denied this write. Verify the admin UID and deploy database.rules.json."
      : "The slide could not be saved. Check your connection and try again.";
    if (currentRoute().route === "admin-slider") {
      renderAdminImageSlider();
      const errorStatus = main.querySelector(".admin-slider-form .product-entry-status");
      if (errorStatus) errorStatus.textContent = message;
    }
    showToast(message);
    return;
  }
  adminSliderSaving = false;
  if (currentRoute().route === "admin-slider") renderAdminImageSlider();
}

async function mutateAdminImageSlider(slideId, mutation) {
  if (!isProductAdmin() || !firebaseRuntime.database || adminSliderSaving) return;
  const slide = adminSliderSlides.find((entry) => entry.id === slideId);
  if (!slide) {
    showToast("That slider entry is no longer available. Refresh and try again.");
    return;
  }
  adminSliderSaving = true;
  renderAdminImageSlider();
  try {
    await mutation(slide);
    adminSliderStatus = "idle";
    await loadAdminImageSlider(true);
  } catch (error) {
    console.error("Could not update an image slider entry.", error);
    adminSliderSaving = false;
    const message = error.code === "PERMISSION_DENIED"
      ? "Realtime Database denied this change. Verify the admin UID and deployed database rules."
      : "The slider could not be updated. Check your connection and try again.";
    showToast(message);
    if (currentRoute().route === "admin-slider") renderAdminImageSlider();
    return;
  }
  adminSliderSaving = false;
  if (currentRoute().route === "admin-slider") renderAdminImageSlider();
}

async function moveAdminImageSlider(slideId, direction) {
  const index = adminSliderSlides.findIndex((slide) => slide.id === slideId);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= adminSliderSlides.length) return;
  const reordered = [...adminSliderSlides];
  [reordered[index], reordered[nextIndex]] = [reordered[nextIndex], reordered[index]];
  await mutateAdminImageSlider(slideId, async () => {
    const updates = {};
    reordered.forEach((slide, position) => {
      updates[`${slide.id}/order`] = position + 1;
      updates[`${slide.id}/alt`] = null;
      updates[`${slide.id}/button_text`] = null;
      updates[`${slide.id}/button_link`] = null;
    });
    await firebaseRuntime.database.ref("image_slider").update(updates);
  });
}

function renderAddProduct() {
  const title = "Add product";
  const description = "Publish a product to the storefront catalog.";
  if (!authStateReady) {
    main.innerHTML = '<section class="simple-page"><p role="status">Checking administrator access…</p></section>';
    return;
  }
  if (!currentUser) {
    navigate("account");
    return;
  }
  if (!isProductAdmin()) {
    accountFeaturePage(title, description, accountMenuIcons.addProduct, accountFeatureError("Administrator access required", "This page is available only to the configured product administrator.", '<a class="secondary-button" href="#account" data-route="account">Back to your account</a>'));
    return;
  }
  if (!firebaseIsReady()) {
    accountFeaturePage(title, description, accountMenuIcons.addProduct, accountFeatureError("Product storage unavailable", firebaseSetupMessage(), ""));
    return;
  }

  const content = `<form class="product-entry-form" id="product-entry-form">
    <label>Product name<input name="name" maxlength="120" required></label>
    <label>Brand<input name="brand" maxlength="80" required></label>
    <label>Category<select name="category" required><option value="">Choose category</option><option>Men</option><option>Women</option><option>Kids</option></select></label>
    <label>Offer price (INR)<input name="price" type="number" min="1" step="1" required></label>
    <label>MRP (INR)<input name="mrp" type="number" min="1" step="1" required></label>
    <label>Sizes, comma-separated<input name="sizes" placeholder="UK 6, UK 7, UK 8" maxlength="120" required></label>
    <label>Stock per size, in the same order<input name="stock" placeholder="2, 4, 1" maxlength="120" required><small>Enter one non-negative quantity for each size above.</small></label>
    <label>Color name<input name="colorName" maxlength="40" required></label>
    <label>Color code<input name="colorCode" type="color" value="#52714f" required></label>
    <label class="product-entry-wide">Image URLs, one per line<textarea name="images" rows="3" maxlength="2000" placeholder="https://example.com/shoe.jpg" required></textarea></label>
    <label class="product-entry-wide">Description<textarea name="description" rows="4" maxlength="1000" required></textarea></label>
    <label>Product label<input name="label" maxlength="40" placeholder="New" required></label>
    <p class="product-entry-note product-entry-wide">Products saved here are published from the <code>product</code> Firestore collection.</p>
    <p class="product-entry-status product-entry-wide" id="product-entry-status" role="status" aria-live="polite"></p>
    <button class="primary-button product-entry-submit product-entry-wide" type="submit">Save product</button>
  </form>`;
  accountFeaturePage(title, description, accountMenuIcons.addProduct, `<div class="account-feature-content">${content}</div>`);
}

async function saveNewProduct(form) {
  if (!currentUser || !isProductAdmin() || !firebaseIsReady()) {
    showToast("Administrator access is required to save products.");
    return;
  }

  const sizes = form.elements.sizes.value.split(",").map((size) => size.trim()).filter(Boolean);
  const stockValues = form.elements.stock.value.split(",").map((quantity) => quantity.trim());
  const normalizedSizes = sizes.map((size) => {
    const match = size.match(/^UK\s+(\d+)$/i);
    return match ? `UK ${Number(match[1])}` : "";
  });
  if (!sizes.length || sizes.length > 12 || normalizedSizes.some((size) => !size) || new Set(normalizedSizes).size !== normalizedSizes.length) {
    showToast("Enter unique sizes such as UK 6, UK 7, UK 8.");
    form.elements.sizes.focus();
    return;
  }
  if (stockValues.length !== sizes.length || stockValues.some((quantity) => !/^\d+$/.test(quantity) || !Number.isSafeInteger(Number(quantity)))) {
    showToast("Enter one whole-number stock quantity for each size, in the same order.");
    form.elements.stock.focus();
    return;
  }

  const images = form.elements.images.value.split(/\r?\n/).map((image) => image.trim()).filter(Boolean);
  if (!images.length || images.length > 8 || images.some((image) => {
    try {
      const url = new URL(image);
      return !["http:", "https:"].includes(url.protocol);
    } catch {
      return true;
    }
  })) {
    showToast("Enter between 1 and 8 valid HTTP(S) image URLs.");
    form.elements.images.focus();
    return;
  }

  const price = Number(form.elements.price.value);
  const mrp = Number(form.elements.mrp.value);
  if (!Number.isSafeInteger(price) || !Number.isSafeInteger(mrp) || price <= 0 || mrp < price) {
    showToast("Enter valid prices and make sure the MRP is at least the offer price.");
    form.elements.price.focus();
    return;
  }

  const name = form.elements.name.value.trim();
  const brand = form.elements.brand.value.trim();
  const colorName = form.elements.colorName.value.trim();
  const description = form.elements.description.value.trim();
  const label = form.elements.label.value.trim();
  if (!name || !brand || !colorName || !description || !label) {
    showToast("Fill in all product details before saving.");
    form.querySelector('input[name="name"]').focus();
    return;
  }

  const productData = {
    name,
    brand,
    category: form.elements.category.value,
    price,
    mrp,
    sizes: normalizedSizes,
    colors: [{
      name: colorName,
      code: form.elements.colorCode.value,
      images,
      stock: Object.fromEntries(normalizedSizes.map((size, index) => [size, Number(stockValues[index])])),
    }],
    description,
    label,
  };
  const submitButton = form.querySelector('button[type="submit"]');
  const status = form.querySelector("#product-entry-status");
  submitButton.disabled = true;
  form.setAttribute("aria-busy", "true");
  status.textContent = "";
  try {
    const documentId = await createProductDocument(productData);
    if (currentUser?.uid !== productAdminUid || !form.isConnected) return;
    form.reset();
    status.textContent = `Product saved successfully. Firestore document ID: ${documentId}`;
    showToast("Product saved to Firestore.");
    void loadProducts(true);
  } catch (error) {
    console.error("Could not save product to Firestore.", error);
    const message = error.code === "permission-denied"
      ? "Firestore denied this write. Confirm the admin UID and deploy rules to the configured database."
      : error.code === "not-found"
        ? "The configured Firestore database was not found. Check its ID in firebase-config.js."
        : "The product could not be saved. Check your connection and try again.";
    if (form.isConnected) status.textContent = message;
    showToast(message);
  } finally {
    if (form.isConnected) {
      submitButton.disabled = false;
      form.removeAttribute("aria-busy");
    }
  }
}

function updateWishlistControls(productId) {
  const saved = wishlistProductIds.has(productId);
  main.querySelectorAll('.wishlist-toggle[data-action="wishlist-toggle"]').forEach((button) => {
    if (button.dataset.productId !== productId) return;
    const actionLabel = saved ? "Remove from wishlist" : "Add to wishlist";
    const visibleLabel = saved ? "Added to wishlist" : "Add to wishlist";
    button.setAttribute("aria-label", `${actionLabel}: ${products.find((product) => product.id === productId)?.name ?? "item"}`);
    button.setAttribute("aria-pressed", String(saved));
    button.title = actionLabel;
    const text = button.querySelector(".wishlist-label");
    if (text) text.textContent = visibleLabel;
  });
}

async function toggleWishlist(productId) {
  if (window.location.protocol === "file:") {
    showToast(accountDataSetupHint());
    return;
  }
  if (!firebaseIsReady()) {
    showToast(firebaseSetupMessage());
    navigate("account");
    return;
  }
  if (!authStateReady) {
    showToast("Your sign-in status is still loading. Try again shortly.");
    return;
  }
  if (!currentUser) {
    showToast("Sign in to save items to your wishlist.");
    navigate("account");
    return;
  }
  const user = currentUser;
  const writeKey = `${user.uid}:${productId}`;
  if (wishlistWrites.has(writeKey)) return;
  if (wishlistStatus !== "loaded") {
    await loadUserWishlist(user, true);
    if (wishlistStatus !== "loaded") {
      const message = firestoreAppCheckEnforcementError(wishlistLoadError)
        ? "Firestore App Check enforcement is enabled. This app uses owner-only rules instead; disable App Check enforcement in Firebase Console."
        : wishlistLoadError?.code === "permission-denied"
          ? "Firestore denied wishlist access. Check the signed-in account and owner-only rules deployed to the named default database."
          : "Your wishlist could not be loaded. Check the connection and Firestore database configuration.";
      showToast(message);
      return;
    }
  }
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const shouldSave = !wishlistProductIds.has(productId);
  wishlistWrites.add(writeKey);
  if (shouldSave) wishlistProductIds.add(productId);
  else wishlistProductIds.delete(productId);
  if (currentRoute().route === "wishlist") renderWishlist();
  else updateWishlistControls(productId);
  try {
    if (shouldSave) {
      await firestoreRestRequest(
        user,
        `user/${user.uid}/wishlist`,
        "POST",
        { productId, createdAt: Date.now() },
        { documentId: productId },
      );
      if (currentUser?.uid !== user.uid) return;
      showToast(`${product.name} added to your wishlist.`);
    } else {
      await firestoreRestRequest(user, `user/${user.uid}/wishlist/${productId}`, "DELETE");
      if (currentUser?.uid !== user.uid) return;
      showToast(`${product.name} removed from your wishlist.`);
    }
  } catch (error) {
    if (currentUser?.uid === user.uid) {
      if (shouldSave) wishlistProductIds.delete(productId);
      else wishlistProductIds.add(productId);
      if (currentRoute().route === "wishlist") renderWishlist();
      else updateWishlistControls(productId);
    }
    console.error("Could not update this user's wishlist in Firestore.", error);
    showToast("Your wishlist could not be updated. Try again.");
  } finally {
    wishlistWrites.delete(writeKey);
  }
}

async function saveAddress(form) {
  if (!currentUser || addressBookStatus !== "loaded") {
    showToast("Your address book is not ready. Try again shortly.");
    return;
  }
  const user = currentUser;
  const fields = form.elements;
  const values = {
    fullName: fields.fullName.value.trim(),
    address: fields.address.value.trim(),
    city: fields.city.value.trim(),
    region: fields.region.value.trim(),
    postal: fields.postal.value.trim(),
    phone: fields.phone.value.trim(),
  };
  const addresses = savedAddressRecords();
  const existing = addresses.find((address) => address.id === addressEditingId);
  const addressId = existing
    ? existing.id
    : createFirestoreDocumentId();
  const isDefault = Boolean(fields.isDefault.checked);
  const createdAt = existing ? firestoreValueToMillis(existing.createdAt) : Date.now();
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  try {
    const data = {
      id: addressId,
      ...values,
      isDefault,
      createdAt,
    };
    if (existing) {
      await writeFirestoreRestDocument(user, `user/${user.uid}/addresses`, addressId, data);
    } else {
      await firestoreRestRequest(user, `user/${user.uid}/addresses`, "POST", data, { documentId: addressId });
    }
    if (currentUser?.uid !== user.uid) return;
    if (existing) {
      savedAddresses = addresses.map((address) => address.id === existing.id ? { ...data, createdAt: existing.createdAt } : address);
      showToast("Your address has been updated.");
    } else {
      savedAddresses = [...addresses, data];
      showToast("Your address has been saved.");
    }
    addressEditingId = "";
    navigate("addresses");
  } catch (error) {
    console.error("Could not save this user's address to Firestore.", error);
    showToast(firestoreAppCheckEnforcementError(error)
      ? "Firestore App Check enforcement is enabled. Disable it in Firebase Console to use owner-only Firestore rules."
      : "Your address could not be saved. Check Firestore access and try again.");
  } finally {
    if (form.isConnected) submitButton.disabled = false;
  }
}

async function deleteAddress(addressId) {
  const address = savedAddressRecords().find((entry) => entry.id === addressId);
  if (!currentUser || !address) return;
  if (!window.confirm(`Delete the saved address for ${address.fullName}?`)) return;
  const user = currentUser;
  try {
    await firestoreRestRequest(user, `user/${user.uid}/addresses/${addressId}`, "DELETE");
    if (currentUser?.uid !== user.uid) return;
    savedAddresses = savedAddressRecords().filter((entry) => entry.id !== addressId);
    if (addressEditingId === addressId) addressEditingId = "";
    if (selectedCheckoutAddressId === addressId) selectedCheckoutAddressId = "";
    renderAddresses();
    showToast("Your address has been deleted.");
  } catch (error) {
    console.error("Could not delete this user's saved address from Firestore.", error);
    showToast("Your address could not be deleted. Try again.");
  }
}

function renderPrivacyPolicy() {
  main.innerHTML = `<section class="simple-page privacy-page">
    <p class="eyebrow">Your information</p>
    <h1>Privacy policy</h1>
    <p class="page-intro">This policy describes how Popular Footwear handles information when you use this demo storefront.</p>
    <section class="privacy-section"><h2>Information we handle</h2><p>If you create an account, Firebase Authentication handles your email address and password, and the storefront saves your name and email with your account profile. If you place a demo order, the checkout form requests contact and delivery details and the storefront may save those details, order items, and purchase records to your account. Saved delivery addresses, wishlist items, and product reviews are also stored with your account.</p><p>Do not enter real payment details: checkout is a demonstration and does not process payments.</p></section>
    <section class="privacy-section"><h2>How information is used</h2><p>Account information is used to sign you in and show your profile. Order and purchase records support the demo order history and product-review features; saved addresses prefill checkout, and wishlist entries remember products for later. We do not sell your personal information.</p></section>
    <section class="privacy-section"><h2>Services and browser storage</h2><p>Authentication and stored account, order, and review data are provided through Firebase Authentication and Cloud Firestore. The storefront saves your light or dark theme preference in your browser’s local storage. Google Fonts and product images may load from their respective providers when you view the site.</p></section>
    <section class="privacy-section"><h2>Your choices</h2><p>You can remove wishlist items and saved addresses from your account, sign out from the profile menu, and clear this site’s browser storage to remove the saved theme preference. Account and order data stored with Firebase may require assistance from the storefront operator to access or delete.</p></section>
    <section class="privacy-section"><h2>About this policy</h2><p>This storefront is a demo, not a payment service. Before using it for a live business, the operator should review this policy, add appropriate contact details, and explain applicable data retention and privacy-request procedures.</p></section>
  </section>`;
}

function renderContactPage() {
  main.innerHTML = `<section class="simple-page contact-page">
    <header class="contact-hero">
      <div class="contact-brand-lockup"><img src="assets/images/icon-192.png" alt="Popular Footwear logo"><span>POPULAR FOOTWEAR<small>EVERYDAY SHOES</small></span></div>
      <p class="eyebrow">We're here to help</p>
      <h1>Contact us</h1>
      <p class="page-intro">Questions about a pair or need a hand with your order? Reach out and our team will be happy to help.</p>
    </header>
    <div class="contact-methods">
      <a class="contact-method-card" href="mailto:popularfootwearonline@gmail.com">
        <span class="contact-method-icon" aria-hidden="true">${accountMenuIcons.email}</span>
        <span class="contact-method-label">Email our team</span>
        <strong>popularfootwearonline@gmail.com</strong>
        <span class="contact-method-hint">Send us a message anytime</span>
        <span class="contact-method-arrow" aria-hidden="true">↗</span>
      </a>
      <a class="contact-method-card" href="tel:+919874563210">
        <span class="contact-method-icon" aria-hidden="true">${accountMenuIcons.phone}</span>
        <span class="contact-method-label">Call us</span>
        <strong>+91 9874563210</strong>
        <span class="contact-method-hint">We're glad to hear from you</span>
        <span class="contact-method-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
    <section class="contact-faq" aria-labelledby="contact-faq-title">
      <header class="contact-faq-heading">
        <p class="eyebrow">Quick answers</p>
        <h2 id="contact-faq-title">Delivery, orders &amp; replacements</h2>
        <p>Need more help? Contact our team using the options above.</p>
      </header>
      <div class="contact-faq-list">
        <details class="contact-faq-item">
          <summary>Is delivery free on all orders?</summary>
          <p>Delivery is free on orders above ₹999. Available delivery options will be shown at checkout.</p>
        </details>
        <details class="contact-faq-item">
          <summary>How can I check delivery availability?</summary>
          <p>Enter your delivery PIN code during checkout to see the available delivery options for your location.</p>
        </details>
        <details class="contact-faq-item">
          <summary>How long will my order take to arrive?</summary>
          <p>Delivery time depends on your location and the available delivery service. Check the estimated delivery information provided during checkout.</p>
        </details>
        <details class="contact-faq-item">
          <summary>Can I change my delivery address after placing an order?</summary>
          <p>Contact our customer support team as soon as possible. Address changes may not be possible once your order has been dispatched.</p>
        </details>
        <details class="contact-faq-item">
          <summary>What should I do if my order is delayed?</summary>
          <p>Contact our customer support team with your order details so we can help check the delivery status.</p>
        </details>
        <details class="contact-faq-item">
          <summary>Can I return or exchange my footwear?</summary>
          <p>Ordinary purchases are not eligible for returns or exchanges under our <a href="#shipping" data-route="shipping">Shipping &amp; Replacement Policy</a>. Please review the applicable policy before placing an order.</p>
        </details>
        <details class="contact-faq-item">
          <summary>What if I receive a defective product?</summary>
          <p>Contact our customer support team within 1 day of receiving the product. Include your order details and clear photos of the issue to request a replacement.</p>
        </details>
        <details class="contact-faq-item">
          <summary>What if I receive the wrong product?</summary>
          <p>Contact our customer support team as soon as possible with your order number and photos of the product received. Our team will review your request.</p>
        </details>
      </div>
    </section>
    <p class="contact-page-note">${accountMenuIcons.contact}<span>Popular Footwear customer care</span></p>
  </section>`;
}

function currentRoute() {
  const parts = decodeURIComponent(window.location.hash.slice(1)).split("/");
  const route = parts[0] || "home";
  return { route, value: parts.slice(1).join("/") };
}

function renderRoute() {
  const { route, value } = currentRoute();
  if (route !== "home") stopHomeSliderAutoplay();
  main.classList.toggle("catalog-main", route === "catalog" || ["new-arrivals", "men", "women", "kids", "collections"].includes(route.toLowerCase()));
  if (route === "catalog" || ["new-arrivals", "men", "women", "kids", "collections"].includes(route.toLowerCase())) {
    if (route !== "catalog") filters.category = route === "new-arrivals" ? "New Arrivals" : route[0].toUpperCase() + route.slice(1);
    else if (value) filters.category = value;
    renderCatalog();
  } else if (route === "product") renderProduct(value);
  else if (route === "cart") renderCart();
  else if (route === "checkout") renderCheckout();
  else if (route === "payment") renderPayment();
  else if (route === "confirmation") renderConfirmation();
  else if (route === "account") renderAccount();
  else if (route === "shipping") renderShipping();
  else if (route === "orders") renderOrders();
  else if (route === "admin-orders") renderAdminOrders();
  else if (route === "wishlist") renderWishlist();
  else if (route === "addresses") renderAddresses();
  else if (route === "address-editor") renderAddressEditor(value);
  else if (route === "add-product") renderAddProduct();
  else if (route === "admin-slider") renderAdminImageSlider();
  else if (route === "privacy") renderPrivacyPolicy();
  else if (route === "contact") renderContactPage();
  else renderHome();

  mainNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigate(route, value = "") {
  const hash = value ? `#${route}/${encodeURIComponent(value)}` : `#${route}`;
  if (window.location.hash === hash) renderRoute();
  else window.location.hash = hash;
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".account-control")) setAccountMenuOpen(false);
  if (event.target.closest("#account-button")) {
    event.preventDefault();
    const shouldOpen = accountMenu.hidden;
    updateAccountMenu();
    setAccountMenuOpen(shouldOpen);
    if (shouldOpen) accountMenu.querySelector('[role="menuitem"]')?.focus();
    return;
  }

  const routeLink = event.target.closest("[data-route]");
  if (routeLink) {
    event.preventDefault();
    setAccountMenuOpen(false);
    const route = routeLink.dataset.route;
    if (route === "account" && !currentUser) accountMode = "sign-in";
    if (route === "catalog") {
      filters.category = routeLink.dataset.category ?? "";
      filters.query = "";
      if (searchInput) searchInput.value = "";
      navigate("catalog", filters.category);
    } else if (route === "product") navigate("product", routeLink.dataset.productId);
    else navigate(route);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const { action, productId } = actionButton.dataset;

  if (action === "new-slider") {
    adminSliderEditingId = "";
    renderAdminImageSlider();
  } else if (action === "cancel-slider-edit") {
    adminSliderEditingId = "";
    renderAdminImageSlider();
  } else if (action === "edit-slider") {
    if (!isProductAdmin()) return;
    adminSliderEditingId = actionButton.dataset.slideId;
    renderAdminImageSlider();
    main.querySelector("#admin-slider-form input[name='image_url']")?.focus();
  } else if (action === "retry-admin-slider") {
    adminSliderStatus = "idle";
    void loadAdminImageSlider(true);
  } else if (action === "toggle-slider") {
    const slideId = actionButton.dataset.slideId;
    void mutateAdminImageSlider(slideId, (slide) => {
      const updates = { active: !slide.active, alt: null, button_text: null, button_link: null };
      return firebaseRuntime.database.ref("image_slider").child(slide.id).update(updates);
    });
  } else if (action === "delete-slider") {
    const slide = adminSliderSlides.find((entry) => entry.id === actionButton.dataset.slideId);
    if (!slide || !window.confirm(`Delete “${slide.title || "this slide"}” from the home-page slider?`)) return;
    void mutateAdminImageSlider(slide.id, () => (
      firebaseRuntime.database.ref("image_slider").child(slide.id).remove()
    ));
  } else if (action === "move-slider") {
    void moveAdminImageSlider(actionButton.dataset.slideId, Number(actionButton.dataset.direction));
  } else if (action === "add") {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    const selectedSize = main.querySelector(".size-button.is-selected")?.dataset.size;
    addToCart(product, selectedSize);
  } else if (action === "color") {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    const variant = selectedVariant(product, actionButton.dataset.color);
    selectedColors.set(productId, variant.name);
    const card = actionButton.closest(".product-card");
    if (card) {
      main.querySelectorAll(`[data-product-card="${product.id}"]`).forEach((productCardElement) => {
        productCardElement.querySelector(".card-color-name").textContent = variant.name;
        const image = productCardElement.querySelector(".product-image img");
        image.src = variantImages(variant)[0] ?? "";
        image.alt = `${variant.name} footwear`;
        productCardElement.querySelectorAll(".color-swatch").forEach((swatch) => {
          const selected = swatch.dataset.color === variant.name;
          swatch.classList.toggle("is-selected", selected);
          swatch.setAttribute("aria-pressed", String(selected));
        });
      });
      updateSizeAvailability(product, variant);
    } else {
      updateProductColor(product, variant);
    }
  } else if (action === "clear-filters") {
    filters.sizes.clear();
    filters.brands.clear();
    filters.minPrice = "10";
    filters.maxPrice = "";
    filters.query = "";
    renderCatalog();
  } else if (action === "retry-products") {
    void loadProducts(true);
  } else if (action === "size") {
    main.querySelectorAll(".size-button").forEach((button) => {
      const selected = button === actionButton;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    const product = products.find((item) => item.id === main.querySelector(".detail-add-button")?.dataset.productId);
    if (product) updateDisplayedProductPrice(product, actionButton.dataset.size);
    const stockMessage = main.querySelector(".size-stock-message");
    if (stockMessage) stockMessage.textContent = "";
  } else if (action === "gallery") {
    main.querySelectorAll(".thumbnail").forEach((button) => button.classList.toggle("is-active", button === actionButton));
    const mainImage = main.querySelector(".gallery-main-image");
    const thumbnailImage = actionButton.querySelector("img");
    if (mainImage && thumbnailImage) {
      mainImage.src = thumbnailImage.src;
      mainImage.alt = thumbnailImage.alt;
    }
  } else if (action === "quantity") {
    const item = cart.get(actionButton.dataset.key);
    if (item) {
      const change = Number(actionButton.dataset.change);
      const product = products.find((entry) => entry.id === item.productId);
      if (change < 0 && item.quantity === 1
        && !window.confirm(`Remove ${product?.name ?? "this item"} from your bag?`)) {
        return;
      }
      if (!product) return;
      const variant = selectedVariant(product, item.color);
      if (change > 0 && variant.stock[item.size] <= 0) {
        showToast(`No more ${item.size} pairs are available.`);
        return;
      }
      item.quantity += change;
      adjustCartStock(item, change);
      if (item.quantity <= 0) {
        cart.delete(actionButton.dataset.key);
        showToast("Item removed from your bag.");
      }
      updateCartBadge();
      void persistCart();
      renderCart();
    }
  } else if (action === "remove") {
    const item = cart.get(actionButton.dataset.key);
    if (!item || !window.confirm("Remove this item from your bag?")) return;
    adjustCartStock(item, -item.quantity);
    cart.delete(actionButton.dataset.key);
    updateCartBadge();
    void persistCart();
    renderCart();
    showToast("Item removed from your bag.");
  } else if (action === "retry-cart") {
    if (currentUser) {
      if (cartSyncStatus === "error") void loadUserCart(currentUser);
      else void persistCart();
    } else if (guestCartLoadError) {
      replaceCart(readGuestCart());
      refreshCartRoute();
    } else if (guestCartSaveError) {
      saveGuestCart();
      refreshCartRoute();
    }
  } else if (action === "retry-home-slider") {
    loadHomeSlider(true);
  } else if (action === "home-slide-previous") {
    showHomeSlide(homeSliderActiveIndex - 1);
    startHomeSliderAutoplay();
  } else if (action === "home-slide-next") {
    showHomeSlide(homeSliderActiveIndex + 1);
    startHomeSliderAutoplay();
  } else if (action === "home-slide-select") {
    showHomeSlide(Number(actionButton.dataset.slideIndex));
    startHomeSliderAutoplay();
  } else if (action === "place-order") {
    window.alert("Coming Soon");
  } else if (action === "checkout") {
    window.alert("Coming Soon");
  } else if (action === "retry-stock-check") {
    checkoutInventory.status = "idle";
    checkoutInventory.error = null;
    renderCheckout();
  } else if (action === "retry-price-refresh") {
    void refreshProductPricing();
  } else if (action === "sign-out") {
    setAccountMenuOpen(false);
    firebaseAuth.signOut().catch((error) => {
      console.error("Firebase sign-out failed.", error);
      showToast("Sign out could not be completed. Please try again.");
    });
  } else if (action === "wishlist-toggle") {
    void toggleWishlist(productId);
  } else if (action === "retry-orders") {
    if (currentUser) void loadUserOrders(currentUser, true);
  } else if (action === "request-order-action") {
    void requestCustomerOrderAction(actionButton.dataset.orderId, actionButton.dataset.requestType);
  } else if (action === "retry-admin-orders") {
    adminOrderHistoryStatus = "idle";
    void loadAdminOrders(true);
  } else if (action === "update-admin-order") {
    const statusSelect = [...main.querySelectorAll("[data-order-status]")].find((select) => (
      select.dataset.orderStatus === actionButton.dataset.orderId
      && select.dataset.userId === actionButton.dataset.userId
    ));
    if (statusSelect) {
      void updateAdminOrderStatus(actionButton.dataset.orderId, actionButton.dataset.userId, statusSelect.value);
    }
  } else if (action === "decline-admin-order-request") {
    void declineAdminOrderRequest(actionButton.dataset.orderId, actionButton.dataset.userId);
  } else if (action === "retry-wishlist") {
    if (currentUser) void loadUserWishlist(currentUser, true);
  } else if (action === "add-address") {
    addressEditingId = "";
    navigate("address-editor", "new");
  } else if (action === "edit-address") {
    addressEditingId = actionButton.dataset.addressId;
    navigate("address-editor", addressEditingId);
  } else if (action === "cancel-address-edit") {
    addressEditingId = "";
    navigate("addresses");
  } else if (action === "delete-address") {
    void deleteAddress(actionButton.dataset.addressId);
  } else if (action === "select-address") {
    const address = savedAddressRecords().find((entry) => entry.id === actionButton.dataset.addressId);
    if (!address) return;
    selectedCheckoutAddressId = address.id;
    navigate("checkout");
  } else if (action === "toggle-auth-mode") {
    accountMode = accountMode === "sign-up" ? "sign-in" : "sign-up";
    renderAccount();
  } else if (action === "menu-sign-up") {
    accountMode = "sign-up";
    setAccountMenuOpen(false);
    navigate("account");
  } else if (action === "toggle-password") {
    const form = actionButton.closest("#account-form");
    const input = form?.elements.namedItem(actionButton.dataset.passwordTarget);
    if (!input) return;
    const visible = input.type === "password";
    input.type = visible ? "text" : "password";
    actionButton.setAttribute("aria-pressed", String(visible));
    actionButton.setAttribute("aria-label", `${visible ? "Hide" : "Show"} ${actionButton.dataset.passwordTarget === "confirmPassword" ? "confirm password" : "password"}`);
    actionButton.innerHTML = visible ? authFieldIcons.eyeOff : authFieldIcons.eye;
  } else if (action === "refresh-captcha") {
    const form = actionButton.closest("#account-form");
    if (form) {
      refreshCaptcha(form);
      setFieldError(form.elements.captchaAnswer, "");
    }
  } else if (action === "retry-profile") {
    void retryProfileSync();
  } else if (action === "edit-profile") {
    profileEditing = true;
    renderFirebaseAccount();
  } else if (action === "cancel-edit-profile") {
    profileEditing = false;
    renderFirebaseAccount();
  } else if (action === "retry-reviews") {
    if (productId) void loadProductReviews(productId, true);
  } else if (action === "reviews") {
    main.querySelector("#reviews")?.scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.matches("[data-price-slider]")) {
    const overallMax = maximumProductPrice();
    if (target.dataset.priceSlider === "min") {
      filters.minPrice = target.value;
    } else {
      filters.maxPrice = Number(target.value) >= overallMax ? "" : target.value;
    }
    syncPriceRangeControls();
    updateCatalogProductResults();
    return;
  }

  const form = event.target.closest("#account-form");
  if (!form || !event.target.name) return;
  clearAccountFormError(form);
  event.target.dataset.validationTouched = "true";
  validateAccountField(form, event.target.name);
  if (event.target.name === "password" && form.elements.confirmPassword?.dataset.validationTouched === "true") {
    validateAccountField(form, "confirmPassword");
  }
});

document.addEventListener("focusout", (event) => {
  const form = event.target.closest("#account-form");
  if (!form || !event.target.name) return;
  event.target.dataset.validationTouched = "true";
  validateAccountField(form, event.target.name);
});

document.addEventListener("keydown", (event) => {
  if (!accountMenu.hidden && ["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
    const items = [...accountMenu.querySelectorAll('[role="menuitem"]')];
    if (!items.length) return;
    event.preventDefault();
    const currentIndex = items.indexOf(document.activeElement);
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? items.length - 1
        : (currentIndex + (event.key === "ArrowDown" ? 1 : items.length - 1)) % items.length;
    items[nextIndex].focus();
  } else if (event.key === "Escape" && !accountMenu.hidden) {
    setAccountMenuOpen(false);
    accountButton.focus();
  } else if (["ArrowLeft", "ArrowRight"].includes(event.key)
    && !event.target.matches("input, textarea, select, [contenteditable='true']")) {
    const hero = main.querySelector("[data-home-hero]");
    if (!hero || (!hero.matches(":hover") && !hero.contains(event.target))) return;
    event.preventDefault();
    showHomeSlide(homeSliderActiveIndex + (event.key === "ArrowRight" ? 1 : -1));
    startHomeSliderAutoplay();
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches('input[name="payment"]')) {
    const qrPanel = main.querySelector("#upi-qr-panel");
    if (qrPanel) qrPanel.hidden = target.value !== "upi";
  } else if (target.matches("[data-filter-group]")) {
    const group = target.dataset.filterGroup;
    if (target.checked) filters[group].add(target.value);
    else filters[group].delete(target.value);
    renderCatalog();
  } else if (target.matches("[data-price]")) {
    const key = target.dataset.price === "min" ? "minPrice" : "maxPrice";
    const parsed = Number(target.value);
    const maxPrice = maximumProductPrice();
    const value = target.value === ""
      ? (key === "minPrice" ? 10 : maxPrice)
      : Math.min(maxPrice, Math.max(10, parsed));
    if (key === "minPrice") {
      filters.minPrice = String(value);
      if (value > (filters.maxPrice === "" ? maxPrice : Number(filters.maxPrice))) {
        filters.maxPrice = value >= maxPrice ? "" : String(value);
      }
    } else {
      filters.maxPrice = value >= maxPrice ? "" : String(value);
      if (value < Number(filters.minPrice)) filters.minPrice = String(value);
    }
    renderCatalog();
  }
});

searchInput.addEventListener("input", () => {
  filters.query = searchInput.value.trim();
  if (currentRoute().route !== "catalog") {
    filters.category = "";
    navigate("catalog");
  } else {
    renderCatalog();
  }
});

cartButton.addEventListener("click", () => navigate("cart"));
themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme, true);
});
document.querySelector(".ship-to").addEventListener("click", () => showToast("Shipping to Gangasagar, West Bengal 743373."));
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("is-open", !isOpen);
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "admin-slider-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    void saveAdminImageSlider(event.target);
  } else if (event.target.id === "product-entry-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    void saveNewProduct(event.target);
  } else if (event.target.id === "product-review-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    void submitProductReview(event.target);
  } else if (event.target.id === "shipping-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    continueCheckout(event.target);
  } else if (event.target.id === "account-form") {
    event.preventDefault();
    void handleAccountSubmit(event.target);
  } else if (event.target.id === "profile-recovery-form") {
    event.preventDefault();
    void saveRecoveredUserProfile(event.target);
  } else if (event.target.id === "profile-edit-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    void saveEditedUserProfile(event.target);
  } else if (event.target.id === "address-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    void saveAddress(event.target);
  }
});

main.addEventListener("error", (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || !image.classList.contains("hero-slide-image")) return;
  const slide = image.closest(".hero-slide");
  if (!slide) return;
  slide.classList.add("has-image-error");
  const placeholder = slide.querySelector(".hero-image-unavailable");
  if (placeholder) placeholder.hidden = false;
  console.error("A home slider image could not be loaded.", image.currentSrc || image.src);
}, true);

let homeSliderTouchStart = null;
main.addEventListener("touchstart", (event) => {
  if (!event.target.closest("[data-home-hero]") || event.touches.length !== 1) {
    homeSliderTouchStart = null;
    return;
  }
  homeSliderTouchStart = {
    x: event.changedTouches[0].screenX,
    y: event.changedTouches[0].screenY,
  };
  stopHomeSliderAutoplay();
}, { passive: true });

main.addEventListener("touchend", (event) => {
  const start = homeSliderTouchStart;
  homeSliderTouchStart = null;
  if (!start || !event.changedTouches.length) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.screenX - start.x;
  const deltaY = touch.screenY - start.y;
  if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
    showHomeSlide(homeSliderActiveIndex + (deltaX < 0 ? 1 : -1));
  }
  startHomeSliderAutoplay();
}, { passive: true });

main.addEventListener("touchcancel", () => {
  homeSliderTouchStart = null;
  startHomeSliderAutoplay();
}, { passive: true });

window.addEventListener("hashchange", renderRoute);
window.addEventListener("scroll", handleHomeScroll, { passive: true });
if (firebaseIsReady()) {
  firebaseAuth.onAuthStateChanged(handleAuthStateChanged, (error) => {
    authStateReady = true;
    purchaseStatus = "error";
    console.error("Firebase could not determine the current authentication state.", error);
    showToast("Your account state could not be loaded. Reload and try again.");
    const route = currentRoute().route;
    if (route === "account") renderAccount();
    else if (["orders", "wishlist", "addresses", "address-editor"].includes(route)) renderRoute();
  });
}
setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
updateAccountMenu();
replaceCart(readGuestCart());
updateCartBadge();
void loadProducts();
renderRoute();
loadHomeSlider();
