import 'Components/Button/Button.scss';

const Button = ({ type, text }) => {
  return (
    <button className={type === 'wishList' ? 'Button wishList' : 'Button'}>
      {text}
    </button>
  );
};

export default Button;
