import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

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
import WheyProteinManufacturing from "./pages/third-party-manufacturing/WheyProteinManufacturing";
import PerformanceSupplements from "./pages/third-party-manufacturing/PerformanceSupplements";
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
import GymSupplementsvsClinicalNutritionSupplementsWhatstheRealDifference from "./pages/white-labelling-blogs/gym-supplements-vs-clinical-nutrition-supplements-what’s-the-real-difference";
import HowFakeSupplementsEntertheMarket from "./pages/white-labelling-blogs/how-fake-supplements-enter-the-market";
import HowToLaunchYourOwnMultivitaminBrandWithoutManufacturingFacilities from "./pages/white-labelling-blogs/how-to-launch-your-own-multivitamin-brand-without-manufacturing-facilities";
import FromFSSAItoCDSCOIstheRegulationofIndianNutraceuticalsChangingIn from "./pages/white-labelling-blogs/from-fssai-to-cdsco-is-the-regulation-of-indian-nutraceuticals-changing-in-2026";
import WheyVsPlantProteinWhichIsMoreProfitabletoManufacture from "./pages/white-labelling-blogs/whey-vs-plant-protein-which-is-more-profitable-to-manufacture";
import HowSportsSupplementsAreManufacturedFromIngredientstoPackaging from "./pages/white-labelling-blogs/how-sports-supplements-are-manufactured-from-ingredients-to-packaging";
import TheFutureofNutraceuticalManufacturingin202610GameChangingTrendsBrandsCantIgnore from "./pages/white-labelling-blogs/the-future-of-nutraceutical-manufacturing-in-2026-10-game-changing-trends-brands-cant-ignore";
import TheHiddenCostsofStartingaNutraceuticalBrand from "./pages/white-labelling-blogs/the-hidden-costs-of-starting-a-nutraceutical-brand";
import TheRiseofWhiteLabelSupplementsinIndiaWhyBrandsareChoosingOutsourced from "./pages/white-labelling-blogs/the-rise-of-white-label-supplements-in-india-why-brands-are-choosing-outsourced";
import HowMuchInvestmentisRequiredtoStartaSportsNutritionBrand from "./pages/white-labelling-blogs/how-much-investment-is-required-to-start-a-sports-nutrition-brand";
import IndiaLeadingCDMOforFitnessBrandsProteinSupplementManufacturing from "./pages/white-labelling-blogs/india-leadingcdmo-for-fitness-brands-protein-supplement-manufacturing";

