import React, { useEffect, useState } from "react";
import "../assets/css/nutrition.css";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../assets/css/nutrition.css";
import nutritionSendWhatsappMsg from "../assets/js/utils/nutritionSendWhatsappMsg";
import DownloadPdf from "../pdf/white-labelling.pdf";
import { Helmet } from "react-helmet";
import WhatsappHeaderApp from "../components/NutritionWhatsappHeaderBtn";
import WhiteLabellingVideoTestimonials from "./nutrition/white-labelling-video-testimonials";
import CertifiedProduct from "../components/nutrition/certified";

const logos = [
  {
    id: 1,
    imageSrc: "/assets/images/third-party-manufacturing/fassai.webp",
  },
  {
    id: 2,
    imageSrc: "/assets/images/third-party-manufacturing/gmp.webp",
  },
  {
    id: 3,
    imageSrc: "/assets/images/third-party-manufacturing/haccp.webp",
  },
  {
    id: 4,
    imageSrc: "/assets/images/third-party-manufacturing/halal.webp",
  },
  {
    id: 5,
    imageSrc: "/assets/images/third-party-manufacturing/kosher.webp",
  },
];

const certificates = [
  { file: "nutri-certi-1.webp", name: "HACCP", sub: "Hazard Control Point" },
  {
    file: "nutri-certi-2.webp",
    name: "GMP",
    sub: "Good Manufacturing Practice",
  },
  { file: "nutri-certi-3.webp", name: "HALAL", sub: "Halal Certified" },
  { file: "nutri-certi-4.webp", name: "KOSHER", sub: "Kosher Certified" },
  { file: "nutri-certi-5.webp", name: "FSSAI", sub: "Licensed & Approved" },
];

