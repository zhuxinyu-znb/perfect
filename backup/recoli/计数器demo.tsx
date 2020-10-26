import React, { FC } from 'react';
import './home.css';
import { NavLink, Link } from 'react-router-dom';

import { atom, SetterOrUpdater } from 'recoil';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const countState = atom({
  key: 'CountState',
  default: 1,
});
interface IContactProps {
  setCount: SetterOrUpdater<number>;
  getCount: number;
}

const ContactPage: FC<IContactProps> = (props) => {
  return (
    <button
      onClick={() => {
        const newVal = props.getCount + 1;
        props.setCount(newVal);
      }}
    >
      My count is: {props.getCount}
    </button>
  );
};
const Counter = () => {
  const setCount = useSetRecoilState(countState);
  const getCount: number = useRecoilValue(countState);
  return <ContactPage setCount={setCount} getCount={getCount} />;
};

const Home = () => {
  return (
    <div className="components-home">
      <span>
        <NavLink to="/login">登录页</NavLink>
      </span>
      <h2 data-testid="js-h2">京程一灯</h2>
      <Counter />
      <ul data-testid="js-ul">
        <li>JavaScript</li>
        <li>CSS</li>
      </ul>
    </div>
  );
};
export default Home;
