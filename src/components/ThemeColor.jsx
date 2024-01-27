import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ThemeColor() {
  const orderTheme = useSelector((state) => state.theme.now);
  const nowTheme = useSelector((state) => state.theme.data[orderTheme]);
  const [themeColor, setThemeColor] = useState(`bg-${nowTheme}-100`);

  useEffect(() => {
    if (nowTheme == "emerald") {
      setThemeColor("bg-emerald-100");
    } else if (nowTheme == "cyan") {
      setThemeColor("bg-cyan-100");
    } else {
      setThemeColor("bg-white-100");
    }
  }, [nowTheme, orderTheme]);

  return themeColor;
}

export default ThemeColor;
