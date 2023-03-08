import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomeScreen from "./screens/HomeScreen/index";
import ExpensesScreen from "./screens/ExpensesScreen";
import SearchScreen from './screens/SearchScreen/index';
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        
        <Route path="expenses" element={<ExpensesScreen />} />
        <Route path="search" element={<SearchScreen />} />
        
        {/* Not Found */}
        <Route
          path={"*"}
          element={
            <div style={{ display: "flex", justifyContent: "center" }}>
              Soon here!!
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
