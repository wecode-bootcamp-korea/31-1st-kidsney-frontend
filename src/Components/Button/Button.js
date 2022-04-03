import './Button.scss';

const Button = ({ type, text }) => {
  return (
    <button className={type === 'white' ? 'button white' : 'button'}>
      {text}
    </button>
  );
};

export default Button;
