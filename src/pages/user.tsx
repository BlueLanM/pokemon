import { useSet } from "@/utils/hooks";

import { useEffect } from "react";
import {
  Table,
  Modal,
  Form,
  Input,
  Select,
  message,
  Space,
  Button,
  Upload,
} from "antd";
import { useRequest } from "ahooks";

import { addUser, deleteUser, getUser, updateUser } from "@/pages/service/user";

export default () => {
  const [form] = Form.useForm();
  const [state, setState] = useSet({
    isAdd: false,
    open: false,
    userData: [],
    updateId: "",
  });

  const columns = [
    {
      title: "id",
      dataIndex: "id",
    },
    { title: "名称", dataIndex: "nickName" },
    { title: "密码", dataIndex: "passWord" },
    {
      title: "操作",
      render: (txt: any, record: any) => {
        return (
          <Space>
            <Button type="link" onClick={() => delRun({ id: record.id })}>
              删除
            </Button>
            <Button type="link" onClick={() => handleUpdate(record)}>
              编辑
            </Button>
          </Space>
        );
      },
    },
  ];

  const { run } = useRequest(getUser, {
    onSuccess: (res) => {
      setState({ userData: res.data });
      form.resetFields();
    },
  });

  const { run: addRun } = useRequest(addUser, {
    manual: true,
    onSuccess: (res) => {
      setState({ open: false });
      message.success("添加成功");
      run({});
    },
  });

  const { run: delRun } = useRequest(deleteUser, {
    manual: true,
    onSuccess: (res) => {
      message.success("删除成功");
      run({});
    },
  });

  const { run: updateRun } = useRequest(updateUser, {
    manual: true,
    onSuccess: (res) => {
      setState({ open: false });
      message.success("修改成功");
      run({});
    },
  });

  const handleUpdate = (record: any) => {
    form.setFieldsValue(record);
    setState({ open: true, isAdd: false, updateId: record.id });
  };

  useEffect(() => {
    run({});
  }, []);

  const handleClose = () => {
    setState({ open: false });
    form.resetFields();
  };

  const onFinish = (data: any) => {
    state.isAdd ? addRun(data) : updateRun({ ...data, id: state.updateId });
  };

  return (
    <div className="page_container">
      {/* <MenuList /> */}
      <div>
        <Button
          type="primary"
          onClick={() => setState({ open: true, isAdd: true })}
        >
          添加
        </Button>
        <Table
          rowKey={(e: any) => e.id}
          columns={columns}
          dataSource={state.userData}
        />
        <Modal
          title={state.isAdd ? "新增数据" : "编辑数据"}
          open={state.open}
          onCancel={handleClose}
          onOk={() => form.submit()}
        >
          <Form form={form} onFinish={onFinish}>
            {/* <Form.Item label="id" name="id">
            <Input />
          </Form.Item> */}
            <Form.Item label="nickName" name="nickName">
              <Input />
            </Form.Item>
            <Form.Item label="passWord" name="passWord">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
