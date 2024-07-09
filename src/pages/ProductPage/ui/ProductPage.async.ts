import { lazy } from "react";

export const ProductPageAsync = lazy(async () => await import('./ProductPage'))