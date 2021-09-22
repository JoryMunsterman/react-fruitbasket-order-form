function Button({children, buttonHandler, buttonClassName}) {

    return (
        <>
            <button className={buttonClassName}
                    onClick={buttonHandler}>{children}</button>
        </>
    )
}

export default Button;