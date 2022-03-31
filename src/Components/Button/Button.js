import 'Components/Button/Button.scss';

const Button = ({ type, text }) => {
  return (
    <button className={type === 'white' ? 'Button white' : 'Button'}>
      {text}
    </button>
  );
};

export default Button;
