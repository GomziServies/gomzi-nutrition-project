import React from "react";
import { Link } from "react-router-dom";
import NutritionHeader from "../partials/Header/nutritionsheader";
import NutritionFooter from "../partials/Footer/nutritionfooter";

export const whitelabelBloglist = [
  {
    number: 72,
    title:
      "How Much Does It Cost to Launch a Private Label Protein Powder Brand in India?",
    url: "/blogs/how-much-does-it-cost-to-launch-a-private-label-protein-powder-brand-in-india",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-much-does-it-cost-to-launch-a-private-label-protein-powder-brand-in-india.webp",
  },
  {
    number: 71,
    title: "Questions to Ask Before Selecting a Protein Manufacturer ",
    url: "/blogs/questions-to-ask-before-selecting-a-protein-manufacturer",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/questions-to-ask-before-selecting-a-protein-manufacturer.webp",
  },
  {
    number: 70,
    title:
      "Why International Brands Source Nutraceutical Products from Gujarat?",
    url: "/blogs/why-international-brands-source-nutraceutical-products-from-gujarat",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-international-brands-source-nutraceutical-products-from-gujarat.webp",
  },
  {
    number: 69,
    title:
      "The Psychology of Buying Supplements: What Makes Customers Choose One Brand?",
    url: "/blogs/the-psychology-of-buying-supplements",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/the-psychology-of-buying-supplements.webp",
  },
  {
    number: 68,
    title: "Top Things to Know Before Starting a Multivitamin Tablet Brand",
    url: "/blogs/top-things-to-know-before-starting-a-multivitamin-tablet-brand",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/top-things-to-know-before-starting-a-multivitamin-tablet-brand.webp",
  },
  {
    number: 67,
    title:
      "What Makes a Nutraceutical Brand Feel “Ready” in the Customer’s Mind?",
    url: "/blogs/what-makes-a-nutraceutical-brand-feel-ready-in-the-customers-mind",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/what-makes-a-nutraceutical-brand-feel-ready-in-the-customers-mind.webp",
  },
  {
    number: 66,
    title: "Why Indian Flavours Can Be a Growth Advantage in Sports Nutrition?",
    url: "/blogs/why-indian-flavours-can-be-a-growth-advantage-in-sports-nutrition",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-indian-flavours-can-be-a-growth-advantage-in-sports-nutrition.webp",
  },
  {
    number: 65,
    title:
      "The Packaging Signals That Make a Supplement Brand Look Established",
    url: "/blogs/the-packaging-signals-that-make-a-supplement-brand-look-established",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/the-packaging-signals-that-make-a-supplement-brand-look-established.webp",
  },
  {
    number: 64,
    title: "Is a Supplement Brand Really Passive Income? The Honest Truth",
    url: "/blogs/is-a-supplement-brand-really-passive-income-the-honest-truth",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/is-a-supplement-brand-really-passive-income-the-honest-truth.webp",
  },
  {
    number: 63,
    title:
      "How to Validate a Supplement Idea Before Spending on Manufacturing?",
    url: "/blogs/how-to-validate-a-supplement-idea-before-spending-on-manufacturing",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-to-validate-a-supplement-idea-before-spending-on-manufacturing.webp",
  },
  {
    number: 62,
    title: "How Raw Material Quality Affects Supplement Taste and Performance?",
    url: "/blogs/how-raw-material-quality-affects-supplement-taste-and-performance",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-raw-material-quality-affects-supplement-taste-and-performance.webp",
  },
  {
    number: 61,
    title:
      "Best Nutraceutical Manufacturing Companies in India for Omega-3 & Sports Supplements ",
    url: "/blogs/best-nutraceutical-manufacturing-companies-in-india-for-omega-3-and-sports-supplements",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/best-nutraceutical-manufacturing-companies-in-india-for-omega-3-and-sports-supplements.webp",
  },
  {
    number: 60,
    title: "Best Supplements to Reduce Stress & Anxiety Naturally",
    url: "/blogs/best-supplements-to-reduce-stress-and-anxiety-naturally",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/best-supplements-to-reduce-stress-and-anxiety-naturally.webp",
  },
  {
    number: 59,
    title:
      "FSSAI Regulations for Functional Foods and Nutraceuticals 2026 Update",
    url: "/blogs/FSSAI-regulations-for-functional-foods-and-nutraceuticals-2026-update",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/fssai-regulations-for-functional-foods-and-nutraceuticals-2026-update.webp",
  },
  {
    number: 58,
    title:
      "How First-Time Founders Can Avoid Common Supplement Launch Mistakes?",
    url: "/blogs/how-first-time-founders-can-avoid-common-supplement-launch-mistakes",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-first-time-founders-can-avoid-common-supplement-launch-mistakes.webp",
  },
  {
    number: 57,
    title: "How Flavour Development Impacts Protein Powder Success?",
    url: "/blogs/how-flavour-development-impacts-protein-powder-success",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-flavour-development-impacts-protein-powder-success.webp",
  },
  {
    number: 56,
    title:
      "How to Launch a Gym-Focused Pre-Workout Line: From Formulation to Shelf  A Step-by-Step Guide for Brands?",
    url: "/blogs/how-to-launch-a-gym-focused-pre-workout-line-from-formulation-to-shelf-a-step-by-step-guide-for-brands",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-to-launch-a-gym-focused-pre-workout-line-from-formulation-to-shelf-a-step-by-step-guide-for-brands.webp",
  },
  {
    number: 55,
    title:
      "India Does Not Need More Protein Brands. It Needs More Honest Ones.",
    url: "/blogs/india-does-not-need-more-protein-brands",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/india-does-not-need-more-protein-brands.webp",
  },
  {
    number: 54,
    title:
      "Nutraceutical Manufacturing KPIs: How to Track Quality, Efficiency, and Compliance in Production",
    url: "/blogs/nutraceutical-manufacturing-KPIs-how-to-track-quality-efficiency-and-compliance-in-production",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/nutraceutical-manufacturing-KPIs-how-to-track-quality-efficiency-and-compliance-in-production.webp",
  },
  {
    number: 53,
    title:
      "The Hidden Questions Buyers Ask Before Choosing a Supplement Manufacturer",
    url: "/blogs/the-hidden-questions-buyers-ask-before-choosing-a-supplement-manufacturer",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/the-hidden-questions-buyers-ask-before-choosing-a-supplement-manufacturer.webp",
  },
  {
    number: 52,
    title:
      "The Real Reason Some Protein Brands Feel Trustworthy and Others Don’t?",
    url: "/blogs/the-real-reason-some-protein-brands-feel-trustworthy-and-others-dont",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/the-real-reason-some-protein-brands-feel-trustworthy-and-others-dont.webp",
  },
  {
    number: 51,
    title:
      "The Rise of Pre-Workout Supplements: How Fitness Brands Can Win in 2026?",
    url: "/blogs/the-rise-of-pre-workout-supplements-how-fitness-brands-can-win-in-2026",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/the-rise-of-pre-workout-supplements-how-fitness-brands-can-win-in-2026.webp",
  },
  {
    number: 50,
    title:
      "Third Party Multivitamin Manufacturer in India: How to Choose the Right Partner",
    url: "/blogs/third-party-multivitamin-manufacturer-in-india-how-to-choose-the-right-partner",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/third-party-multivitamin-manufacturer-in-india-how-to-choose-the-right-partner.webp",
  },
  {
    number: 49,
    title:
      "What Is the Cheapest Whey Protein Powder Available in India? | Buyer Guide",
    url: "/blogs/what-is-the-cheapest-whey-protein-powder-available-in-india-buyer-guide",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/what-is-the-cheapest-whey-protein-powder-available-in-india-buyer-guide.webp",
  },
  {
    number: 48,
    title:
      "What If Your Supplement Had a Character? How Brand Storytelling Turns Protein Powder Into a Hero Product",
    url: "/blogs/what-if-your-supplement-had-a-character-how-brand-storytelling-turns-protein-powder-into-a-hero-product",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/what-if-your-supplement-had-a-character-how-brand-storytelling-turns-protein-powder-into-a-hero-product.webp",
  },
  {
    number: 47,
    title:
      "Why 72% of New Supplement Brands in India Are Choosing Third Party Manufacturing in 2026?",
    url: "/blogs/why-72-percent-of-new-supplement-brands-in-india-are-choosing-third-party-manufacturing-in-2026",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-72-percent-of-new-supplement-brands-in-india-are-choosing-third-party-manufacturing-in-2026.webp",
  },
  {
    number: 46,
    title:
      "Why Every Fitness Brand Needs a Pre-Workout Manufacturer, Not Just a Formula?",
    url: "/blogs/why-every-fitness-brand-needs-a-pre-workout-manufacturer-not-just-a-formula",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-every-fitness-brand-needs-a-pre-workout-manufacturer-not-just-a-formula.webp",
  },
  {
    number: 45,
    title: "What Gym Buyers in India Are Really Searching for in 2026?",
    url: "/blogs/what-gym-buyers-in-india-are-really-searching-for-in-2026",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/what-gym-buyers-in-india-are-really-searching-for-in-2026.webp",
  },
  {
    number: 44,
    title: "How Supplement Manufacturing Actually Works (Step-by-Step)?",
    url: "/blogs/how-supplement-manufacturing-actually-works",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-supplement-manufacturing-actually-works-step-by-step.webp",
  },
  {
    number: 43,
    title:
      "Why the Same Whey Protein Formula Made in Two Different Indian Factories Tastes Completely Different?",
    url: "/blogs/why-the-same-whey-protein-formula-made-in-two-different-indian-factories-tastes-completely-different",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-the-same-whey-protein-formula-made-in-two-different-indian-factories-tastes-completely-different.webp",
  },
  {
    number: 42,
    title: "Why Some Supplement Brands Sell Faster Than Others?",
    url: "/blogs/why-some-supplement-brands-sell-faster-than-others",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-some-supplement-brands-sell-faster.webp",
  },
  {
    number: 41,
    title:
      "Why Formulation Is Only Half the Job in Nutraceutical Manufacturing?",
    url: "/blogs/why-formulation-is-only-half-the-job-in-nutraceutical-manufacturing",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-formulation-is-only-half-the-job.webp",
  },
  {
    number: 40,
    title:
      "2026 Personalized Supplement Trends: What B2B Brands Should Launch for Sleep, Stress, and Daily Wellness",
    url: "/blogs/2026-personalized-supplement-trends-what-B2B-brands-should-launch-for-sleep-stress-and-daily-wellness",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/2026-personalized-supplement-trend.webp",
  },
  {
    number: 39,
    title: "How to Find High-Demand Supplement Ideas Using Market Data?",
    url: "/blogs/how-to-find-high-demand-supplement-ideas-using-market-data",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/supplement-ideas-using-market-data.webp",
  },
  {
    number: 38,
    title:
      "Whey Protein Concentrate Manufacturer: Benefits from gomzi lifescience manufacturer",
    url: "/blogs/whey-protein-concentrate-manufacturer-enefits-from-gomzi-lifescience-manufacture",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/whey-protein-concentrate-manufacturer.webp",
  },
  {
    number: 37,
    title:
      "Private Label Gym Supplements: Start Your Own Fitness Supplement Brand",
    url: "/blogs/private-label-gym-supplements-start-your-own-fitness-supplement-brand",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/private-label-gym-supplements.webp",
  },
  {
    number: 36,
    title:
      "Why “Cheap Manufacturing” Is the Most Expensive Decision You’ll Make?",
    url: "/blogs/why-cheap-manufacturing-is-the-most-expensive-decision-you-will-make",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-cheap-manufacturing.webp",
  },
  {
    number: 35,
    title:
      "Niche vs. Mass Market: What Works Better in the Supplement Industry?",
    url: "/blogs/niche-vs-mass-market-what-works-better-in-the-supplement-industry",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/niche-vs-mass-market.webp",
  },
  {
    number: 34,
    title:
      "Why Pre-Workout, Recovery, and Hydration Products Are Growing Fast in India (2026 Guide)",
    url: "/blogs/why-pre-workout-recover-and-hydration-products-are-growing-fast",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-pre-workout-recover-and-hydration-products-are-growing-fast.webp",
  },
  {
    number: 33,
    title:
      "India’s Leading CDMO for Fitness Brands — Protein & Supplement Manufacturing",
    url: "/blogs/india-leadingcdmo-for-fitness-brands-protein-supplement-manufacturing",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/india-leadingcdmo-for-fitness-brands -protein-supplement-manufacturing.webp",
  },
  {
    number: 32,
    title: "Cost to Start a Sports Nutrition Brand: 2026 Investment Guide",
    url: "/blogs/how-much-investment-is-required-to-start-a-sports-nutrition-brand",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-much-investment-is-required-to-start-a-sports-nutrition-brand.webp",
  },
  {
    number: 31,
    title:
      "The Rise of White Label Supplements in India: Why Brands are Choosing Outsourced R&D in 2026",
    url: "/blogs/the-rise-of-white-label-supplements-in-india-why-brands-are-choosing-outsourced",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/the-rise-of-white-label-supplements-in-india-why-brands-are-choosing-outsourced.webp",
  },
  {
    number: 30,
    title:
      "The Hidden Costs of Starting a Nutraceutical Brand (What Most Manufacturers Don't Tell You)",
    url: "/blogs/the-hidden-costs-of-starting-a-nutraceutical-brand",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/the-hidden-costs-of-starting-a-nutraceutical-brand.webp",
  },
  {
    number: 29,
    title:
      "Top 10 Nutraceutical Manufacturing Trends 2026 | AI, Sustainability & Smart Production",
    url: "/blogs/the-future-of-nutraceutical-manufacturing-in-2026-10-game-changing-trends-brands-cant-ignore",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/the-future-of-nutraceutical-manufacturing-in 2026-10-game-changing-trends-brands-cant-ignore.webp",
  },
  {
    number: 28,
    title:
      "How Sports Supplements Are Manufactured: From Ingredients to Packaging",
    url: "/blogs/how-sports-supplements-are-manufactured-from-ingredients-to-packaging",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-sports-supplements-are-manufactured-from-ingredients-to-packaging.webp",
  },
  {
    number: 27,
    title: "Protein Manufacturing Costs 2026: Whey vs. Plant-Based Analysis",
    url: "/blogs/whey-vs-plant-protein-which-is-more-profitable-to-manufacture",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/whey-vs-plant-protein-which-is-more-profitable-to-manufacture.webp",
  },
  {
    number: 26,
    title: "FSSAI vs CDSCO: The 2026 Regulatory Shift in Indian Nutraceuticals",
    url: "/blogs/from-fssai-to-cdsco-is-the-regulation-of-indian-nutraceuticals-changing-in-2026",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/from-fssai-to-cdsco-is-the-regulation-of-indian-nutraceuticals-changing-in-2026.webp",
  },
  {
    number: 25,
    title:
      "How to Launch Your Multivitamin Brand Without Manufacturing Facilities | Step‑by‑Step Guide",
    url: "/blogs/how-to-launch-your-own-multivitamin-brand-without-manufacturing-facilities",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-to-launch-your-own-multivitamin-brand-without-manufacturing-facilities.webp",
  },
  {
    number: 24,
    title:
      "How Fake Supplements Enter the Market (And How to Avoid Them) — Risks, Red Flags & Safety",
    url: "/blogs/how-fake-supplements-enter-the-market",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-fake-supplements-enter-the-market.webp",
  },
  {
    number: 23,
    title:
      "Gym Supplements vs Clinical Nutrition Supplements | Key Differences Explained",
    url: "/blogs/gym-supplements-vs-clinical-nutrition-supplements-what’s-the-real-difference",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/gym-supplements-vs-clinical-nutrition-supplements-what’s-the-real-difference.webp",
  },
  {
    number: 22,
    title:
      "Top 10 Third-Party Nutraceutical Manufacturing Companies in India (2026 Guide)",
    url: "/blogs/top-10-third-party-nutraceutical-manufacturing-companies-in-india-2026-guide",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/top-10-third-party-nutraceutical-manufacturers-in-india-for-startups.webp",
  },
  {
    number: 21,
    title:
      "How Brands Grow Without a Factory: The Ultimate Guide to Third-Party Manufacturing?",
    url: "/blogs/how-brands-grow-without-a-factory-the-ultimate-guide-to-third-party-manufacturing",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-brands-grow-without-a-factory-the-ultimate-guide-to-third-party-manufacturing.webp",
  },
  {
    number: 20,
    title: "How to Reduce Lead Times and Costs in Third-Party Manufacturing?",
    url: "/blogs/how-to-reduce-lead-times-and-costs-in-third-party-manufacturing",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-to-reduce-lead-times-and-costs-in-third-party-manufacturing.webp",
  },
  {
    number: 19,
    title:
      "Protein Supplement Quality Explained: From Raw Material to Final Powder",
    url: "/blogs/from-raw-protein-to-finished-powder-what-really-determines-supplement-quality",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/from-raw-protein-to-finished-powder-what-really-determines-supplement-quality.webp",
  },
  {
    number: 18,
    title:
      "Nutraceutical Supplement Manufacturer White Label in India | Gomzi Lifesciences",
    url: "/blogs/from-gym-idea-to-global-brand-the-untold-story-behind-every-successful-supplement",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/from-gym-idea-to-global-brand-the-untold-story-behind-every-successful-supplement.webp",
  },
  {
    number: 17,
    title: "Clean Label Supplements: What Modern Consumers Want in 2026",
    url: "/blogs/clean-label-supplements-what-modern-consumers-actually-want",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/clean-label-supplements-what-modern-consumers-actually-want.webp",
  },
  {
    number: 16,
    title:
      "₹5 Lakh vs ₹50 Lakh Supplement Manufacturing: What’s the Real Difference?",
    url: "/blogs/the-5-lakh-vs-50-lakh-what-changes-in-supplement-manufacturing",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/5 lakh-50 lakh.webp",
  },
  {
    number: 15,
    title: "Why Most Supplement Brands Fail Before Their First Sale",
    url: "/blogs/why-most-supplement-brands-fail-before-their-first-sale ",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-most-supplement-brands-fail-before-their-first-sale.webp",
  },
  {
    number: 14,
    title:
      "Why Startups Prefer Nutraceutical Third Party Manufacturers in India (2026 Guide)",
    url: "/blogs/why-startups-are-choosing-nutraceutical-third-party-manufacturers-in-india-over-in-house-production",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-startups-are-choosing-nutraceutical-third-party-manufacturers-in-india-over-in-house-production.webp",
  },
  {
    number: 13,
    title: "How Micro-Batch Manufacturing is Changing Personalized Supplements",
    url: "/blogs/micro-batch-manufacturing-the-hidden-engine-behind-personalized-nutraceutical-brands",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/micro-batch-manufacturing.webp",
  },
  {
    number: 12,
    title:
      "How to Choose the Right Nutraceutical Manufacturer (Avoid These Costly Mistakes)",
    url: "/blogs/the-7-costly-mistakes-to-avoid-when-choosing-a-private-label-nutraceutical-manufacturer",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/costly-mistake-to-avoid.webp",
  },
  {
    number: 11,
    title: "How E-commerce is Transforming Nutraceutical Companies in India",
    url: "/blogs/how-e-commerce-is-changing-the-nutraceutical-industry",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/e-commerce-changing.webp",
  },
  {
    number: 10,
    title: "How to Educate Consumers About Safe & Effective Nutraceutical Use?",
    url: "/blogs/how-to-educate-consumers-about-safe-effective-nutraceutical-usewhite",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-to-educate-consumers-about-safe-effective-nutraceutical-use.webp",
  },
  {
    number: 9,
    title:
      "What Supplements Actually Work? Debunking 7 Common Nutraceutical Myths",
    url: "/blogs/what-supplements-actuallywork-debunking-7common-nutraceutical-myths",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/what-supplements-actuallywork-debunking-7common-nutraceutical-myths.webp",
  },
  {
    number: 8,
    title:
      "Maximize Profit & Quality: Your Guide to Private Label Manufacturing in India",
    url: "/blogs/maximize-profit-quality-your-guide-to-private-label-manufacturing-in-india",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/maximize-profit-quality-private-label-manufacturing-guide-india.webp",
  },
  {
    number: 7,
    title:
      "GMP Audit Guide for Nutraceutical Manufacturers: Step-by-Step Process (2025)",
    url: "/blogs/gmp-audit-guide-for-nutraceutical-manufacturers-step-by-step-process-2025",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/gmp-audit-guide-for-nutraceutical-manufacturers-step-by-step-process-2025.webp",
  },
  {
    number: 6,
    title: "Top 10 Third Party Beverage Manufacturers in India for Startups",
    url: "/blogs/top-10-third-party-beverage-manufacturers-in-india-for-startups",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/top-10-third-party-nutraceutical-manufacturers-in-india-for-startups.webp",
  },
  {
    number: 5,
    title:
      "The Startup's Guide: Finding Low MOQ Nutraceutical Manufacturers (2025)",
    url: "/blogs/the-startups-guide-finding-low-moq-nutraceutical-manufacturers-2025",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/the-startups-guide-finding-low-moq-nutraceutical-manufacturers-2025-main.webp",
  },
  {
    number: 4,
    title:
      "The 7 Best Third-Party Tested Protein Powders (2026 Guide): Reddit Favorites vs. Lab Results",
    url: "/blogs/the-7-best-third-party-tested-protein-powders-2026-guide-reddit-favorites-vs-lab-results",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/the-7-best-third-party-tested-protein-powders-2026-guide-reddit-favorites-vs-lab-results.webp",
  },
  {
    number: 3,
    title: "How to Manufacture Export-Ready Nutraceutical Products in India",
    url: "/blogs/how-to-manufacture-export-ready-nutraceutical-products-in-india",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-to-manufacture-export-ready-nutraceutical-products-in-india.webp",
  },
  {
    number: 2,
    title:
      "How to Start a Private Label Supplement Brand in India: Step-by-Step Guide",
    url: "/blogs/how-to-start-a-private-label-supplement-brand-in-india",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/how-to-start-a-private-label-supplement-brand-in-india.webp",
  },
  {
    number: 1,
    title:
      "Why Your Brand's Success Depends on the Right Manufacturing Partner",
    url: "/blogs/why-partnering-with-the-right-contract-manufacturer",
    imgSrc:
      process.env.PUBLIC_URL +
      "/assets/images/white-labelling-blogs/why-partnering-with-the-right-contract-manufacturer.webp",
  },
];

