import { useState } from "react";

const useTheme = (startTheme = "light") => {
  const [theme, setTheme] = useState(startTheme);

  return { theme, setTheme };
};

export default useTheme;
