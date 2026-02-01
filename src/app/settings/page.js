"use client";

import { getUser, logout } from "../../utils/fakeAuth";
import { useRouter } from "next/navigation";
import ThemeToggle from "../../components/ThemeToggle";

export default function SettingsPage() {
  const router = useRouter();
  const user = getUser();

  if (!user) {
    router.push("/auth/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <div className="settings-wrapper">
      <h1 className="settings-title">Settings</h1>

      <div className="settings-card">
        <p className="settings-label">Logged in as</p>
        <p className="settings-email">{user.email}</p>
      </div>

      <div className="settings-card settings-row">
        <span>Theme</span>
        <ThemeToggle />
      </div>

      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
