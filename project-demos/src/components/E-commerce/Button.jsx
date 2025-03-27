function Button({handleClick, value, title}) {
  return <button value={value} onClick={handleClick} className="btns">{title}</button>;
}

export default Button;
