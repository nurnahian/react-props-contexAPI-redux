import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvide = ({ children }) => {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   if (user && user.name) {
  //     const cacheName = user.name; // Assuming user.name is the cache key
  //     caches.open(cacheName).then((cache) => {
  //       const request = new Request(`/cache-${cacheName}`);
  //       const response = new Response(JSON.stringify(user));
  //       cache.put(request, response);
  //     });
  //   }
  // }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvide;
