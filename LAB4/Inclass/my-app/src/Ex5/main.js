import "./App.css";
// import { Route, Redirect, Switch } from "react-router-dom";
// import MyComponent from "./components/MyComponent";
import * as React from "react";
import MyPage from "./components/MyPage";
import { FadeLoader } from "react-spinners";

function App() {
  return (
    <React.Suspense fallback={<FadeLoader color={"lightblue"} size={150} />}>
      <MyPage />
    </React.Suspense>
  );
}

export default App;

