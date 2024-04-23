const LoginButton = ({ onClickHandler, disabled }) => {
  return (
    <button
      onClick={onClickHandler}
      className={
        disabled ? "l_page_login_button_disabled" : "l_page_login_button"
      }
    >
      Login
    </button>
  );
};

export default LoginButton;
