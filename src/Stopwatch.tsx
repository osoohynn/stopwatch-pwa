import { useState, useEffect, useMemo, useCallback } from "react";
export default function Stopwatch() {
  // 🟢 상태
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  // 🟢 핸들러 (아래에서 구현)
  const start = useCallback(() => {
    setRunning(true);
  }, []);
  const pause = useCallback(() => {
    setRunning(false);
  }, []);
  const reset = useCallback(() => {
    setRunning(false);
    setSeconds(0);
  }, []);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [running]);
  // 🟢 표시 문자열 (mm:ss)
  const display = useMemo(() => {
    const mm = Math.floor(seconds / 60);
    const ss = seconds % 60;
    const mmStr = String(mm).padStart(2, "0");
    const ssStr = String(ss).padStart(2, "0");
    return `${mmStr}:${ssStr}`;
  }, [seconds]);
  return (
    <div className="w-full flex flex-col items-center p-6">
      <div className="w-80 p-4 border rounded">
        <h1 className="text-xl font-bold mb-2">⏱ Stopwatch</h1>
        {/* 시간 표시 */}
        <div className="mb-2" style={{ fontSize: 40, textAlign: "center" }}>
          {display}
        </div>
        {/* 버튼들 */}
        <div className="mb-2" style={{ textAlign: "center" }}>
          {/* gap 대신 margin-right로 간격 */}
          <button className="btn btn-primary mr-2" onClick={start}>
            시작
          </button>
          <button className="btn btn-outline mr-2" onClick={pause}>
            일시정지
          </button>
          <button className="btn" onClick={reset}>
            리셋
          </button>
        </div>
        {/* 상태 표시(선택) */}
        <p className="text-sm" style={{ textAlign: "center" }}>
          상태: {running ? "동작 중" : "정지"}
        </p>
      </div>
    </div>
  );
}
