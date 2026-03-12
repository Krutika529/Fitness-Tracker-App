//import React from "react";
import ActivityLog from "./pages/ActivityLog";
import Dashboard from "./pages/Dashboard";
import FoodLog from "./pages/FoodLog";

import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import { useAppContext } from "./context/AppContext";
import Login from "./pages/Login";
import Loading from "./components/Loading";
import OnBoarding from "./pages/OnBoarding";

const App = () => {
  const { user, isUserFetched, onboardingCompleted } = useAppContext();

  if (!user) {
    return isUserFetched ? <Login /> : <Loading />;
  }

  if (!onboardingCompleted) {
    return <OnBoarding />;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="food" element={<FoodLog />} />
        <Route path="activity" element={<ActivityLog />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
