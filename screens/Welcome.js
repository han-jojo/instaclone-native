import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogIn = () => navigation.navigate("LogIn");
  return (
    <AuthLayout>
      <AuthButton
        text="회원가입"
        disabled="{false}"
        onPress={goToCreateAccount}
      />
      <AuthButton
        text="로그인"
        disabled="{false}"
        onPress={goToLogIn}
      />
    </AuthLayout>
  );
}
