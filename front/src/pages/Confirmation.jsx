import { useParams } from "react-router-dom";

const Confirmation = () => {
  const { orderId } = useParams();

  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock" id="limitedWidthBlock">
        <div className="confirmation">
          <p>
            Commande validée ! <br />
            Votre numéro de commande est : <span id="orderId">{orderId}</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Confirmation;
