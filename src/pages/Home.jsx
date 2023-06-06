import Feature from "../components/Feature";
import chatIcon from "../assets/images/icon-chat.png";
import moneyIcon from "../assets/images/icon-money.png";
import securityIcon from "../assets/images/icon-security.png";

export default function Home() {
  return (
    <>
      <div className="hero">
        <section className="hero__content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      <section className="feature">
        <h2 className="sr-only">Features</h2>
        <Feature
          imageSrc={chatIcon}
          imageAlt="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          imageSrc={moneyIcon}
          imageAlt="Money Icon"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          imageSrc={securityIcon}
          imageAlt="Security Icon"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </>
  );
}
