import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import Stopwatch from "./Stopwatch.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Stopwatch />
  </StrictMode>
);

import { registerSW } from "virtual:pwa-register";

registerSW({
  onNeedRefresh() {
    console.log("새 버전이 있습니다.");
  },
  onOfflineReady() {
    console.log("오프라인 사용 가능합니다.");
  },
});
