export default function Account() {
  return (
    <section className="account">
      <div className="account__content__wrapper">
        <h3 className="account__title">Argent Bank Checking (x8349)</h3>
        <p className="account__amount">$2,082.79</p>
        <p className="account__amount__description">Available Balance</p>
      </div>
      <div className="account__content__wrapper cta">
        <button className="button transaction">View transactions</button>
      </div>
    </section>
  );
}
