import './Button.scss';

const Button = ({ color, functionType, text }) => {
  return (
    <button className={`button ${color}`} onClick={functionType}>
      {text}
    </button>
  );
};

export default Button;
