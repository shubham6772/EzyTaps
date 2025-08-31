import { useCallback, useEffect, useState } from "react";
import Header from "../../Componants/Header/Header";
import { Config } from "../../config/Config";
import { MaterialUISwitch } from "../../Componants/MUISwitch/MUISwitch";
import ButtonComponant from "../../Componants/ButtonComponant/ButtonComponant";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
import useNavigationHook from "../../Redux/Hooks/navigationHook";
import { Outlet } from "react-router-dom";
import { KeyMapper } from "../../KeyMapper/KeyMapper";

function Layout() {
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

    return (
        <>
            <Header
                brandName={Config.brandName}
                buttons={[
                    <MaterialUISwitch
                        key="theme-switch"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />,
                    <ButtonComponant
                        customClassName="full-width"
                        key="signup-button"
                        type="contained"
                        text="Sign Up"
                        size="small"
                        endIcon={<ArrowForwardIosRounded />}
                        clickHandler={handleSignupClick}
                    />
                ]}
            />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
