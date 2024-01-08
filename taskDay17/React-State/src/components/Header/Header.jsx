import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Header = ({
    fTitle,
    lTitle,
    homeLabel,
    cartLabel,
}) => {
    const navs = [
        {
            link: "Home"
        },
        {
            link: "Cart"
        },
        {
            link: "Login"
        },
        {
            link: "Sign Up"
        }
    ]

    return (
        <>
            <header>
                <div className={`flex items-center justify-between py-6`}>
                    <h1 className="text-[#eee] text-[25px] font-[600] cursor-pointer">{fTitle}<span className="text-[#c75701]">{lTitle}</span></h1>
                    <nav>
                        <ul className={`text-[#eee] flex gap-[60px]`}>
                            {navs.map(nav => {
                                return (
                                    <li key={nav.link} className={`cursor-pointer`}>{nav.link}</li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </header>
            <div className='flex items-center mt-[50px]'>
                <span className='text-[#eee] text-[14px]'>{homeLabel}
                    <span className='text-[10px] px-2'><FontAwesomeIcon icon={faChevronRight} /></span>
                    <span className='text-[#c75701]'>{cartLabel}</span>
                </span>
            </div>
            <div className='mt-[30px]'>
                <h1 className='font-[600] text-[30px] text-[#c75701]'>{cartLabel}</h1>
            </div>
        </>
    )
}

export default Header;