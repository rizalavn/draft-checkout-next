const Main = () => null;
const Aside = () => null;

export default function Default({ children, ...rest }) {
  const main = children.find((el) => el.type === Main);
  const aside = children.find((el) => el.type === Aside);

  return (
    <div>
      <header className="header">
        <div className="shopInfo">
          <img
            className="shopInfo__logo"
            src="/assets/PhotoProfile.png"
            alt="Nike"
          />
          <div>
            <h3 className="shopInfo__brandName">Nike Indonesia</h3>
            <p className="shopInfo__info">support@nike.id</p>
            <p className="shopInfo__info">(0751) 89999999</p>
          </div>
        </div>
        <div className="poweredBy">
          <p className="poweredBy__text">Powered By:</p>
          <img
            className="poweredBy__avanaLogo"
            src="/assets/Colored.png"
            alt="Avana Logo"
          />
        </div>
      </header>

      <div className="sectionWrapper" {...rest}>
        <section {...main.props}>
          {main.props.children ? main.props.children : null}
        </section>
        <section {...aside.props}>
          {aside.props.children ? aside.props.children : null}
        </section>
      </div>

      <footer className="footer">
        <div className="footer__nav">
          <ul className="footer__menu">
            <li className="footer__menuList">
              <a className="footer__link" href="#">
                Term & Condition
              </a>
            </li>
            <li className="footer__menuList">
              <a className="footer__link" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
          <div className="footer__logoWrapper">
            <img
              className="footer__logo"
              src="/assets/image76.png"
              alt="Logo"
            />
            <img
              className="footer__logo"
              src="/assets/ManualPayment.png"
              alt="Manual Payment"
            />
          </div>
        </div>
        <p className="footer__copyright">
          © Copyright Reserved 2021. Social Commerce powered by AVANA (formerly
          Square.my)
        </p>
      </footer>
    </div>
  );
}

Default.Main = Main;
Default.Aside = Aside;
