// src/utils/fakeAuth.js
export const getUser = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("user") || null;
  }
  return null;
};
