import React, { useCallback, useRef } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useAuth } from '../../hooks/auth';

// interface SignInFormData {
//   email: string;
//   password: string;
// }

const Register: React.FC = () => {
  // const { login } = useAuth();
  // const history = useHistory();

  // const handleLogin = useCallback(
  //   async (data: SignInFormData) => {
  //     try {
  //       // await login({
  //       //   email: data.email,
  //       //   password: data.password,
  //       // });

  //       history.push('/dashboard');
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  //   [login, history],
  // );

  return (
    <h1>Cadastre-se</h1>
    // <Form
    //   name="normal_login"
    //   className="login-form"
    //   initialValues={{ remember: true }}
    //   // onFinish={onFinish}
    // >
    //   <Form.Item
    //     name="username"
    //     rules={[{ required: true, message: 'Por favor, forneça seu usuário!' }]}
    //   >
    //     <Input
    //       prefix={<UserOutlined className="site-form-item-icon" />}
    //       placeholder="Usuário"
    //     />
    //   </Form.Item>
    //   <Form.Item
    //     name="password"
    //     rules={[{ required: true, message: 'Por favor, forneça sua senha!' }]}
    //   >
    //     <Input
    //       prefix={<LockOutlined className="site-form-item-icon" />}
    //       type="password"
    //       placeholder="Senha"
    //     />
    //   </Form.Item>

    //   <Form.Item>
    //     <Button type="primary" htmlType="submit" className="login-form-button">
    //       Login
    //     </Button>
    //     Ou <a href="">Cadastre-se!</a>
    //   </Form.Item>
    // </Form>
  );
};

export default Register;
