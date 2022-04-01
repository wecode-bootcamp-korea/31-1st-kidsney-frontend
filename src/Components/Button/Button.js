import './Button.scss';

const Button = ({ type, text, showMyBag }) => {
  return (
    <button
      className={type === 'white' ? 'button white' : 'button'}
      onClick={showMyBag}
    >
      {text}
    </button>
  );
};

export default Button;
