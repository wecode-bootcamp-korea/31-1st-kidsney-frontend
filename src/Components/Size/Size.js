import './Size.scss';

const Size = ({ handleSize, text, value }) => {
  return (
    <label className="Size">
      <input
        type="checkbox"
        name="sizeOption"
        value={value}
        onClick={handleSize}
      />
      <span>{text}</span>
    </label>
  );
};

export default Size;
