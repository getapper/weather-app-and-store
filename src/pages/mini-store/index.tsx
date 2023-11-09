import React, { memo } from "react";
import MiniStoreSpa from "@/spas/mini-store";

type MiniStoreProps = {};

const MiniStore = memo(({}: MiniStoreProps) => {
  return <MiniStoreSpa />;
});
MiniStore.displayName = "MiniStore";

export default MiniStore;
