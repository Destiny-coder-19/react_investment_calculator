function UserInput({ label, name, value, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input
        type="number"
        name={name}
        required
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
    </>
  );
}

export default UserInput;
