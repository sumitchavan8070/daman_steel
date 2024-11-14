import React, { useState } from 'react';

// Define CSSProperties to explicitly type your styles
import { CSSProperties } from 'react';

const LoginForm: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  // Explicitly typing the styles object
  const styles: { [key: string]: CSSProperties } = {
    body: {
      margin: 0,
      color: "#6a6f8c",
      background: "#c8c8c8",
      font: "600 16px/18px 'Open Sans', sans-serif",
    },
    loginWrap: {
      width: "100%",
      margin: "auto",
      maxWidth: "525px",
      minHeight: "670px",
      position: "relative", // Ensure 'relative' is a valid position value
      background: "url('https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg') no-repeat center",
      boxShadow: "0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)",
    },
    loginHtml: {
      width: "100%",
      height: "100%",
      position: "absolute", // Ensure 'absolute' is a valid position value
      padding: "90px 70px 50px 70px",
      background: "rgba(40,57,101,.9)",
    },
    tab: {
      fontSize: "22px",
      marginRight: "15px",
      paddingBottom: "5px",
      margin: "0 15px 10px 0",
      display: "inline-block",
      borderBottom: "2px solid transparent",
    },
    signInTab: {
      color: "#fff",
      borderColor: "#1161ee",
    },
    signUpTab: {
      color: "#fff",
      borderColor: "#1161ee",
    },
    loginForm: {
      minHeight: "345px",
      position: "relative", // Ensure 'relative' is a valid position value
      perspective: "1000px",
      transformStyle: "preserve-3d",
    },
    group: {
      marginBottom: "15px",
    },
    label: {
      color: "#aaa",
      fontSize: "12px",
    },
    input: {
      width: "100%",
      color: "#fff",
      display: "block",
      border: "none",
      padding: "15px 20px",
      borderRadius: "25px",
      background: "rgba(255,255,255,.1)",
    },
    button: {
      width: "100%",
      border: "none",
      padding: "15px 20px",
      borderRadius: "25px",
      background: "#1161ee",
    },
    hr: {
      height: "2px",
      margin: "60px 0 50px 0",
      background: "rgba(255,255,255,.2)",
    },
    footLnk: {
      textAlign: "center",
    },
  };

  return (
    <div style={styles.loginWrap}>
      <div style={styles.loginHtml}>
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="sign-in"
          checked={isSignIn}
          onChange={() => setIsSignIn(true)}
        />
        <label
          htmlFor="tab-1"
          className="tab"
          style={isSignIn ? styles.signInTab : undefined}
        >
          Sign In
        </label>
        <input
          id="tab-2"
          type="radio"
          name="tab"
          className="sign-up"
          checked={!isSignIn}
          onChange={() => setIsSignIn(false)}
        />
        <label
          htmlFor="tab-2"
          className="tab"
          style={!isSignIn ? styles.signUpTab : undefined}
        >
          Sign Up
        </label>

        <div style={styles.loginForm}>
          {/* Sign In Form */}
          {isSignIn ? (
            <div className="sign-in-htm">
              <div style={styles.group}>
                <label htmlFor="user" style={styles.label}>Username</label>
                <input id="user" type="text" style={styles.input} />
              </div>
              <div style={styles.group}>
                <label htmlFor="pass" style={styles.label}>Password</label>
                <input id="pass" type="password" style={styles.input} data-type="password" />
              </div>
              <div style={styles.group}>
                <input id="check" type="checkbox" className="check" checked />
                <label htmlFor="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div style={styles.group}>
                <input type="submit" value="Sign In" style={styles.button} />
              </div>
              <div style={styles.hr}></div>
              <div style={styles.footLnk}>
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
          ) : (
            // Sign Up Form
            <div className="sign-up-htm">
              <div style={styles.group}>
                <label htmlFor="user" style={styles.label}>Username</label>
                <input id="user" type="text" style={styles.input} />
              </div>
              <div style={styles.group}>
                <label htmlFor="pass" style={styles.label}>Password</label>
                <input id="pass" type="password" style={styles.input} data-type="password" />
              </div>
              <div style={styles.group}>
                <label htmlFor="pass" style={styles.label}>Repeat Password</label>
                <input id="pass" type="password" style={styles.input} data-type="password" />
              </div>
              <div style={styles.group}>
                <label htmlFor="pass" style={styles.label}>Email Address</label>
                <input id="pass" type="text" style={styles.input} />
              </div>
              <div style={styles.group}>
                <input type="submit" value="Sign Up" style={styles.button} />
              </div>
              <div style={styles.hr}></div>
              <div style={styles.footLnk}>
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
