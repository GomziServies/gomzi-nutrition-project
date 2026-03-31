import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

//User Account
import Home from "./pages/home";
import PeanutButter from "./pages/third-party-manufacturing/peanut-butter";
import EnergyDrink from "./pages/third-party-manufacturing/energy-drinks";
import InvoicesList from "./pages/nutrition/InvoicesList";
import AboutUs from "./pages/nutrition/aboutUs";
import HowToStartAPrivateLabelSupplementBrandInIndia from "./pages/white-labelling-blogs/how-to-start-a-private-label-supplement-brand-in-india";
import WhyPartneringWithTheRightContractManufacturer from "./pages/white-labelling-blogs/why-partnering-with-the-right-contract-manufacturer";
import Readmorewhitelabelblogs from "./components/nutrition/Read-more-whitelabel-blogs";
import HowtoManufactureExportReadyNutraceuticalProductsInIndia from "./pages/white-labelling-blogs/how-to-manufacture-export-ready-nutraceutical-products-in-india";
import The7BestThirdPartyTestedProteinPowders2026GuideRedditFavoritesVsLabResults from "./pages/white-labelling-blogs/the-7-best-third-party-tested-protein-powders-2026-guide-reddit-favorites-vs-lab-results";
import TheStartupGuideFindingLowMOQNutraceuticalManufacturers2025 from "./pages/white-labelling-blogs/the-startups-guide-finding-low-moq-nutraceutical-manufacturers-2025";
import Top10ThirdPartyBeverageManufacturersInIndiaForStartups from "./pages/white-labelling-blogs/top-10-third-party-beverage-manufacturers-in-india-for-startups";
import GMPAuditGuideforNutraceuticalManufacturersStepbyStepProcess2025 from "./pages/white-labelling-blogs/gmp-audit-guide-for-nutraceutical-manufacturers-step-by-step-process-2025";
import MaximizeProfitQualityYourGuidetoPrivateLabelManufacturinginIndia from "./pages/white-labelling-blogs/maximize-profit-quality-your-guide-to-private-label-manufacturing-in-india";
import WhatSupplementsActuallyWorkDebunking7CommonNutraceuticalMyths from "./pages/white-labelling-blogs/what-supplements-actuallywork-debunking-7common-nutraceutical-myths";
import HowtoEducateConsumersAboutSafeEffectiveNutraceuticalUse from "./pages/white-labelling-blogs/how-to-educate-consumers-about-safe-effective-nutraceutical-use";
import WheyProteinManufacturing from "./pages/third-party-manufacturing/WheyProteinManufacturing";
import PerformanceSupplements from "./pages/third-party-manufacturing/PerformanceSupplements";
import Multivitaminstabletpage from "./pages/third-party-manufacturing/multivitamins-tablet-page";
import MultivitaminTablet from "./pages/third-party-manufacturing/multivitamins-tablet-page";
import HowtoReduceLeadTimesAndCosts from "./pages/white-labelling-blogs/how-to-reduce-lead-times-and-costs-in-third-party-manufacturing";
import HowBrandsGrowWithoutFactory from "./pages/white-labelling-blogs/how-brands-grow-without-a-factory-the-ultimate-guide-to-third-party-manufacturing";
import Top10ThirdPartyNutraceuticalManufacturingCompaniesinIndia from "./pages/white-labelling-blogs/top-10-third-party-nutraceutical-manufacturing-companies-in-india-2026-guide";
import HowEcommerceIsChangingTheNutraceuticalIndustry from "./pages/white-labelling-blogs/how-e-commerce-is-changing-the-nutraceutical-industry";
import HowtoEducateConsumersAboutSafeEffectiveNutraceuticalUsewhite from "./pages/white-labelling-blogs/how-to-educate-consumers-about-safe-effective-nutraceutical-use";
import The7CostlyMistakestoAvoidWhenChoosingaPrivateLabelNutraceuticalManufacturer from "./pages/white-labelling-blogs/the-7-costly-mistakes-to-avoid-when-choosing-a-private-label-nutraceutical-manufacturer";
import MicroBatchManufacturingTheHiddenEngineBehindPersonalizedNutraceuticalBrands from "./pages/white-labelling-blogs/micro-batch-manufacturing-the-hidden-engine-behind-personalized-nutraceutical-brands";
import WhyStartupsAreChoosingNutraceuticalThirdPartyManufacturersinIndiaOverInHouseProduction from "./pages/white-labelling-blogs/why-startups-are-choosing-nutraceutical-third-party-manufacturers-in-india-over-in-house-production";
import WhyMostSupplementBrandsFailBeforeTheirFirstSale from "./pages/white-labelling-blogs/why-most-supplement-brands-fail-before-their-first-sale";
import The5LakhVs50LakhWhatChangesInSupplementManufacturing from "./pages/white-labelling-blogs/the-5-lakh-vs-50-lakh-what-changes-in-supplement-manufacturing";
import CleanLabelSupplementsWhatModernConsumersActuallyWant from "./pages/white-labelling-blogs/clean-label-supplements-what-modern-consumers-actually-want";
import FromGymIdeatoGlobalBrandTheUntoldStoryBehindEverySuccessfulSupplement from "./pages/white-labelling-blogs/from-gym-idea-to-global-brand-the-untold-story-behind-every-successful-supplement";
import FromRawProteintoFinishedPowderWhatReallyDeterminesSupplementQuality from "./pages/white-labelling-blogs/from-raw-protein-to-finished-powder-what-really-determines-supplement-quality";
// import Sitemap from '../src/components/partials/sitemap';

