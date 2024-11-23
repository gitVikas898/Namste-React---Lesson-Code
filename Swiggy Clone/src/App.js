import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.jsx";
import { BodyComponent } from "./components/BodyComponent.jsx";
import { FooterComponent } from "./components/FooterComponent.jsx";


const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <BodyComponent></BodyComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);
