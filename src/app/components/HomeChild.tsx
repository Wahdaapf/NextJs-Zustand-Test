"use client"

import { userStore } from '@/app/store/user';

export default function HomeChild() {
  const updateUser = userStore((state: any) => state.updateUser);

  return (
    <div>
      <input
        className="border"
        type="text"
        placeholder="Update name"
        onChange={(e: any) => updateUser({ full_name: e.target.value })}
      />
    </div>
  );
}

// export default function HomeChild({ user, updateUser }: { user: any, updateUser: any }) {
//   return (
//     <div>
//       <input
//         className="border"
//         type="text"
//         placeholder="Update name"
//         onChange={(e: any) => updateUser({ full_name: e.target.value })}
//       />
//     </div>
//   );
// }
