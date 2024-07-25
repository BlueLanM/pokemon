import React from "react";
import { Flex, Form } from "antd";
import Link from "next/link";

const baseStyle: React.CSSProperties = {
  width: "25%",
  height: 54,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const menuItem = [{ label: "管理员", value: "/src/user" }];

export default function MenuList() {
  const [form] = Form.useForm();
  return (
    <Flex vertical>
      {menuItem.map((_, i) => (
        <Link
          href={_.value}
          legacyBehavior
          key={i}
          style={{
            ...baseStyle,
            backgroundColor: i % 2 ? "#1677ff" : "#1677ffbf",
          }}
        >
          {_.label}
        </Link>
      ))}
    </Flex>
  );
}
