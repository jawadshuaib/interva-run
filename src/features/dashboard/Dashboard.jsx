import React from 'react';
import { useSelector } from 'react-redux';
import AuthenticationBtn from '../authentication/AuthenticationBtn';

export default function Home() {
  const { accessToken } = useSelector((state) => state.auth);

  return (
    <div>
      <h1 className="text-3xl font-bold underline grid h-screen place-items-center">
        {accessToken === null(<AuthenticationBtn />)}
        {accessToken !== null(<div>Authenticated with {accessToken}</div>)}
      </h1>
    </div>
  );
}
