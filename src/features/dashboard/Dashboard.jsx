import React from 'react';
// import { useSelector } from 'react-redux';
import AuthenticationBtn from '../authentication/AuthenticationBtn';
import useLocalStorage from '../authentication/useLocalStorage';

export default function Dashboard() {
  const [accessToken] = useLocalStorage('accessToken', null);
  console.log(accessToken);
  // const { accessToken } = useSelector((state) => state.auth);

  return (
    <div className="dark:bg-slate-800">
      <h1 className="grid h-screen place-items-center">
        {accessToken === null && <AuthenticationBtn />}
        {accessToken !== null && <div>Authenticated with {accessToken}</div>}
      </h1>
    </div>
  );
}
