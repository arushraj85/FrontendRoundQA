import "./styles.css";
import { useEffect, useState } from "react";
import Pagination from "./components/pagination/Pagination";
import Crud from "./components/crud/Crud";

export default function App() {
  return (
    <div>
      {/* <Pagination /> */}
      <Crud />
    </div>
  );
}
