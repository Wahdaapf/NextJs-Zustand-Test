"use client"

import Child from '@/app/components/HomeChild';
import { userStore } from '@/app/store/user';
import { useState } from 'react';

export default function Home() {
  const user = userStore((state: any) => state.user);

  // const [user, setUser] = useState({
  //   full_name: "wahda adella"
  // });

  // const updateUser = (newUser: any) => {
  //   setUser(prevUser => ({
  //     ...prevUser,
  //     ...newUser
  //   }));
  // };

  return (
    <main className="flex gap-2 m-4">
      <p>{user.full_name}</p>
      {/* Child component accesses global state directly */}
      <Child />
      {/* <Child user={user} updateUser={updateUser} /> */}
    </main>
  );
}
