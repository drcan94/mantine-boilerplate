import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomeScreen from "./screens/HomeScreen/index";
import ExpensesScreen from "./screens/ExpensesScreen";
import SearchScreen from "./screens/SearchScreen/index";
import CourseGoalScreen from "./screens/CourseGoalScreen/index";
import UsersScreen from "./screens/UsersScreen/index";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="expenses" element={<ExpensesScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="goals" element={<CourseGoalScreen />} />
        <Route path="users" element={<UsersScreen />} />

        {/* Not Found */}
        <Route
          path={"*"}
          element={
            <div style={{ display: "flex", justifyContent: "center" }}>
              Soon here!!!
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
