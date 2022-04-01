import './Button.scss';

const Button = ({ type, text, showMyBag, goToMyBag }) => {
  return (
    <button
      className={type === 'white' ? 'button white' : 'button'}
      onClick={type === 'viewFullBag' ? goToMyBag : showMyBag}
    >
      {text}
    </button>
  );
};

export default Button;
