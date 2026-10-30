import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faMagnifyingGlass,
  faShieldHalved,
  faSliders,
  faTruckFast,
  faXmark,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import StoreLayout from "../../components/store/StoreLayout";
import BannerSlider from "../../components/store/BannerSlider";
import ProductCard from "../../components/store/ProductCard";
import Stars from "../../components/store/Stars";
import { fetchStoreProducts, formatPrice } from "../../assets/js/store/storeApi";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";


const PAGE_SIZE = 12;

const TABS = [
  { id: "all", label: "All Products" },
  { id: "featured", label: "Featured" },
  { id: "best", label: "Best Sellers" },
  { id: "new", label: "New Arrivals" },
  { id: "sale", label: "On Sale" },
];

const SORTS = [
  { id: "default", label: "Default sorting" },
  { id: "popular", label: "Best selling" },
  { id: "rating", label: "Top rated" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "newest", label: "Newest first" },
  { id: "name", label: "Name: A to Z" },
];

const TRUST = [
  { icon: faTruckFast, title: "Free Shipping", text: "On orders above ₹999" },
  { icon: faShieldHalved, title: "Secure Payment", text: "UPI, cards & netbanking" },
  { icon: faCertificate, title: "Genuine Products", text: "Lab-tested, GMP made" },
  { icon: faHeadset, title: "Support", text: "Help when you need it" },
];

const byNewest = (a, b) => new Date(b.created_at) - new Date(a.created_at);

// Best sellers: marked in admin, or actually selling
const isBestSeller = (p) => p.is_best_seller || p.sold_count > 0;
// New arrivals: marked in admin; if none are marked, the 12 newest products
const newArrivals = (all) => {
  const marked = all.filter((p) => p.is_new_arrival);
  return marked.length ? marked : [...all].sort(byNewest).slice(0, 12);
};

const SORT_FNS = {
  default: (a, b) => Number(b.is_featured) - Number(a.is_featured) || byNewest(a, b),
  popular: (a, b) => b.sold_count - a.sold_count || b.rating_count - a.rating_count,
  rating: (a, b) => (b.rating || 0) - (a.rating || 0) || b.rating_count - a.rating_count,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  newest: byNewest,
  name: (a, b) => a.name.localeCompare(b.name),
};

const EMPTY_FILTERS = { categories: [], minPrice: "", maxPrice: "", inStock: false, minRating: 0 };

