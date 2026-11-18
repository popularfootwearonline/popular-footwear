const products = [
  {
    id: "velocity-runner",
    name: "Velocity Runner V1",
    brand: "Nike",
    category: "Men",
    price: 7499,
    mrp: 9999,
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    sizePricing: {
      "UK 10": { price: 7799, mrp: 10499 },
      "UK 11": { price: 6699, mrp: 10999 },
    },
    colors: [
      { name: "Storm grey", code: "#d66700", images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 2, "UK 7": 5, "UK 8": 3, "UK 9": 1, "UK 10": 4, "UK 11": 2 } },
      { name: "Midnight black", code: "#282A29", images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 1, "UK 7": 2, "UK 8": 0, "UK 9": 3, "UK 10": 2, "UK 11": 1 } },
      { name: "Chalk white", code: "#F4F3EF", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 4, "UK 7": 0, "UK 8": 2, "UK 9": 2, "UK 10": 1, "UK 11": 0 } },
    ],
    description: "A lightweight everyday runner with a cushioned sole, breathable lining, and a soft, considered finish.",
    label: "Bestseller",
  },
  {
    id: "court-classic",
    name: "Court Classic Low",
    brand: "Adidas",
    category: "Women",
    price: 6899,
    mrp: 8999,
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    colors: [
      { name: "Chalk white", code: "#F4F3EF", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 4, "UK 7": 2, "UK 8": 6, "UK 9": 3, "UK 10": 1 } },
      { name: "Midnight black", code: "#282A29", images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 0, "UK 7": 2, "UK 8": 3, "UK 9": 1, "UK 10": 0 } },
      { name: "Warm sand", code: "#AA8461", images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 2, "UK 7": 3, "UK 8": 0, "UK 9": 2, "UK 10": 1 } },
    ],
    description: "An easy-to-wear low top, finished with a clean profile and a comfortable, everyday fit.",
    label: "Sale",
  },
  {
    id: "high-top-studio",
    name: "High Top Studio",
    brand: "Puma",
    category: "Men",
    price: 8299,
    mrp: 10999,
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: [
      { name: "Warm sand", code: "#AA8461", images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85"], stock: { "UK 7": 2, "UK 8": 4, "UK 9": 3, "UK 10": 1, "UK 11": 5 } },
      { name: "Midnight black", code: "#282A29", images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=85"], stock: { "UK 7": 1, "UK 8": 0, "UK 9": 2, "UK 10": 3, "UK 11": 2 } },
      { name: "Storm grey", code: "#7D858B", images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85"], stock: { "UK 7": 3, "UK 8": 2, "UK 9": 1, "UK 10": 0, "UK 11": 4 } },
    ],
    description: "A modern high-top silhouette with soft padding and thoughtful details for everyday wear.",
    label: "Just landed",
  },
  {
    id: "city-runner",
    name: "City Runner V1",
    brand: "New Balance",
    category: "Kids",
    price: 5999,
    mrp: 7999,
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9"],
    colors: [
      { name: "Forest green", code: "#52714F", images: ["https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 3, "UK 7": 2, "UK 8": 5, "UK 9": 1 } },
    ],
    description: "A flexible, lightweight pair for moving through busy days in comfort.",
    label: "Sale",
  },
  {
    id: "leather-weekender",
    name: "Leather Weekender",
    brand: "Adidas",
    category: "Women",
    price: 9499,
    mrp: 11999,
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    colors: [
      { name: "Chestnut brown", code: "#8A5A3C", images: ["https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 1, "UK 7": 3, "UK 8": 2, "UK 9": 4, "UK 10": 2 } },
      { name: "Midnight black", code: "#282A29", images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 0, "UK 7": 2, "UK 8": 1, "UK 9": 3, "UK 10": 1 } },
    ],
    description: "Soft leather and an easy, versatile shape make this the pair you keep by the door.",
    label: "Bestseller",
  },
  {
    id: "everyday-high",
    name: "Everyday High",
    brand: "Nike",
    category: "Men",
    price: 8899,
    mrp: 11499,
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: [
      { name: "Midnight black", code: "#282A29", images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=85"], stock: { "UK 7": 3, "UK 8": 2, "UK 9": 4, "UK 10": 2, "UK 11": 1 } },
      { name: "Storm grey", code: "#7D858B", images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85"], stock: { "UK 7": 2, "UK 8": 0, "UK 9": 3, "UK 10": 1, "UK 11": 2 } },
      { name: "Chalk white", code: "#F4F3EF", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"], stock: { "UK 7": 1, "UK 8": 3, "UK 9": 2, "UK 10": 0, "UK 11": 1 } },
    ],
    description: "A confident, polished everyday essential with a supportive sole and a little edge.",
    label: "Sale",
  },
  {
    id: "junior-motion",
    name: "Junior Motion",
    brand: "Puma",
    category: "Kids",
    price: 4999,
    mrp: 6999,
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9"],
    colors: [
      { name: "Ocean blue", code: "#426B96", images: ["https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 4, "UK 7": 3, "UK 8": 2, "UK 9": 5 } },
      { name: "Chalk white", code: "#F4F3EF", images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 2, "UK 7": 1, "UK 8": 0, "UK 9": 3 } },
    ],
    description: "A dependable, easy-on pair built for every adventure on the calendar.",
    label: "New",
  },
  {
    id: "soft-step",
    name: "Soft Step Trainer",
    brand: "New Balance",
    category: "Women",
    price: 7299,
    mrp: 9499,
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    colors: [
      { name: "Cloud white", code: "#EEEDE8", images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 2, "UK 7": 4, "UK 8": 1, "UK 9": 3, "UK 10": 5 } },
      { name: "Warm sand", code: "#AA8461", images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85"], stock: { "UK 6": 1, "UK 7": 0, "UK 8": 3, "UK 9": 2, "UK 10": 4 } },
    ],
    description: "A soft, supportive trainer with a clean silhouette made for long days on your feet.",
    label: "Sale",
  },
];

const main = document.querySelector("#app-main");
const searchInput = document.querySelector("#product-search");
const cartCount = document.querySelector(".cart-count");
const cartButton = document.querySelector(".cart-button");
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
const filters = { category: "", query: "", sizes: new Set(), brands: new Set(), minPrice: "10", maxPrice: "9999" };
const selectedColors = new Map();
const homePageSize = 8;
const firebaseRuntime = window.popularFootwearFirebase ?? { status: "sdk-unavailable", auth: null, db: null };
const firebaseAuth = firebaseRuntime.auth;
const firestore = firebaseRuntime.db;
const reviewCache = new Map();
const reviewLoadStatus = new Map();
const reviewLoads = new Map();
const purchasedProductIds = new Set();
const wishlistProductIds = new Set();
const wishlistWrites = new Set();

let toastTimeout;
let currentUser = null;
let authStateReady = !firebaseAuth;
let purchaseStatus = "idle";
let orderHistory = [];
let orderHistoryStatus = "idle";
let wishlistStatus = "idle";
let savedAddresses = [];
let addressBookStatus = "idle";
let addressEditingId = "";
let selectedCheckoutAddressId = "";
let pendingOrderDetails = null;
let resumeAfterAuth = "";
let lastOrderNumber = "";
let accountMode = "sign-in";
let orderSubmissionInProgress = false;
let captchaChallenge = null;
let userProfile = null;
let profileStatus = "idle";
let pendingProfileName = "";

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
  cart.set(key, { productId: product.id, size: selectedSize, color, quantity: (item?.quantity ?? 0) + 1 });
  variant.stock[selectedSize] -= 1;
  updateCartBadge();
  updateSizeAvailability(product, variant);
  showToast(`${product.name} · ${color} · ${selectedSize} added to your bag.`);
}

function renderSizeOptions(product, variant, preferredSize) {
  const sizes = productSizes(product);
  if (!sizes.length) return "";
  const selectedSize = selectedPriceSize(product, variant, preferredSize);
  return sizes.map((size) => {
    const quantity = variant.stock[size] ?? 0;
    const selected = size === selectedSize;
    return `<button type="button" class="size-button ${selected ? "is-selected" : ""} ${quantity === 0 ? "out-of-stock" : ""}" data-action="size" data-size="${size}" aria-label="${size}, ${quantity ? `${quantity} left` : "out of stock"}" aria-pressed="${selected}" ${quantity === 0 ? "disabled" : ""}><span>${size}</span><small>${quantity ? `${quantity} left` : "Out of stock"}</small></button>`;
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
    <button type="button" class="thumbnail ${index === 0 ? "is-active" : ""}" data-action="gallery" data-image-index="${index}" aria-label="Product image ${index + 1} of ${variant.name}">
      <img src="${image}" alt="${variant.name} footwear, image ${index + 1}" loading="lazy" />
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
    return `<button type="button" class="color-swatch color-swatch-large ${selected ? "is-selected" : ""}" style="--swatch-color:${colorSwatch(option)}" aria-label="${option.name} (${option.code ?? "custom color"})" aria-pressed="${selected}" data-action="color" data-product-id="${product.id}" data-color="${option.name}"><span class="visually-hidden">${option.name}</span></button>`;
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
  return `<img class="${extraClass}" src="${image}" alt="${variant.name} footwear" loading="lazy" />`;
}

function wishlistControlMarkup(product) {
  const saved = currentUser && wishlistProductIds.has(product.id);
  const actionLabel = saved ? "Remove from wishlist" : "Add to wishlist";
  const visibleLabel = saved ? "Added to wishlist" : "Add to wishlist";
  return `<button type="button" class="wishlist-toggle detail-wishlist-toggle" data-action="wishlist-toggle" data-product-id="${product.id}" aria-label="${actionLabel}: ${product.name}" aria-pressed="${Boolean(saved)}" title="${actionLabel}">${accountMenuIcons.wishlist}<span class="wishlist-label">${visibleLabel}</span></button>`;
}

function productCard(product, compact = false) {
  const variant = selectedVariant(product);
  const inStock = variantHasStock(product, variant);
  return `
    <article class="product-card" data-product-card="${product.id}">
      <a class="product-image" href="#product/${product.id}" data-route="product" data-product-id="${product.id}" aria-label="View ${product.name}">
        ${imageMarkup(product, "", variant)}
        <span class="product-tag">${product.label}</span>
        <span class="delivery-tag">Fast delivery</span>
      </a>
      <div class="product-info">
        <div class="product-title-row"><h3>${product.name}</h3><span class="product-brand">${product.brand}</span></div>
        <p class="product-description">${compact ? "Everyday comfort, thoughtful details." : product.description}</p>
        <div class="card-color-line"><span class="card-color-name">${variant.name}</span><div class="card-color-options" aria-label="Choose a color for ${product.name}">${product.colors.map((option) => `<button type="button" class="color-swatch ${variant.name === option.name ? "is-selected" : ""}" style="--swatch-color:${colorSwatch(option)}" aria-label="${option.name} (${option.code ?? "custom color"})" aria-pressed="${variant.name === option.name}" data-action="color" data-product-id="${product.id}" data-color="${option.name}"><span class="visually-hidden">${option.name}</span></button>`).join("")}</div></div>
        <div class="product-buy"><strong>${productPriceLabel(product)}</strong><button class="add-button" type="button" data-action="add" data-product-id="${product.id}" ${inStock ? "" : "disabled"}>${inStock ? "Add to bag" : "Sold out"}</button></div>
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
  const batch = Array.from({ length: homePageSize }, (_, index) => products[(start + index) % products.length]);
  main.querySelector("#home-product-grid").insertAdjacentHTML("beforeend", batch.map((product) => productCard(product)).join(""));
  sentinel.dataset.loadedCount = String(start + batch.length);
  sentinel.querySelector("span").textContent = `${start + batch.length} styles loaded — keep scrolling`;
}

function renderHome() {
  main.innerHTML = `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-image" role="img" aria-label="A pair of refined everyday sneakers"></div>
      <div class="hero-copy">
        <p class="eyebrow">Made for the everyday</p>
        <h1 id="hero-title">Elevate your<br />every step.</h1>
        <p class="hero-description">Discover the latest collection of handcrafted footwear.</p>
        <a class="primary-button" href="#catalog/New%20Arrivals" data-route="catalog" data-category="New Arrivals">Explore the drop <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <section class="trending-section" id="trending" aria-labelledby="trending-title">
      <div class="section-heading">
        <div><p class="eyebrow">The pairs everyone's talking about</p><h2 id="trending-title">Trending now</h2></div>
        <a class="view-all" href="#catalog" data-route="catalog">View all <span aria-hidden="true">→</span></a>
      </div>
      <div class="product-grid">${products.slice(0, 6).map((product) => productCard(product, true)).join("")}</div>
    </section>
    <section class="infinite-products" aria-labelledby="all-styles-title">
      <div class="section-heading">
        <div><p class="eyebrow">Good shoes, for all your everyday</p><h2 id="all-styles-title">Explore every style</h2></div>
        <span class="results-count">Prices from ₹4,999</span>
      </div>
      <div class="product-grid catalog-grid home-product-grid" id="home-product-grid">${products.slice(0, homePageSize).map((product) => productCard(product)).join("")}</div>
      <div class="product-sentinel" id="product-sentinel" data-loaded-count="${homePageSize}" aria-live="polite"><span>8 styles loaded — keep scrolling</span></div>
    </section>`;
  observeHomeProducts();
}

function productMatches(product) {
  const query = filters.query.toLowerCase();
  const min = filters.minPrice === "" ? 10 : Number(filters.minPrice);
  const max = filters.maxPrice === "" ? 9999 : Number(filters.maxPrice);
  return (!filters.category || filters.category === "Collections" || (filters.category === "New Arrivals" ? ["Just landed", "New"].includes(product.label) : product.category === filters.category))
    && (!query || `${product.name} ${product.brand} ${product.colors.map((variant) => variant.name).join(" ")}`.toLowerCase().includes(query))
    && (filters.sizes.size === 0 || [...filters.sizes].some((size) => productSizes(product).includes(size) && product.colors.some((variant) => variant.stock[size] > 0)))
    && (filters.brands.size === 0 || filters.brands.has(product.brand))
    && productPriceValues(product).some((price) => price >= min && price <= max);
}

function filterCheckbox(label, group) {
  const checked = filters[group].has(label) ? "checked" : "";
  return `<label class="filter-option"><input type="checkbox" data-filter-group="${group}" value="${label}" ${checked}><span>${label}</span></label>`;
}

function renderCatalog() {
  const filtered = products.filter(productMatches);
  const title = filters.category && filters.category !== "Collections" ? filters.category : filters.category || "All footwear";
  main.innerHTML = `
    <div class="catalog-layout">
      <aside class="filter-sidebar" aria-label="Product filters">
        <div class="filter-group"><h2>Size</h2>${["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"].map((size) => filterCheckbox(size, "sizes")).join("")}</div>
        <div class="filter-group"><h2>Brand</h2>${["Nike", "Adidas", "Puma", "New Balance"].map((brand) => filterCheckbox(brand, "brands")).join("")}</div>
        <div class="filter-group price-filter"><h2>Price range</h2><div class="price-range"><span></span><span></span></div><div class="price-inputs"><label><span class="visually-hidden">Minimum price</span><input type="number" min="10" max="9999" placeholder="10" value="${filters.minPrice}" data-price="min"></label><span>—</span><label><span class="visually-hidden">Maximum price</span><input type="number" min="10" max="9999" placeholder="9999" value="${filters.maxPrice}" data-price="max"></label></div><p class="price-limits">₹10 – ₹9,999</p></div>
        <button class="clear-filters" type="button" data-action="clear-filters">Clear all filters</button>
      </aside>
      <section class="catalog-results" aria-labelledby="catalog-title">
        <div class="catalog-heading"><div><p class="eyebrow">Find your next everyday pair</p><h1 id="catalog-title">${title}</h1></div><span class="results-count">${filtered.length} styles</span></div>
        <div class="product-grid catalog-grid">${filtered.map((product) => productCard(product)).join("")}</div>
        ${filtered.length ? "" : '<p class="empty-state">No styles match these filters. Try changing your search or clearing the filters.</p>'}
      </section>
    </div>`;
}

function renderProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) {
    main.innerHTML = `<section class="simple-page"><p class="eyebrow">That pair got away</p><h1>We couldn't find that style.</h1><a class="primary-button" href="#catalog" data-route="catalog">Browse all footwear</a></section>`;
    return;
  }
  if (currentUser && purchaseStatus === "idle") {
    if (window.location.protocol === "file:") purchaseStatus = "error";
    else loadUserPurchases(currentUser);
  }
  const variant = selectedVariant(product);
  const hasStock = variantHasStock(product, variant);
  const initialSize = selectedPriceSize(product, variant);
  const initialPrice = priceForSize(product, initialSize);
  const reviews = reviewCache.get(product.id) ?? [];
  const reviewAccess = getReviewAccess(product.id);
  const averageRating = reviews.length
    ? (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1)
    : null;
  main.innerHTML = `
    <section class="detail-page">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#home" data-route="home">Home</a><span>›</span><a href="#catalog/${encodeURIComponent(product.category)}" data-route="catalog" data-category="${product.category}">${product.category}</a><span>›</span><span>Shoes</span></nav>
      <div class="detail-layout">
        <div class="detail-gallery">
          <div class="gallery-thumbnails">${productGalleryMarkup(product, variant)}</div>
          <div class="detail-main-image">${imageMarkup(product, "gallery-main-image")}</div>
        </div>
        <div class="detail-info">
          <p class="eyebrow">${product.brand} / ${product.category} / Shoes</p>
          <h1>${product.name} — <span class="detail-color-name">${variant.name}</span></h1>
          <div class="rating"><span aria-label="${averageRating ? `${averageRating} out of 5 stars` : "No ratings yet"}">${averageRating ? "★".repeat(Math.round(Number(averageRating))) : "☆☆☆☆☆"}</span><strong>${averageRating ?? "New"}</strong><button type="button" data-action="reviews">${reviews.length ? `${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}` : "Be the first to review"}</button></div>
          ${productSizes(product).length
            ? `<fieldset class="size-picker"><legend>Choose your size</legend><div class="size-options">${renderSizeOptions(product, variant)}</div><p class="size-stock-message" role="status">${hasStock ? "" : "This color is sold out in every size. Choose another color."}</p></fieldset>`
            : `<p class="size-stock-message" role="status">${hasStock ? "" : "This color is sold out. Choose another color."}</p>`}
          <div class="detail-price"><div class="detail-price-values"><span>Offer price</span><strong class="detail-current-price">${money(initialPrice.price)}</strong><del class="detail-current-mrp">MRP ${money(initialPrice.mrp)}</del></div><span class="discount-pill detail-discount">${discountPercent(product, initialSize)}% off</span></div>
          <p class="detail-description">${product.description}</p>
          <fieldset class="color-picker"><legend>Color: <span class="detail-color-name">${variant.name}</span></legend><div class="color-options">${renderColorOptions(product, variant)}</div></fieldset>
          <ul class="feature-list"><li>Free delivery on orders above ₹999</li><li>Fast delivery options available to Gangasagar</li><li>Breathable lining and cushioned everyday comfort</li></ul>
          <div class="detail-product-actions"><button type="button" class="primary-button detail-add-button" data-action="add" data-product-id="${product.id}" ${hasStock ? "" : "disabled"}>${hasStock ? 'Add to bag <span aria-hidden="true">→</span>' : "Sold out"}</button>${wishlistControlMarkup(product)}</div>
          <p class="delivery-note">Free delivery above ₹999 · Secure transaction</p>
        </div>
      </div>
      <section class="product-benefits" aria-label="Shopping benefits">
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h16v13H4zM8 7V4h8v3M8 12h8" /></svg></span><strong>No returns or exchanges</strong><span>Replacement only for defective or incorrect items</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M2 7h13v11H2zM15 11h4l3 3v4h-7zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg></span><strong>Free delivery</strong><span>On orders above ₹999</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg></span><strong>Top brand</strong><span>${product.brand} footwear</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 11-13h-7l1-7Z" /></svg></span><strong>Fast delivery</strong><span>Quick dispatch to your address</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></svg></span><strong>Secure transaction</strong><span>Protected checkout</span></article>
      </section>
      <section class="reviews-section" id="reviews" aria-labelledby="reviews-title">
        <div class="reviews-heading"><div><p class="eyebrow">Your experience matters</p><h2 id="reviews-title">Ratings &amp; reviews</h2></div><div class="reviews-average"><strong>${averageRating ?? "—"}</strong><span>${averageRating ? "★★★★★" : "☆☆☆☆☆"}</span><small>${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}</small></div></div>
        <div class="reviews-layout">
          ${renderReviewAccess(product.id, reviewAccess)}
          <div class="review-list" aria-live="polite">${renderReviewList(product.id)}</div>
        </div>
      </section>
    </section>`;
  if (firebaseIsReady() && !reviewCache.has(product.id)) void loadProductReviews(product.id);
}

function normalizeEmail(email) {
  return String(email ?? "").trim().toLowerCase();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function firebaseIsReady() {
  return firebaseRuntime.status === "ready" && Boolean(firebaseAuth && firestore);
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

function loadUserPurchases(user) {
  if (!firebaseIsReady()) return;
  purchaseStatus = "loading";
  firestore.collection("user").doc(user.uid).collection("purchases").get()
    .then((snapshot) => {
      if (currentUser?.uid !== user.uid) return;
      purchasedProductIds.clear();
      snapshot.docs.forEach((purchase) => purchasedProductIds.add(purchase.id));
      purchaseStatus = "loaded";
    })
    .catch((error) => {
      if (currentUser?.uid !== user.uid) return;
      purchaseStatus = "error";
      console.error("Could not load this user's purchase records from Firestore.", error);
      showToast("Purchase history could not be checked. Try again before reviewing.");
    })
    .finally(() => {
      if (currentUser?.uid === user.uid && currentRoute().route === "product") {
        renderProduct(currentRoute().value);
      }
    });
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
    return `<div class="review-access-gate"><h3>Purchase history unavailable</h3><p>We couldn't verify your demo order.</p><button class="secondary-button" type="button" data-action="retry-purchases">Try again</button></div>`;
  }
  if (access.reason === "review-error") {
    return `<div class="review-access-gate"><h3>Reviews unavailable</h3><p>We couldn't check whether you've already reviewed this pair.</p><button class="secondary-button" type="button" data-action="retry-reviews" data-product-id="${escapeHtml(productId)}">Try again</button></div>`;
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
  if (!retry && reviewLoadStatus.get(productId) === "loaded") return Promise.resolve();

  reviewLoadStatus.set(productId, "loading");
  const request = firestore.collection("products").doc(productId).collection("reviews")
    .orderBy("createdAt", "desc")
    .get()
    .then((snapshot) => {
      const reviews = snapshot.docs.map((document) => {
        const data = document.data();
        const createdAt = data.createdAt?.toDate?.();
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
      });
      reviewCache.set(productId, reviews);
      reviewLoadStatus.set(productId, "loaded");
    })
    .catch((error) => {
      reviewLoadStatus.set(productId, "error");
      console.error(`Could not load reviews for product "${productId}" from Firestore.`, error);
      showToast("Product reviews could not be loaded. Try again.");
    })
    .finally(() => {
      reviewLoads.delete(productId);
      const route = currentRoute();
      if (route.route === "product" && route.value === productId) renderProduct(productId);
    });
  reviewLoads.set(productId, request);
  return request;
}

function renderReviewList(productId) {
  if (!firebaseIsReady()) return `<p class="no-reviews">${escapeHtml(firebaseSetupMessage())}</p>`;
  if (reviewLoadStatus.get(productId) === "loading" || !reviewLoadStatus.has(productId)) {
    return `<p class="no-reviews">Loading reviews…</p>`;
  }
  if (reviewLoadStatus.get(productId) === "error") {
    return `<p class="no-reviews">Reviews could not be loaded. <button class="secondary-button" type="button" data-action="retry-reviews" data-product-id="${escapeHtml(productId)}">Try again</button></p>`;
  }
  const reviews = reviewCache.get(productId) ?? [];
  if (!reviews.length) return `<p class="no-reviews">No reviews yet. Be the first to share your experience.</p>`;
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
  const review = {
    userId: currentUser.uid,
    name: form.elements.reviewer.value.trim().slice(0, 40) || "Customer",
    rating: Number(form.elements.rating.value),
    text: reviewText.slice(0, 800),
    date: new Date().toISOString(),
  };
  try {
    await firestore.collection("products").doc(productId).collection("reviews").doc(currentUser.uid).set({
      userId: currentUser.uid,
      productId,
      name: review.name,
      rating: review.rating,
      text: review.text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
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

async function recordDemoOrder() {
  if (orderSubmissionInProgress) return;
  if (!firebaseIsReady()) {
    showToast(firebaseSetupMessage());
    navigate("account");
    return;
  }
  if (!currentUser) {
    resumeAfterAuth = "checkout";
    showToast("Sign in or create an account to place your demo order.");
    navigate("account");
    return;
  }
  if (!pendingOrderDetails || !cartEntries().length) {
    showToast("Return to shipping and enter your details before placing the demo order.");
    navigate("checkout");
    return;
  }
  if (normalizeEmail(pendingOrderDetails.email) !== normalizeEmail(currentUser.email)) {
    showToast("The shipping email must match your signed-in Firebase account.");
    navigate("checkout");
    return;
  }

  const items = cartEntries();
  const productIds = [...new Set(items.map((item) => item.product.id))];
  if (productIds.length > 20) {
    showToast("An order can contain up to 20 different products.");
    return;
  }
  const orderRef = firestore.collection("user").doc(currentUser.uid).collection("orders").doc();
  const orderNumber = `PF-${Date.now().toString().slice(-8)}`;
  const totals = orderTotals();
  const batch = firestore.batch();
  batch.set(orderRef, {
    userId: currentUser.uid,
    email: currentUser.email,
    orderNumber,
    status: "demo-completed",
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    productIds,
    items: items.map((item) => ({
      productId: item.product.id,
      name: item.product.name,
      color: item.color,
      size: item.size,
      quantity: item.quantity,
      unitPrice: priceForSize(item.product, item.size).price,
    })),
    totals,
    shipping: pendingOrderDetails,
  });
  productIds.forEach((productId) => {
    const purchaseRef = firestore.collection("user").doc(currentUser.uid).collection("purchases").doc(productId);
    batch.set(purchaseRef, {
      userId: currentUser.uid,
      productId,
      orderId: orderRef.id,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  });

  orderSubmissionInProgress = true;
  const placeOrderButton = main.querySelector('[data-action="place-order"]');
  if (placeOrderButton) {
    placeOrderButton.disabled = true;
    placeOrderButton.textContent = "Saving demo order…";
  }
  try {
    await batch.commit();
    productIds.forEach((productId) => purchasedProductIds.add(productId));
    purchaseStatus = "loaded";
    lastOrderNumber = orderNumber;
    pendingOrderDetails = null;
    navigate("confirmation");
  } catch (error) {
    console.error("Could not save the demo order and purchase records to Firestore.", error);
    showToast("The demo order could not be saved. Check your connection and try again.");
  } finally {
    orderSubmissionInProgress = false;
    const retryButton = main.querySelector('[data-action="place-order"]');
    if (retryButton) {
      retryButton.disabled = false;
      retryButton.textContent = "Place demo order";
    }
  }
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
      profileMessage = `<div class="account-profile-notice"><strong>Profile details could not be saved</strong><p>Check that the default Firestore database exists and the current firestore.rules are deployed, then try again.</p><button class="text-button" type="button" data-action="retry-profile">Try again</button></div>`;
    } else if (profileStatus === "missing") {
      const profileNameValue = escapeHtml(pendingProfileName || currentUser.displayName || "");
      profileMessage = `<div class="account-profile-notice"><strong>Finish setting up your profile</strong><p>Your sign-in exists, but its Firestore profile is missing or incomplete. Add your name to save the profile. Passwords are managed by Firebase Authentication and are never saved here.</p></div><form class="account-form profile-recovery-form" id="profile-recovery-form"><label>Full name<input name="name" autocomplete="name" maxlength="80" value="${profileNameValue}" required></label><button class="primary-button" type="submit">Save profile</button></form>`;
    }
    const profileContent = `<section class="account-profile-card"><div class="account-profile-summary"><span class="account-profile-avatar" aria-hidden="true">${accountMenuIcons.profile}</span><div><strong>${escapeHtml(profileName || "Account holder")}</strong><span>${escapeHtml(currentUser.email ?? "")}</span></div></div>${profileMessage ? `<div class="account-profile-message">${profileMessage}</div>` : ""}<div class="account-profile-details"><div><span>Account status</span><strong>Signed in</strong></div><div><span>Checkout</span><strong>Demo only · no payment collected</strong></div></div><button class="secondary-button" type="button" data-action="sign-out">Sign out</button></section>`;
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
    accountMenu.innerHTML = `<p class="account-menu-heading" role="presentation"><strong>${escapeHtml(name)}</strong><small>${escapeHtml(currentUser.email ?? "")}</small></p><a class="account-menu-item" role="menuitem" href="#account" data-route="account">${accountMenuIcons.profile}<span>Profile</span></a><a class="account-menu-item" role="menuitem" href="#orders" data-route="orders">${accountMenuIcons.orders}<span>My Orders</span></a><a class="account-menu-item" role="menuitem" href="#wishlist" data-route="wishlist">${accountMenuIcons.wishlist}<span>Wishlist</span></a><a class="account-menu-item" role="menuitem" href="#addresses" data-route="addresses">${accountMenuIcons.addresses}<span>Your Addresses</span></a><button class="account-menu-item" role="menuitem" type="button" data-action="sign-out">${accountMenuIcons.signOut}<span>Log out</span></button><a class="account-menu-item" role="menuitem" href="#privacy" data-route="privacy">${accountMenuIcons.privacy}<span>Privacy policy</span></a><a class="account-menu-item" role="menuitem" href="#contact" data-route="contact">${accountMenuIcons.contact}<span>Contact us</span></a>`;
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
  const profile = {
    uid: user.uid,
    name,
    email: user.email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
  await firestore.collection("user").doc(user.uid).set(profile);
  userProfile = { uid: user.uid, name, email: user.email };
  profileStatus = "ready";
  pendingProfileName = "";
  updateAccountMenu();
}

function isCompleteUserProfile(profile, user) {
  const allowedFields = ["uid", "name", "email", "createdAt"];
  return Object.keys(profile).every((key) => allowedFields.includes(key))
    && allowedFields.every((key) => Object.prototype.hasOwnProperty.call(profile, key))
    && profile.uid === user.uid
    && typeof profile.name === "string"
    && profile.name.trim().length > 0
    && profile.email === user.email
    && typeof profile.createdAt?.toDate === "function";
}

async function loadUserProfile(user) {
  profileStatus = "loading";
  try {
    const snapshot = await firestore.collection("user").doc(user.uid).get();
    if (currentUser?.uid !== user.uid) return;
    const profile = snapshot.exists ? snapshot.data() : null;
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

function continueCheckout(form) {
  const fields = form.elements;
  const shipping = {
    fullName: fields.name.value.trim(),
    email: normalizeEmail(fields.email.value),
    address: fields.address.value.trim(),
    city: fields.city.value.trim(),
    region: fields.region.value.trim(),
    postal: fields.postal.value.trim(),
    phone: fields.phone.value.trim(),
  };
  pendingOrderDetails = shipping;
  if (!firebaseIsReady()) {
    showToast(firebaseSetupMessage());
    navigate("account");
    return;
  }
  if (!currentUser) {
    resumeAfterAuth = "payment";
    showToast("Sign in or create an account to continue checkout.");
    navigate("account");
    return;
  }
  if (shipping.email !== normalizeEmail(currentUser.email)) {
    showToast("Use your signed-in Firebase email for the shipping email.");
    return;
  }
  navigate("payment");
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
    orderHistory = [];
    orderHistoryStatus = "idle";
    wishlistProductIds.clear();
    wishlistStatus = "idle";
    wishlistWrites.clear();
    savedAddresses = [];
    addressBookStatus = "idle";
    addressEditingId = "";
    selectedCheckoutAddressId = "";
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
  } else if (window.location.protocol !== "file:" && profileStatus !== "saving" && !pendingProfileName && userProfile?.uid !== user.uid) {
    void loadUserProfile(user);
  }
  if (user && window.location.protocol !== "file:") {
    void loadUserWishlist(user);
    void loadUserAddresses(user);
  }
  const route = currentRoute();
  if (route.route === "account") renderAccount();
  if (route.route === "product") renderProduct(route.value);
  if (["orders", "wishlist", "addresses"].includes(route.route)) renderRoute();
  if (wasSignedIn && !user) showToast("You have signed out.");
  if (user && resumeAfterAuth) {
    const nextRoute = resumeAfterAuth;
    resumeAfterAuth = "";
    navigate(nextRoute);
  }
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

function orderSummary(paymentStep = false) {
  const totals = orderTotals();
  return `<aside class="order-summary"><h2>Order summary</h2><div class="summary-row"><span>Subtotal</span><span>${money(totals.subtotal)}</span></div><div class="summary-row"><span>Delivery</span><span>${totals.delivery ? money(totals.delivery) : "Free"}</span></div><div class="summary-row"><span>Estimated tax</span><span>${money(totals.tax)}</span></div><div class="summary-total"><strong>Total</strong><strong>${money(totals.total)}</strong></div>${paymentStep ? "" : '<button type="button" class="primary-button checkout-button" data-action="checkout">Continue to checkout</button>'}<p class="secure-note">♢ &nbsp; Secure checkout &nbsp; · &nbsp; SSL protected</p></aside>`;
}

function renderCart() {
  const items = cartEntries();
  const content = items.length ? items.map((item) => `
    <article class="cart-item">
      <a class="cart-product-image" href="#product/${item.product.id}" data-route="product" data-product-id="${item.product.id}">${imageMarkup(item.product, "", selectedVariant(item.product, item.color))}</a>
      <div class="cart-item-info"><h3><a href="#product/${item.product.id}" data-route="product" data-product-id="${item.product.id}">${item.product.name}</a></h3><p>${item.size} · ${item.color}</p><strong>${money(priceForSize(item.product, item.size).price * item.quantity)}</strong></div>
      <div class="quantity-control"><button type="button" data-action="quantity" data-key="${item.key}" data-change="-1" aria-label="Remove one ${item.product.name}">−</button><span>${item.quantity}</span><button type="button" data-action="quantity" data-key="${item.key}" data-change="1" aria-label="Add one ${item.product.name}">+</button></div>
      <button class="remove-item" type="button" data-action="remove" data-key="${item.key}" aria-label="Remove ${item.product.name}">Remove</button>
    </article>`).join("") : `<div class="empty-cart"><img class="empty-cart-illustration" src="assets/images/empty-cart.png" alt=""><h2>Your bag is taking a breather.</h2><p>Find a pair that feels like you, and it can be on its way.</p><a class="primary-button" href="#catalog" data-route="catalog">Explore all footwear</a></div>`;

  main.innerHTML = `
    <section class="checkout-page">
      <div class="cart-content"><div class="page-title-row"><div><p class="eyebrow">Your picks, all in one place</p><h1>Your bag <span>(${cartSize()})</span></h1></div><a class="back-link" href="#catalog" data-route="catalog">← Continue shopping</a></div><div class="cart-items">${content}</div></div>
      ${items.length ? orderSummary() : ""}
    </section>`;
}

function renderCheckout() {
  if (cartSize() === 0) {
    renderCart();
    showToast("Add a pair to your bag before checking out.");
    return;
  }
  const items = cartEntries();
  const checkoutAddress = savedAddresses.find((address) => address.id === selectedCheckoutAddressId);
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
        <section class="checkout-cart-items"><h2>Your items</h2>${items.map((item) => `<div class="checkout-mini-item">${imageMarkup(item.product, "", selectedVariant(item.product, item.color))}<div><strong>${item.product.name}</strong><span>${item.size} · ${item.color} · Qty ${item.quantity}</span></div><strong>${money(priceForSize(item.product, item.size).price * item.quantity)}</strong></div>`).join("")}</section>
      </div>
      ${orderSummary()}
    </section>`;
}

function renderPayment() {
  if (cartSize() === 0) {
    renderCart();
    showToast("Your bag is empty.");
    return;
  }
  main.innerHTML = `
    <section class="simple-page payment-page"><a class="back-link" href="#checkout" data-route="checkout">← Back to shipping</a><p class="eyebrow">One last step</p><h1>Payment</h1><p class="page-intro">This is a demo storefront. No real payment details are collected and no charge will be made.</p><div class="payment-card"><h2>Choose a payment method</h2><label class="payment-option"><input type="radio" name="payment" value="card" checked><span><strong>Credit or debit card</strong><small>Visa · Mastercard · Amex</small></span><span aria-hidden="true">▰</span></label><label class="payment-option"><input type="radio" name="payment" value="paypal"><span><strong>PayPal</strong><small>Continue securely with PayPal</small></span><span aria-hidden="true">P</span></label><label class="payment-option"><input type="radio" name="payment" value="upi"><span><strong>UPI / QR code</strong><small>Google Pay · PhonePe · Paytm</small></span><span aria-hidden="true">▦</span></label><div class="upi-qr-panel" id="upi-qr-panel" hidden><div class="qr-preview" aria-hidden="true"></div><p><strong>Demo QR preview</strong><br>This is not scannable. UPI payments are not connected in this demo.</p></div><div class="payment-totals"><span>Total due</span><strong>${money(orderTotals().total)}</strong></div><button class="primary-button payment-submit" type="button" data-action="place-order">Place demo order</button></div></section>`;
}

function renderConfirmation() {
  const orderNumber = lastOrderNumber || `PF-${Date.now().toString().slice(-8)}`;
  main.innerHTML = `<section class="simple-page confirmation-page"><span class="confirmation-mark" aria-hidden="true">✓</span><p class="eyebrow">You're all set</p><h1>Thanks for choosing a softer step.</h1><p>Your demo order <strong>${orderNumber}</strong> has been placed. No payment was taken.</p><a class="primary-button" href="#catalog" data-route="catalog">Keep exploring</a></section>`;
  cartEntries().forEach((item) => {
    const variant = selectedVariant(item.product, item.color);
    variant.stock[item.size] += item.quantity;
  });
  cart.clear();
  updateCartBadge();
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
  return `<nav class="account-section-nav" aria-label="Account sections">${sections.map(({ route, label, icon }) => `<a href="#${route}" data-route="${route}" class="account-section-link${activeRoute === route ? " is-active" : ""}"${activeRoute === route ? ' aria-current="page"' : ""}>${icon}<span>${label}</span></a>`).join("")}</nav>`;
}

function accountDataSetupHint() {
  if (window.location.protocol === "file:") {
    return "This page is opened as a local file. Open the storefront through HTTP(S), then make sure the default Cloud Firestore database exists and firestore.rules are deployed.";
  }
  return "Check your connection. If this keeps happening, create the default Cloud Firestore database and deploy the current firestore.rules before retrying.";
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
  return `<div class="account-skeleton-addresses" aria-hidden="true">${Array.from({ length: 2 }, () => `<article class="account-skeleton-card">${block("skeleton-medium")}${block("skeleton-long")}${block("skeleton-long")}${block("skeleton-short")}</article>`).join("")}</div>${block("skeleton-editor")}`;
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
  const date = typeof value?.toDate === "function" ? value.toDate() : value instanceof Date ? value : null;
  if (!date || Number.isNaN(date.getTime())) return "Date unavailable";
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(date);
}

function withFirestoreReadTimeout(promise, collectionName) {
  let timeoutId;
  const timeout = new Promise((resolve, reject) => {
    timeoutId = window.setTimeout(() => reject(new Error(`Loading ${collectionName} timed out.`)), 15000);
  });
  return Promise.race([promise, timeout]).finally(() => window.clearTimeout(timeoutId));
}

async function loadUserOrders(user, force = false) {
  if (!firebaseIsReady() || !user || orderHistoryStatus === "loading" || (orderHistoryStatus === "loaded" && !force)) return;
  orderHistoryStatus = "loading";
  if (currentRoute().route === "orders") renderOrders();
  try {
    const snapshot = await withFirestoreReadTimeout(firestore.collection("user").doc(user.uid).collection("orders").orderBy("createdAt", "desc").get(), "orders");
    if (currentUser?.uid !== user.uid) return;
    orderHistory = snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
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
  if (!firebaseIsReady() || !user || wishlistStatus === "loading" || (wishlistStatus === "loaded" && !force)) return;
  wishlistStatus = "loading";
  try {
    const snapshot = await withFirestoreReadTimeout(firestore.collection("user").doc(user.uid).collection("wishlist").get(), "wishlist");
    if (currentUser?.uid !== user.uid) return;
    wishlistProductIds.clear();
    snapshot.docs.forEach((document) => wishlistProductIds.add(document.id));
    wishlistStatus = "loaded";
  } catch (error) {
    if (currentUser?.uid !== user.uid) return;
    wishlistStatus = "error";
    console.error("Could not load this user's wishlist from Firestore.", error);
  } finally {
    if (currentUser?.uid === user.uid) {
      if (currentRoute().route === "wishlist") renderWishlist();
      else if (["home", "catalog", "product", "new-arrivals", "men", "women", "kids", "collections"].includes(currentRoute().route)) renderRoute();
    }
  }
}

async function loadUserAddresses(user, force = false) {
  if (!firebaseIsReady() || !user || addressBookStatus === "loading" || (addressBookStatus === "loaded" && !force)) return;
  addressBookStatus = "loading";
  try {
    const snapshot = await withFirestoreReadTimeout(firestore.collection("user").doc(user.uid).collection("addresses").get(), "addresses");
    if (currentUser?.uid !== user.uid) return;
    savedAddresses = snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
    addressBookStatus = "loaded";
  } catch (error) {
    if (currentUser?.uid !== user.uid) return;
    addressBookStatus = "error";
    console.error("Could not load this user's saved addresses from Firestore.", error);
  } finally {
    if (currentUser?.uid === user.uid && currentRoute().route === "addresses") renderAddresses();
  }
}

function renderOrders() {
  const title = "My Orders";
  const description = "Track your demo orders and review the items you have purchased.";
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
    const status = typeof order.status === "string" ? order.status : "Processing";
    return `<article class="order-history-card">
      <div class="order-history-heading"><div><strong>${escapeHtml(orderNumber)}</strong><span>${formatOrderDate(order.createdAt)}</span></div><span class="order-status">${escapeHtml(status)}</span></div>
      <ul>${items.map((item) => {
        const quantity = Number(item.quantity);
        const unitPrice = Number(item.unitPrice);
        const lineTotal = Number.isFinite(quantity) && quantity > 0 && Number.isFinite(unitPrice) && unitPrice >= 0
          ? money(unitPrice * quantity)
          : "Unavailable";
        const name = typeof item.name === "string" ? item.name : "Footwear";
        const size = typeof item.size === "string" ? item.size : "";
        const color = typeof item.color === "string" ? item.color : "";
        return `<li><span>${escapeHtml(name)} · ${escapeHtml(size)} · ${escapeHtml(color)} · Qty ${Number.isFinite(quantity) && quantity > 0 ? quantity : "—"}</span><strong>${lineTotal}</strong></li>`;
      }).join("")}</ul>
      <div class="order-history-total"><span>Order total</span><strong>${totalLabel}</strong></div>
    </article>`;
  }).join("");
  const content = orderCards || accountFeatureEmpty("No orders yet", "Your orders will appear here after you complete checkout.", '<a class="primary-button" href="#catalog" data-route="catalog">Explore footwear</a>');
  accountFeaturePage(title, description, accountMenuIcons.orders, `<div class="account-feature-content">${content}</div>`);
}

function renderWishlist() {
  const title = "Wishlist";
  const description = "Keep the pairs you love close and find them again whenever you're ready.";
  if (!accountFeatureReady(title, description, accountMenuIcons.wishlist, "wishlist")) return;
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
  return `<address>${escapeHtml(address.address)}<br>${escapeHtml(address.city)}, ${escapeHtml(address.region)} ${escapeHtml(address.postal)}<br>${escapeHtml(address.phone)}</address>`;
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
  if (addressBookStatus === "error") {
    accountFeaturePage(title, description, accountMenuIcons.addresses, accountFeatureError("Addresses didn't load", accountDataSetupHint(), '<button class="secondary-button" type="button" data-action="retry-addresses">Try again</button>'));
    return;
  }
  const editingAddress = savedAddresses.find((address) => address.id === addressEditingId);
  const addressCards = savedAddresses.map((address) => `<article class="saved-address-card"><div><strong>${escapeHtml(address.fullName)}</strong>${addressMarkup(address)}</div><div class="saved-address-actions"><button class="secondary-button" type="button" data-action="select-address" data-address-id="${escapeHtml(address.id)}">Use at checkout</button><button class="text-button" type="button" data-action="edit-address" data-address-id="${escapeHtml(address.id)}">Edit</button><button class="text-button address-delete-button" type="button" data-action="delete-address" data-address-id="${escapeHtml(address.id)}">Delete</button></div></article>`).join("");
  const value = (key) => escapeHtml(editingAddress?.[key] ?? "");
  const savedContent = addressCards
    ? `<div class="saved-address-list">${addressCards}</div>`
    : accountFeatureEmpty("No saved addresses", "Add a delivery address to make your next checkout quicker.", '<button class="secondary-button" type="button" data-action="focus-address-form">Add an address</button>');
  const content = `${savedContent}<section class="address-editor" id="address-editor"><h2>${editingAddress ? "Edit address" : "Add a new address"}</h2><form class="address-form" id="address-form">
      <label>Full name<input name="fullName" autocomplete="name" maxlength="80" value="${value("fullName")}" required></label>
      <label>Street address<input name="address" autocomplete="street-address" maxlength="160" value="${value("address")}" required></label>
      <label>City<input name="city" autocomplete="address-level2" maxlength="80" value="${value("city")}" required></label>
      <label>State / province<input name="region" autocomplete="address-level1" maxlength="80" value="${value("region")}" required></label>
      <label>PIN / postal code<input name="postal" autocomplete="postal-code" maxlength="20" value="${value("postal")}" required></label>
      <label>Phone number<input name="phone" type="tel" autocomplete="tel" maxlength="30" value="${value("phone")}" required></label>
      <div class="address-form-actions"><button class="primary-button" type="submit">${editingAddress ? "Save changes" : "Save address"}</button>${editingAddress ? '<button class="secondary-button" type="button" data-action="cancel-address-edit">Cancel</button>' : ""}</div>
    </form></section>
  `;
  accountFeaturePage(title, description, accountMenuIcons.addresses, `<div class="account-feature-content">${content}</div>`);
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
  if (wishlistStatus === "loading") {
    showToast("Your wishlist is still loading. Try again shortly.");
    return;
  }
  if (wishlistStatus !== "loaded") {
    await loadUserWishlist(user, true);
    if (wishlistStatus !== "loaded") {
      showToast("Your wishlist could not be loaded. Check the Firebase setup and try again.");
      return;
    }
  }
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const shouldSave = !wishlistProductIds.has(productId);
  wishlistWrites.add(writeKey);
  try {
    const reference = firestore.collection("user").doc(user.uid).collection("wishlist").doc(productId);
    if (shouldSave) {
      await reference.set({
        productId,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      if (currentUser?.uid !== user.uid) return;
      wishlistProductIds.add(productId);
      showToast(`${product.name} added to your wishlist.`);
    } else {
      await reference.delete();
      if (currentUser?.uid !== user.uid) return;
      wishlistProductIds.delete(productId);
      showToast(`${product.name} removed from your wishlist.`);
    }
    if (currentRoute().route === "wishlist") renderWishlist();
    else updateWishlistControls(productId);
  } catch (error) {
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
  const existing = savedAddresses.find((address) => address.id === addressEditingId);
  const reference = existing
    ? firestore.collection("user").doc(user.uid).collection("addresses").doc(existing.id)
    : firestore.collection("user").doc(user.uid).collection("addresses").doc();
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  try {
    await reference.set({
      ...values,
      createdAt: existing?.createdAt ?? firebase.firestore.FieldValue.serverTimestamp(),
    });
    if (currentUser?.uid !== user.uid) return;
    if (existing) {
      savedAddresses = savedAddresses.map((address) => address.id === existing.id ? { ...values, id: existing.id, createdAt: existing.createdAt } : address);
      showToast("Your address has been updated.");
    } else {
      savedAddresses = [...savedAddresses, { ...values, id: reference.id }];
      showToast("Your address has been saved.");
    }
    addressEditingId = "";
    renderAddresses();
  } catch (error) {
    console.error("Could not save this user's address to Firestore.", error);
    showToast("Your address could not be saved. Check your connection and try again.");
  } finally {
    if (form.isConnected) submitButton.disabled = false;
  }
}

async function deleteAddress(addressId) {
  const address = savedAddresses.find((entry) => entry.id === addressId);
  if (!currentUser || !address) return;
  if (!window.confirm(`Delete the saved address for ${address.fullName}?`)) return;
  const user = currentUser;
  try {
    await firestore.collection("user").doc(user.uid).collection("addresses").doc(addressId).delete();
    if (currentUser?.uid !== user.uid) return;
    savedAddresses = savedAddresses.filter((entry) => entry.id !== addressId);
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
  else if (route === "wishlist") renderWishlist();
  else if (route === "addresses") renderAddresses();
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

  if (action === "add") {
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
    filters.maxPrice = "9999";
    filters.query = "";
    renderCatalog();
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
      const variant = selectedVariant(product, item.color);
      if (change > 0 && variant.stock[item.size] <= 0) {
        showToast(`No more ${item.size} pairs are available.`);
        return;
      }
      item.quantity += change;
      variant.stock[item.size] -= change;
      if (item.quantity <= 0) cart.delete(actionButton.dataset.key);
      updateCartBadge();
      renderCart();
    }
  } else if (action === "remove") {
    const item = cart.get(actionButton.dataset.key);
    const product = item && products.find((entry) => entry.id === item.productId);
    if (item && product) selectedVariant(product, item.color).stock[item.size] += item.quantity;
    cart.delete(actionButton.dataset.key);
    updateCartBadge();
    renderCart();
    showToast("Item removed from your bag.");
  } else if (action === "place-order") {
    void recordDemoOrder();
  } else if (action === "checkout") {
    if (currentRoute().route === "checkout") {
      const form = main.querySelector("#shipping-form");
      if (form?.reportValidity()) {
        continueCheckout(form);
      }
    } else {
      navigate("checkout");
    }
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
  } else if (action === "retry-wishlist") {
    if (currentUser) void loadUserWishlist(currentUser, true);
  } else if (action === "retry-addresses") {
    if (currentUser) void loadUserAddresses(currentUser, true);
  } else if (action === "focus-address-form") {
    const addressField = main.querySelector('#address-form [name="fullName"]');
    main.querySelector("#address-editor")?.scrollIntoView({ behavior: "smooth", block: "center" });
    addressField?.focus({ preventScroll: true });
  } else if (action === "edit-address") {
    addressEditingId = actionButton.dataset.addressId;
    renderAddresses();
  } else if (action === "cancel-address-edit") {
    addressEditingId = "";
    renderAddresses();
  } else if (action === "delete-address") {
    void deleteAddress(actionButton.dataset.addressId);
  } else if (action === "select-address") {
    const address = savedAddresses.find((entry) => entry.id === actionButton.dataset.addressId);
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
  } else if (action === "retry-purchases") {
    if (currentUser) loadUserPurchases(currentUser);
  } else if (action === "retry-reviews") {
    if (productId) void loadProductReviews(productId, true);
  } else if (action === "reviews") {
    main.querySelector("#reviews")?.scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("input", (event) => {
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
    filters[key] = target.value === "" ? (key === "minPrice" ? "10" : "9999") : String(Math.min(9999, Math.max(10, parsed)));
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
  if (event.target.id === "product-review-form") {
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
  } else if (event.target.id === "address-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    void saveAddress(event.target);
  }
});

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
    else if (["orders", "wishlist", "addresses"].includes(route)) renderRoute();
  });
}
setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
updateAccountMenu();
updateCartBadge();
renderRoute();
