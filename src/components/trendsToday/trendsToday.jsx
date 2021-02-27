import React, { Suspense } from "react";
import { useNearScreen } from "hooks/useNearScreen";
//import { TrendsCategoriesToday } from "./trendsCategoriesToday";

//creacion del lazy para el componente trendsCategoriesToday que deseo que solo se carge si es necesario mi REY
//es necesario envolverla por un suspense
const TrendsCategories = React.lazy(() => import("./TrendsCategories"));

export const LazyTrendsToday = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "100px" });
  return (
    <div ref={fromRef} className="divlLAzy">
      <Suspense fallback={null}>
        {isNearScreen ? <TrendsCategories /> : null}
      </Suspense>
    </div>
  );
};
