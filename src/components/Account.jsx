import { PropTypes } from "prop-types";

export default function Account(props) {
  return (
    <section className="account">
      <div className="account__content__wrapper">
        <h3 className="account__title">{props.title}</h3>
        <p className="account__amount">{props.amount}</p>
        <p className="account__amount__description">Available Balance</p>
      </div>
      <div className="account__content__wrapper cta">
        <button className="button transaction">View transactions</button>
      </div>
    </section>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};