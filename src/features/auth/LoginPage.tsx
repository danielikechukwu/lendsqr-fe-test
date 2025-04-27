import styles from "./LoginPage.module.scss";
import loginImage from "../../assets/login-image.svg";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { Login } from "./types";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState<Login>({
    name: "",
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState<boolean>(false);

  const [loading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

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
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isValid) {
      setIsLoading(true);

      //Convert object to JSON string, and store in localStorage.
      localStorage.setItem("user", JSON.stringify(formData));

      //Setting login details to localStorage.
      setTimeout(() => {
        setIsLoading(false);
        navigate("/dashboard");
      }, 3000);
    }
  };

  return (
    <div className={styles.loginContainer}>

      <div className={`${styles.leftSection}`}>
        <div className={`${styles.loginIllustration}`}>
          <div
            style={{
              display: 'block',
              paddingBottom: "17%",
              minWidth: "300px"
            }}
          >
            <img
              src={logo}
              alt="logo"
              width="200px"
              height="auto"
              style={{ flexShrink: 0 }}
            />
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={loginImage}
              alt="login-image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.rightSection}`}>
        <div className={`${styles.loginFormContainer}`}>

          {/* Login Logo image */}
          <div className={`${styles.loginFormLogo}`}>
            <img
              src={logo}
              alt="logo"
              width="200px"
              height="auto"
              style={{ flexShrink: 0 }}
            />
          </div>

          {/* Login form */}
          <div className={`${styles.loginForm}`}>

            <div className={`${styles.loginFormText}`}>
              <h2>Welcome!</h2>
              <p>Enter details to login.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${styles.formControl}`}
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
                  className={`form-control ${styles.formControl}`}
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <div className={`${styles.passwordWrapper}`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`form-control ${styles.formControl}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <span
                    className={`${styles.toggleShow}`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </span>
                </div>
              </div>

              <h6>FORGOT PASSWORD?</h6>

              <button
                type="submit"
                disabled={loading}
                className={`btn w-100 ${
                  isValid
                    ? `${styles.validBtnPrimary}`
                    : `${styles.invalidBtnPrimary}`
                }`}
              >
                LOG IN
                {/* tiny spinner for loading */}
                {loading && (
                  <span
                    className={`spinner-border spinner-border-sm ${styles.spinnerBorder}`}
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
