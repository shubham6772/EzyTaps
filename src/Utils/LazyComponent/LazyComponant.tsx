import React, { lazy, Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks/hooks";
import { setLoadingFalse, setLoadingTrue } from "../../Redux/Slices/ComponantsSlices/LoaderSlice";

export function LazyComponent<T extends object>(
  factory: () => Promise<{ default: React.ComponentType<T> }>
) {
  const LazyComponent = lazy(factory);

  return (props: T) => {
    const {isLoading} = useAppSelector((state)=>state.LoaderSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
      let mounted = true;

      dispatch(setLoadingTrue()); 
      factory().then(() => {
        if (mounted) {
            dispatch(setLoadingFalse());
        }
      });

      return () => {
        mounted = false;
      };
    }, []);

    if (isLoading) {
      // 🔹 hardcoded: just don’t render anything
      return null;
    }

    return (
      <Suspense fallback={null}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
