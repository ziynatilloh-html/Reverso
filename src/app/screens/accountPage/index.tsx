import React, { useState } from "react";
import ProductsBanner from "../productListPage/ShopBanner";
import AccountSidebar from "./AccountSidebar";
import UserInfoPage from "./UserInfoPage";
import Orders from "./Orders";
import UserSettingsPage from "./UserSettingsPage";
import "../../css/accountPage.css";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("userinfo"); // ✅ default is userinfo

  const renderContent = () => {
    switch (activeTab) {
      case "userinfo":
        return <UserInfoPage />;
      case "orders":
        return <Orders />;
      case "settings":
        return <UserSettingsPage />;
      default:
        return <UserInfoPage />;
    }
  };

  return (
    <>
      <ProductsBanner />
      <div className="account-wrapper" style={{ display: "flex", padding: "40px", gap: "30px" }}>
        <AccountSidebar onSelect={setActiveTab} activeTab={activeTab} />
        <div className="account-main" style={{ flex: 1 }}>
          {renderContent()}
        </div>
      </div>
    </>
  );
}
