import "./LoginPage.scss";
import loginImage from "../../assets/login-image.svg";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { Login } from "./types";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState<Login>({
    name: "",
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState<boolean>(false);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      emailRegex.test(formData.email) &&
      formData.password.trim() !== "" &&
      formData.name.trim() !== ""
    );
  };

  //Perform side effect, whenever formData change update isValid
  useEffect(() => {
    setIsValid(validateForm());
  }, [formData]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isValid) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="login-illustration">
          <div style={{ paddingBottom: "17%" }}>
            <img src={logo} alt="logo" />
          </div>
          <div style={{ width: "100%", maxWidth: "100%", marginBottom: "17%" }}>
            <img
              src={loginImage}
              alt="login-image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="login-form">
          <div className="login-form-text">
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="First name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="toggle-show"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </span>
              </div>
            </div>

            <h6>FORGOT PASSWORD?</h6>

            <button
              type="submit"
              className={`btn w-100 ${
                isValid ? "valid-btn-primary" : "invalid-btn-primary"
              }`}
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
