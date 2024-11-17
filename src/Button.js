function Button({text, func}) {
    return (
        <button style = {{
            backgroundColor: "black",
            border: "10px",
            color: "white",
            padding: "10px 20px",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 8px",
            cursor: "pointer",
            borderRadius: "15px",
            outlineColor: "blue",
            outlineStyle: "solid",
        }} onClick={func}>{text}</button>
    )
}

export default Button;