//Profile
const UserProfile = lazy(() => import("./pages/account/profile"));
const UserOrder = lazy(() => import("./pages/account/order"));
const AddToCart = lazy(() => import("./pages/add-to-cart"));

// nutrition
const GomziNutritionWheyProteinIsolate = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-whey-protein-isolate"),
);
const BulkInquiryNutrition = lazy(
  () => import("./pages/nutrition/bulk-inquriy-nutrition"),
);
const GomziNutritionWheyProtein = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-whey-protein"),
);
const GomziNutritionWheyProteinConcentrate = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-whey-protein-concentrate"),
);
const GomziNutritionIgniteFatBurner = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-ignite-fat-burner"),
);
const GomziNutritionMassGainerPowder = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-mass-gainer-powder"),
);
const GomziNutritionSparkEAA = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-spark-eaa"),
);
const GomziNutritionATPCreatine = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-atp-creatine"),
);
const GomziNutritionActiveTShirt = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-sports-active-t-shirt"),
);
const GomziNutritionSportsJogger = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-sports-jogger"),
);
const GomziNutritionPerformancePreWorkoutDrink = lazy(
  () =>
    import("./pages/nutrition/gomzi-nutrition-performance-pre-workout-drink"),
);
const GomziNutritionPerformanceEAADrink = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-performance-eaa-drink"),
);
const GomziNutritionPerformanceCreatineDrink = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-performance-creatine-drink"),
);
const GomziNutritionMangoChiaSeedCrunchyPeanutButter = lazy(
  () =>
    import("./pages/nutrition/gomzi-nutrition-mango-chia-seed-crunchy-peanut-butter"),
);
const GomziNutritionChocolateCrunchyPeanutButter = lazy(
  () =>
    import("./pages/nutrition/gomzi-nutrition-chocolate-crunchy-peanut-butter"),
);
const GomziNutritionNaturalCrunchyPeanutButter = lazy(
  () =>
    import("./pages/nutrition/gomzi-nutrition-natural-crunchy-peanut-butter"),
);
const GomziNutritionRefuelWheyProtein = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-refuel-whey-protein"),
);
const GomziNutritionRefuelWheyProteinIsolate = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-refuel-whey-protein-isolate"),
);
const GomziNutritionRefuelWheyProteinConcentrate = lazy(
  () =>
    import("./pages/nutrition/gomzi-nutrition-refuel-whey-protein-concentrate"),
);
const GomziNutritionRefuelIgniteFatBurner = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-refuel-ignite-fat-burner"),
);
const GomziNutritionRefuelATPCreatine = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-refuel-atp-creatine"),
);
const GomziNutritionRefuelSparkEAA = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-refuel-spark-eaa"),
);
const GomziNutritionRefuelMassGainerPowder = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-refuel-mass-gainer-powder"),
);
const InvoiceViewPage = lazy(() => import("./pages/nutrition/InvoiceViewPage"));
const GomziNutritionChocolateProteinBar = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-chocolate-protein-bar"),
);
const GomziNutritionAllCombo = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-all-combo"),
);
const GomziNutritionMuscleBuildCombo = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-muscle-build-combo"),
);
const GomziNutritionFatLossCombo = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-fat-loss-combo"),
);
const GomziNutritionShakerBottle = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-shaker-bottle"),
);
const TrainerNutrition = lazy(
  () => import("./pages/nutrition/trainer-nutrition"),
);
const CheckOut = lazy(() => import("./pages/nutrition/check-out"));
const ContactUs = lazy(() => import("./pages/nutrition/contact-us"));
const TermsConditionCustomer = lazy(
  () => import("./pages/nutrition/terms-condition-customer"),
);
const PrivacyPolicyCustomer = lazy(
  () => import("./pages/nutrition/privacy-policy-customer"),
);
const ShippingPolicyCustomer = lazy(
  () => import("./pages/nutrition/shipping-policy-customer"),
);
const CancellationPolicyCustomer = lazy(
  () => import("./pages/nutrition/cancellation-policy-customer"),
);
const PricingPolicyCustomer = lazy(
  () => import("./pages/nutrition/pricing-policy-customer"),
);
const ReturnAndRefundPolicyCustomer = lazy(
  () => import("./pages/nutrition/return-and-refund-policy-customer"),
);
const GomziNutritionBuy2MassGainer = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-buy-2-mass-gainer"),
);
const GomziNutritionBuy1MassGainer = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-buy-1kg-mass-gainer"),
);
const GomziNutritionBuy1KgIsolate = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-buy-1kg-isolate"),
);
const GomziNutritionBuy1KgConcentrate = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-buy-1kg-concentrate"),
);
const GomziNutritionBuy3Combo = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-buy-3-combo"),
);
const WhiteLabelling = lazy(() => import("./pages/nutrition/white-labelling"));
const GomziNutritionAyurstrengthPowder = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-ayurstrength-powder"),
);
const GomziNutritionSugarguardDiabetesCarePowder = lazy(
  () =>
    import("./pages/nutrition/gomzi-nutrition-sugarguard-diabetes-care-powder"),
);
const GomziNutritionAyureaseGastricReliefPowder = lazy(
  () =>
    import("./pages/nutrition/gomzi-nutrition-ayurease-gastric-relief-powder"),
);
const GomziNutritionB12Veda = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-b12-veda"),
);
const GomziNutritionSlimAyurFatLossPowder = lazy(
  () => import("./pages/nutrition/gomzi-nutrition-slimayur-fat-loss-powder"),
);
const GomziNutritionboweleaseConstipationReliefPowder = lazy(
  () =>
    import("./pages/nutrition/gomzi-nutrition-bowelease-constipation-relief-powder"),
);
const ThankYouProductPage = lazy(
  () => import("./pages/nutrition/thank-you-purchase-product"),
);