import PersonalizedSupplementTrends2026 from "./pages/white-labelling-blogs/2026-personalized-supplement-trends-what-B2B-brands-should-launch-for-sleep-stress-and-daily-wellness";
import WhyFormulationIsOnlyHalfTheJobInNutraceuticalManufacturing from "./pages/white-labelling-blogs/why-formulation-is-only-half-the-job-in-nutraceutical-manufacturing";
import WhySomeSupplementBrandsSellFasterThanOthers from "./pages/white-labelling-blogs/why-some-supplement-brands-sell-faster-than-others";
import WhyTheSameWheyProteinFormulaMadeInTwoDifferentIndianFactoriesTastesCompletelyDifferent from "./pages/white-labelling-blogs/why-the-same-whey-protein-formula-made-in-two-different-indian-factories-tastes-completely-different";
import HowSupplementManufacturingActuallyWorks from "./pages/white-labelling-blogs/how-supplement-manufacturing-actually-works";
import WhatGymBuyersInIndiaAreReallySearchingForIn2026 from "./pages/white-labelling-blogs/what-gym-buyers-in-india-are-really-searching-for-in-2026";
import WhyEveryFitnessBrandNeedsAPreWorkoutManufacturerNotJustAFormula from "./pages/white-labelling-blogs/why-every-fitness-brand-needs-a-pre-workout-manufacturer-not-just-a-formula";
import Why72PercentOfNewSupplementBrandsInIndiaAreChoosingThirdPartyManufacturingIn2026 from "./pages/white-labelling-blogs/why-72-percent-of-new-supplement-brands-in-india-are-choosing-third-party-manufacturing-in-2026";
import WhatIfYourSupplementHadACharacter from "./pages/white-labelling-blogs/what-if-your-supplement-had-a-character-how-brand-storytelling-turns-protein-powder-into-a-hero-product";
import WhatIsTheCheapestWheyProteinPowderAvailableInIndiaBuyerGuide from "./pages/white-labelling-blogs/what-is-the-cheapest-whey-protein-powder-available-in-india-buyer-guide";
import ThirdPartyMultivitaminManufacturerInIndiaHowToChooseTheRightPartner from "./pages/white-labelling-blogs/third-party-multivitamin-manufacturer-in-india-how-to-choose-the-right-partner";
import TheRiseOfPreWorkoutSupplementsHowFitnessBrandsCanWinIn2026 from "./pages/white-labelling-blogs/the-rise-of-pre-workout-supplements-how-fitness-brands-can-win-in-2026";
import TheRealReasonSomeProteinBrandsFeelTrustworthyAndOthersDont from "./pages/white-labelling-blogs/the-real-reason-some-protein-brands-feel-trustworthy-and-others-dont";
import TheHiddenQuestionsBuyersAskBeforeChoosingASupplementManufacturer from "./pages/white-labelling-blogs/the-hidden-questions-buyers-ask-before-choosing-a-supplement-manufacturer";
import NutraceuticalManufacturingKPIsHowToTrackQualityEfficiencyAndComplianceInProduction from "./pages/white-labelling-blogs/nutraceutical-manufacturing-KPIs-how-to-track-quality-efficiency-and-compliance-in-production";
import IndiaDoesNotNeedMoreProteinBrandsItNeedsMoreHonestOnes from "./pages/white-labelling-blogs/india-does-not-need-more-protein-brands";
import HowToLaunchAGymFocusedPreWorkoutLine from "./pages/white-labelling-blogs/how-to-launch-a-gym-focused-pre-workout-line-from-formulation-to-shelf-a-step-by-step-guide-for-brands";
import HowFlavourDevelopmentImpactsProteinPowderSuccess from "./pages/white-labelling-blogs/how-flavour-development-impacts-protein-powder-success";
import HowFirstTimeFoundersCanAvoidCommonSupplementLaunchMistakes from "./pages/white-labelling-blogs/how-first-time-founders-can-avoid-common-supplement-launch-mistakes";
import FSSAIRegulationsForFunctionalFoodsAndNutraceuticals2026Update from "./pages/white-labelling-blogs/fssai-regulations-for-functional-foods-and-nutraceuticals-2026-update";
import BestSupplementsToReduceStressAndAnxietyNaturally from "./pages/white-labelling-blogs/best-supplements-to-reduce-stress-and-anxiety-naturally";
import BestNutraceuticalManufacturingCompaniesInIndiaForOmega3AndSportsSupplements from "./pages/white-labelling-blogs/best-nutraceutical-manufacturing-companies-in-india-for-omega-3-and-sports-supplements";
import HowRawMaterialQualityAffectsSupplementTasteAndPerformance from "./pages/white-labelling-blogs/how-raw-material-quality-affects-supplement-taste-and-performance";
import HowToValidateASupplementIdeaBeforeSpendingOnManufacturing from "./pages/white-labelling-blogs/how-to-validate-a-supplement-idea-before-spending-on-manufacturing";
import IsASupplementBrandReallyPassiveIncome from "./pages/white-labelling-blogs/is-a-supplement-brand-really-passive-income-the-honest-truth";
import ThePackagingSignalsThatMakeASupplementBrandLookEstablished from "./pages/white-labelling-blogs/the-packaging-signals-that-make-a-supplement-brand-look-established";
import WhyIndianFlavoursCanBeAGrowthAdvantageInSportsNutrition from "./pages/white-labelling-blogs/why-indian-flavours-can-be-a-growth-advantage-in-sports-nutrition";
import WhatMakesANutraceuticalBrandFeelReady from "./pages/white-labelling-blogs/what-makes-a-nutraceutical-brand-feel-ready-in-the-customers-mind";
import TopThingsToKnowBeforeStartingAMultivitaminTabletBrand from "./pages/white-labelling-blogs/top-things-to-know-before-starting-a-multivitamin-tablet-brand";
import ThePsychologyOfBuyingSupplements from "./pages/white-labelling-blogs/the-psychology-of-buying-supplements";
import WhyInternationalBrandsSourceNutraceuticalProductsFromGujarat from "./pages/white-labelling-blogs/why-international-brands-source-nutraceutical-products-from-gujarat";
import QuestionsToAskBeforeSelectingAProteinManufacturer from "./pages/white-labelling-blogs/questions-to-ask-before-selecting-a-protein-manufacturer";
import HowMuchDoesItCostToLaunchAPrivateLabelProteinPowderBrandInIndia from "./pages/white-labelling-blogs/how-much-does-it-cost-to-launch-a-private-label-protein-powder-brand-in-india";
import NicheVsMassMarketWhatWorksBetterInTheSupplementIndustry from "./pages/white-labelling-blogs/niche-vs-mass-market-what-works-better-in-the-supplement-industry";
import WhyPreWorkoutRecoveryAndHydrationProductsAreGrowingFast from "./pages/white-labelling-blogs/why-pre-workout-recover-and-hydration-products-are-growing-fast";
import WhyCheapManufacturingIsTheMostExpensiveDecisionYouWillMake from "./pages/white-labelling-blogs/why-cheap-manufacturing-is-the-most-expensive-decision-you-will-make";
import PrivateLabelGymSupplementsStartYourOwnFitnessSupplementBrand from "./pages/white-labelling-blogs/private-label-gym-supplements-start-your-own-fitness-supplement-brand";
import WheyProteinConcentrateManufacturerBenefits from "./pages/white-labelling-blogs/whey-protein-concentrate-manufacturer-enefits-from-gomzi-lifescience-manufacture";
import HowToFindHighDemandSupplementIdeasUsingMarketData from "./pages/white-labelling-blogs/how-to-find-high-demand-supplement-ideas-using-market-data";
import FounderPage from "./pages/nutrition/founderPage";

