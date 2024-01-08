const Button = ({children, type, handleEvent}) => {
    return (
        <button typeof={type} className="bg-[#c75701] px-3 py-[6px] rounded-[5px] active:scale-95 text-[#eee]" onClick={handleEvent}>{children}</button>
    )
}

export default Button;