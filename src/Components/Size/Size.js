import 'Components/Size/Size.scss';

const Size = ({ text, value }) => {
  return (
    <label className="Size">
      <input type="checkbox" name="sizeOption" value={value} />
      <span>{text}</span>
    </label>
  );
};

export default Size;