// ScrollRestoration
// import ScrollRestoration from "./components/scroll-restoration";
const ScrollRestoration = lazy(() => import("./components/scroll-restoration"));

//404
const NotFoundPage = lazy(() => import("./pages/404"));

//Refuel Series
const RefuelSeries = lazy(() => import("./pages/refuel-series/refuel-series"));
const GomziNutritionRetailerCombo = lazy(
  () => import("./pages/refuel-series/gomzi-nutrition-retailer-combo"),
);

// Read-more-blogs
const Readmoreblogs = lazy(
  () => import("./components/nutrition/read-more-blogs"),
);

// Blogs
const TopSupplementsForWeightGain = lazy(
  () => import("./pages/blogs/top-supplements-for-weight-gain"),
);
const HowSupplementsHelpYouLiveHealthyLife = lazy(
  () => import("./pages/blogs/how-supplements-help-you-live-healthy-life"),
);
const BestWheyProteinInIndia = lazy(
  () => import("./pages/blogs/best-whey-protein-in-india"),
);
const Wheyisolatevsconcentratewhichoneactuallydeliversbetterresultsin2026 =
  lazy(
    () =>
      import("./pages/blogs/whey-isolate-vs-concentrate-which-one-actually-delivers-better-results-in-2026"),
  );

const Howtolaunchasupplementbrandwithlowmoqmanufacturersthe2026startupblueprint =
  lazy(
    () =>
      import("./pages/blogs/how-to-launch-a-supplement-brand-with-low-moq-manufacturers-the-2026-startup-blueprint"),
  );

const Frommassproductiontomicrobatcheshowtolaunchapersonalizedsupplementline =
  lazy(
    () =>
      import("./pages/blogs/from-mass-production-to-micro-batches-how-to-launch-a-personalized-supplement-line"),
  );

