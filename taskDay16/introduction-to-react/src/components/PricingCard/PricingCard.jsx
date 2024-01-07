import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'

export default function PricingCard({
    label,
    num,
    status,
    date,
    benefits
}) {
    return (
        <div>
            <div className="border border-[#F1F1F3] bg-[#FCFCFD] rounded-[12px] py-[20px] px-[10px] md:py-[40px] md:px-[25px]">
                <div className="border border-[#FFEACC] rounded-[6px] bg-[#FFF9F0]  py-[12px] px-[22px] flex justify-center">
                    <span className="font-[500] text-[18px] text-[#262626]">{label}</span>
                </div>
                <div className="flex justify-center my-5">
                    <span className="text-[60px] font-[700]">{num}<span className="font-[500] text-[16px]">{date}</span></span>
                </div>
                <div className="border border-[#F1F1F3] rounded-[14px] pt-[20px] bg-white">
                    <div className="flex justify-center mb-5 px-[20px]">
                        <span className="font-[500] text-[18px] text-[#262626]">{status}</span>
                    </div>
                    <div className="flex justify-center p-[10px] md:px-[20px]">
                        <ul>
                            <div>
                                {benefits.map((benefit) => {
                                    return (
                                        <div className="flex items-center border border-[#F1F1F3] rounded-[8px] p-[8px] md:p-[14px] gap-3 mb-5" key={benefit}>
                                            <FontAwesomeIcon icon={faCheck} className="bg-[#FFF9F0] p-2 rounded-[6px] text-[#262626]" />
                                            <li>{benefit}</li>
                                        </div>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <Button
                        label="Get Started"
                        type='button'
                        styles="bg-[#FF9500] py-[20px] rounded-bl-[8px] rounded-br-[8px] w-[100%] text-white text-[15px] font-[600] hover:bg-[#ff9500f3] transition ease-in-out duration-200"
                    />
                </div>
            </div>
        </div>
    )
}