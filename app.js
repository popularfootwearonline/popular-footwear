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
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const cart = new Map();
const filters = { category: "", query: "", sizes: new Set(), brands: new Set(), minPrice: "10", maxPrice: "9999" };
const selectedColors = new Map();
const homePageSize = 8;
const demoUserStorageKey = "popular-footwear-demo-user";
const demoOrdersStorageKey = "popular-footwear-demo-orders";

let toastTimeout;
let pendingOrderEmail = "";

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
  const variant = selectedVariant(product);
  const hasStock = variantHasStock(product, variant);
  const initialSize = selectedPriceSize(product, variant);
  const initialPrice = priceForSize(product, initialSize);
  const reviews = getProductReviews(product.id);
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
          <ul class="feature-list"><li>Free delivery on every order</li><li>Fast delivery options available to Gangasagar</li><li>Breathable lining and cushioned everyday comfort</li></ul>
          <button type="button" class="primary-button detail-add-button" data-action="add" data-product-id="${product.id}" ${hasStock ? "" : "disabled"}>${hasStock ? 'Add to bag <span aria-hidden="true">→</span>' : "Sold out"}</button>
          <p class="delivery-note">Free delivery · Secure transaction</p>
        </div>
      </div>
      <section class="product-benefits" aria-label="Shopping benefits">
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h16v13H4zM8 7V4h8v3M8 12h8" /></svg></span><strong>No returns or exchanges</strong><span>Replacement only for defective or incorrect items</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M2 7h13v11H2zM15 11h4l3 3v4h-7zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg></span><strong>Free delivery</strong><span>On every order</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg></span><strong>Top brand</strong><span>${product.brand} footwear</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 11-13h-7l1-7Z" /></svg></span><strong>Fast delivery</strong><span>Quick dispatch to your address</span></article>
        <article class="product-benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></svg></span><strong>Secure transaction</strong><span>Protected checkout</span></article>
      </section>
      <section class="reviews-section" id="reviews" aria-labelledby="reviews-title">
        <div class="reviews-heading"><div><p class="eyebrow">Your experience matters</p><h2 id="reviews-title">Ratings &amp; reviews</h2></div><div class="reviews-average"><strong>${averageRating ?? "—"}</strong><span>${averageRating ? "★★★★★" : "☆☆☆☆☆"}</span><small>${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}</small></div></div>
        <div class="reviews-layout">
          ${renderReviewAccess(product.id, reviewAccess)}
          <div class="review-list" aria-live="polite">${renderReviewList(reviews)}</div>
        </div>
      </section>
    </section>`;
}

function normalizeEmail(email) {
  return String(email ?? "").trim().toLowerCase();
}

function getDemoUserEmail() {
  try {
    return normalizeEmail(window.localStorage.getItem(demoUserStorageKey));
  } catch (error) {
    console.error("Could not read the demo sign-in from this browser.", error);
    return "";
  }
}

function saveDemoUserEmail(email) {
  try {
    window.localStorage.setItem(demoUserStorageKey, normalizeEmail(email));
    return true;
  } catch (error) {
    console.error("Could not save the demo sign-in in this browser.", error);
    showToast("Demo sign-in could not be saved in this browser.");
    return false;
  }
}

function clearDemoUserEmail() {
  try {
    window.localStorage.removeItem(demoUserStorageKey);
    return true;
  } catch (error) {
    console.error("Could not sign out in this browser.", error);
    showToast("Sign out could not be completed.");
    return false;
  }
}

function getDemoOrders() {
  let savedOrders;
  try {
    savedOrders = window.localStorage.getItem(demoOrdersStorageKey);
  } catch (error) {
    console.error("Could not read demo orders from this browser.", error);
    return [];
  }
  if (!savedOrders) return [];

  let orders;
  try {
    orders = JSON.parse(savedOrders);
  } catch (error) {
    console.error("Saved demo orders are not valid JSON.", error);
    return [];
  }
  if (!Array.isArray(orders)) {
    console.error("Saved demo orders must be a list.");
    return [];
  }
  return orders.filter((order) => order
    && typeof order.email === "string"
    && Array.isArray(order.productIds)
    && order.productIds.every((productId) => typeof productId === "string"));
}

function saveDemoOrders(orders) {
  try {
    window.localStorage.setItem(demoOrdersStorageKey, JSON.stringify(orders));
    return true;
  } catch (error) {
    console.error("Could not save the demo order in this browser.", error);
    showToast("The demo order could not be saved. Please try again.");
    return false;
  }
}

function hasDemoPurchase(email, productId) {
  const normalizedEmail = normalizeEmail(email);
  return getDemoOrders().some((order) => normalizeEmail(order.email) === normalizedEmail
    && order.productIds.includes(productId));
}

function recordDemoOrder() {
  const email = normalizeEmail(pendingOrderEmail);
  const items = cartEntries();
  if (!email || !items.length) {
    showToast("Return to shipping and enter your email before placing the demo order.");
    return false;
  }
  const orders = getDemoOrders();
  orders.push({
    email,
    productIds: [...new Set(items.map((item) => item.product.id))],
    date: new Date().toISOString(),
  });
  if (!saveDemoOrders(orders)) return false;
  pendingOrderEmail = "";
  return true;
}

function getReviewAccess(productId) {
  const email = getDemoUserEmail();
  if (!email) return { allowed: false, reason: "sign-in" };
  if (!hasDemoPurchase(email, productId)) return { allowed: false, reason: "purchase" };
  if (getProductReviews(productId).some((review) => normalizeEmail(review.email) === email)) {
    return { allowed: false, reason: "reviewed" };
  }
  return { allowed: true, email };
}

function renderReviewAccess(productId, access) {
  if (access.allowed) {
    return `<form class="review-form" id="product-review-form" data-product-id="${productId}">
      <h3>Write a review</h3>
      <fieldset class="review-rating-picker"><legend>Your rating</legend><div class="review-star-options">${[1, 2, 3, 4, 5].map((score) => `<label><input type="radio" name="rating" value="${score}" aria-label="${score} ${score === 1 ? "star" : "stars"}" required><span aria-hidden="true">★</span></label>`).join("")}</div></fieldset>
      <label>Your review<textarea name="review" rows="4" minlength="8" maxlength="800" placeholder="What did you think of this pair?" required></textarea></label>
      <label>Your name <span class="optional-label">(optional)</span><input name="reviewer" type="text" maxlength="40" placeholder="Name" /></label>
      <button class="primary-button" type="submit">Submit review</button>
      <p class="review-demo-note">Demo only: eligibility is checked in this browser and is not secure against tampering.</p>
    </form>`;
  }
  if (access.reason === "sign-in") {
    return `<div class="review-access-gate"><h3>Sign in to review</h3><p>Only signed-in customers who completed a demo order for this product can leave a review.</p><a class="primary-button" href="#account" data-route="account">Sign in</a></div>`;
  }
  if (access.reason === "purchase") {
    return `<div class="review-access-gate"><h3>Completed purchase required</h3><p>Complete a demo checkout using the same email address as your demo sign-in before reviewing.</p><a class="secondary-button" href="#catalog" data-route="catalog">Continue shopping</a></div>`;
  }
  return `<div class="review-access-gate"><h3>Review already submitted</h3><p>You can leave one review for this product from this signed-in account.</p></div>`;
}

function getProductReviews(productId) {
  let savedReviews;
  try {
    savedReviews = window.localStorage.getItem(`popular-footwear-reviews:${productId}`);
  } catch (error) {
    console.error("Could not read saved product reviews from this browser.", error);
    return [];
  }
  if (!savedReviews) return [];

  let reviews;
  try {
    reviews = JSON.parse(savedReviews);
  } catch (error) {
    console.error("Saved product reviews are not valid JSON.", error);
    return [];
  }
  if (!Array.isArray(reviews)) {
    console.error("Saved product reviews must be a list.");
    return [];
  }
  return reviews.filter((review) => review
    && typeof review.email === "string"
    && hasDemoPurchase(review.email, productId)
    && typeof review.name === "string"
    && Number.isInteger(review.rating)
    && review.rating >= 1
    && review.rating <= 5
    && typeof review.text === "string"
    && typeof review.date === "string"
    && !Number.isNaN(Date.parse(review.date)));
}

function saveProductReviews(productId, reviews) {
  try {
    window.localStorage.setItem(`popular-footwear-reviews:${productId}`, JSON.stringify(reviews));
    return true;
  } catch (error) {
    console.error("Could not save your product review in this browser.", error);
    showToast("Your review could not be saved in this browser.");
    return false;
  }
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

function renderReviewList(reviews) {
  if (!reviews.length) return `<p class="no-reviews">No reviews yet. Be the first to share your experience.</p>`;
  return reviews.map((review) => `
    <article class="review-card">
      <div class="review-card-heading"><strong>${escapeHtml(review.name || "Customer")}</strong><time datetime="${escapeHtml(review.date)}">${new Date(review.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</time></div>
      <p class="review-card-stars" aria-label="${review.rating} out of 5 stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
      <p>${escapeHtml(review.text)}</p>
    </article>`).join("");
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
    </article>`).join("") : `<div class="empty-cart"><span class="empty-cart-icon" aria-hidden="true">⌑</span><h2>Your bag is taking a breather.</h2><p>Find a pair that feels like you, and it can be on its way.</p><a class="primary-button" href="#catalog" data-route="catalog">Explore all footwear</a></div>`;

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
  main.innerHTML = `
    <section class="checkout-page checkout-layout">
      <div class="checkout-content">
        <a class="back-link" href="#cart" data-route="cart">← Back to your bag</a>
        <p class="eyebrow">A few details, then you're all set</p><h1>Shipping information</h1>
        <form class="shipping-form" id="shipping-form">
          <label>Full name<input name="name" autocomplete="name" placeholder="Full name" required /></label>
          <label>Email address<input name="email" type="email" autocomplete="email" value="${escapeHtml(getDemoUserEmail())}" placeholder="Email address" required /></label>
          <label class="form-wide">Street address<input name="address" autocomplete="street-address" placeholder="Street address" required /></label>
          <label>City<input name="city" autocomplete="address-level2" value="Gangasagar" required /></label>
          <label>State / province<input name="region" autocomplete="address-level1" value="West Bengal" required /></label>
          <label>PIN code<input name="postal" autocomplete="postal-code" value="743373" required /></label>
          <label>Phone number<input name="phone" type="tel" autocomplete="tel" placeholder="Phone number" required /></label>
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
  const orderNumber = `SS-${Date.now().toString().slice(-6)}`;
  main.innerHTML = `<section class="simple-page confirmation-page"><span class="confirmation-mark" aria-hidden="true">✓</span><p class="eyebrow">You're all set</p><h1>Thanks for choosing a softer step.</h1><p>Your demo order <strong>${orderNumber}</strong> has been placed. No payment was taken.</p><a class="primary-button" href="#catalog" data-route="catalog">Keep exploring</a></section>`;
  cartEntries().forEach((item) => {
    const variant = selectedVariant(item.product, item.color);
    variant.stock[item.size] += item.quantity;
  });
  cart.clear();
  updateCartBadge();
}

