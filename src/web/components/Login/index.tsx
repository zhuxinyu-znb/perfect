import './login.css';
import React, { FC } from 'react';
// const { useContext } = React;
// import { DatePicker } from "antd";
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { RootStoreType } from '@models/root.store';
import { useRootData } from 'web/tools/useRootData';

const Login: FC<RouteComponentProps> = (routerProps) => {
  console.log(routerProps);
  // const { location, history } = routerProps;
  // let token = useRootData((store: IRootStoreModel) => store.home.token);
  // let str = useRootData((store: IRootStoreModel) => store.home.str);
  // const { token, str, setStr } = useRootData((store: RootStoreType) => ({
  //   token: store.home.token,
  //   str: store.home.str,
  //   setStr: store.home.setStr,
  // }));
  const { token, str, setStr } = useRootData((store: RootStoreType) => ({
    token: store.home.token,
    str: store.home.str,
    setStr: store.home.setStr,
  }));
  // const store = useYdStore((store: TStore) => store);
  // console.log("跳转信息",state.location.state.from.pathname);
  // const RedirectUrl = location.state ? location.state.from.pathname : '/';
  // console.log('跳转', RedirectUrl);
  const RedirectUrl = '/';
  // 登陆成功之后的跳转
  const loginIn = () => {
    console.log('函数生效');
    // store.str = '🏮' + Math.random();
    setStr();
    // console.log('状态', store);
    localStorage['token'] = Math.random().toString();
    // history.push(RedirectUrl);
  };
  return (
    <>
      <div className="components-login">
        {/* <span><a href="/">登录系统...</a></span> */}
        <span>{token}</span>
        <h1>动态数据 {str}</h1>
        <span>
          <NavLink to="/">首页xxx</NavLink>
          <NavLink to="/demos/123">测试页</NavLink>
        </span>
        <input type="button" value="登录系统首页" onClick={loginIn} />
        {/* <DatePicker /> */}
      </div>
    </>
  );
};

export default Login;
