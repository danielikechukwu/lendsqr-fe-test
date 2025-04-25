import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-illustration">
        <h1>Login illustration</h1>
      </div>
      <div className="left-container">
        <div className="login-form">
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
