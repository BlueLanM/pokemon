import React from "react";
import { Button, Form, Input, Space, message } from "antd";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { useRequest } from "ahooks";
import { registerUser } from "@/pages/service/user";

const { Item } = Form;

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 5,
    span: 16,
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const { run } = useRequest(registerUser, {
    manual: true,
    onSuccess: (res: any) => {
      if (res.data.success) {
        message.success("注册成功");
        router.push("/user/login");
      } else {
        message.error(res.data.message);
      }
    },
  });

  const onFinish = (values: any) => {
    run(values);
  };

  return (
    <div className={styles.formContainer}>
      {/* <img src="/static/img/pokemon.jpg" alt="pokemon" width={300} /> */}
      <h2>注册</h2>
      <div className={"form"}>
        <Form form={form} {...layout} onFinish={onFinish}>
          <Item label="昵称" name="nickName" rules={[{ required: true }]}>
            <Input />
          </Item>
          <Item label="密码" name="passWord" rules={[{ required: true }]}>
            <Input type="password" />
          </Item>
          <Item {...tailLayout}>
            <Space>
              <Button type="primary" onClick={() => form.submit()}>
                注册
              </Button>
              <Button onClick={() => router.push("/user/login")}>
                已有账号? 去登录
              </Button>
            </Space>
          </Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
