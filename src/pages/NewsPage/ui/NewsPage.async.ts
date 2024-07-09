import { lazy } from "react";

export const NewsPageAsync = lazy(async () => await import('./NewsPage'))