function renderAccount() {
  const email = getDemoUserEmail();
  main.innerHTML = email
    ? `<section class="simple-page account-page"><p class="eyebrow">Good to have you here</p><h1>Your account</h1><p class="page-intro">Signed in as <strong>${escapeHtml(email)}</strong>.</p><button class="secondary-button" type="button" data-action="sign-out">Sign out</button><p class="demo-note">Demo sign-in only. This browser does not verify a real account.</p></section>`
    : `<section class="simple-page account-page"><p class="eyebrow">Good to have you here</p><h1>Your account</h1><p class="page-intro">Sign in with the email address used for your completed order to leave a review.</p><form class="account-form" id="account-form"><label>Email address<input type="email" name="email" autocomplete="email" placeholder="Email address" required></label><label>Password<input type="password" name="password" autocomplete="current-password" minlength="6" placeholder="At least 6 characters" required></label><button class="primary-button" type="submit">Sign in</button></form><p class="demo-note">Demo only: any valid email and password are accepted. Sign-in and purchase checks are stored in this browser and are not secure authentication.</p></section>`;
}

function renderShipping() {
  main.innerHTML = `<section class="simple-page shipping-page"><p class="eyebrow">Straight to your door</p><h1>Shipping &amp; replacement policy</h1><div class="shipping-info-grid"><article><span aria-hidden="true">↗</span><h2>Free delivery</h2><p>Delivery is free on every order. We’ll show available delivery options at checkout.</p></article><article><span aria-hidden="true">□</span><h2>No returns or exchanges</h2><p>All sales are final. If your order arrives defective or incorrect, contact support to request a replacement.</p></article><article><span aria-hidden="true">♡</span><h2>Here to help</h2><p>Questions about your order? Our friendly support team is ready to help.</p></article></div><a class="primary-button" href="#catalog" data-route="catalog">Find your next pair</a></section>`;
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
  const routeLink = event.target.closest("[data-route]");
  if (routeLink) {
    event.preventDefault();
    const route = routeLink.dataset.route;
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
    if (recordDemoOrder()) navigate("confirmation");
  } else if (action === "checkout") {
    if (currentRoute().route === "checkout") {
      const form = main.querySelector("#shipping-form");
      if (form?.reportValidity()) {
        pendingOrderEmail = normalizeEmail(form.elements.email.value);
        navigate("payment");
      }
    } else {
      navigate("checkout");
    }
  } else if (action === "sign-out") {
    if (clearDemoUserEmail()) {
      renderAccount();
      showToast("You have signed out.");
    }
  } else if (action === "reviews") {
    main.querySelector("#reviews")?.scrollIntoView({ behavior: "smooth" });
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
document.querySelector(".account-button").addEventListener("click", () => navigate("account"));
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
    const form = event.target;
    if (!form.reportValidity()) return;
    const productId = form.dataset.productId;
    const product = products.find((item) => item.id === productId);
    if (!product) {
      showToast("This product could not be found. Please reload and try again.");
      return;
    }
    const reviewAccess = getReviewAccess(productId);
    if (!reviewAccess.allowed) {
      showToast("Sign in with the email used for a completed order to review this product.");
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
    const reviews = getProductReviews(productId);
    reviews.unshift({
      name: form.elements.reviewer.value.trim() || "Customer",
      email: reviewAccess.email,
      rating: Number(form.elements.rating.value),
      text: reviewText,
      date: new Date().toISOString(),
    });
    if (!saveProductReviews(productId, reviews)) return;
    renderProduct(productId);
    showToast("Thank you — your review has been added.");
    main.querySelector("#reviews")?.scrollIntoView({ behavior: "smooth" });
  } else if (event.target.id === "shipping-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    pendingOrderEmail = normalizeEmail(event.target.elements.email.value);
    navigate("payment");
  } else if (event.target.id === "account-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    if (saveDemoUserEmail(event.target.elements.email.value)) {
      renderAccount();
      showToast("You are signed in for this demo.");
    }
  }
});

window.addEventListener("hashchange", renderRoute);
window.addEventListener("scroll", handleHomeScroll, { passive: true });
updateCartBadge();
renderRoute();
