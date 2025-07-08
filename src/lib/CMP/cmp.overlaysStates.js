"use client";

import { useState, useEffect } from "react";

const useOverlaysStates = () => {
  const [showCMP, setShowCMP] = useState(true);
  const [showCtxMenu, setShowCtxMenu] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);
  const [reset, setReset] = useState(false);

  const overlayModes = Object.freeze({
    cmp: "cmp",
    ctx_menu: "ctxMenu",
    trigger: "trigger",
    none: "none",
  });

  const overlayManager = Object.freeze({
    [overlayModes.cmp]: setShowCMP,
    [overlayModes.ctx_menu]: setShowCtxMenu,
    [overlayModes.trigger]: setShowTrigger,
  });

  const setOverlay = (mode) => {
    for (let k in overlayManager) {
      overlayManager[k](k === mode);
    }
  };

  const resetAll = () => {
    Object.values(overlayManager).forEach((fn) => fn(false));
    setReset(false);
  };

  useEffect(() => {
    if (!reset) return;

    const timeout = setTimeout(() => resetAll(), 500);
    return () => clearTimeout(timeout);
  }, [reset]);

  return {
    showCMP,
    showCtxMenu,
    showTrigger,
    reset,
    setOverlay,
    overlayModes,
    resetAll: () => setReset(true),
  };
};

export default useOverlaysStates;
