const LoginInput = ({ username, setUsername }) => {
  const handleValueChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <input
      className="l_page_input"
      value={username}
      onChange={handleValueChange}
    />
  );
};

export default LoginInput;
