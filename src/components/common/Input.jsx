function Input({
    name,
    placeholder,
    type,
    value,
    className,
    onChange,
  }) {
    return (
      <input
        type={type}
        name={name}
        value={value}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }

  export default Input