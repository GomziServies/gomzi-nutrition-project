import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HomeFooter from "../../components/partials/Footer/footer";
import { axiosInstance } from "../../assets/js/config/api";
import dayjs from "dayjs";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";

function UserOrder() {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    getOrderDetail();
  }, []);

  const getOrderDetail = () => {
    axiosInstance
      .get(`/meals/get-product-tracking`)
      .then((response) => {
        if (response.data.data && response.data.data.length > 0) {
          const productResponse = response.data.data.map((responseData) => {
            const productItemData = responseData.multiple_items.map((item) => {
              const productData =
                responseData.user_meal_product.product_details.find(
                  (product) => product._id === item.item_id
                );

              return {
                ...item,
                display_image: productData?.display_image || null,
                name: productData?.name || "Unknown",
                status: productData?.status || "Unknown",
                productDataId: productData?._id || null,
              };
            });
            return {
              ...responseData,
              items: productItemData,
            };
          });
          setOrderData(productResponse.reverse());
        }
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
      });
  };
  console.log(orderData);

  const convertDate = (date) => {
    return dayjs(date).format("MM/DD/YYYY");
  };
  return (
    <>
      <Helmet>
        <title>User Order</title>
        <meta
          name="description"
          content="These Are The Diseases Is Can Not Be Controlled By Medicine Only, You Need To Have The Support Of Nutrition, Exercises, Recovery, And Rehab Parts Also."
        />
        <meta name="keywords" content="" />
      </Helmet>
      <NutritionHeader />

      <div
        className="container mt-4 mb-4 text-left"
        style={{ marginTop: "60px" }}
      >
        <section>
          <div className="Info">
            <h2>Product Details</h2>
          </div>
          {orderData.map((order, index) => (
            <div key={index} className="row border pb-4 rounded mt-5">
              <div className="calc col-12 mt-1">
                <p>
                  Ordered on {convertDate(order.createdAt)} | Receipt ID:{" "}
                  {order.receipt_id}
                </p>
              </div>
              {order?.user_meal_product?.tracking.some(
                (trackingElem) => trackingElem.shipment_status === "DELIVERED"
              ) && (
                  <div className="col-12 meal">
                    <p
                      className="mt-2"
                      style={{ fontSize: "20px", color: "green" }}
                    >
                      Delivered {convertDate(order.updatedAt)}
                    </p>
                  </div>
                )}
              {order.items.map((ItemDetails, index) => (
                <div key={index} className="col-md-8 mt-2 meal">
                  <div className="Grocery2 float-left mt-3 w-100">
                    <div className="relet text-center">
                      <img
                        src={`https://files.fggroup.in/${ItemDetails.display_image}`}
                        width="100px"
                        alt={ItemDetails.name}
                      />
                    </div>
                    <div className="relet1">
                      <span className="min text-left">
                        <b>{ItemDetails.name}</b>
                      </span>
                    </div>
                    <div className="price1">
                      <p className="my-3 text-dark">
                        ₹{ItemDetails.amount}
                        /-
                      </p>
                      <span className="q1 ml-4">
                        Quantity : {ItemDetails.quantity}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-12 row">
                <div className="col-md-4 meal">
                  <p className="mt-2 mb-5" style={{ fontSize: "20px" }}>
                    Total Amount :- {order.amount} /-
                  </p>
                  <p className="mt-2" style={{ fontSize: "20px" }}>
                    Delivery Address :-
                  </p>
                  <span>
                    {order.notes.address_line_1 +
                      (order.notes.address_line_2
                        ? ", " + order.notes.address_line_2
                        : "")}
                    ,
                  </span>
                  <span>
                    {order.notes.city}, {order.notes.pin_code}
                  </span>
                </div>
              </div>
              {order?.user_meal_product?.tracking &&
                order?.user_meal_product?.tracking.length > 0 && (
                  <div className="col-12">
                    <div className="col-12 p-0 mt-5 meal">
                      <p className="mt-2 mb-3" style={{ fontSize: "20px" }}>
                        Order Tracking :-
                      </p>
                    </div>
                    <div className="row meal">
                      <div
                        className={`order-tracking ${order.user_meal_product?.tracking.find(
                          (trackingElem) =>
                            trackingElem.shipment_status === "PLACED"
                        )
                          ? "completed"
                          : ""
                          }`}
                      >
                        <span className="is-complete"></span>
                        <p>
                          PLACED
                          <span className="mt-3 d-block">
                            {convertDate(
                              order.user_meal_product?.tracking.find(
                                (trackingElem) =>
                                  trackingElem.shipment_status === "PLACED"
                              )?.updatedAt
                            )}
                          </span>
                        </p>
                      </div>
                      <div
                        className={`order-tracking ${order.user_meal_product?.tracking.find(
                          (trackingElem) =>
                            trackingElem.shipment_status === "DISPATCHED"
                        )
                          ? "completed"
                          : ""
                          }`}
                      >
                        <span className="is-complete"></span>
                        <p>
                          DISPATCHED
                          <span className="mt-3 d-block">
                            {order.user_meal_product?.tracking.find(
                              (trackingElem) =>
                                trackingElem.shipment_status === "DISPATCHED"
                            )
                              ? convertDate(
                                order.user_meal_product?.tracking.find(
                                  (trackingElem) =>
                                    trackingElem.shipment_status ===
                                    "DISPATCHED"
                                )?.updatedAt
                              )
                              : ""}
                          </span>
                        </p>
                      </div>
                      <div
                        className={`order-tracking ${order.user_meal_product?.tracking.find(
                          (trackingElem) =>
                            trackingElem.shipment_status === "DELIVERED"
                        )
                          ? "completed"
                          : ""
                          }`}
                      >
                        <span className="is-complete"></span>
                        <p>
                          DELIVERED
                          <span className="mt-3 d-block">
                            {order.user_meal_product?.tracking.find(
                              (trackingElem) =>
                                trackingElem.shipment_status === "DELIVERED"
                            )
                              ? convertDate(
                                order.user_meal_product?.tracking.find(
                                  (trackingElem) =>
                                    trackingElem.shipment_status ===
                                    "DELIVERED"
                                )?.updatedAt
                              )
                              : ""}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </section>
        <section className="margintop-nutrition">
          <div className="describe text-center">
            <h1>Terms & Conditionss</h1>
            <div className="thm-bg-clr dector mb-0"></div>
          </div>
          <div className="describe">
            <p>
              This website is operated by FITNESSWITHGOMZI. Throughout the site,
              the terms “we”, “us” and “our” refer to FITNESSWITHGOMZI.
              FITNESSWITHGOMZI offers this website, including all information,
              tools and services available from this site to you, the user,
              conditioned upon your acceptance of all terms, conditions,
              policies and notices stated here.
            </p>

            <p>
              By visiting our site and/ or purchasing something from us, you
              engage in our “Service” and agree to be bound by the following
              terms and conditions (“Terms of Service”, “Terms”), including
              those additional terms and conditions and policies referenced
              herein and/or available by hyperlink. These Terms of Service apply
              to all users of the site, including without limitation users who
              are browsers, vendors, customers, merchants, and/ or contributors
              of content.
            </p>

            <p>
              Please read these Terms of Service carefully before accessing or
              using our website. By accessing or using any part of the site, you
              agree to be bound by these Terms of Service. If you do not agree
              to all the terms and conditions of this agreement, then you may
              not access the website or use any services. If these Terms of
              Service are considered an offer, acceptance is expressly limited
              to these Terms of Service.
            </p>

            <p>
              Any new features or tools which are added to the current store
              shall also be subject to the Terms of Service. You can review the
              most current version of the Terms of Service at any time on this
              page. We reserve the right to update, change or replace any part
              of these Terms of Service by posting updates and/or changes to our
              website. It is your responsibility to check this page periodically
              for changes. Your continued use of or access to the website
              following the posting of any changes constitutes acceptance of
              those changes.
            </p>

            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 1 - ONLINE STORE TERMS
              </h4>
              <br /> By agreeing to these Terms of Service, you represent that
              you are at least the age of majority in your state or province of
              residence, or that you are the age of majority in your state or
              province of residence and you have given us your consent to allow
              any of your minor dependents to use this site. You may not use our
              products for any illegal or unauthorized purpose nor may you, in
              the use of the Service, violate any laws in your jurisdiction
              (including but not limited to copyright laws). You must not
              transmit any worms or viruses or any code of a destructive nature.
              A breach or violation of any of the Terms will result in an
              immediate termination of your Services.
            </p>

            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 2 - GENERAL CONDITIONS
              </h4>
              <br /> We reserve the right to refuse service to anyone for any
              reason at any time. You understand that your content (not
              including credit card information), may be transferred unencrypted
              and involve (a) transmissions over various networks; and (b)
              changes to conform and adapt to technical requirements of
              connecting networks or devices. Credit card information is always
              encrypted during transfer over networks. You agree not to
              reproduce, duplicate, copy, sell, resell or exploit any portion of
              the Service, use of the Service, or access to the Service or any
              contact on the website through which the service is provided,
              without express written permission by us. The headings used in
              this agreement are included for convenience only and will not
              limit or otherwise affect these Terms.
            </p>

            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
              </h4>
              <br /> We are not responsible if information made available on
              this site is not accurate, complete or current. The material on
              this site is provided for general information only and should not
              be relied upon or used as the sole basis for making decisions
              without consulting primary, more accurate, more complete or more
              timely sources of information. Any reliance on the material on
              this site is at your own risk. This site may contain certain
              historical information. Historical information, necessarily, is
              not current and is provided for your reference only. We reserve
              the right to modify the contents of this site at any time, but we
              have no obligation to update any information on our site. You
              agree that it is your responsibility to monitor changes to our
              site.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
              </h4>
              <br /> Prices for our products are subject to change without
              notice. We reserve the right at any time to modify or discontinue
              the Service (or any part or content thereof) without notice at any
              time. We shall not be liable to you or to any third-party for any
              modification, price change, suspension or discontinuance of the
              Service.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 5 - PRODUCTS OR SERVICES
              </h4>
              <br /> Certain products or services may be available exclusively
              online through the website. These products or services may have
              limited quantities and are subject to return or exchange only
              according to our Return Policy. We have made every effort to
              display as accurately as possible the colors and images of our
              products that appear at the store. We cannot guarantee that your
              computer monitor's display of any color will be accurate. We
              reserve the right, but are not obligated, to limit the sales of
              our products or Services to any person, geographic region or
              jurisdiction. We may exercise this right on a case-by-case basis.
              We reserve the right to limit the quantities of any products or
              services that we offer. All descriptions of products or product
              pricing are subject to change at anytime without notice, at the
              sole discretion of us. We reserve the right to discontinue any
              product at any time. Any offer for any product or service made on
              this site is void where prohibited. We do not warrant that the
              quality of any products, services, information, or other material
              purchased or obtained by you will meet your expectations, or that
              any errors in the Service will be corrected.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION
              </h4>
              <br /> We reserve the right to refuse any order you place with us.
              We may, in our sole discretion, limit or cancel quantities
              purchased per person, per household or per order. These
              restrictions may include orders placed by or under the same
              customer account, the same credit card, and/or orders that use the
              same billing and/or shipping address. In the event that we make a
              change to or cancel an order, we may attempt to notify you by
              contacting the e-mail and/or billing address/phone number provided
              at the time the order was made. We reserve the right to limit or
              distributors. prohibit orders that, in our sole judgment, appear
              to be placed by dealers, resellers or prohibit orders that, in our
              sole judgment, appear tobe placed by dealers, resellers or You
              agree to provide current, complete and accurate purchase and
              account information for all purchases made at our store. You agree
              to promptly update your account and other information, including
              your email address and credit card numbers and expiration dates,
              so that we can complete your transactions and contact you as
              needed. For more detail, please review our Returns Policy.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 7 - OPTIONAL TOOLS
              </h4>
              <br /> We may provide you with access to third-party tools over
              which we neither monitor nor have any control nor input. prohibit
              orders that, in our sole judgment, appear to/be placed by dealers,
              resellers or prohibit orders that, in our sole judgment, appear
              tobe placed by dealers, resellers or You acknowledge and agree
              that we provide access to such tools ”as is” and “as available”
              without any warranties, representations or conditions of any kind
              and without any endorsement. We shall have no liability whatsoever
              arising from or relating to your use of optional third-party
              tools. Any use by you of optional tools offered through the site
              is entirely at your own risk and discretion and you should ensure
              that you are familiar with and approve of the terms on which tools
              are provided by the relevant third-party provider(s). We may also,
              in the future, offer new services and/or features through the
              website (including, the release of new tools and resources). Such
              new features and/or services shall also be subject to these Terms
              of Service.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 8 - THIRD-PARTY LINKS
              </h4>
              <br /> prohibit orders that, in our sole judgment, appear to/be
              placed by dealers, resellers or prohibit orders that, in our sole
              judgment, appear tobe placed by dealers, resellers or Certain
              content, products and services available via our Service may
              include materials from third-parties. Third-party links on this
              site may direct you to third-party websites that are not
              affiliated with us. We are not responsible for examining or
              evaluating the content or accuracy and we do not warrant and will
              not have any liability or responsibility for any third-party
              materials or websites, or for any other materials, products, or
              services of third-parties. We are not liable for any harm or
              damages related to the purchase or use of goods, services,
              resources, content, or any other transactions made in connection
              with any third-party websites. Please review carefully the
              third-party's policies and practices and make sure you understand
              them before you engage in any transaction. Complaints, claims,
              concerns, or questions regarding third-party products should be
              directed to the third-party.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
              </h4>
              <br /> If, at our request, you send certain specific submissions
              (for example contest entries) or without a request from us you
              send creative ideas, suggestions, proposals, plans, or other
              prohibit orders that, in our sole judgment, appear to/be placed by
              dealers, resellers or prohibit orders that, in our sole judgment,
              appear tobe placed by dealers, resellers or materials, whether
              online, by email, by postal mail, or otherwise (collectively,
              'comments'), you agree that we may, at any time, without
              restriction, edit, copy, publish, distribute, translate and
              otherwise use in any medium any comments that you forward to us.
              We are and shall be under no obligation (1) to maintain any
              comments in confidence; (2) to pay compensation for any comments;
              or (3) to respond to any comments. We may, but have no obligation
              to, monitor, edit or remove content that we determine in our sole
              discretion are unlawful, offensive, threatening, libelous,
              defamatory, pornographic, obscene or otherwise objectionable or
              violates any party's intellectual property or these Terms of
              Service. prohibit orders that, in our sole judgment, appear to/be
              placed by dealers, resellers or prohibit orders that, in our sole
              judgment, appear tobe placed by dealers, resellers or You agree
              that your comments will not violate any right of any third-party,
              including copyright, trademark, privacy, personality or other
              personal or proprietary right. You further agree that your
              comments will not contain libelous or otherwise unlawful, abusive
              or obscene material, or contain any computer virus or other
              malware that could in any way affect the operation of the Service
              or any related website. You may not use a false e-mail address,
              pretend to be someone other than yourself, or otherwise mislead us
              or third-parties as to the origin of any comments. You are solely
              responsible for any comments you make and their accuracy. We take
              no responsibility and assume no liability for any comments posted
              by you or any third-party.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 10 - PERSONAL INFORMATION
              </h4>
              <br /> prohibit orders that, in our sole judgment, appear to/be
              placed by dealers, resellers or Your submission of personal
              information through the store is governed by our Privacy Policy.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS
              </h4>
              <br /> Occasionally there may be information on our site or in the
              Service that contains typographical errors, inaccuracies or
              omissions that may relate to product descriptions, pricing,
              promotions, offers, product shipping charges, transit times and
              availability. We reserve the right to correct any errors,
              inaccuracies or omissions, and to change or update information or
              cancel orders if any information in the Service or on any related
              website is inaccurate at any time without prior notice (including
              after you have submitted your order). We undertake no obligation
              to update, amend or clarify information in the Service or on any
              related website, including without limitation, pricing
              information, except as required by law. No specified update or
              refresh date applied in the Service or on any related website,
              should be taken to indicate that all information in the Service or
              on any related website has been modified or updated.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 12 - PROHIBITED USES
              </h4>
              <br /> In addition to other prohibitions as set forth in the Terms
              of Service, you are prohibited from using the site or its content:
              (a) for any unlawful purpose; (b) to solicit others to perform or
              participate in any unlawful acts; (c) to violate any
              international, federal, provincial or state regulations, rules,
              laws, or local ordinances; (d) to infringe upon or violate our
              intellectual property rights or the intellectual property rights
              of others; (e) to harass, abuse, insult, harm, defame, slander,
              disparage, intimidate, or discriminate based on gender, sexual
              orientation, religion, ethnicity, race, age, national origin, or
              disability; (f) to submit false or misleading information; (g) to
              upload or transmit viruses or any other type of malicious code
              that will or may be used in any way that will affect the
              functionality or operation of the Service or of any related
              website, other websites, or the Internet; (h) to collect or track
              the personal information of others; (i) to spam, phish, pharm,
              pretext, spider, crawl, or scrape; (j) for any obscene or immoral
              purpose; or (k) to interfere with or circumvent the security
              features of the Service or any related website, other websites, or
              the Internet. We reserve the right to terminate your use of the
              Service or any related website for violating any of the prohibited
              uses.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
              </h4>
              <br /> We do not guarantee, represent or warrant that your use of
              our service will be uninterrupted, timely, secure or error-free.
              We do not warrant that the results that may be obtained from the
              use of the service will be accurate or reliable. You agree that
              from time to time we may remove the service for indefinite periods
              of time or cancel the service at any time, without notice to you.
              You expressly agree that your use of, or inability to use, the
              service is at your sole risk. The service and all products and
              services delivered to you through the service are (except as
              expressly stated by us) provided 'as is' and 'as available' for
              your use, without any representation, warranties or conditions of
              any kind, either express or implied, including all implied
              warranties or conditions of merchantability, merchantable quality,
              fitness for a particular purpose, durability, title, and
              non-infringement. In no case shall FITNESSWITHGOMZI, our
              directors, officers, employees, affiliates, agents, contractors,
              interns, suppliers, service providers or licensors be liable for
              any injury, loss, claim, or any direct, indirect, incidental,
              punitive, special, or consequential damages of any kind,
              including, without limitation lost profits, lost revenue, lost
              savings, loss of data, replacement costs, or any similar damages,
              whether based in contract, tort (including negligence), strict
              liability or otherwise, arising from your use of any of the
              service or any products procured using the service, or for any
              other claim related in any way to your use of the service or any
              product, including, but not limited to, any errors or omissions in
              any content, or any loss or damage of any kind incurred as a
              result of the use of the service or any content (or product)
              posted, transmitted, or otherwise made available via the service,
              even if advised of their possibility. Because some states or
              jurisdictions do not allow the exclusion or the limitation of
              liability for consequential or incidental damages, in such states
              or jurisdictions, our liability shall be limited to the maximum
              extent permitted by law.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 14 - INDEMNIFICATION
              </h4>
              <br /> You agree to indemnify, defend and hold harmless
              FITNESSWITHGOMZI and our parent, subsidiaries, affiliates,
              partners, officers, directors, agents, contractors, licensors,
              service providers, subcontractors, suppliers, interns and
              employees, harmless from any claim or demand, including reasonable
              attorneys' fees, made by any third-party due to or arising out of
              your breach of these Terms of Service or the documents they
              incorporate by reference, or your violation of any law or the
              rights of a third-party.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 15 - SEVERABILITY
              </h4>
              <br /> In the event that any provision of these Terms of Service
              is determined to be unlawful, void or unenforceable, such
              provision shall nonetheless be enforceable to the fullest extent
              permitted by applicable law, and the unenforceable portion shall
              be deemed to be severed from these Terms of Service, such
              determination shall not affect the validity and enforceability of
              any other remaining provisions.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 16 - TERMINATION
              </h4>
              <br /> The obligations and liabilities of the parties incurred
              prior to the termination date shall survive the termination of
              this agreement for all purposes. These Terms of Service are
              effective unless and until terminated by either you or us. You may
              terminate these Terms of Service at any time by notifying us that
              you no longer wish to use our Services, or when you cease using
              our site. If in our sole judgment you fail, or we suspect that you
              have failed, to comply with any term or provision of these Terms
              of Service, we also may terminate this agreement at any time
              without notice and you will remain liable for all amounts due up
              to and including the date of termination; and/or accordingly may
              deny you access to our Services (or any part thereof).
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 17 - ENTIRE AGREEMENT
              </h4>
              <br /> The failure of us to exercise or enforce any right or
              provision of these Terms of Service shall not constitute a waiver
              of such right or provision. These Terms of Service and any
              policies or operating rules posted by us on this site or in
              respect to The Service constitutes the entire agreement and
              understanding between you and us and govern your use of the
              Service, superseding any prior or contemporaneous agreements,
              communications and proposals, whether oral or written, between you
              and us (including, but not limited to, any prior versions of the
              Terms of Service). Any ambiguities in the interpretation of these
              Terms of Service shall not be construed against the drafting
              party.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 18 - GOVERNING LAW
              </h4>
              <br /> These Terms of Service and any separate agreements whereby
              we provide you Services shall be governed by and construed in
              accordance with the laws of India and jurisdiction of Jaipur,
              Rajasthan
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 19 - CHANGES TO TERMS OF SERVICE
              </h4>
              <br /> You can review the most current version of the Terms of
              Service at any time at this page. We reserve the right, at our
              sole discretion, to update, change or replace any part of these
              Terms of Service by posting updates and changes to our website. It
              is your responsibility to check our website periodically for
              changes. Your continued use of or access to our website or the
              Service following the posting of any changes to these Terms of
              Service constitutes acceptance of those changes.
            </p>
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 20 - CONTACT INFORMATION
              </h4>
              <br /> Questions about the Terms of Service should be sent to us
              at info@fggroup.in.
            </p>
          </div>
        </section>
        <section className="margintop">
          <div className="covid text-center">
            <h2>Return & Refunds</h2>
            <div className="thm-bg-clr dector mb-0"></div>
          </div>
          <div className="describe">
            <p>
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
              </h4>
              When you purchase something from our store, as part of the buying
              and selling process, we collect the personal information you give
              us such as your name, address and email address. When you browse
              our store, we also automatically receive your computer's internet
              protocol (IP) address in order to provide us with information that
              helps us learn about your browser and operating system. Email
              marketing (if applicable): With your permission, we may send you
              emails about our store, new products and other updates.
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 2 - CONSENT
              </h4>
              How do you get my consent? When you provide us with personal
              information to complete a transaction, verify your credit card,
              place an order, arrange for a delivery or return a purchase, we
              imply that you consent to our collecting it and using it for that
              specific reason only. If we ask for your personal information for
              a secondary reason, like marketing, we will either ask you
              directly for your expressed consent, or provide you with an
              opportunity to say no. How do I withdraw my consent? If after you
              opt-in, you change your mind, you may withdraw your consent for us
              to contact you, for the continued collection, use or disclosure of
              your information, at anytime, by contacting us at info@fggroup.in
              or mailing us at: A- 301, Ambrosia Business Hub, VIP Road, beside
              SMC Garden, Vesu, Surat, Gujarat 395007
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 3 - DISCLOSURE
              </h4>
              We may disclose your personal information if we are required by
              law to do so or if you violate our Terms of Service.
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 4 - PAYMENT
              </h4>
              We use Razorpay for processing payments. We/Razorpay do not store
              your card data on their servers. The data is encrypted through the
              Payment Card Industry Data Security Standard (PCI-DSS) when
              processing payment. Your purchase transaction data is only used as
              long as is necessary to complete your purchase transaction. After
              that is complete, your purchase transaction information is not
              saved. Our payment gateway adheres to the standards set by PCI-DSS
              as managed by the PCI Security Standards Council, which is a joint
              effort of brands like Visa, MasterCard, American Express and
              Discover. PCI-DSS requirements help ensure the secure handling of
              credit card information by our store and its service providers.
              For more insight, you may also want to read terms and conditions
              of razorpay on https://razorpay.com
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 5 - THIRD-PARTY SERVICES
              </h4>
              In general, the third-party providers used by us will only
              collect, use and disclose your information to the extent necessary
              to allow them to perform the services they provide to us. However,
              certain third-party service providers, such as payment gateways
              and other payment transaction processors, have their own privacy
              policies in respect to the information we are required to provide
              to them for your purchase-related transactions. For these
              providers, we recommend that you read their privacy policies so
              you can understand the manner in which your personal information
              will be handled by these providers. In particular, remember that
              certain providers may be located in or have facilities that are
              located a different jurisdiction than either you or us. So if you
              elect to proceed with a transaction that involves the services of
              a third-party service provider, then your information may become
              subject to the laws of the jurisdiction(s) in which that service
              provider or its facilities are located. Once you leave our store's
              website or are redirected to a third-party website or application,
              you are no longer governed by this Privacy Policy or our website's
              Terms of Service. Links When you click on links on our store, they
              may direct you away from our site. We are not responsible for the
              privacy practices of other sites and encourage you to read their
              privacy statements.
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 6 - SECURITY
              </h4>
              To protect your personal information, we take reasonable
              precautions and follow industry best practices to make sure it is
              not inappropriately lost, misused, accessed, disclosed, altered or
              destroyed.
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 7 - COOKIES
              </h4>
              We use cookies to maintain session of your user. It is not used to
              personally identify you on other websites.
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 8 - AGE OF CONSENT
              </h4>
              By using this site, you represent that you are at least the age of
              majority in your state or province of residence, or that you are
              the age of majority in your state or province of residence and you
              have given us your consent to allow any of your minor dependents
              to use this site.
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                SECTION 9 - CHANGES TO THIS PRIVACY POLICY
              </h4>
              We reserve the right to modify this privacy policy at any time, so
              please review it frequently. Changes and clarifications will take
              effect immediately upon their posting on the website. If we make
              material changes to this policy, we will notify you here that it
              has been updated, so that you are aware of what information we
              collect, how we use it, and under what circumstances, if any, we
              use and/or disclose it. If our store is acquired or merged with
              another company, your information may be transferred to the new
              owners so that we may continue to sell products to you.{" "}
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                QUESTIONS AND CONTACT INFORMATION
              </h4>
              If you would like to: access, correct, amend or delete any
              personal information we have about you, register a complaint, or
              simply want more information contact our Privacy Compliance
              Officer at info@fggroup.in or by mail at Address:- A- 301,
              Ambrosia Business Hub, VIP Road, beside SMC Garden, Vesu, Surat,
              Gujarat 395007
            </p>
          </div>
        </section>
        <section className="margintop">
          <div className="covid text-center">
            <h2>Return & Refunds</h2>
            <div className="thm-bg-clr dector mb-0"></div>
          </div>
          <div className="describe">
            <p>
              Returns Our policy lasts 30 days. If 30 days have gone by since
              your purchase, unfortunately we can't offer you a refund or
              exchange.
            </p>

            <p>
              To be eligible for a return, your item must be unused and in the
              same condition that you received it. It must also be in the
              original packaging.
            </p>
            <p>
              Several types of goods are exempt from being returned. Perishable
              goods such as food, flowers, newspapers or magazines cannot be
              returned. We also do not accept products that are intimate or
              sanitary goods, hazardous materials, or flammable liquids or
              gases.
            </p>
            <p>
              Additional non-returnable items: Gift cards Downloadable software
              products Some health and personal care items
            </p>
            <p>
              To complete your return, we require a receipt or proof of
              purchase.
            </p>
            <p>Please do not send your purchase back to the manufacturer.</p>
            <p>
              There are certain situations where only partial refunds are
              granted: (if applicable) Book with obvious signs of use CD, DVD,
              VHS tape, software, video game, cassette tape, or vinyl record
              that has been opened. Any item not in its original condition, is
              damaged or missing parts for reasons not due to our error. Any
              item that is returned more than 30 days after delivery
            </p>
            <p>
              Refunds (if applicable) Once your return is received and
              inspected, we will send you an email to notify you that we have
              received your returned item. We will also notify you of the
              approval or rejection of your refund. If you are approved, then
              your refund will be processed, and a credit will automatically be
              applied to your credit card or original method of payment, within
              a certain amount of days.
            </p>
            <p>
              Late or missing refunds (if applicable) If you haven't received a
              refund yet, first check your bank account again. Then contact your
              credit card company, it may take some time before your refund is
              officially posted. Next contact your bank. There is often some
              processing time before a refund is posted. If you've done all of
              this and you still have not received your refund yet, please
              contact us at info@fggroup.in.
            </p>
            <p>
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                Sale items (if applicable)
              </h4>
              <br /> Only regular priced items may be refunded, unfortunately
              sale items cannot be refunded.
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                Exchanges (if applicable)
              </h4>
              <br /> We only replace items if they are defective or damaged. If
              you need to exchange it for the same item, send us an email at
              info@fggroup.in and send your item to: A- 301, Ambrosia Business
              Hub, VIP Road, beside SMC Garden, Vesu, Surat, Gujarat 395007.
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                Gifts
              </h4>
              <br /> If the item was marked as a gift when purchased and shipped
              directly to you, you'll receive a gift credit for the value of
              your return. Once the returned item is received, a gift
              certificate will be mailed to you. If the item wasn't marked as a
              gift when purchased, or the gift giver had the order shipped to
              themselves to give to you later, we will send a refund to the gift
              giver and he will find out about your return.
              <br />
              <br />
              <h4
                className="text-dark"
                style={{
                  fontWeight: "600",
                  fontFamily: "roboto",
                  fontSize: "20px",
                }}
              >
                Shipping
              </h4>
              <br /> To return your product, you should mail your product to: A-
              301, Ambrosia Business Hub, VIP Road, beside SMC Garden, Vesu,
              Surat, Gujarat 395007. You will be responsible for paying for your
              own shipping costs for returning your item. Shipping costs are
              non-refundable. If you receive a refund, the cost of return
              shipping will be deducted from your refund. Depending on where you
              live, the time it may take for your exchanged product to reach
              you, may vary. If you are shipping an item over 200/- Rs, you
              should consider using a trackable shipping service or purchasing
              shipping insurance. We don't guarantee that we will receive your
              returned item.
            </p>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}

export default UserOrder;
