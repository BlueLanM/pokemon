import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { Card, Menu } from "antd";
import { useCookieState } from "ahooks";
import { useSet } from "@/utils/hooks";
import {
  HomeOutlined,
  DesktopOutlined,
  PayCircleOutlined,
  IdcardOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const HomePage = () => {
  const [user, setUser] = useCookieState("userName");
  const [state, setState] = useSet({
    userName: "",
  });
  const { userName } = state;

  const items = [
    {
      label: "首页",
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: "精灵",
      key: "pokemon",
      icon: <DesktopOutlined />,
    },
    {
      label: "商店",
      key: "store",
      icon: <PayCircleOutlined />,
    },
    {
      label: "个人信息",
      key: "info",
      icon: <IdcardOutlined />,
    },
    {
      label: "设置",
      key: "config",
      icon: <SettingOutlined />,
    },
  ];
  useEffect(() => {
    setState({ userName: user });
  }, []);
  return (
    <div className={styles.homePage}>
      <Card
        style={{ width: "100%" }}
        title="Pokemon Game"
        extra={<a href="#">{userName}</a>}
      >
        <Menu mode="horizontal" items={items} />
      </Card>
    </div>
  );
};

export default HomePage;
