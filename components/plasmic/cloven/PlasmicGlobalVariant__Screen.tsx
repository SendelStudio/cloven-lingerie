// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue = "desktop" | "mobile" | "tablet" | "bigScreen";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export const useScreenVariants = createUseScreenVariants(true, {
  desktop: "(max-width:1920px)",
  mobile: "(max-width:743px)",
  tablet: "(max-width:1190px)",
  bigScreen: "(max-width:4000px)",
});

export default ScreenContext;
/* prettier-ignore-end */
