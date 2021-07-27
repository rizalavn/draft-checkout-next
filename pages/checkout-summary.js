import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../components/layout/Default";
import { Button, RadioButton } from "../components/ui";
import { Chevron, Wallet, OnlineBanking } from "../components/icons";

import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const IMGS = [image2, image3, image4];

const DUMMY = [
  {
    id: 0,
    imgs: IMGS,
    name: "SoleCourt Shoes",
    size: "41",
    price: "MYR 706",
    counter: 1,
    discountLabel: "Up to 40%",
    detail: "Loremipsum dolor sit emt",
  },
  {
    id: 1,
    imgs: IMGS,
    name: "SoleCourt Shoes",
    size: "41",
    price: "MYR 706",
    counter: 1,
    discountLabel: "Up to 40%",
    detail: "Loremipsum dolor sit emt",
  },
  {
    id: 2,
    imgs: IMGS,
    name: "SoleCourt Shoes",
    size: "41",
    price: "MYR 706",
    counter: 1,
    discountLabel: "Up to 40%",
    detail: "Loremipsum dolor sit emt",
  },
];

const CheckoutLanding = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState(Number(0));

  return (
    <>
      <Head>
        <title>Checkout Summary</title>
        <meta name="description" content="Checkout Summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <Layout.Main className="summaryCard">
          <div
            className="summaryCard__wrapper"
            style={{ background: "transparent" }}
          >
            <div>
              <h3 className="summaryCard__title">Product Summary</h3>
            </div>
            <div className="summaryCard__body">
              {DUMMY.map((item) => {
                return (
                  <div key={item.id} className="summaryCard__body__item">
                    <div>
                      <img src={item.imgs[0]} alt={item.name} />
                    </div>
                    <div>
                      <span>{item.name}</span>
                      <span>{item.size}</span>
                      <span>
                        {item.counter}x @{item.price}
                      </span>
                    </div>
                    <div>
                      <span>{item.price}</span>
                    </div>
                  </div>
                );
              })}
              <hr />
              <div className="summaryCard__body__detail">
                <div>
                  <span>Subtotal</span>
                  <span>MYR 1,630</span>
                </div>
                <div>
                  <span>Discount</span>
                  <span>- MYR 100</span>
                </div>
                <div>
                  <span>Shipping Cost</span>
                  <span>MYR 10</span>
                </div>
              </div>
              <hr />
              <div className="summaryCard__body__total">
                <div>
                  <span>Total</span>
                  <span>IDR 74,000</span>
                </div>
              </div>
            </div>
          </div>
        </Layout.Main>

        <Layout.Aside className="summaryCard">
          <div className="summaryCard__wrapper">
            <div>
              <h3 className="summaryCard__title">Select Payment Method</h3>
            </div>
            <div className="paymentMethod">
              <RadioButton
                name="avapay"
                value="avapay"
                label={
                  <div className="paymentMethod__label">
                    <Wallet />
                    <span>AVApay (rekening bersama)</span>
                  </div>
                }
                checked={paymentMethod === "avapay"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <RadioButton
                name="online-banking"
                value="online-banking"
                label={
                  <div className="paymentMethod__label">
                    <OnlineBanking />
                    <span>OnlineBanking</span>
                  </div>
                }
                checked={paymentMethod === "online-banking"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
          </div>
          <div className="summaryCard__actions">
            <Button
              variant="text"
              style={{ padding: 0 }}
              onClick={() => router.push("/")}
            >
              <Chevron
                style={{ padding: "8px", transform: "rotate(180deg)" }}
              />
              Back to Order
            </Button>
            <Button>Pay Now</Button>
          </div>
        </Layout.Aside>
      </Layout>
    </>
  );
};

export default CheckoutLanding;
