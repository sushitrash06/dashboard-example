import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import InputComponent from '@/app/Atoms/Input';
import Button from '@/app/Atoms/Button';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const router = useRouter(); // Initialize useRouter

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length === 0) {
      localStorage.setItem('formData', JSON.stringify(formData));
      router.push('/');
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Financial Planz</h1>
      <InputComponent
        placeholder="Insert your email..."
        type="email"
        name="email"
        label={"Email"}
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputComponent
        placeholder="Insert your password..."
        type="password"
        name="password"
        label={"Password"}
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <Button type="submit" text="Login" />
    </form>
  );
};

export default LoginForm;
