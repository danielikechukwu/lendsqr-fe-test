import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-section">
        <div className="login-illustration">
          <h1>Login illustration</h1>
        </div>
      </div>

      <div className="right-section">
        <div className="login-form">
          <div className="login-form-text">
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
          </div>

          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <h6>FORGOT PASSWORD?</h6>

            <button type="submit" className="btn btn-primary w-100">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
