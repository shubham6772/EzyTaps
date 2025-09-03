import { useCallback, useEffect, useState } from "react";
import Header from "../../Componants/Header/Header";
import { Config } from "../../config/Config";
import { MaterialUISwitch } from "../../Componants/MUISwitch/MUISwitch";
import ButtonComponant from "../../Componants/ButtonComponant/ButtonComponant";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
import useNavigationHook from "../../Redux/Hooks/navigationHook";
import { Outlet } from "react-router-dom";
import { KeyMapper } from "../../KeyMapper/KeyMapper";
import { useAppSelector } from "../../Redux/Hooks/hooks";

function RootLayout() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const stored = localStorage.getItem("theme");
        return (stored === "light" || stored === "dark") ? stored : "light";
    });

    const { goTo } = useNavigationHook();

    const handleSignupClick = useCallback(() => {
        goTo(KeyMapper.Pages.Auth)
    }, [goTo])

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }, []);

    const isAuthPage = location.pathname === KeyMapper.Pages.Auth;
    const { isAuthenticated } = useAppSelector((state) => state.AuthSlice);
    const isDashboardPage = location.pathname === KeyMapper.Pages.Dashboard;

    return (
        <div className="layout-main-container">
            {/* <div className="main-layout-content-container"></div> */}
            <Header
                customClass={isDashboardPage ? "underline" : ""}
                brandName={Config.brandName}
                buttons={[
                    <MaterialUISwitch
                        key="theme-switch"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />,
                    (!isAuthPage && !isAuthenticated) && (<ButtonComponant
                        customClassName="full-width"
                        key="signup-button"
                        type="contained"
                        text={"Sign In"}
                        size="small"
                        endIcon={<ArrowForwardIosRounded />}
                        clickHandler={handleSignupClick}
                    />)
                ]}
            />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
