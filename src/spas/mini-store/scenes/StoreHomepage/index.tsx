import React, { memo } from "react";
import { useStoreHomepage } from "./index.hooks";

type StoreHomepageProps = {};

export const StoreHomepage = memo(({}: StoreHomepageProps) => {
  const {} = useStoreHomepage();

  return <div>STORE HOMEPAGE</div>;
});

StoreHomepage.displayName = "StoreHomepage";
