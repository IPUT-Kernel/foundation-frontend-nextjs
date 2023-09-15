import React, {useState} from "react";
// react-router-dom components
import { Link } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";


// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
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
    
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
           Register
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
           大学のメールアドレスとパスを入力してください。 
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDInput 
              type="text"
              label="Username"
              variant="standard"
              value={username}
              onChange={(e) => setRegisterUsername(e.target.value)}
              fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email"
                label="Email: ********@tks.iput.ac.jp"
                variant="standard"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                
                fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" 
                label="Password" 
                variant="standard" 
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
                type="password" 
                label="Confirm Password" 
                variant="standard" 
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                fullWidth />
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
                onClick={handleSubmit} 
                fullWidth
                >
               登録 
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                アカウントをすでにお持ち?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in/illustration"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  ログイン
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}
export default Cover;