const FilterPanel = ({ filters, setFilters, categories, bounds, onClear, activeCount }) => {
  const toggleCategory = (c) =>
    setFilters((f) => ({
      ...f,
      categories: f.categories.includes(c) ? f.categories.filter((x) => x !== c) : [...f.categories, c],
    }));

  return (
    <div className="gz-filters">
      <div className="gz-filter-head">
        <span>Filters</span>
        {activeCount > 0 && (
          <button className="gz-link-btn" onClick={onClear}>
            Clear all
          </button>
        )}
      </div>

      {categories.length > 0 && (
        <div className="gz-filter-block">
          <h4>Categories</h4>
          {categories.map(([name, count]) => (
            <label className="gz-check" key={name}>
              <input
                type="checkbox"
                checked={filters.categories.includes(name)}
                onChange={() => toggleCategory(name)}
              />
              <span>{name}</span>
              <em>{count}</em>
            </label>
          ))}
        </div>
      )}

      <div className="gz-filter-block">
        <h4>Price</h4>
        <div className="gz-price-inputs">
          <input
            type="number"
            min="0"
            inputMode="numeric"
            placeholder={`Min ${Math.floor(bounds.min)}`}
            value={filters.minPrice}
            onChange={(e) => setFilters((f) => ({ ...f, minPrice: e.target.value }))}
            aria-label="Minimum price"
          />
          <span>–</span>
          <input
            type="number"
            min="0"
            inputMode="numeric"
            placeholder={`Max ${Math.ceil(bounds.max)}`}
            value={filters.maxPrice}
            onChange={(e) => setFilters((f) => ({ ...f, maxPrice: e.target.value }))}
            aria-label="Maximum price"
          />
        </div>
      </div>

      <div className="gz-filter-block">
        <h4>Availability</h4>
        <label className="gz-check">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => setFilters((f) => ({ ...f, inStock: e.target.checked }))}
          />
          <span>In stock only</span>
        </label>
      </div>

      <div className="gz-filter-block">
        <h4>Rating</h4>
        {[4, 3].map((r) => (
          <label className="gz-check" key={r}>
            <input
              type="radio"
              name="min-rating"
              checked={filters.minRating === r}
              onChange={() => setFilters((f) => ({ ...f, minRating: r }))}
            />
            <Stars value={r} size={14} />
            <span>&amp; up</span>
          </label>
        ))}
        {filters.minRating > 0 && (
          <button className="gz-link-btn" onClick={() => setFilters((f) => ({ ...f, minRating: 0 }))}>
            Any rating
          </button>
        )}
      </div>
    </div>
  );
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState("loading");
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");
  const [sort, setSort] = useState("default");
  // const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [shown, setShown] = useState(PAGE_SIZE);
  const [filterOpen, setFilterOpen] = useState(false);

   const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [filterValues, setFilterValues] = useState({
    minPrice: "",
    maxPrice: "",
    inStock: false,
    minRating: 0,
  });

 const filters = useMemo(
  () => ({
    ...filterValues,
    categories: searchParams.getAll("category"),
  }),
  [filterValues, searchParams]
);

  const setFilters = (updater) => {
    const nextFilters =
      typeof updater === "function" ? updater(filters) : updater;

    const { categories = [], ...otherFilters } = nextFilters;

    setFilterValues((prev) => ({
      ...prev,
      ...otherFilters,
    }));

    const currentCategories = searchParams.getAll("category");

    if (JSON.stringify(currentCategories) !== JSON.stringify(categories)) {
      const nextParams = new URLSearchParams(searchParams);

      nextParams.delete("category");

      categories.forEach((category) => {
        nextParams.append("category", category);
      });

      // Convert + into %20
      const queryString = nextParams.toString().replace(/\+/g, "%20");

      // Update URL without re-serializing query parameters
      navigate(
        `${location.pathname}${queryString ? `?${queryString}` : ""}${location.hash}`,
      );
    }
  };

  const load = () => {
    setState("loading");
    fetchStoreProducts()
      .then(({ data }) => {
        setProducts(data || []);
        setState("ready");
      })
      .catch(() => setState("error"));
  };
  useEffect(load, []);

  const bounds = useMemo(() => {
    const prices = products.map((p) => p.price);
    return { min: prices.length ? Math.min(...prices) : 0, max: prices.length ? Math.max(...prices) : 0 };
  }, [products]);

  const categories = useMemo(() => {
    const counts = {};
    products.forEach((p) => p.category && (counts[p.category] = (counts[p.category] || 0) + 1));
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [products]);

  const tabCounts = useMemo(
    () => ({
      all: products.length,
      featured: products.filter((p) => p.is_featured).length,
      best: products.filter(isBestSeller).length,
      new: newArrivals(products).length,
      sale: products.filter((p) => p.original_price > p.price).length,
    }),
    [products],
  );

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    const min = filters.minPrice === "" ? -Infinity : Number(filters.minPrice);
    const max = filters.maxPrice === "" ? Infinity : Number(filters.maxPrice);

    let list = products.filter(
      (p) =>
        (!q || p.name.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q)) &&
        (!filters.categories.length || filters.categories.includes(p.category)) &&
        p.price >= min &&
        p.price <= max &&
        (!filters.inStock || p.in_stock) &&
        (!filters.minRating || (p.rating || 0) >= filters.minRating),
    );

    let sortId = sort;
    if (tab === "featured") list = list.filter((p) => p.is_featured);
    if (tab === "best") {
      list = list.filter(isBestSeller);
      if (sort === "default") sortId = "popular";
    }
    if (tab === "sale") list = list.filter((p) => p.original_price > p.price);
    if (tab === "new") {
      const keep = new Set(newArrivals(products).map((p) => p.id));
      list = list.filter((p) => keep.has(p.id));
      if (sort === "default") sortId = "newest";
    }
    return [...list].sort(SORT_FNS[sortId]);
  }, [products, search, filters, tab, sort]);

  useEffect(() => setShown(PAGE_SIZE), [search, filters, tab, sort]);

  const activeCount =
    filters.categories.length +
    (filters.minPrice !== "" || filters.maxPrice !== "" ? 1 : 0) +
    (filters.inStock ? 1 : 0) +
    (filters.minRating ? 1 : 0);

  const clearFilters = () => setFilters(EMPTY_FILTERS);
  const panel = (
    <FilterPanel
      filters={filters}
      setFilters={setFilters}
      categories={categories}
      bounds={bounds}
      onClear={clearFilters}
      activeCount={activeCount}
    />
  );

  return (
    <StoreLayout
      title="Shop"
      description="Buy genuine Gomzi Nutrition supplements online with secure Razorpay payments."
    >
      <BannerSlider>
        <div className="gz-store-banner">
          <div className="gz-container">
            <span className="gz-banner-badge">Gomzi Nutrition</span>
            <h1 className="gz-banner-title">
              Clean nutrition, <span>delivered.</span>
            </h1>
            <p className="gz-banner-subtitle">Lab-tested supplements made in our own GMP facility.</p>
          </div>
        </div>
      </BannerSlider>

      <div className="gz-container">
        <div className="gz-trust-strip">
          {TRUST.map((t) => (
            <div className="gz-trust-item" key={t.title}>
              <FontAwesomeIcon icon={t.icon} />
              <div>
                <strong>{t.title}</strong>
                <span>{t.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gz-shop-head">
          <h2>Shop our products</h2>
          <div className="gz-tabs" role="tablist">
            {TABS.filter((t) => t.id === "all" || state !== "ready" || tabCounts[t.id] > 0 || tab === t.id).map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className={`gz-tab ${tab === t.id ? "active" : ""}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
                {state === "ready" && <span className="gz-tab-count">{tabCounts[t.id]}</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="gz-toolbar">
          <div className="gz-search-input-wrap">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              className="gz-search-input"
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="gz-filter-toggle" onClick={() => setFilterOpen(true)}>
            <FontAwesomeIcon icon={faSliders} /> Filters{activeCount > 0 && ` (${activeCount})`}
          </button>
          <select className="gz-sort" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="gz-shop-layout">
          <aside className="gz-sidebar">{panel}</aside>

          <section className="gz-results">
            <div className="gz-results-head">
              <span>
                {state === "ready" ? `Showing ${Math.min(shown, visible.length)} of ${visible.length} products` : ""}
              </span>
              {activeCount > 0 && (
                <div className="gz-chips">
                  {filters.categories.map((c) => (
                    <button
                      key={c}
                      className="gz-chip"
                      onClick={() => setFilters((f) => ({ ...f, categories: f.categories.filter((x) => x !== c) }))}
                    >
                      {c} <FontAwesomeIcon icon={faXmark} />
                    </button>
                  ))}
                  {(filters.minPrice !== "" || filters.maxPrice !== "") && (
                    <button className="gz-chip" onClick={() => setFilters((f) => ({ ...f, minPrice: "", maxPrice: "" }))}>
                      {filters.minPrice !== "" ? formatPrice(filters.minPrice) : "Any"} –{" "}
                      {filters.maxPrice !== "" ? formatPrice(filters.maxPrice) : "Any"} <FontAwesomeIcon icon={faXmark} />
                    </button>
                  )}
                  {filters.inStock && (
                    <button className="gz-chip" onClick={() => setFilters((f) => ({ ...f, inStock: false }))}>
                      In stock <FontAwesomeIcon icon={faXmark} />
                    </button>
                  )}
                  {filters.minRating > 0 && (
                    <button className="gz-chip" onClick={() => setFilters((f) => ({ ...f, minRating: 0 }))}>
                      {filters.minRating}★ &amp; up <FontAwesomeIcon icon={faXmark} />
                    </button>
                  )}
                </div>
              )}
            </div>

            {state === "loading" && <div className="gz-state-box">Loading products…</div>}
            {state === "error" && (
              <div className="gz-state-box">
                Couldn't load products.{" "}
                <button className="gz-link-btn" onClick={load}>
                  Try again
                </button>
              </div>
            )}
            {state === "ready" && visible.length === 0 && (
              <div className="gz-state-box">
                <p>No products match your selection.</p>
                {(activeCount > 0 || search || tab !== "all") && (
                  <button
                    className="gz-btn-view gz-load-more"
                    onClick={() => {
                      clearFilters();
                      setSearch("");
                      setTab("all");
                    }}
                  >
                    Reset all
                  </button>
                )}
              </div>
            )}
            {state === "ready" && visible.length > 0 && (
              <div className="gz-product-grid">
                {visible.slice(0, shown).map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
            {state === "ready" && visible.length > shown && (
              <div className="text-center mt-5">
                <button className="gz-btn-view gz-load-more" onClick={() => setShown((n) => n + PAGE_SIZE)}>
                  Load more ({visible.length - shown} remaining)
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {filterOpen && (
        <div className="gz-drawer-overlay gz-filter-overlay" onClick={() => setFilterOpen(false)}>
          <div className="gz-filter-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="gz-drawer-header">
              <h3 className="gz-drawer-title">Filters</h3>
              <button className="gz-drawer-close" onClick={() => setFilterOpen(false)} aria-label="Close filters">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="gz-filter-drawer-body">{panel}</div>
            <div className="gz-drawer-footer">
              <button className="gz-btn-checkout" onClick={() => setFilterOpen(false)}>
                Show {visible.length} products
              </button>
            </div>
          </div>
        </div>
      )}
    </StoreLayout>
  );
};

export default Shop;
