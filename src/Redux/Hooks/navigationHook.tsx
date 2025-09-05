import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./hooks";

function useNavigationHook() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [navigation, setNavigation] = useState<{ path: string | number; replace: boolean } | null>(null);

    useEffect(() => {
        if (navigation) {
            // dispatch(toggleLoader());

            // const loaderTimeout = setTimeout(() => {
                // dispatch(toggleLoader());

                // const navigateTimeout = setTimeout(() => {
                    if (typeof navigation.path === "string") {
                        navigate(navigation.path, { replace: navigation.replace });
                    } else {
                        navigate(navigation.path); // back/forward
                    }
                    setNavigation(null);
                // }, 50);

                // return () => clearTimeout(navigateTimeout);
            // }, 500);

            // return () => clearTimeout(loaderTimeout);
        }
    }, [navigation, dispatch, navigate]);

    const navigateWithLoader = (path: string | number, replace: boolean = false) => {
        if (typeof path === "string" && /^https?:\/\//.test(path)) {
            window.open(path, "_blank"); // open external link in new tab
            return;
        }

        setNavigation({ path, replace });


    };

    return {
        goTo: (path: string) => navigateWithLoader(path),
        goBack: () => navigateWithLoader(-1),
        goForward: () => navigateWithLoader(1),
        replace: (path: string) => navigateWithLoader(path, true),
    };
}

export default useNavigationHook;
