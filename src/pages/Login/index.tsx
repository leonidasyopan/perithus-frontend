import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  // const onFinish = values => {
  //   console.log('Received values of form: ', values);
  // };

  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = useCallback(
    async (data: LoginFormData) => {
      try {
        // await login({
        //   email: data.email,
        //   password: data.password,
        // });

        history.push('/dashboard');
      } catch (err) {
        console.log(err);
      }
    },
    [login, history],
  );

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Por favor, forneça seu usuário!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Usuário"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Por favor, forneça sua senha!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
        Ou <a href="">Cadastre-se!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;
