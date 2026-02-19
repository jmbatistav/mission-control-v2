"use client";

import { useState, useEffect, useCallback } from "react";

type User = "Kar" | "Joma";

export function useActiveUser(): [User, (user: User) => void] {
  const [user, setUserState] = useState<User>("Kar");

  useEffect(() => {
    const stored = localStorage.getItem("activeUser");
    if (stored === "Kar" || stored === "Joma") {
      setUserState(stored);
    }
  }, []);

  const setUser = useCallback((newUser: User) => {
    setUserState(newUser);
    localStorage.setItem("activeUser", newUser);
  }, []);

  return [user, setUser];
}
