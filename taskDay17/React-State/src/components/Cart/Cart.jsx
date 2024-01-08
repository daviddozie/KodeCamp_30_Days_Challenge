import Button from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Cart = ({
    image,
    label,
}) => {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(5000);
    const formatPrice = (value) => {
        return value.toLocaleString('en-US');
    };

    const addCount = () => {
        const newCount = count + 1;
        const newPrice = price + 5000;
        setCount(newCount);
        setPrice(newPrice);
    }

    const minusCount = () => {
        if (count > 1) {
            const newCount = count - 1;
            const newPrice = price - 5000;
            setCount(newCount);
            setPrice(newPrice);
        }
    }

    return (
        <>
            <div className="bg-[#262626] rounded-[8px] p-4 flex items-center justify-between mb-5 mt-[50px]">
                <div className="flex items-center gap-5">
                    <div>
                        <img src={image} alt="KFC" className="rounded-[5px]" />
                    </div>
                    <div>
                        <p className="text-[#eee] mb-2">{label}</p>
                        <div className="flex items-center gap-4">
                            <Button handleEvent={addCount}>
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                            <p className="text-[#eee]">{count}</p>
                            <Button handleEvent={minusCount}>
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[#eee]"><FontAwesomeIcon icon={faDollarSign} />{formatPrice(price)}</p>
                </div>
            </div>
        </>
    )
}

export default Cart;