const Readmorewhitelabelblogs = () => {
  const truncateTitle = (text, limit = 60) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  const sortedBlogs = [...whitelabelBloglist].sort(
    (a, b) => b.number - a.number,
  );

  return (
    <>
      <NutritionHeader />

      <section className="bg-secondaryyyy py-5">
        <div className="container-fluid w-80">
          <div className="row py-4">
            <div className="col-12 d-flex align-items-center justify-content-between pt-4 mt-4">
              <div className="col items-center d-flex justify-content-center">
                <h2 className="f-30 text-black text-uppercase barlow-condensed-extra f-32">
                  All Blogs
                </h2>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="row col-12 pr-0">
                {sortedBlogs.map((blog, index) => (
                  <div
                    className="col-md-6 col-lg-4 col-xl-4 pr-0 mb-3"
                    key={index}
                  >
                    <Link to={blog.url} className="cp">
                      <div className="blog-product-card-main">
                        <div className="blog-product-card bg-white br-15">
                          <span className="lazy-load-image-background blur lazy-load-image-loaded d-block">
                            <img
                              alt="blog cover"
                              className="img-fluid product-img w-100-h-auto-object-fit "
                              src={blog.imgSrc}
                            />
                          </span>
                          <div className="col-12 py-3">
                            <div className="row align-items-center">
                              <div className="col-10 text-left">
                                <p className="m-0 f-16 text-black inter-regular">
                                  {truncateTitle(blog.title)}
                                </p>
                              </div>
                              <div className="col-2 text-right">
                                <i className="fas f-20 fa-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <NutritionFooter />
    </>
  );
};

export default Readmorewhitelabelblogs;
