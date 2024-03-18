"use client";

import ImageWelcome from "@/app/Organism/ImageWelcome";
import LoginForm from "@/app/Organism/LoginForm/Index";
import React from "react";
import "./Login.scss";

export default function LoginPage() {
  return (
    <div className="login">
      <div className="login login-form">
        <LoginForm />
      </div>
      <div className="login image-welcome">
        <ImageWelcome />
      </div>
    </div>
  );
}
