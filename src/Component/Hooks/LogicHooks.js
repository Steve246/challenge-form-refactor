import { useEffect, useState } from "react";

import { useDeps } from "../../context/depContext";

const LogicHooks = () => {
  const [result, setResult] = useState("");
  const { moreEffectService } = useDeps();
};

export default LogicHooks;