const UserProfile = lazy(() => import("./pages/account/profile"));
const UserOrder = lazy(() => import("./pages/account/order"));
const AddToCart = lazy(() => import("./pages/add-to-cart"));

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

const ScrollRestoration = lazy(() => import("./components/scroll-restoration"));

const NotFoundPage = lazy(() => import("./pages/404"));

const RefuelSeries = lazy(() => import("./pages/refuel-series/refuel-series"));
const GomziNutritionRetailerCombo = lazy(
  () => import("./pages/refuel-series/gomzi-nutrition-retailer-combo"),
);

const Readmoreblogs = lazy(
  () => import("./components/nutrition/read-more-blogs"),
);

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

const SampleBooking = lazy(
  () => import("./pages/sample-booking/sample-booking"),
);

const Wheylanding = lazy(() => import("./pages/whey-landing/whey-landing"));
const ThankYouLanding = lazy(
  () => import("./pages/whey-landing/thank-you-landing"),
);
const FreeConsultation = lazy(
  () => import("./pages/free-consultation/free-consultation"),
);
const ThankYouFreeConsultation = lazy(
  () => import("./pages/free-consultation/thank-you-free-consultation"),
);
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/whey-landing" element={<Wheylanding />} />
        <Route path="/thank-you" element={<ThankYouLanding />} />
        <Route path="/free-consultation" element={<FreeConsultation />} />
        <Route
          path="/free-consultation/thank-you"
          element={<ThankYouFreeConsultation />}
        />

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
          path="/founder"
          element={<FounderPage />}
        />

        <Route
          path="/third-party-manufacturing/peanut-butter"
          element={<PeanutButter />}
        />

        <Route
          path="/third-party-manufacturing/multivitamins-tablet"
          element={<MultivitaminTablet />}
        />

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

        <Route path="/read-more-blogs" element={<Readmoreblogs />} />
        <Route
          path="/read-more-white-labelling-blogs"
          element={<Readmorewhitelabelblogs />}
        />

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

        <Route
          path="/nutrition/sample-booking-update"
          element={<SampleBooking />}
        />

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
        <Route
          path="/blogs/gym-supplements-vs-clinical-nutrition-supplements-what’s-the-real-difference"
          element={
            <GymSupplementsvsClinicalNutritionSupplementsWhatstheRealDifference />
          }
        />
        <Route
          path="/blogs/how-fake-supplements-enter-the-market"
          element={<HowFakeSupplementsEntertheMarket />}
        />

        <Route
          path="/blogs/how-to-launch-your-own-multivitamin-brand-without-manufacturing-facilities"
          element={
            <HowToLaunchYourOwnMultivitaminBrandWithoutManufacturingFacilities />
          }
        />

        <Route
          path="/blogs/from-fssai-to-cdsco-is-the-regulation-of-indian-nutraceuticals-changing-in-2026"
          element={
            <FromFSSAItoCDSCOIstheRegulationofIndianNutraceuticalsChangingIn />
          }
        />

        <Route
          path="/blogs/whey-vs-plant-protein-which-is-more-profitable-to-manufacture"
          element={<WheyVsPlantProteinWhichIsMoreProfitabletoManufacture />}
        />

        <Route
          path="/blogs/how-sports-supplements-are-manufactured-from-ingredients-to-packaging"
          element={
            <HowSportsSupplementsAreManufacturedFromIngredientstoPackaging />
          }
        />

        <Route
          path="/blogs/the-future-of-nutraceutical-manufacturing-in-2026-10-game-changing-trends-brands-cant-ignore"
          element={
            <TheFutureofNutraceuticalManufacturingin202610GameChangingTrendsBrandsCantIgnore />
          }
        />

        <Route
          path="/blogs/the-hidden-costs-of-starting-a-nutraceutical-brand"
          element={<TheHiddenCostsofStartingaNutraceuticalBrand />}
        />

        <Route
          path="/blogs/the-rise-of-white-label-supplements-in-india-why-brands-are-choosing-outsourced"
          element={
            <TheRiseofWhiteLabelSupplementsinIndiaWhyBrandsareChoosingOutsourced />
          }
        />
        <Route
          path="/blogs/how-much-investment-is-required-to-start-a-sports-nutrition-brand"
          element={<HowMuchInvestmentisRequiredtoStartaSportsNutritionBrand />}
        />

        <Route
          path="/blogs/india-leadingcdmo-for-fitness-brands-protein-supplement-manufacturing"
          element={
            <IndiaLeadingCDMOforFitnessBrandsProteinSupplementManufacturing />
          }
        />


        <Route
            path="/blogs/how-much-does-it-cost-to-launch-a-private-label-protein-powder-brand-in-india"
            element={<HowMuchDoesItCostToLaunchAPrivateLabelProteinPowderBrandInIndia />}
          />
          <Route
            path="/blogs/questions-to-ask-before-selecting-a-protein-manufacturer"
            element={<QuestionsToAskBeforeSelectingAProteinManufacturer />}
          />
          <Route
            path="/blogs/why-international-brands-source-nutraceutical-products-from-gujarat"
            element={<WhyInternationalBrandsSourceNutraceuticalProductsFromGujarat />}
          />
          <Route
            path="/blogs/the-psychology-of-buying-supplements"
            element={<ThePsychologyOfBuyingSupplements />}
          />
          <Route
            path="/blogs/top-things-to-know-before-starting-a-multivitamin-tablet-brand"
            element={<TopThingsToKnowBeforeStartingAMultivitaminTabletBrand />}
          />
          <Route
            path="/blogs/what-makes-a-nutraceutical-brand-feel-ready-in-the-customers-mind"
            element={<WhatMakesANutraceuticalBrandFeelReady />}
          />
          <Route
            path="/blogs/why-indian-flavours-can-be-a-growth-advantage-in-sports-nutrition"
            element={<WhyIndianFlavoursCanBeAGrowthAdvantageInSportsNutrition />}
          />
          <Route
            path="/blogs/the-packaging-signals-that-make-a-supplement-brand-look-established"
            element={<ThePackagingSignalsThatMakeASupplementBrandLookEstablished />}
          />
          <Route
            path="/blogs/is-a-supplement-brand-really-passive-income-the-honest-truth"
            element={<IsASupplementBrandReallyPassiveIncome />}
          />
          <Route
            path="/blogs/how-to-validate-a-supplement-idea-before-spending-on-manufacturing"
            element={<HowToValidateASupplementIdeaBeforeSpendingOnManufacturing />}
          />
          <Route
            path="/blogs/how-raw-material-quality-affects-supplement-taste-and-performance"
            element={<HowRawMaterialQualityAffectsSupplementTasteAndPerformance />}
          />
          <Route
            path="/blogs/best-nutraceutical-manufacturing-companies-in-india-for-omega-3-and-sports-supplements"
            element={<BestNutraceuticalManufacturingCompaniesInIndiaForOmega3AndSportsSupplements />}
          />
          <Route
            path="/blogs/best-supplements-to-reduce-stress-and-anxiety-naturally"
            element={<BestSupplementsToReduceStressAndAnxietyNaturally />}
          />
          <Route
            path="/blogs/FSSAI-regulations-for-functional-foods-and-nutraceuticals-2026-update"
            element={<FSSAIRegulationsForFunctionalFoodsAndNutraceuticals2026Update />}
          />
          <Route
            path="/blogs/how-first-time-founders-can-avoid-common-supplement-launch-mistakes"
            element={<HowFirstTimeFoundersCanAvoidCommonSupplementLaunchMistakes />}
          />
          <Route
            path="/blogs/how-flavour-development-impacts-protein-powder-success"
            element={<HowFlavourDevelopmentImpactsProteinPowderSuccess />}
          />
          <Route
            path="/blogs/how-to-launch-a-gym-focused-pre-workout-line-from-formulation-to-shelf-a-step-by-step-guide-for-brands"
            element={<HowToLaunchAGymFocusedPreWorkoutLine />}
          />
          <Route
            path="/blogs/india-does-not-need-more-protein-brands"
            element={<IndiaDoesNotNeedMoreProteinBrandsItNeedsMoreHonestOnes />}
          />

          <Route
            path="/blogs/nutraceutical-manufacturing-KPIs-how-to-track-quality-efficiency-and-compliance-in-production"
            element={<NutraceuticalManufacturingKPIsHowToTrackQualityEfficiencyAndComplianceInProduction />}
          />
          <Route
            path="/blogs/the-hidden-questions-buyers-ask-before-choosing-a-supplement-manufacturer"
            element={<TheHiddenQuestionsBuyersAskBeforeChoosingASupplementManufacturer />}
          />
          <Route
            path="/blogs/the-real-reason-some-protein-brands-feel-trustworthy-and-others-dont"
            element={<TheRealReasonSomeProteinBrandsFeelTrustworthyAndOthersDont />}
          />
          <Route
            path="/blogs/the-rise-of-pre-workout-supplements-how-fitness-brands-can-win-in-2026"
            element={<TheRiseOfPreWorkoutSupplementsHowFitnessBrandsCanWinIn2026 />}
          />
          <Route
            path="/blogs/third-party-multivitamin-manufacturer-in-india-how-to-choose-the-right-partner"
            element={<ThirdPartyMultivitaminManufacturerInIndiaHowToChooseTheRightPartner />}
          />
          <Route
            path="/blogs/what-is-the-cheapest-whey-protein-powder-available-in-india-buyer-guide"
            element={<WhatIsTheCheapestWheyProteinPowderAvailableInIndiaBuyerGuide />}
          />
          <Route
            path="/blogs/what-if-your-supplement-had-a-character-how-brand-storytelling-turns-protein-powder-into-a-hero-product"
            element={<WhatIfYourSupplementHadACharacter />}
          />
          <Route
            path="/blogs/why-72-percent-of-new-supplement-brands-in-india-are-choosing-third-party-manufacturing-in-2026"
            element={<Why72PercentOfNewSupplementBrandsInIndiaAreChoosingThirdPartyManufacturingIn2026 />}
          />
          <Route
            path="/blogs/why-every-fitness-brand-needs-a-pre-workout-manufacturer-not-just-a-formula"
            element={<WhyEveryFitnessBrandNeedsAPreWorkoutManufacturerNotJustAFormula />}
          />
          <Route
            path="/blogs/what-gym-buyers-in-india-are-really-searching-for-in-2026"
            element={<WhatGymBuyersInIndiaAreReallySearchingForIn2026 />}
          />
          <Route
            path="/blogs/how-supplement-manufacturing-actually-works"
            element={<HowSupplementManufacturingActuallyWorks />}
          />
          <Route
            path="/blogs/why-the-same-whey-protein-formula-made-in-two-different-indian-factories-tastes-completely-different"
            element={<WhyTheSameWheyProteinFormulaMadeInTwoDifferentIndianFactoriesTastesCompletelyDifferent />}
          />
          <Route
            path="/blogs/why-some-supplement-brands-sell-faster-than-others"
            element={<WhySomeSupplementBrandsSellFasterThanOthers />}
          />
          <Route
            path="/blogs/why-formulation-is-only-half-the-job-in-nutraceutical-manufacturing"
            element={<WhyFormulationIsOnlyHalfTheJobInNutraceuticalManufacturing />}
          />

          <Route
            path="/blogs/2026-personalized-supplement-trends-what-B2B-brands-should-launch-for-sleep-stress-and-daily-wellness"
            element={<PersonalizedSupplementTrends2026 />}
          />
          <Route
            path="/blogs/how-to-find-high-demand-supplement-ideas-using-market-data"
            element={<HowToFindHighDemandSupplementIdeasUsingMarketData />}
          />
          <Route
            path="/blogs/whey-protein-concentrate-manufacturer-enefits-from-gomzi-lifescience-manufacture"
            element={<WheyProteinConcentrateManufacturerBenefits />}
          />
          <Route
            path="/blogs/private-label-gym-supplements-start-your-own-fitness-supplement-brand"
            element={<PrivateLabelGymSupplementsStartYourOwnFitnessSupplementBrand />}
          />
          <Route
            path="/blogs/why-cheap-manufacturing-is-the-most-expensive-decision-you-will-make"
            element={<WhyCheapManufacturingIsTheMostExpensiveDecisionYouWillMake />}
          />
          <Route
            path="/blogs/niche-vs-mass-market-what-works-better-in-the-supplement-industry"
            element={<NicheVsMassMarketWhatWorksBetterInTheSupplementIndustry />}
          />
          <Route
            path="/blogs/why-pre-workout-recover-and-hydration-products-are-growing-fast"
            element={<WhyPreWorkoutRecoveryAndHydrationProductsAreGrowingFast />}
          /> 

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

        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/order" element={<UserOrder />} />
        <Route path="/invoice" element={<InvoicesList />} />
        <Route path="/invoice/:invoice_id" element={<InvoiceViewPage />} />

        <Route path="*" element={<NotFoundPage />} />

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
