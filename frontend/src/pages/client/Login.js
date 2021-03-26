import styled from "styled-components/macro";
import Layout from "./Layout";
import PageHeader from "../../components/PageHeader";
import { Form, Input, Label } from "../../components/Form";
import Button from "../../components/Button";

const Login = () => {
  return (
    <Layout>
      <Wrapper>
        <PageHeader>Login</PageHeader>
        <Form>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            placeholder="Please write your e-mail here"
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Please write your password here"
          />
          <Label htmlFor="passconf">Confirm Password</Label>
          <Input
            type="password"
            id="passconf"
            placeholder="Please confirm your password"
          />

          <Button variant="primary">Login</Button>
        </Form>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  padding-top: 48px;
  padding-bottom: 48px;
`;

export default Login;