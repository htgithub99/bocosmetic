import MainContainer from "components/MainContainer";
import PaymentForm from "./PaymentForm";
import PaymentListProduct from "./PaymentListProduct";
import styles from "./styles.module.scss";

const Payment = () => {
  return (
    <MainContainer>
      <div className={styles.wrapPayment}>
        <div className={styles.payment_form}>
          <PaymentForm />
        </div>
        <div className={styles.payment_info}>
          <PaymentListProduct />
        </div>
      </div>
    </MainContainer>
  );
};

export default Payment;
