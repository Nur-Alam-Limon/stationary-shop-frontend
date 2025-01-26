import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';  
import { Input } from '@/components/ui/input';  
import { Link } from 'react-router-dom';  
import { useLoginMutation, useRegisterUserMutation } from '@/features/auth/authApi';

type LoginFormData = {
  email: string;
  password: string;
};

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();  // Specify the type for form data
  const [login] = useLoginMutation();
  const [registerUser] = useRegisterUserMutation()
  
  const onLoginSubmit: SubmitHandler<LoginFormData> = (data) => {
    login(data)
      .unwrap()
      .then(response => {
        console.log('Login Success', response);
      })
      .catch(error => {
        console.error('Login Error', error);
      });
  };

  const onRegisterSubmit: SubmitHandler<RegisterFormData> = (data) => {
    registerUser(data)
      .unwrap()
      .then(response => {
        console.log('Registration Success', response);
      })
      .catch(error => {
        console.error('Registration Error', error);
      });
  };

  return (
    <div className="py-36 flex items-center justify-center bg-gray-50">
      <div className="w-1/2 bg-center pr-12">
        <img src="login.png" alt="login" className="w-60% h-auto" />
      </div>
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between mb-6">
          <Link to="/login" 
                className={`text-lg font-medium ${!isRegistering ? 'text-purple-600' : 'text-gray-400'}`} 
                onClick={() => setIsRegistering(false)}>
            Login
          </Link>
          <Link to="/login" 
                className={`text-lg font-medium ${isRegistering ? 'text-purple-600' : 'text-gray-400'}`} 
                onClick={() => setIsRegistering(true)}>
            Register
          </Link>
        </div>

        {isRegistering ? (
          <form onSubmit={handleSubmit(onRegisterSubmit)}>
            <h2 className="text-2xl font-semibold text-center mb-8">Create Your Account</h2>
            <div className="mb-4">
              <Input 
                type="text" 
                placeholder="Full Name" 
                {...register('name', { required: 'Name is required' })} 
                className="w-full py-6" 
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <Input 
                type="email" 
                placeholder="Email Address" 
                {...register('email', { required: 'Email is required' })} 
                className="w-full py-6" 
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <Input 
                type="password" 
                placeholder="Password" 
                {...register('password', { required: 'Password is required' })} 
                className="w-full py-6" 
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <Button type="submit" variant="outline" size="lg" className="w-full mt-6 py-6 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300">
              Register
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onLoginSubmit)}>
            <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back!</h2>

            <div className="mb-4">
              <Input 
                type="email" 
                placeholder="Email Address" 
                {...register('email', { required: 'Email is required' })} 
                className="w-full py-6" 
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <Input 
                type="password" 
                placeholder="Password" 
                {...register('password', { required: 'Password is required' })} 
                className="w-full py-6" 
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <Button type="submit" variant="outline" size="lg" className="w-full mt-6 py-6 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300">
              Login
            </Button>
          </form>
        )}
      </div>

      
    </div>
  );
};