const Howtoeducateconsumersaboutsafeeffectivenutraceuticaluse = lazy(
  () =>
    import("./pages/blogs/how-to-educate-consumers-about-safe-effective-nutraceutical-use"),
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/*third party manufacturing */}
        <Route
          path="/third-party-manufacturing/protein-powder"
          element={<WheyProteinManufacturing />}
        />

        <Route
          path="/third-party-manufacturing/sports-nutrition-supplements"
          element={<PerformanceSupplements />}
        />

        <Route
          path="/third-party-manufacturing/energy-drinks"
          element={<EnergyDrink />}
        />

        <Route
          path="/third-party-manufacturing/peanut-butter"
          element={<PeanutButter />}
        />

        <Route
          path="/third-party-manufacturing/multivitamins-tablet"
          element={<MultivitaminTablet />}
        />
        {/* <Route
          path="/third-party-manufacturing/WheyProteinManufacturing"
          element={<WheyProteinManufacturing />}
        /> */}

        {/* nutrition */}
        <Route
          path="/nutrition/gomzi-nutrition-whey-protein-isolate"
          element={<GomziNutritionWheyProteinIsolate />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-whey-protein-chocolate"
          element={<GomziNutritionWheyProtein />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-whey-protein-concentrate"
          element={<GomziNutritionWheyProteinConcentrate />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-ignite-fat-burner"
          element={<GomziNutritionIgniteFatBurner />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-spark-eaa"
          element={<GomziNutritionSparkEAA />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-atp-creatine"
          element={<GomziNutritionATPCreatine />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-chocolate-protein-bar"
          element={<GomziNutritionChocolateProteinBar />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-all-combo"
          element={<GomziNutritionAllCombo />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-mass-gainer-powder"
          element={<GomziNutritionMassGainerPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-ayurstrength-powder"
          element={<GomziNutritionAyurstrengthPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-sugarguard-diabetes-care-powder"
          element={<GomziNutritionSugarguardDiabetesCarePowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-ayurease-gastric-relief-powder"
          element={<GomziNutritionAyureaseGastricReliefPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-b12-veda"
          element={<GomziNutritionB12Veda />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-bowelease-constipation-relief-powder"
          element={<GomziNutritionboweleaseConstipationReliefPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-slimayur-fat-loss-powder"
          element={<GomziNutritionSlimAyurFatLossPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-shaker-bottle"
          element={<GomziNutritionShakerBottle />}
        />

        {/* read-more-blogs */}
        <Route path="/read-more-blogs" element={<Readmoreblogs />} />
        <Route
          path="/read-more-white-labelling-blogs"
          element={<Readmorewhitelabelblogs />}
        />

        {/* blogs */}
        <Route
          path="/blogs/top-supplements-for-weight-gain"
          element={<TopSupplementsForWeightGain />}
        />
        <Route
          path="/blogs/how-supplements-help-you-live-healthy-life"
          element={<HowSupplementsHelpYouLiveHealthyLife />}
        />
        <Route
          path="/blogs/best-whey-protein-in-india"
          element={<BestWheyProteinInIndia />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-muscle-build-combo"
          element={<GomziNutritionMuscleBuildCombo />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-fat-loss-combo"
          element={<GomziNutritionFatLossCombo />}
        />
        <Route path="/nutrition/check-out" element={<CheckOut />} />
        <Route
          path="/nutrition/trainer-nutrition"
          element={<TrainerNutrition />}
        />
        <Route
          path="/nutrition/bulk-inquiry-nutrition"
          element={<BulkInquiryNutrition />}
        />
        <Route path="/nutrition/white-labelling" element={<WhiteLabelling />} />

        {/* white labelling blogs */}

        <Route
          path="/blogs/how-to-start-a-private-label-supplement-brand-in-india"
          element={<HowToStartAPrivateLabelSupplementBrandInIndia />}
        />
        <Route
          path="/blogs/why-partnering-with-the-right-contract-manufacturer"
          element={<WhyPartneringWithTheRightContractManufacturer />}
        />
        <Route
          path="/blogs/whey-isolate-vs-concentrate-which-one-actually-delivers-better-results-in-2026"
          element={
            <Wheyisolatevsconcentratewhichoneactuallydeliversbetterresultsin2026 />
          }
        />
        <Route
          path="/blogs/how-to-launch-a-supplement-brand-with-low-moq-manufacturers-the-2026-startup-blueprint"
          element={
            <Howtolaunchasupplementbrandwithlowmoqmanufacturersthe2026startupblueprint />
          }
        />
        <Route
          path="/blogs/from-mass-production-to-micro-batches-how-to-launch-a-personalized-supplement-line"
          element={
            <Frommassproductiontomicrobatcheshowtolaunchapersonalizedsupplementline />
          }
        />
        <Route
          path="/blogs/how-to-educate-consumers-about-safe-effective-nutraceutical-use"
          element={<Howtoeducateconsumersaboutsafeeffectivenutraceuticaluse />}
        />

        <Route
          path="/blogs/how-to-manufacture-export-ready-nutraceutical-products-in-india"
          element={<HowtoManufactureExportReadyNutraceuticalProductsInIndia />}
        />

        <Route
          path="/blogs/the-7-best-third-party-tested-protein-powders-2026-guide-reddit-favorites-vs-lab-results"
          element={
            <The7BestThirdPartyTestedProteinPowders2026GuideRedditFavoritesVsLabResults />
          }
        />

        <Route
          path="/blogs/the-startups-guide-finding-low-moq-nutraceutical-manufacturers-2025"
          element={
            <TheStartupGuideFindingLowMOQNutraceuticalManufacturers2025 />
          }
        />

        <Route
          path="/blogs/top-10-third-party-beverage-manufacturers-in-india-for-startups"
          element={<Top10ThirdPartyBeverageManufacturersInIndiaForStartups />}
        />

        <Route
          path="/blogs/gmp-audit-guide-for-nutraceutical-manufacturers-step-by-step-process-2025"
          element={
            <GMPAuditGuideforNutraceuticalManufacturersStepbyStepProcess2025 />
          }
        />

        <Route
          path="/blogs/maximize-profit-quality-your-guide-to-private-label-manufacturing-in-india"
          element={
            <MaximizeProfitQualityYourGuidetoPrivateLabelManufacturinginIndia />
          }
        />

        <Route
          path="/blogs/what-supplements-actuallywork-debunking-7common-nutraceutical-myths"
          element={
            <WhatSupplementsActuallyWorkDebunking7CommonNutraceuticalMyths />
          }
        />

        <Route
          path="/blogs/how-to-educate-consumers-about-safe-effective-nutraceutical-usewhite"
          element={
            <HowtoEducateConsumersAboutSafeEffectiveNutraceuticalUsewhite />
          }
        />

        <Route
          path="/blogs/how-to-reduce-lead-times-and-costs-in-third-party-manufacturing"
          element={<HowtoReduceLeadTimesAndCosts />}
        />

        <Route
          path="/blogs/how-brands-grow-without-a-factory-the-ultimate-guide-to-third-party-manufacturing"
          element={<HowBrandsGrowWithoutFactory />}
        />

        <Route
          path="/blogs/top-10-third-party-nutraceutical-manufacturing-companies-in-india-2026-guide"
          element={
            <Top10ThirdPartyNutraceuticalManufacturingCompaniesinIndia />
          }
        />

        <Route
          path="/blogs/how-e-commerce-is-changing-the-nutraceutical-industry"
          element={<HowEcommerceIsChangingTheNutraceuticalIndustry />}
        />

        <Route
          path="/blogs/the-7-costly-mistakes-to-avoid-when-choosing-a-private-label-nutraceutical-manufacturer"
          element={
            <The7CostlyMistakestoAvoidWhenChoosingaPrivateLabelNutraceuticalManufacturer />
          }
        />

        <Route
          path="/blogs/micro-batch-manufacturing-the-hidden-engine-behind-personalized-nutraceutical-brands"
          element={
            <MicroBatchManufacturingTheHiddenEngineBehindPersonalizedNutraceuticalBrands />
          }
        />

        <Route
          path="/blogs/why-startups-are-choosing-nutraceutical-third-party-manufacturers-in-india-over-in-house-production"
          element={
            <WhyStartupsAreChoosingNutraceuticalThirdPartyManufacturersinIndiaOverInHouseProduction />
          }
        />

        <Route
          path="/blogs/why-most-supplement-brands-fail-before-their-first-sale"
          element={<WhyMostSupplementBrandsFailBeforeTheirFirstSale />}
        />

        <Route
          path="/blogs/the-5-lakh-vs-50-lakh-what-changes-in-supplement-manufacturing"
          element={<The5LakhVs50LakhWhatChangesInSupplementManufacturing />}
        />

        <Route
          path="/blogs/clean-label-supplements-what-modern-consumers-actually-want"
          element={<CleanLabelSupplementsWhatModernConsumersActuallyWant />}
        />

        <Route
          path="/blogs/from-gym-idea-to-global-brand-the-untold-story-behind-every-successful-supplement"
          element={
            <FromGymIdeatoGlobalBrandTheUntoldStoryBehindEverySuccessfulSupplement />
          }
        />

        <Route
          path="/blogs/from-raw-protein-to-finished-powder-what-really-determines-supplement-quality"
          element={
            <FromRawProteintoFinishedPowderWhatReallyDeterminesSupplementQuality />
          }
        />

        {/* --- */}

        <Route
          path="/nutrition/gomzi-nutrition-refuel-mass-gainer-powder"
          element={<GomziNutritionRefuelMassGainerPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-refuel-spark-eaa"
          element={<GomziNutritionRefuelSparkEAA />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-refuel-atp-creatine"
          element={<GomziNutritionRefuelATPCreatine />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-refuel-ignite-fat-burner"
          element={<GomziNutritionRefuelIgniteFatBurner />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-refuel-whey-protein-concentrate"
          element={<GomziNutritionRefuelWheyProteinConcentrate />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-refuel-whey-protein-isolate"
          element={<GomziNutritionRefuelWheyProteinIsolate />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-refuel-whey-protein"
          element={<GomziNutritionRefuelWheyProtein />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-natural-crunchy-peanut-butter"
          element={<GomziNutritionNaturalCrunchyPeanutButter />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-chocolate-crunchy-peanut-butter"
          element={<GomziNutritionChocolateCrunchyPeanutButter />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-mango-chia-seed-crunchy-peanut-butter"
          element={<GomziNutritionMangoChiaSeedCrunchyPeanutButter />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-performance-creatine-drink"
          element={<GomziNutritionPerformanceCreatineDrink />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-performance-eaa-drink"
          element={<GomziNutritionPerformanceEAADrink />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-performance-pre-workout-drink"
          element={<GomziNutritionPerformancePreWorkoutDrink />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-sports-jogger"
          element={<GomziNutritionSportsJogger />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-sports-active-t-shirt"
          element={<GomziNutritionActiveTShirt />}
        />
        <Route path="/nutrition/contact-us" element={<ContactUs />} />
        <Route
          path="/nutrition/terms-condition-customer"
          element={<TermsConditionCustomer />}
        />
        <Route
          path="/nutrition/privacy-policy-customer"
          element={<PrivacyPolicyCustomer />}
        />
        <Route
          path="/nutrition/shipping-policy-customer"
          element={<ShippingPolicyCustomer />}
        />
        <Route
          path="/nutrition/cancellation-policy-customer"
          element={<CancellationPolicyCustomer />}
        />
        <Route
          path="/nutrition/pricing-policy-customer"
          element={<PricingPolicyCustomer />}
        />
        <Route
          path="/nutrition/return-and-refund-policy-customer"
          element={<ReturnAndRefundPolicyCustomer />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-buy-2-mass-gainer"
          element={<GomziNutritionBuy2MassGainer />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-buy-1kg-mass-gainer"
          element={<GomziNutritionBuy1MassGainer />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-buy-1kg-isolate"
          element={<GomziNutritionBuy1KgIsolate />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-buy-1kg-concentrate"
          element={<GomziNutritionBuy1KgConcentrate />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-buy-3-combo"
          element={<GomziNutritionBuy3Combo />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/nutrition/thank-you-for-order"
          element={<ThankYouProductPage />}
        />
        <Route path="/nutrition/cart" element={<AddToCart />} />
        {/* nutrition */}
        {/* User Profile */}
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/order" element={<UserOrder />} />
        <Route path="/invoice" element={<InvoicesList />} />
        <Route path="/invoice/:invoice_id" element={<InvoiceViewPage />} />
        {/* Add a catch-all route for unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Refuel Series */}
        <Route path="/refuel-series" element={<RefuelSeries />} />
        <Route
          path="/gomzi-nutrition-retailer-combo"
          element={<GomziNutritionRetailerCombo />}
        />
      </Routes>
      <ScrollRestoration />
    </>
  );
}

export default App;
