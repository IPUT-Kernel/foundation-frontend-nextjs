import { useState } from "react";

import axios from "axios";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function Illustration() {
  const [username, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false); 
 
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const domainRegex = /@tks\.iput\.ac\.jp$/i;
    return emailRegex.test(email) && domainRegex.test(email);
  };

  const validateUsername = (username) => {
    return username.length >= 6;
  };

  const passwordsMatch = () => {
    return registerPassword === passwordConfirmation;
  };
 
  async function registerCall(credentials) {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
      if (response.ok) {
        // 登録が成功したら何かの処理を行う（例：ユーザーをログインページにリダイレクトさせるなど）
      } else {
        // エラーメッセージを表示するなど、エラーハンドリングの処理を行う
        alert(data.message || "登録に失敗しました");
      }
    } catch (err) {
      console.error("登録リクエスト中にエラーが発生しました:", err);
    }
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateUsername(username)) {
      alert("ユーザー名は6文字以上で入力してください");
      return;
    }
  
    if (!validateEmail(registerEmail)) {
      alert("無効なメールアドレスです");
      return;
    }
  
    if (!registerPassword) {
      alert("パスワードを入力してください");
      return;
    }

    if (!passwordsMatch()) {
      alert("パスワードとパスワード確認が一致していません");
      return;
    }
  
    if (!agreeToTerms) {
      alert("利用規約に同意してください");
      return;
    }

    // 実際にAPIにPOSTリクエストを送信する
    registerCall({ email: registerEmail, username: username, password: registerPassword });
  };
  
  return (
    <IllustrationLayout
      title="アカウント作成"
      description="大学のメールアドレスが必要です。"
      illustration={bgImage}
    >
      <MDBox component="form" role="form" onSubmit={handleSubmit}>
        <MDBox mb={2}>
          <MDInput type="username" 
            fullWidth
            value={username}
            onChange={(e) => setRegisterUsername(e.target.value)}
            />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="email" 
            label="Email:********@tks.iput.ac.jp"
            fullWidth
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            />
        </MDBox>
        <MDBox mb={2}>
          <MDInput 
            type="password" 
            label="Password" 
            fullWidth
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            
            />
        </MDBox>
        <MDBox mb={2}>
          <MDInput 
            type="password" 
            label="Confirm Password" 
            fullWidth
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            
            />
        </MDBox>

        <MDBox display="flex" alignItems="center" ml={-1}>
          <Checkbox 
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          
          <MDTypography
            component="a"
            href="#"
            variant="button"
            fontWeight="bold"
            color="info"
            textGradient="test"
          >
            利用規約
          </MDTypography>
          <MDTypography
            variant="button"
            fontWeight="regular"
            color="text"
            sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
          >
            &nbsp;&nbsp;に同意します。&nbsp;
          </MDTypography>
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton 
           variant="gradient" 
           color="info" 
           size="large" 
           fullWidth
           type="submit"
           >
            sign in
          </MDButton>
        </MDBox>
        <MDBox mt={3} textAlign="center">
          <MDTypography variant="button" color="text">
            Don&apos;t have an account?{" "}
            <MDTypography
              component={Link}
              to="/authentication/sign-up/cover"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>
    </IllustrationLayout>
  );
}

export default Illustration;
