import './Button.scss';

const Button = ({ color, functionType, text, id }) => {
  return (
    <button id={id} className={`button ${color}`} onClick={functionType}>
      {text}
    </button>
  );
};

export default Button;
