// The following tools were utilized during this assignment: Claude (helped structure the controlled form and conditional rendering logic based on class example)
import React, {useState , useEffect} from "react";

function ProductCalculator() {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [finalAmount, setFinalAmount] = useState(0);
    const [calculated, setCalculated] = useState(false);

    useEffect(() => {
        document.title = `Final Amount: Rs. ${finalAmount}`;
    }, [finalAmount]);

    const handleCalculate = () => {
        const subTotal = price * quantity;
        const discountAmt = (subTotal * discount) / 100;
        const finalAmt = subTotal - discountAmt;

        setSubtotal(subTotal);
        setDiscountAmount(discountAmt);
        setFinalAmount(finalAmt);
        setCalculated(true);
    }
    return (
        <div>
            <h2>Product Calculator</h2>

            <div>
                <label>Price: </label>
                <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
            </div>
            <div>
                <label>Quantity: </label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
            </div>
            <div>
                <label>Discount (%): </label>
                <input type="number" value={discount} onChange={(e) => setDiscount(parseFloat(e.target.value))} />
            </div>
            <button onClick={handleCalculate}>Calculate</button>

            {calculated && (
                <div>
                    <p>--------------------------------</p>
                    <p>Subtotal: Rs. {subtotal.toLocaleString()}</p>
                    <p>Discount: Rs. {discountAmount.toLocaleString()}</p>
                    <p>Final Amount: Rs. {finalAmount.toLocaleString()}</p>
                    <p>--------------------------------</p>

                    {finalAmount > 5000 ? (
                        <p><strong>Free Delivery</strong></p>
                    ) : (
                        <p><strong>Delivery Charge: Rs. 350</strong></p>
                    )}
                </div>
            )}
        </div>
    );
}

export default ProductCalculator;