function Home() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const dropdowns = document.querySelectorAll(".mob-has-dropdown > a");

    dropdowns.forEach((item) => {
      item.addEventListener("click", function () {
        const menu = this.nextElementSibling;
        menu.classList.toggle("open");
      });
    });
  }, []);

  const canonicalUrl = window.location.href;

  function openside() {
    document.getElementById("demo").style.width = "100%";
  }

  function sideclose() {
    console.log("Closing side");
    document.getElementById("demo").style.width = "0px";
  }

  return (
    <>
      <Helmet>
        <title>
          Gomzi Lifescience | Best Whey Protein in India | Premium Supplements
        </title>
        <meta
          name="description"
          content="Discover Gomzi Lifescience, your go-to destination for the best whey protein and premium nutrition supplements in India. Boost your fitness journey with our high-quality products tailored for muscle growth, weight loss, and overall health."
        />
        <meta
          name="keyword"
          content="bowelease  Constipation Relief, constipation powder, digestive health, natural constipation relief, regular bowel movements, buy constipation powder, whey protein and, peanut butter peanut butter, peanut butters, why protein, protein in powder, whey product, wayne protein, whey protein protein, whey protein whey, whey in protein, whey whey protein, protein for protein shakes, wea protein, whey protein and protein, mass gainer mass gainer, and creatine, pre gym supplements, protein and whey powder, gainer mass gainer, pre gym supplement, whey in protein powder, protein whey supplements, protein powder whey protein, whey protein powder protein, carnitine and l carnitine, gyms bags, testosterone enhancer, on whey proteins, compressor t shirt, best of protein supplements, protein powder is best, protein powder the best, protein supplements best, protein supplement best, price peanut butter, best protein powders, gym bags for men, gym bag for man, gym bags for man, male gym bag, workout bags for men, gym bag for mens, price of peanut butter, workout bag mens, eaa amino acid, bodybuilders photos, body bodybuilding, images of bodybuilding, images bodybuilding, bottles and shakers, bottle shaking, shaker bottle, protein shaker, fat burns, shirts for gym, t shirts for the gym, gym fitness t shirt, shirts for the gym, shirt for gym, whey protein best in india, best indian whey protein, best whey protein supplements, isolate whey protein isolate, protein whey isolate, protein whey protein isolate, good whey protein, whey protein whey isolate, best protein whey protein, best protein whey, whey protein isolate protein, good whey proteins, whey isolate whey protein, whey iso protein, whey protein best, whey protein best whey, best whey proteins, supplement shop near me, women's protein supplement, men's protein powder, protein powders for women, whey pro isolate, best whey protein supplement, whey protein with isolate, whey isolate or protein, isolate protein and whey protein, whey protein the best, protein powder for females, protein isolate whey, female protein powder, nutrition supplement store near me, protein powder for female,
           protein supplement women, whey and whey isolate, whey isolate and whey protein, protein isolate or whey, protein or isolate, protein iso whey, near me supplement store, protein powder for ladies, women and protein powder, women protein supplement, protein powder ladies, supplement store close to me, women's protein supplements, isolate or whey protein, whey protein and whey isolate, protein in whey protein isolate, protein in a peanut, gym clothes for men, nutritional supplements store near me, nutritional supplement store near me, near me supplements store, whey protein or isolate, gym belts, male gym wear, gym clothes for man, gym men wear, men's gym clothes, peanuts for protein, workout clothes men, gym apparel for men, fitness men's clothing, advantages of peanut butter, man in gym clothes, fat burning, fitness wear men, gym men clothing, gym dress man, workout gear men, gym wear male, fitness clothing men, gym apparel men, mens exercise clothing, gym clothes men's, gym clothes men, gym clothing for men, workout wear for men, men's exercise clothes, men in gym wear, workout clothes for men, men's exercise clothing, near me nutritionist, fitness clothing for men, fitness clothes for men, workout clothes for man, gym clothes for mens, workout clothing for men, women and protein shakes, top whey protein india, best indian protein powder, best protein supplements in india, india's best protein powder, indian best protein supplement, best indian protein supplement, good whey protein india, protein powder best in india,
           top whey protein in india, best protein supplement india, india top whey protein, best pre workout protein supplement, protein supplement for men, protein supplements men, best protein drink india, protein powders for men, best body supplements in india, best protein powder india, men's protein supplements, best pre gym supplement, protein powder for man, shaker, gym tshirt for men, gym wear tshirts for men, pre workout top rated, shakers, gym clothing ladies, top rated pre workout, gym clothes for ladies, shirts for gym men, gym wear ladies, protein mass gainer, protein and mass gainer, mass gaining protein, protein for mass gainer, weight gain powder, preworkout best, best pre workout supplement for bodybuilding, weight gaining powder, weight gainer and protein powder, protein powder supplements, protein powder supplement, mass gainer and protein, protein powder and supplements, gainer mass protein, weight gain protein supplements, protein gainer mass, protein and supplements, and protein supplements, protein powders and supplements, supplements and protein, proteins and supplements, price whey protein, protein whey price, whey protein with price, protein supplements on, best creatine monohydrate, protein drink supplements, weight gain protein shake powder, gym shaker, protein food supplement, best creatine monohydrate supplements, peanut butter for protein, protein shakes and supplements, whey protein on price, peanut butter is protein, protein foods peanut butter, best creatine monohydrate supplement,
           best monohydrate creatine, whey on protein price, on protein supplements, price of on whey protein, compression tshirt, best of peanut butter, big muscles nutrition india, best mass gainer, pre workout supplement, weight increase powder, fat burner for man, fat burn for men, fat burning for men, fat burning for man, increase weight powder, mass gainer 1 kg, clothes of gym, powder weight gain, powder to increase weight, mass gainer 1kg, supplement bcaa, bcaa supplement, fat burner for men, fat burners for men, protein powder shaker bottle, clothes for gym, protein shaker bottle, protein shake bottles, shaker protein bottle, shaker bottle for gym, shaker bottle for protein, protein shake bottle mixer, protein shaker bottle mixer, protein drink shaker bottle, protein powder shake bottle, protein powder bottle shaker, protein shake shaker bottle, whey protein 1kg, bottle protein shaker, bcaa dietary supplement, gymming clothes, clothes for the gym, gym accessories, gym clothes, shoes bags, shoes with bag, shoe bags, g y m clothing, food for fat burner, sports bag, bags for shoes, shoes in bag, shoe bag, gym bag for women, muscle mass gain diet plan, gym outfit men, best protein powder for weight gain, supplements with creatine, pre workout drink, muscle gain protein, best protein powder for gaining weight, best weight gain protein powder, best protein powder for weight gaining, weight gaining protein powder, best protein supplement for weight gain, best protein powder gain weight, weight gain best protein powder, best protein powder to gain weight, weight gain powder protein, best weight gain protein powders, best weight gainer protein shakes, weight gain protein powder best, best protein supplement for gaining weight, best weight gainer, pre workout supplement drink, best protein powder to increase weight, good protein powder to gain weight, best weight gainer protein powder,
            gain muscle mass protein, muscle build protein, protein powder best for weight gain, bodybuilding supplements shop near me, bodybuilding supplement stores near me, best weight gain, best protein supplement to gain weight, good weight gainer protein shakes, gym supplement store near me, gym supplement shop near me, top weight gainer, top weight gainers, protein powder for weight loss, protein shakes best for weight gain, protein and weight loss powder, good weight gain protein shakes, protein supplement for weight loss, pre training drink, protein muscle builder, workout supplements creatine, weight loss protein supplements, protein powder for fat loss, protein supplement weight loss, best weight gaining protein shakes, protein supplements weight loss, fat loss protein supplements, best protein shakes gain weight, bcaa powder, workout supplements store near me, body supplement shop near me, supplement with creatine, gym shaker bottle, plant protein powder, workout supplement creatine, muscle building protein, protein for muscle gain, fat loss protein powder, protein powder in weight loss, pre exercise drink, muscle supplements creatine, tablet weight loss, muscle supplement creatine, best protein shakes for gaining weight, bodybuilding supplement shop near me, gym supplements creatine, creatine gym supplement, weight loss and protein powder, proteins for muscle gain, protein supplements for weight loss, creatine gym supplements, powder weight loss, weight loss powder protein, protein supplements and weight loss, protein supplement and weight loss, protein to gain muscles, best weight gain protein shakes, weight loss with protein powder, creatine supplement, bcaa benefits, bodybuilding supplement store near me,
             sports supplements store near me, protein powder shop near me, build muscle protein, lose weight powder, peanut butter 1kg, protein powder and weight loss, protein powder store near me, workout supplement store near me, power mass gainer, protein supplement shop near me, creatine in supplements, protein powder with pea protein, protein powders and weight loss, protein supplements to lose weight, weight losing powder, powder for weight loss, muscle building and protein, protein to muscle growth, protein whey standard gold, bcaa advantage, weight gainer women's, weight gainer woman, creatine as supplement, weight reduction powder, gym outfits for ladies, protein for muscle mass gain, lose weight with protein powder, weight loss powder, protein supplement for vegetarians, vegan protein powder, protein supplements vegetarian, best protein muscle gain, best muscle gainer protein, best protein for muscle gaining, best protein gain muscle, best muscle mass protein, best protein muscle gainer, gym supplements, supplements gym, wait gainer shakes, weight gainer shakes, top protein for muscle building, fat burner for women, protein supplement vegetarian, protein vegetarian powder, weight gainer shake, fat burner for ladies, best muscle builder protein, best protein muscle builder, fat burning for women, fat burn for women, fat burn for woman, best protein, best protein for gain muscle, protein supplements vegan, eaa supplements, whey isolates, eaa supplement, weight gain shake, whey protein one scoop, protein in 1 scoop of whey protein, one scoop whey protein, what is the whey protein, 1 scoop whey protein,
              what is whey protein, whey isolate protein on, on mass gainer, gold whey protein, gold protein whey, weight gaining shakes, protein isolate on, creatine monohydrate cost, isolate protein on, whey protein one scoop protein, weight gaining powder for women, female weight gain powder, weight gainer powder for women, weight gain powder for women, weight gainer powder for female, what are whey protein, best creatine monohydrate in india, on whey isolate, weight gain powder for females, weight gain powder female, what are whey products, weight gain powder for ladies, weight gainer for ladies, whey protein for what, women's weight gain powder, weight gainer for woman, weight gainer for women, 1 scoop of on whey protein, what is protein whey, weight gainer for females, price of creatine monohydrate, testosterone supplements, supplement testosterone, one scoop of whey protein, supplements for testosterone, weight gainer for female, gym bodybuilding, what.is whey protein, shakes for weight gain, body building in gym, testosterone hormone supplement, best peanut butter in india, best protein for building muscle, ladies weight gain powder, shake for weight gain, best source for protein for vegetarians, ladies weight gainer powder, weight gainer for men, best muscle mass gain supplement, supplements for gaining weight, gym protein powder, gain weight supplement, muscle mass gainer, weight gainer food supplement, best products for fat loss, best fat loss products,
               protein gym powder, supplement weight gainer, weight gainers men, supplements weight gain, increase weight supplement, weight gainers for men, best muscle gainer supplement, gain weight supplements, weight gaining supplements, best product for fat loss, best muscle enhancing supplements, best food supplement for muscle gain, best peanut butter for weight gain, top supplements to build muscle, best mass gainers india, best mass gainer in india, best workout supplement for muscle gain, best products for muscle gain, best workout supplements for muscle gain, best product for muscle gain, best peanut butter for weight gaining, gain weight with supplements, whey protein isolate best, best supplements for gaining muscle, india best mass gainer, gym protein, isolate protein best, supplements that gain weight, best weight loss products, indian best mass gainer, top weight loss products, best products for lose weight, good weight loss products, weight gainer for man, best products for weight loss, best multiple vitamin, best test booster, weight gain food supplements, weight loss best products, good weight loss product, best product for lose weight, good product for weight loss, best products for losing weight, best losing weight products, best product for losing weight, protein shops, top rated whey protein isolate, best creatine supplement in india, best peanut butter for gaining weight, good products for weight loss,protein bar chocolate, weight gain diet supplements, best multiple vitamins, best creatine powder in india, accessories for gym men, best product weight loss, whey isolate,
               best peanut butter india, gym accessories for guys, protein bars chocolate, outfits for gym, weight gain for males, peanut butter for weight gain, whey protein one scoop nutrition, best peanut butter to gain weight, best protein isolate whey, best whey protein powder for building muscle, best protein powder for gaining muscle mass, best protein powder to gain muscle mass, best whey protein powder for muscle building, best protein supplement for weight loss, supplements for weight gain, protein powder weight gain, best protein supplement to gain muscle, gaining weight supplements, best protein supplement to build muscle, best protein powder for women, weight gainer protein, protein supplement to gain weight, protein powder gain weight, protein powder weight gainer, best protein whey for building muscle, best protein powder for gain muscle, best protein powder for ladies, best protein powder weight loss, weight gain whey protein, best protein powder for muscle building, whey protein gain weight,
                protein powder price, best whey protein build muscle, which are the best protein powder, protein powder rate, good protein powder for muscle gain, best whey protein for gaining muscle, which protein powder is good, protein supplement for weight gain, protein supplements for gaining weight, best protein supplement for muscle growth, best protein supplements to build muscle, protein powder best for weight loss, best protein powder for muscle gain, price of protein powder, whey protein to gain weight, which are the best protein powders, good muscle gain supplements, which best protein powder, best whey protein muscle growth, best whey protein for building muscles, weight gain protein, best whey protein for muscle building, top whey protein for muscle building, best protein powder muscle growth, which protein powder is best, best whey protein to build muscle, best whey protein powder to build muscle, best protein powder for muscle mass gain, best whey protein powder to gain muscle, best muscle gaining protein powder, good whey protein for muscle building, best whey protein muscle building, best whey protein to gain muscle, protein supplements price, best protein drink to gain muscle, muscle gain best protein powder, best protein supplements for weight loss, which is best protein powder, best whey protein muscle gain, weight gaining whey protein, weight gain protein drink, best muscle gain protein supplement, weight gainer and protein, best muscle gain whey protein, cost of protein powder, best protein supplement for women, best muscle mass gainer supplement, whey protein and weight gainer, best protein powder for building muscle, products for fat loss, gaining weight protein powder, best protein powder muscle gain, weight gainer whey protein, supplements weight gainer, best muscle gainer protein powder, which protein powder best, protein supplement weight gain, best protein powders for muscle gain, protein supplements weight gain, best muscle growth protein powder, best protein powder for weight loss, good muscle building protein powder, protein in weight gainer, protein powder and weight gain, weight gain and protein powder,
                good protein powder for muscle building, protein powder best for women, best protein powder for fat loss, price for protein powder, best whey protein for muscle growth, which is best protein supplement, whey protein best for muscle gain, best whey protein for muscle gain, protein supplement price, best protein powder build muscle, protein powder to increase weight, best whey protein for building muscle, best protein supplements for muscle growth, best protein supplements for women, good protein powder to build muscle, best protein powder for muscle growth, weight gainer protein drinks, which protein powder is the best, best whey muscle building protein, best protein supplements weight loss, weight gainer with protein, which protein supplement is best, which protein supplement is the best, weight gain with protein, protein powders to gain weight, protein supplements gain weight, protein supplements to gain weight, which protein powders are the best, weight loss product, weight loss supplement, mass gainer 5kg, weight loss supplements, best whey protein for building muscle mass, best fat burner for men, best muscle mass gaining supplements, best protein powder for gaining muscle, best bodybuilding supplements for mass, whey protein for weight gain, best supplement for gain muscle, protein drink for weight gain, protein whey weight gain, products for lose weight, best protein powder for females, best supplement for muscle gain, best protein powders for fat loss, good supplements for muscle gain, best protein supplement for fat loss, best supplement for muscle gaining, proteins for weight gain, protein powder increase weight, best supplements for muscle mass gain, protein supplements and weight gain, best supplement before workout, best mass muscle building supplements, good weight loss protein powder, best lose weight protein powder, weight loss weight loss supplements,
                best whey isolate, best supplements muscle, supplements lose weight, best protein powder for building muscle mass, best whey protein to gain muscle mass, best protein powder to build muscle mass, weight gain protein drinks, best fat loss protein powder, protein whey for weight gain, best supplement gain muscle, best muscle increase supplement, best bodybuilding supplements for mass gain, best supplement for muscle mass gain, top isolate whey protein, protein weight gainer shakes, best supplements gain muscle, protein drinks for weight gain, best fat burner men, protein and weight gain shakes, best muscle gain supplement, protein weight gainer shake, good protein powders for muscle gain, weight gain and protein shakes, best protein powder women, best protein powder for female, whey protein for gaining weight, best isolate protein, creatine flavoured, flavoured creatine, creatine flavors, best muscle growth supplements, supplements best for muscle gain, best pre workout supplement, pre workout best supplement, weight loss products, best supplements for pre workout, best protein drinks for women, protein drinks gain weight, best fat burning supplements for men, protein shakes to put on weight, best supplement pre workout, best protein supplement women, best protein supplements women, women protein powder, supplement for lose weight, best protein shakes women, diet supplements to lose weight, best multivitamin tablets for women, a weight loss supplement, weight reduction products, loss weight supplement, fat loss medicine, weight control supplement,
                wheybolic protein benefits, weight loss diet supplements, best protein drink for women, protein whey gain weight, best fat burning for men, best protein supplements to gain muscle, good women's protein powder, best protein supplement for gaining muscle, weight gain with whey protein, best creatine to gain muscle, best woman protein powder, mass gainer 5 kg, best women protein powder, creatine pre workout or post, protein shakes increase weight, protein powder and fat loss, weight reduce supplement, weight control supplements, lose weight supplements, weight reducing supplements, protein isolate best, best creatine muscle gain, protein shakes for weight gain, best fat burner supplements for men, best protein powder lose weight, protein shakes and weight gain, protein weight gain shakes, flavored creatine, bcaa price, best protein mixes for weight loss, whey protein under 1000,
                 high protein peanut butter, peanut butter with highest protein, supplements for lose weight, best ladies protein powder, whey protein to increase weight, protein drinks to gain weight, women's protein powder, price of bcaa, side effects of mass gainer, weight loss and supplements, best iso whey protein, diet supplement for weight loss, weight loss food supplements, on whey protein 1kg, best creatine to gain muscle mass, diet supplements for weight loss, which creatine best, loss weight products, big muscle mass gainer, on 1kg whey protein, protein shakes and weight loss, best women's protein supplement, best rated pre workout supplement, weight control products, mass gain side effects, best creatine for muscle growth, which protein shakes are the best, creatine post workout or pre, gym bags ladies, whey protein benefits, diet supplements weight loss, weight loss healthy supplements, big muscle pre workout, bag for gym women, gym kit men, gym bags for ladies, top rated pre workout supplements, best female protein powders, female gym bag, best brand creatine, protein drink for weight loss, protein drinks weight loss, on creatine monohydrate, on monohydrate creatine, protein shakes for weight loss, protein in protinex powder, best brands creatine, protein drinks for weight loss, weight loss dietary supplements, best time to take shilajit, mass gainer side effects, protein shakes for fat loss, protein shake for weight loss, best muscle building creatine, protein drink weight loss, ladies gym bags, protein shake for fat loss, sugar free protein supplements, protein shakes best for women, healthiest protein powder for weight loss, gym bag for woman, weight loss shakes with protein,
                 protein shakes lose weight, weight loss herbalife products, 1 tsp peanut butter calories, ayurvedic weight gainer, medicines for fat loss, proteins chart, best bags for laptop, whey meaning hindi, 1 tbsp peanut butter nutrition, protein milk shake for weight loss, weight loss with protein shakes, protein drink and weight loss, gym bags for women, protein shake for losing weight, dietary supplement for weight loss, dietary supplements for weight loss, which creatine is best, lose weight on protein shakes, diet chart for gym muscle gain, whey concentrate vs whey isolate, protein shake in weight loss, pre workout supplement side effects, protein shake and weight loss, protein x protein powder, 1 spoon peanut butter protein, spoon meaning in hindi, muscle growth supplements, whey isolate protein powder, whey isolated protein powder, whey isolate powder, whey protein powder price, best supplements before workout, creatine protein, fastest weight gainer, muscle mass supplement, protein powder isolate whey, whey protein powder cost, wave protein powder price, muscle booster supplements, whey protein powder rate, cost of whey protein powder, mass muscle building supplements, protein powder with whey protein isolate, muscle mass supplements, gym powder, muscle gain supplement, supplement for muscle, grow muscle supplements, whey isolate 1kg, muscle gain supplements, building muscle with supplements, supplements to gain muscle, whey isolate protein 1kg, weight loss protein powder, supplements that build muscle mass, supplements for gain muscle,
                 building muscle supplements, build mass supplements, weight gainer fast, fast weight gainer, protein isolate 1kg, isolated whey protein powder, protein powder iso whey, muscle mass building supplements, whey protein isolate 1 kg, best pre workout supplements, protein shakes whey isolate, protein store near me, whey protein isolate 1kg, muscle building supplements, isolate protein 1kg, 1kg whey isolate, muscle build supplement, muscle growing supplements, 1kg whey protein, gym strap, muscle builder supplement, best supplements creatine, protein isolate powder, best supplement for pre workout, build muscle mass supplements, best creatine supplement for bodybuilding, best creatine supplement, woman protein powder, good creatine powder, peanut butter price 1kg, top pre workout supplement, protein powder near me, muscle gain tablets, creatine best supplement, best supplement creatine, protein whey isolate powder, best supplement with creatine, best pre workout products, best supplements pre workout, supplements for building muscle mass, weight losing protein powder, wristband support, protein whey 1kg, whey hydrolysate protein, bcaa uses, creatine post or pre workout, peanut butter 1 kg price, hydrolysate whey protein, protein shake whey isolate, best creatine in india, peanut butter 1kg price, side effects fat burner, creatine supplement best, muscle builder pills, protein bars price, muesli 1 kg, creatine supplements best, top creatine supplement, mens sports bag, sports bag for men, best multivitamin tablets women, best rated creatine supplement, fat loss pills that really work, best multivitamin tablets recommended by doctors, weight loss supplements for women that actually work, best creatine workout supplement, sports bag for man, straps for gym, protein supplements near me, duffle gym bag, nutrition shop near me, sports bags for men, india best creatine, sports bag man, sports bag men, joggers gym, side effects of fat burner, gym joggers, top creatine supplements, gym bag duffle bag, protein bar price, whey protein hydrolyzed, hydro whey protein, hydra whey protein,
                 gym duffle bag, hydrolyzed whey protein, nutrition store close to me, protein whey hydrolysate, hydrolyzed protein whey, creatine pre or post workout, duffle bag for gym, duffel bag for gym, gym bags for woman, what is bcaa, muscle mass, ladies workout bag, on pre workout, best creatine india, gym bag ladies, benefits to protein powder, duffle bags for gym, testosterone supplements for men, how protein powder are made, testosterone supplement for men, benefits of creatine powder, men's supplements for testosterone, creatine before workout or after, best sports shop near me, fat burner side effects, protein powders near me, nutritionist shop near me, bcaa what is it, on serious mass gainer, gym duffle bags, protein testing, bcaas what is it, best sports store near me, vitamins & supplements, protein powder advantages, creatinine meaning in hindi, body building hd photos, supplements nutrition, high protein foods to gain weight, how protein powders are made, creatine before or after a workout, creatinine protein, muscle builder foods, weight gainer meaning in hindi, bcaa side effects, nutrition and supplement, boost powder, whey protein 2kg, best supplements for women for weight loss, protein powder high protein,
                 best brand of whey protein, best protein whey brand, good whey protein brand, whey protein best brand, whey protein which brand is best, high in protein powder, best brands for whey protein, protein whey, gainer price, best weight gainer for male, high protein protein powder, weight loss protein supplements for women, best brand whey protein, gainer with protein, lean mass gainers, high protein powder, best brand for whey protein, high protein powders, best brands whey protein, gaining protein, belly fat burners, best weight loss supplements for woman, best weight gainer for men, best women supplements for weight loss, best female weight loss supplements, weight gainer creatine, best supplements for weight loss for women, high protein supplement powder, best supplements for women fat loss, best supplements for weight loss women, top weight gainers for men, good whey protein brands, best whey protein brands, best female fat loss supplement, best weight loss supplements for female, best women's supplement for weight loss, best supplement for female weight loss, best supplements for weight loss in women,
                 top rated weight loss supplements for women, weight gain powder for men, best weight loss product for women, best weight loss products for women, best supplements for weight loss female, best fat loss supplement for women, best weight gain for men, best whey protein in the world, best weight gainer for women, protein powder for women weight loss, belly fat burner, how to protein powder, protein powder for women for weight loss, weight loss protein powder for female, best protein whey brands, protein supplements for women weight loss, whey protein top brands, best fat loss supplements for women, best women's fat loss supplements, creatine protein powder price, best weight loss supplement women, best supplements for women weight loss, best weight loss supplements for women, best female weight loss supplement, best brands of whey protein, best weight loss supplements women, best women's weight loss supplements, weight loss protein powder for females,
                 best weight loss supplements for females, best fat loss supplements for females, best weight loss supplement for women, protein powder under 1000, creatine powder price, multivitamin supplement, best women's weight loss products, protein powder for female weight loss, best women's supplements for weight loss, protein supplement for women weight loss, best weight gainer for females, best supplements for female weight loss, protein powder for women to lose weight, female weight loss protein powder, 1 kg whey protein, lean weight gainers, worlds best whey protein, protein drink, best female weight gainer, how much protein in peanut, muscle fit gym, protein powder for weight loss female, supplements near me, world's best whey protein, t shirt for gym, is whey protein good for you, top whey protein brands, how to use protein shaker, protein shaker how to use, mass gainer lean, lean mass gainer, creatine for weight gain, gym men shirts, is whey protein safe, protein to drink, top 10 whey protein brands in world, best female supplements for weight loss, women's weight gain tablets, shirts for men gym, protein powder for women losing weight, world best whey protein, is protein whey good for you,
                 women's protein powder to lose weight, t shirt black, fitness gym muscle, best supplements for women's weight loss, how to have protein powder, how use protein powder, what is whey, natural protein powder, how to use protein supplement, 1 tablespoon of peanut butter protein, protein 1 tbsp peanut butter, fitness store near me, protein peanut butter 1 tbsp, protein in mango, whey concentrate, nutrition powder, best protein powder whey, fat burner food supplement, which is best whey protein powder, whey protein best powder, supplements for fat loss, supplement fat loss, supplements for losing fat, top whey protein powder, fat reducing supplements, isolate protein powder, protein powders to build muscle, mass gainer price, protein powder to build muscle, lose fat supplements, protein powder to gain muscle mass, whey protein for fat loss, protein powder for muscle gain, pre workout powder, protein supplement for muscle gain, burn fat supplement, muscle gainer protein powder, fat burning foods supplements, gain protein, raw protein, gainer protein, concentrate whey, whey protein for weight loss, gain muscle protein powder, gainer mass price, protein powder for muscle growth, whey protein with weight loss, protein powder with isolate, mass gainer protein supplement, protein mass gainer powder, mass gainer and protein powder, protein powder for muscle mass gain, fat reduce supplement, protein muscle building powder, protein powder for gaining muscle, price of mass gainer, protein powders for muscle gain, best protein shake whey, fat reduce supplements, protein supplements muscle gain, mass gain price, protein powder mass gainer, lose fat supplement, mass gainer rate, mass gainer on price, fat reduction supplements, which whey protein powder is best,
                 muscle growth protein powder, fat loss diet supplements, fat burning diet supplements, fat burning food supplements, mb whey protein 2kg, mass gainer protein powder, muscle building protein powder, best whey protein powder, supplements for fat burn, pre workout supplement powder, protein powder for building muscle mass, supplements for fat burning, which is best whey protein, which whey protein best, which whey protein is the best, cheap protein whey, which whey protein is better, protein whey 2kg, 4kg whey protein, protein 2kg whey, post workout, preworkout powder, workout post, bcaa protein, cheap whey protein, fat loss supplements, 1kg protein powder, fat burner supplement, protein whey weight loss, burn fat burner supplement, weight gainer powder for male, fat burning dietary supplements, which is the best whey protein supplement, muscle gaining protein powder, fat burner dietary supplement, low cost whey protein, whey protein & weight loss, supplements for burning fat, cheapest whey protein, whey protein cheapest, cheapest protein whey, fat loss whey protein, muscle recovery.in, whey protein affordable, muscle protein, gym backpack, fat burning supplements, fat burner supplements, which peanut butter is best for weight gain, whey protein in weight loss, gym bottle shaker, best pre workout supplement india, best pre workout supplements in india, protein whey lose weight, protein supplements to gain muscle, weight gain powder for male, protein shake for weight gain female, whey protein shop near me, gym bags backpack, peanut butter as protein, top rated whey protein powder, best pre workouts in india, weight gain protein powder for women, weight loss with whey protein,
                  weight gainer protein powder for women, protein powder for female weight gain, protein whey and weight loss, protein supplements for women weight gain, cheapest price whey protein, whey protein fat loss, protein for women, protein powder for weight gain for women, best pre workout in india, backpacks for gym, wrist protector for gym, whey protein and weight loss, whey protein for losing weight, whey protein unflavoured, supplements for weight gain for women, protein in a peanut butter, protein of peanut butter, whey protein 4kg, cheapest on whey protein, 4kg protein whey, big muscle whey, 5kg whey protein, protein peanut butter, nearby supplement shop, whey protein or whey isolate, which best whey protein, best creatine for men, weight gain supplements women, supplement shops near, protein powder for weight gain for females, gym bag backpack, supplements shop nearby, nearest supplement store, protein powder for weight gain women, 4 kg whey protein, supplement for weight gain for female, women's weight gain supplements, best brand peanut butter, gym backpack bag, supplements for weight gain women, weight gainer supplement for female, supplement for women's weight gain, whey 5 kg protein, whey protein 5kg, best multivitamin for men in india, nearby supplement store, whey protein 5 kg, whey protein vs isolate protein, iso protein vs whey protein, nutritional supplements near me, whey protein vs whey isolate, whey protein description, weight gain supplements for woman, protein of muscle, protein whey 5kg, supplement shops nearby, protein whey 5 kg, backpack for gym, full sleeve tshirt for gym, 5 kg whey protein, near supplement shop, weight gain supplements for women, whey vs whey isolate, whey protein and losing weight, peanut butter chocolate flavour, gym suit for men, full sleeve t shirts for gym, protein for woman, nutrition supplements near me, my fitness whey protein, weight gaining protein shakes for women, gym bag women's, whey vs isolate protein, pea protein supplement, near supplement store, weight gain supplements for females, mens gym wear, testosterone booster ayurveda, gym bags women's,
                  weight gain banana, dietary supplement near me, chocolate protein powder, sports shop near by me, diet supplements near me, best multivitamins for men india, booster testosterone, how to fat burn, supplement shop near, whey isolate vs protein, whey protein vs whey protein isolate, women's protein powder for weight gain, protein powder for weight gain woman, which best peanut butter, nutrition in 100g oats, protein shakes for weight gain female, weight gain by banana, which is best peanut butter, isolate vs whey protein, weight gain protein shakes for women, isolate whey protein vs whey protein, weight gain protein powder women, big muscles whey, peanut butter content, fat burner workout, protein powder for women to gain weight, whey isolate vs whey, women protein powder for weight gain, gain weight protein shakes for women, whey isolate vs whey protein, whey protein isolate vs whey protein, protein shake for women to gain weight, protein shake to gain weight female, whey isolate vs, how do you use protein powder, difference between whey protein and whey isolate, difference between whey protein and whey isolate protein, which is the best peanut butter, peanut butter for weight loss, gain weight with creatine, guest snacks bar, protein shakes for female weight gain, creatine in body, a body of mass 5kg, 2 spoon peanut butter calories, watermelon calories 1kg, 1 tsp peanut butter protein, whey protein mean, protein shakes to gain weight female, myfitness chocolate peanut butter, 100 grams protein, top peanut butter brands, difference between whey and isolate protein, do peanut butter gain weight, peanut butter best brand, sports store coimbatore, 250 ml to grams, protein shakes for weight gain women, whey protein means, world no 1 nutrition company in india, fitness gym kolkata, banana for weight gain, whey vs plant protein"
        />
        <meta
          property="og:image"
          content="https://www.gomzilifesciences.in/assets/images/logo/nutrition-logo.webp"
        />
        <meta
          name="google-site-verification"
          content="Jtkzxut7_V1SD1dhaJP6yr85918OjJSoq-roIEZNsfQ"
        />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />

        <link rel="preconnect" href="https://connect.facebook.net" />
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1144699046738070');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1144699046738070&ev=PageView&noscript=1"
          />`}
        </noscript>
        <link
          rel="preload"
          href={`${process.env.PUBLIC_URL}/assets/images/nutrition/nutrition-banner-inner-14.webp`}
          as="image"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J50WNKGW38"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J50WNKGW38');
          `}
        </script>
        <script>
          {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wbdpmwgoji");
          `}
        </script>
      </Helmet>

      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about all Gomzi Lifescience Products. "
        }
        options={{ pageRef: true }}
      />

      <div className="my-auto">
        <section className="header-main"></section>
      </div>
      <div className="container-fluid main p-0 m-0 homePage-header-position ">
        <div className="homePage-header-position-div ">
          <div className="d-lg-block d-none log-new">
            <Link to="/">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "../assets/images/logo/gomzi-life-science-logo.webp"
                  }
                  width="100%"
                  alt="Fg Group"
                />
              </div>
            </Link>
          </div>
          <div className="d-lg-none d-sm-block t0 log1-new">
            <Link to="/">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "../assets/images/logo/gomzi-life-science-logo.webp"
                  }
                  width="100%"
                  alt="Fg Group"
                />
              </div>
            </Link>
          </div>

          <div className="center-menu d-lg-block d-none">
            <ul className="center-menu-list">
              <li>
                <a
                  className="inter-500"
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("process")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  How It Works
                </a>
              </li>

              <li className="has-dropdown">
                <a href="#" className="inter-500">
                  Our Products{" "}
                  <span className="dd-arrow">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </a>
                <ul className="dd-menu">
                  <li>
                    <a
                      className="inter-500"
                      href="/third-party-manufacturing/protein-powder"
                    >
                      Whey Protein
                    </a>
                  </li>
                  <li>
                    <a
                      className="inter-500"
                      href="/third-party-manufacturing/sports-nutrition-supplements"
                    >
                      Sports Nutrition
                    </a>
                  </li>
                  <li>
                    <a
                      className="inter-500"
                      href="/third-party-manufacturing/multivitamins-tablet"
                    >
                      Multivitamin Tablets
                    </a>
                  </li>
                </ul>
              </li>

              <li className="has-dropdown">
                <a href="#" className="inter-500">
                  Why GLS{" "}
                  <span className="dd-arrow">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </a>
                <ul className="dd-menu">
                  <li>
                    <a
                      className="inter-500"
                      href="#certification"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("certification")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Certifications
                    </a>
                  </li>
                  <li>
                    <a className="inter-500" href="/aboutus">
                      About Us
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  className="inter-500"
                  href="/read-more-white-labelling-blogs"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  className="inter-500"
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("faq")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="side" id="demo">
            <span className="closebtn" onClick={sideclose}>
              ×
            </span>
            <Link
              to="/nutrition"
              className="homePage-header-position-div-mb-mt"
            >
              <img
                className="lazy"
                src={
                  process.env.PUBLIC_URL +
                  "../assets/images/logo/gomzi-life-science-logo.webp"
                }
                width="40%"
                alt="Fg Group"
              />
            </Link>

            <ul className="mobileUserInfo aa">
              <li>
                <a
                  className="inter-500"
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("process")
                      .scrollIntoView({ behavior: "smooth" });
                    sideclose();
                  }}
                >
                  How It Works
                </a>
              </li>

              <li className="mob-has-dropdown">
                <a className="inter-500">
                  Our Products{" "}
                  <span className="dd-arrow">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </a>
                <ul className="mob-dd-menu">
                  <li>
                    <a
                      className="inter-500"
                      href="/third-party-manufacturing/protein-powder"
                      onClick={sideclose}
                    >
                      Whey Protein
                    </a>
                  </li>
                  <li>
                    <a
                      className="inter-500"
                      href="/third-party-manufacturing/sports-nutrition-supplements"
                      onClick={sideclose}
                    >
                      Sports Nutrition
                    </a>
                  </li>
                  <li>
                    <a
                      className="inter-500"
                      href="/third-party-manufacturing/multivitamins-tablet"
                      onClick={sideclose}
                    >
                      Multivitamin Tablets
                    </a>
                  </li>
                </ul>
              </li>

              <li className="mob-has-dropdown">
                <a className="inter-500">
                  Why GLS{" "}
                  <span className="dd-arrow">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </a>
                <ul className="mob-dd-menu">
                  <li>
                    <a
                      className="inter-500"
                      href="#certification"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("certification")
                          .scrollIntoView({ behavior: "smooth" });
                        sideclose();
                      }}
                    >
                      Certifications
                    </a>
                  </li>
                  <li>
                    <a
                      className="inter-500"
                      href="/aboutus"
                      onClick={sideclose}
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="inter-500"
                  href="/read-more-white-labelling-blogs"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="inter-500"
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("faq")
                      .scrollIntoView({ behavior: "smooth" });
                    sideclose();
                  }}
                >
                  FAQ
                </a>
              </li>

              <Link to="">
                <a
                  href="https://wa.me/918320077993"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="homePage-btn cta"
                >
                  Get Free Quote
                </a>
              </Link>
            </ul>
          </div>

          <span
            className="d-lg-none d-sm-block btnn cp homePage-header-position-div-fts-color"
            onClick={openside}
          >
            ☰
          </span>

          <div className="login d-lg-block d-none">
            <ul>
              <a
                href="https://wa.me/918320077993"
                target="_blank"
                rel="noopener noreferrer"
                class="homePage-btn cta"
              >
                Get Free Quote
              </a>
            </ul>
          </div>
        </div>
      </div>

      <section>
        {" "}
        <div className="homepage-hero-section ">
          <div className="homepage-hero-banner">
            <div className="homepage-hero-overlay"></div>
            <div className="homepage-hero-content">
              <div className="homepage-badge">
                <p class="homepage-hlabel barlow-condensed-semi">
                  Private Label Supplements · Surat, Gujarat
                </p>
              </div>

              <h1 class="homepage-hh barlow-condensed-semi">
                Launch Your <span>Own</span> <br /> Supplement Brand
              </h1>
              <p class="homepage-hsub inter-regular">
                GMP-certified manufacturing, custom packaging, and a D2C-ready
                website - one partner, 15-20 day delivery, 50 KG MOQ.
              </p>
              <div class="homepage-hbtns">
                <a
                  href="https://wa.me/918320077993"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="homepage-bp barlow-condensed-semi "
                >
                  Book Your Free Roadmap
                </a>

                <button
                  className="homepage-bg barlow-condensed-semi"
                  onClick={() => {
                    document
                      .getElementById("product-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Browse Product Catalog
                </button>
              </div>

              <p className="mb-4 inter-regular f-18 ">
                Not sure where to start?{" "}
                <Link className="explore-link" to="/nutrition/white-labelling">
                  {" "}
                  Explore our White Labelling options first →
                </Link>
              </p>

              <div class="homepage-hstats">
                <div>
                  <div class="homepage-sn barlow-condensed-semi">50 KG</div>
                  <div class="homepage-sl inter-regular">Minimum Order</div>
                </div>
                <div>
                  <div class="homepage-sn barlow-condensed-semi">15-20</div>
                  <div class="homepage-sl inter-regular">Day Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="tbar">
        <div class="tbar-track">
          <span>FSSAI</span>
          <div class="tsep"></div>
          <span>GMP CERTIFIED</span>
          <div class="tsep"></div>
          <span>HACCP</span>
          <div class="tsep"></div>
          <span>KOSHER</span>
          <div class="tsep"></div>
          <span>HALAL</span>
          <div class="tsep"></div>
          <span>50 KG MOQ</span>
          <div class="tsep"></div>
          <span>15–20 DAY DELIVERY</span>
          <div class="tsep"></div>
          {/* duplicate */}
          <span>FSSAI</span>
          <div class="tsep"></div>
          <span>GMP CERTIFIED</span>
          <div class="tsep"></div>
          <span>HACCP</span>
          <div class="tsep"></div>
          <span>KOSHER</span>
          <div class="tsep"></div>
          <span>HALAL</span>
          <div class="tsep"></div>
          <span>50 KG MOQ</span>
          <div class="tsep"></div>
          <span>15–20 DAY DELIVERY</span>
          <div class="tsep"></div>
        </div>
      </div>

      <section id="product-section">
        <div className="vertical-section">
          <h1 className="vertical-title barlow-condensed-semi">
            What We Manufacture
          </h1>

          <div className="card-container">
            <div className="card">
              <img
                src="/assets/images/nutrition/whey-protein-combo.webp"
                alt="whey protein"
              />
              <h3 className="inter-500">Whey Protein</h3>
              <p className="int-regular">
                Concentrate, isolate, blends. 25g+ protein per serve in flavours
                customers love.
              </p>
              <Link
                to="/third-party-manufacturing/protein-powder"
                className="explore-range-btn barlow-condensed-semi"
              >
                Explore Range
              </Link>
            </div>

            <div className="card">
              <img
                src="/assets/images/nutrition/performance-combo-new.webp"
                alt="Pre-Workout Supplement"
              />
              <h3 className="inter-500">Sports Nutrition</h3>
              <p className="int-regular">
                Pre-workout, BCAA, creatine. Custom flavours for the Indian
                palate.
              </p>
              <Link
                to="/third-party-manufacturing/sports-nutrition-supplements"
                className="explore-range-btn barlow-condensed-semi"
              >
                Explore Range
              </Link>
            </div>

            <div className="card">
              <img
                src="/assets/images/nutrition/multivitamin-combo.webp"
                alt="multivitamin-tablet"
              />
              <h3 className="inter-500">Multivitamin Tablets</h3>
              <p className="int-regular">
                Daily wellness essentials. Clinically backed for men, women, and
                active lifestyles.
              </p>
              <Link
                to="/third-party-manufacturing/multivitamins-tablet"
                className="explore-range-btn barlow-condensed-semi"
              >
                Explore Range
              </Link>
            </div>
          </div>

          <div className="product-cta-bar">
            <p className="inter-regular">
              Want your own brand on these products?{" "}
              <span className="inter-500">
                We handle everything — formula to label.
              </span>
            </p>

            <Link
              to="/nutrition/white-labelling"
              className="cta-link inter-regular"
            >
              See White Labelling Service →
            </Link>
          </div>
        </div>
      </section>

      <section class="why-section">
        <div class="why-container">
          <p class="why-label barlow-condensed-semi">
            WHY CHOOSE GOMZI LIFESCIENCE LLP ?
          </p>

          <h2 class="why-title barlow-condensed-semi">
            Built to Launch Brands, Not Just Batches
          </h2>

          <div class="why-strip">
            <div class="why-item">
              <h3 className="barlow-condensed-semi">50 KG</h3>
              <p class="why-head inter-500">Minimum Order</p>
              <span>Start lean. Scale fast. No warehouse risk.</span>
            </div>

            <div class="why-item">
              <h3 className="barlow-condensed-semi">20 Days</h3>
              <p class="why-head inter-500">Fast Delivery</p>
              <span>From formulation to dispatch.</span>
            </div>

            <div class="why-item">
              <h3 className="barlow-condensed-semi">End-to-End</h3>
              <p class="why-head inter-500">Full Service</p>
              <span>Formula · Pack · Website in one shot.</span>
            </div>

            <div class="why-item">
              <h3 className="barlow-condensed-semi">Indian</h3>
              <p class="why-head inter-500">Traditional Flavours</p>
              <span>Mango, Guava, Kesar Pista.</span>
            </div>

            <div class="why-item">
              <h3 className="barlow-condensed-semi">Halal & Kosher</h3>
              <p class="why-head inter-500">Certified</p>
              <span>Export-ready certifications.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="works-section">
          <h1 className="works-title barlow-condensed-semi">
            Your 5-Stage Launch Journey
          </h1>

          <div class="works-journey-line"></div>

          <div class="works-journey-steps">
            <div class="works-step">
              <div class="works-step-img">
                <img src="/assets/images/nutrition/idea-new-2.webp" alt="" />
              </div>

              <div class="works-step-circle">1</div>
              <h4 className="barlow-condensed-semi">Idea</h4>
              <p className="inter-regular">
                Share your vision and target market.
              </p>
              <span>1-3 DAYS</span>
            </div>

            <div class="works-step">
              <div class="works-step-img">
                <img
                  src="/assets/images/nutrition/formulation-new-3.webp"
                  alt=""
                />
              </div>
              <div class="works-step-circle">2</div>
              <h4 className="barlow-condensed-semi">Formulation</h4>
              <p className="inter-regular">
                Custom formula + flavour development.
              </p>
              <span>3-5 DAYS</span>
            </div>

            <div class="works-step">
              <div class="works-step-img">
                <img
                  src="/assets/images/nutrition/manufacturer-new.webp"
                  alt=""
                />
              </div>
              <div class="works-step-circle">3</div>
              <h4 className="barlow-condensed-semi">Manufacturing</h4>
              <p className="inter-regular">
                GMP-certified production with COA.
              </p>
              <span>5-7 DAYS</span>
            </div>

            <div class="works-step">
              <div class="works-step-img">
                <img
                  src="/assets/images/nutrition/whey-protein-combo.webp"
                  alt=""
                />
              </div>
              <div class="works-step-circle">4</div>
              <h4 className="barlow-condensed-semi">Packaging</h4>
              <p className="inter-regular">
                Design, print, fill - <br /> turnkey.
              </p>
              <span>3-4 DAYS</span>
            </div>

            <div class="works-step">
              <div class="works-step-img">
                <img src="/assets/images/nutrition/website-new.webp" alt="" />
              </div>
              <div class="works-step-circle">5</div>
              <h4 className="barlow-condensed-semi">Website</h4>
              <p className="inter-regular">
                D2C store ready to sell on day one.
              </p>
              <span>2-3 DAYS</span>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="why-section bg-white">
        <div class="why-container">
          <div className="left-section product-range-order-1">
            <div className="video-box" onClick={() => setShowVideo(true)}>
              <video className="illustration-image-home" muted loop playsInline>
                <source
                  src="/assets/video/homepage-video.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="play-btn">▶</div>
            </div>
          </div>
          {showVideo && (
            <div className="video-modal">
              <div className="video-container">
                <span className="close-btn" onClick={() => setShowVideo(false)}>
                  ✖
                </span>

                <video controls autoPlay>
                  <source
                    src="/assets/video/homepage-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          )}
        </div>
      </section> */}

      <section class="qua-section" id="certification">
        <p className="qua-label barlow-condensed-semi">Quality Assurance</p>

        <h1 className="qua-title barlow-condensed-semi">
          Every Batch, Verified.
        </h1>

        <div className="gym-cert-grid">
          {certificates.map((cert, index) => {
            const filePath =
              process.env.PUBLIC_URL + `/assets/images/nutrition/${cert.file}`;

            return (
              <div className="gym-cert-card" key={index}>
                <div className="gym-cert-img-wrap">
                  <img
                    src={filePath}
                    alt={`${cert.name} Certificate`}
                    loading="lazy"
                  />
                </div>

                <div className="gym-cert-label-wrap">
                  <span className="gym-cert-label-name barlow-condensed-semi">
                    {cert.name}
                  </span>
                  <span className="gym-cert-label-sub inter-regular">
                    {cert.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div class="qua-content">
          <div class="qua-item">
            <div class="check-box">
              <svg class="check-icon" viewBox="0 0 14 14">
                <polyline points="2,7 5.5,10.5 12,3" />
              </svg>
            </div>
            <div class="qua-item-text">
              <h3>GMP-Certified Production</h3>
              <p>
                Manufactured to international Good Manufacturing Practice
                standards.
              </p>
            </div>
          </div>

          <div class="qua-item">
            <div class="check-box">
              <svg class="check-icon" viewBox="0 0 14 14">
                <polyline points="2,7 5.5,10.5 12,3" />
              </svg>
            </div>
            <div class="qua-item-text">
              <h3>Batch COA on Every Order</h3>
              <p>Certificate of Analysis shipped with every production run.</p>
            </div>
          </div>

          <div class="qua-item">
            <div class="check-box">
              <svg class="check-icon" viewBox="0 0 14 14">
                <polyline points="2,7 5.5,10.5 12,3" />
              </svg>
            </div>
            <div class="qua-item-text">
              <h3>Third-Party Lab Testing</h3>
              <p>Independent verification of purity, potency, and safety.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href={DownloadPdf || "#"}
            download
            className="download-btn barlow-condensed-semi"
          >
            <i class="fa-solid fa-download"></i> Download Our Brochure
          </a>
        </div>
      </section>

      <WhiteLabellingVideoTestimonials />

      <section>
        <div className="who-section">
          <p className="who-label barlow-condensed-semi">Who Is This For</p>

          <h1 className="who-title barlow-condensed-semi">Find Your Path</h1>

          <div className="who-card-container">
            <div className="who-card">
              <div>
                <img
                  src="/assets/images/nutrition/fitness-creator.webp"
                  alt=""
                />
              </div>
              <h3 className="inter-500">Fitness Creator</h3>
              <p className="int-regular">
                You have the audience. We give you the product. Launch your own
                line and own your revenue.
              </p>
            </div>

            <div className="who-card">
              <div>
                <img src="/assets/images/nutrition/gym-owner.webp" alt="" />
              </div>

              <h3 className="inter-500">Gym Owner</h3>
              <p className="int-regular">
                Build loyalty and margin with a house brand your members trust
                and repurchase every month.
              </p>
            </div>

            <div className="who-card">
              <div>
                <img
                  src="/assets/images/nutrition/pharma-distributor.webp"
                  alt=""
                />
              </div>

              <h3 className="inter-500">Pharma Distributor</h3>
              <p className="int-regular">
                Add high-margin wellness SKUs to your portfolio. Export-ready
                certifications included.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="homepage-faq-section" id="faq">
        <div className="max-90-margin-0 ">
          <div className="col-12 text-center">
            <div>
              <h1 className="homepage-faq-title barlow-condensed-semi">FAQ</h1>
            </div>
          </div>

          <div className="row pb-5 justify-content-center overflow-hidden">
            <div className="col-md-8">
              <Accordion defaultActiveKey={["1"]} alwaysOpen inter-regular>
                <Accordion.Item eventKey="1" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    What is the minimum order quantity?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    Our MOQ starts at 50 KG per SKU — enough to launch a real
                    brand without overcommitting inventory. Most first-time
                    founders start with 1–2 SKUs at 50 KG each.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    How long does it take from order to delivery?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    15–20 working days from confirmed purchase order. That
                    covers formulation finalization, production, COA testing,
                    and packaging. We commit to this timeline in writing.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    Do you offer white labelling and private label?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    Yes — completely. Your brand name, your logo, your
                    packaging. We handle formulation, manufacturing, COA
                    documentation, FSSAI-compliant labelling, and dispatch. also
                    website development , full brand launch support
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    What certifications do your products carry?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    Our facility is WHO-GMP certified, FSSAI licensed, HACCP,
                    Halal, and Kosher certified. Every batch ships with a
                    Certificate of Analysis. Certification documents available
                    on request.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    What products can you manufacture?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    Whey protein (WPC/WPI), mass gainers, pre-workouts, BCAAs,
                    multivitamins, herbal supplements, and custom formulations.
                    Powder, capsule, tablet, sachet, and blister pack formats
                    available.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    Can you help with FSSAI registration and label compliance?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    We review every label for FSSAI compliance before production
                    begins — mandatory elements, health claim restrictions,
                    allergen declarations, batch numbering. We flag issues
                    before they become problems.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    Do you support exports?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    Yes. Our Halal and Kosher certifications make products
                    export-ready for the Middle East and Southeast Asia. We
                    supply to buyers in UAE, Malaysia, and Singapore with full
                    documentation support.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    Can I manufacture for Amazon or D2C without my own factory?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    That's exactly what third-party manufacturing is for. You
                    own the brand, we handle production. Many of our clients
                    sell on Amazon India, Flipkart, and their own Shopify stores
                    — no factory needed.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section class="launch-section">
        <div class="launch-container">
          <h2 class="launch-title barlow-condensed-semi">
            Ready to Launch <br /> Your Brand?
          </h2>

          <p class="launch-sub inter-regular">
            From idea to shelf in under 20 days. It starts with a free 30-minute
            roadmap call.
          </p>

          <div class="launch-hbtns">
            <button class="launch-bp barlow-condensed-semi ">
              Get Free Quote →
            </button>

            <a
              href="https://wa.me/918320077993"
              target="_blank"
              rel="noopener noreferrer"
              className="launch-bg barlow-condensed-semi"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container-fluid pt-5 pb-3 bg-black">
          <div className="container ">
            <div className="row ">
              <div className="col-md-3 f1 f2">
                <h4 className=" barlow-condensed-semi">
                  Gomzi Lifesciences LLP
                </h4>
                <p className="int-regular">
                  Your Trusted Partner for Premium Nutraceutical Manufacturing.
                </p>
                <div className="f2">
                  <p className="mb-2 mt-2 int-regular">
                    <Link to="tel:+918320077993">+91 8320077993</Link>
                  </p>
                  <p className="mb-4 int-regular">
                    <Link to="mailto:info@gomzilifesciences.in">
                      info@gomzilifesciences.in
                    </Link>
                  </p>
                </div>
              </div>

              <div className="col-md-2 f2">
                <h4 className="barlow-condensed-semi">Services</h4>
                <p className="mb-3">
                  <Link to="/nutrition/white-labelling">
                    Private Label Supplements
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/third-party-manufacturing/protein-powder">
                    Whey Protein
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/third-party-manufacturing/sports-nutrition-supplements">
                    Sports Nutrition
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/third-party-manufacturing/multivitamins-tablet">
                    Multivitamin
                  </Link>
                </p>
              </div>

              <div className="col-md-2 f2">
                <h4 className="barlow-condensed-semi">Links</h4>

                <p className="mb-4">
                  <Link to="/nutrition/contact-us" target="_blank">
                    Contact Us
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="/aboutUs" target="_blank">
                    AboutUs
                  </Link>
                </p>
              </div>

              <div className="col-md-3 f2">
                <h4 className="barlow-condensed-semi">Information</h4>
                <p className="mb-3">
                  <Link to="/nutrition/terms-condition-customer">
                    Terms & Conditions
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/nutrition/return-and-refund-policy-customer">
                    Return & Refund
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/nutrition/privacy-policy-customer">
                    Privacy Policy
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/nutrition/cancellation-policy-customer">
                    Cancellation Policy
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/nutrition/pricing-policy-customer">
                    Pricing Policy
                  </Link>
                </p>
                <p className="mb-3">
                  <Link to="/nutrition/shipping-policy-customer">
                    Shipping Policy
                  </Link>
                </p>
              </div>

              <div className="col-md-2 f2">
                <div className="f3 p-0">
                  <h4 className="barlow-condensed-semi">Follow Us</h4>
                  <Link
                    to="https://www.facebook.com/Gomzilifesciences"
                    className="fb"
                    aria-label="Follow us on Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    to="https://www.instagram.com/gomzilifesciences/"
                    className="insta"
                    aria-label="Follow us on Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    to="https://www.youtube.com/@Gomzilifesciences"
                    className="you"
                    aria-label="Follow us on YouTube"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/gomzi-lifesciences-423558312/"
                    className="in"
                    aria-label="Follow us on LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
                <div className="f2 mt-3">
                  <h4 className="mb-4 int-500 ft-pwu">Partner With Us</h4>
                  <p className="mb-3">
                    <Link
                      onClick={() =>
                        nutritionSendWhatsappMsg(
                          "Hello, I'm interested in becoming a distributor of Gomzi Lifescience.",
                          { pageRef: true },
                        )
                      }
                    >
                      Become a distributor
                    </Link>
                  </p>
                  <p className="mb-3">
                    <Link
                      onClick={() =>
                        nutritionSendWhatsappMsg(
                          "Hello, I'm interested in becoming an affiliate of Gomzi Lifescience.",
                          { pageRef: true },
                        )
                      }
                    >
                      Become an affiliate
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
