"use client";

import React, { useEffect, useState } from "react";
import { type GridStack } from "gridstack";

declare global {
  interface Window {
    GridStack: typeof GridStack;
  }
}

const items = [
  { content: "my first widget" }, // will default to location (0,0) and 1x1
  { w: 2, content: "another longer widget!" }, // will be placed next at (1,0) and 2x1
];

const useGridStack = (): [GridStack | undefined] => {
  const [grid, setGrid] = useState<GridStack | undefined>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const { GridStack } = window;

    if (GridStack) {
      const grid = GridStack.init();
      setGrid(grid);
    }
  }, []);

  return [grid];
};

const Grid = () => {
  const [grid] = useGridStack();

  useEffect(() => {
    if (!grid) return;

    grid.load(items);
  }, [grid]);

  return <div className="grid-stack" />;
};

export default Grid;
