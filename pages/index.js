import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../components/layout/Default";
import {
  Alert,
  Button,
  Dropdown,
  ImageSlider,
  Input,
  Label,
  Modal,
} from "../components/ui";
import {
  Close,
  Expand,
  Plus,
  Minus,
  Facebook,
  Google,
} from "../components/icons";

const IMGS = ["/assets/image2.png", "/assets/image3.png", "/assets/image4.png"];
const ddoption = [
  { id: 0, name: "Test", value: "test" },
  { id: 1, name: "CobeSasssss", value: "Cobe" },
  { id: 2, name: "Goiro", value: "Goiro" },
  { id: 3, name: "Iyoi", value: "Iyoi" },
];

const DUMMY = [
  {
    id: 0,
    imgs: IMGS,
    name: "SoleCourt Shoes",
    price: "MYR 706",
    counter: 1,
    discountLabel: "Up to 40%",
    detail: "Loremipsum dolor sit emt",
  },
  {
    id: 1,
    imgs: IMGS,
    name: "SoleCourt Shoes",
    price: "MYR 706",
    counter: 1,
    discountLabel: "Up to 40%",
    detail: "Loremipsum dolor sit emt",
  },
  {
    id: 2,
    imgs: IMGS,
    name: "SoleCourt Shoes",
    price: "MYR 706",
    counter: 1,
    discountLabel: "Up to 40%",
    detail: "Loremipsum dolor sit emt",
  },
];
const shippingAddress = {
  subtotal: "MYR 1,630",
  total: "MYR 1,630",
};

export default function Home() {
  const router = useRouter();
  const { isShowing: isModalShowing, toggle: onToggleModal } = Modal.useModal();
  const [couponCode, setCouponCode] = useState();
  const [isCouponEnabled, setIsCouponEnabled] = useState({
    state: false,
    code: undefined,
  });

  return (
    <>
      <Head>
        <title>Checkout Page</title>
        <meta name="description" content="Checkout Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={{ display: "flex" }}>
        <Layout.Main className="productSummary" style={{ flex: 1 }}>
          <div className="productSummary__head">
            <h3 className="productSummary__title">Product Summary</h3>
            <Button variant="icon" icon={true}>
              <Expand />
            </Button>
          </div>

          {DUMMY.map((item) => {
            return (
              <div key={item.id} className="productContainer">
                <div>
                  <ImageSlider srcs={item.imgs} />
                </div>
                <div className="productDetails productContainer__details">
                  <h5 className="productDetails__name">{item.name}</h5>
                  <h6 className="productDetails__price">
                    <Label>{item.discountLabel}</Label>
                    <del>{item.price}</del>
                  </h6>
                  <h6 className="productDetails__price">{item.price}</h6>

                  <Dropdown
                    placeholder="Select Size"
                    options={ddoption}
                    style={{
                      width: "100%",
                      marginTop: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />

                  <div className="productContainer__counter">
                    <Button variant="outlined" icon={true}>
                      <Minus />
                    </Button>
                    <span>{item.counter}</span>
                    <Button variant="outlined" icon={true}>
                      <Plus />
                    </Button>
                  </div>

                  <div className="productDescription productContainer__description">
                    <h6 className="productDescription__title">Description</h6>
                    <div className="productDescription__desc show-hide-text">
                      <a
                        id={`show-${item.id}-more`}
                        className="show-less"
                        href={`#show-${item.id}-less`}
                      >
                        Show less
                      </a>
                      <a
                        id={`show-${item.id}-less`}
                        className="show-more"
                        href={`#show-${item.id}-more `}
                      >
                        Show more
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dictum nunc gravida viverra pellentesque amet, nisl,
                        nunc, purus. Aliquam pellentesque arcu, rhoncus lobortis
                        auctor. Mollis vitae non massa neque suspendisse sed
                        nunc nisl arcu. Et congue enim accumsan, turpis sed.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Layout.Main>

        <Layout.Aside className="shippingAddress">
          <div className="shippingAddress__head">
            <span>
              Returning customer? Login with &nbsp; <Facebook />
              &nbsp;
              <Google />
            </span>
            {isCouponEnabled.state ? (
              <Alert>
                <span>{couponCode}</span>
                <Button
                  variant="icon"
                  style={{ padding: 0, background: "transparent" }}
                  onClick={() => {
                    setIsCouponEnabled({ state: false, code: undefined });
                  }}
                >
                  <Close />
                </Button>
              </Alert>
            ) : (
              <span>
                Have a coupon?&nbsp;
                <Button variant="text" onClick={onToggleModal}>
                  Click here to enter your code
                </Button>
                <Modal isShowing={isModalShowing} onHide={onToggleModal}>
                  <div className="shippingAddress__head__modal">
                    <div>
                      <h3>Coupon & Promo Code</h3>
                      <Button
                        variant="icon"
                        data-dismiss="modal"
                        aria-label="Close"
                        style={{ background: "transparent" }}
                        onClick={onToggleModal}
                      >
                        <Close aria-hidden="true" />
                      </Button>
                    </div>
                    <div>
                      <Input
                        label="Coupon Redemption Code"
                        placeholder="Enter the code here"
                        block={true}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          setIsCouponEnabled({ state: true, code: couponCode });
                          onToggleModal();
                        }}
                      >
                        Use coupon
                      </Button>
                    </div>
                  </div>
                </Modal>
              </span>
            )}
          </div>
          <div>
            {/* <form> */}
            <div className="shippingAddress__form">
              <h5>Shipping Address</h5>
              <div className="shippingAddress__form__name">
                <Input
                  label="First Name"
                  placeholder="Your first name"
                  block={true}
                />
                <Input
                  label="Last Name"
                  placeholder="Your last name"
                  block={true}
                />
              </div>
              <Input
                label="Phone Number"
                placeholder="Your phone number"
                block={true}
              />
              <Input label="Email" placeholder="Your email" block={true} />
              <Input
                label="Address Line 1"
                placeholder="Your address line 1"
                block={true}
              />
              <Input
                label="Address Line 2 (optional)"
                placeholder="Your address line 2"
                block={true}
              />
              <Input
                label="Zip/Postal Code"
                placeholder="Your zip/postal code"
                block={true}
              />
              <Dropdown
                label="Country"
                placeholder="Select a country"
                options={ddoption}
                block={true}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <Dropdown
                label="State/Province"
                placeholder="Select a state/province"
                options={ddoption}
                block={true}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <Dropdown
                label="City"
                placeholder="Select a city"
                options={ddoption}
                block={true}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <hr />
              <Input
                label="Zip/Postal Code"
                placeholder="Your zip/postal code"
                block={true}
              />
            </div>
            <div className="shippingAddress__form__summary">
              <div>
                <span>Subtotal</span>
                <span>{shippingAddress.subtotal}</span>
              </div>
              <div>
                <span>Total</span>
                <span>{shippingAddress.total}</span>
              </div>
            </div>
            <div className="shippingAddress__form__submit">
              <Button block={true} onClick={() => router.push("/summary")}>
                Choose Payment
              </Button>
            </div>
            {/* </form> */}
          </div>
        </Layout.Aside>
      </Layout>
    </>
  );
}
