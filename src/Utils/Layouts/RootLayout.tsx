import { useCallback } from "react";
import Header from "../../Componants/Header/Header";
import { Config } from "../../config/Config";
import { MaterialUISwitch } from "../../Componants/MUISwitch/MUISwitch";
import ButtonComponant from "../../Componants/ButtonComponant/ButtonComponant";
import useNavigationHook from "../../Redux/Hooks/navigationHook";
import { Outlet } from "react-router-dom";
import { KeyMapper } from "../../KeyMapper/KeyMapper";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks/hooks";
import { useToggleTheme } from "../../theme/Theme";
import ProfileButton from "../../Componants/ProfileButton/ProfileButton";
import { toggleProfileCard } from "../../Redux/Slices/ComponantsSlices/ProfileSlice";
import { icons } from "../../data/iconsData";
import NotificationButton from "../../Componants/NotificationButton/NotificationButton";
import "./RootLayout.scss";
import { Loader } from "../../Componants/Loader/Loader";

function RootLayout() {

    const { goTo } = useNavigationHook();
    const dispatch = useAppDispatch();
    const { isDarkTheme } = useAppSelector((state) => state.ThemeSlice);
    const { isLoading } = useAppSelector((state) => state.LoaderSlice)

    const handleSignupClick = useCallback(() => {
        goTo(KeyMapper.Pages.Auth)
    }, [goTo])

    const handleProfileClick = useCallback(() => {
        dispatch(toggleProfileCard());
    }, [dispatch])



    const toggleTheme = useToggleTheme();

    const isAuthPage = location.pathname === KeyMapper.Pages.Auth;
    const { isAuthenticated } = useAppSelector((state) => state.AuthSlice);
    const isDashboardPage = location.pathname === KeyMapper.Pages.Dashboard;

    return (
        <div className="layout-main-container">
            {isLoading && <Loader />}
            {/* <div className="main-layout-content-container"></div> */}
            <Header
                customClass={isDashboardPage ? "underline" : ""}
                brandName={Config.brandName}
                buttons={[
                    <MaterialUISwitch
                        key="theme-switch"
                        checked={isDarkTheme}
                        onChange={toggleTheme}
                    />,
                    (!isAuthPage && !isAuthenticated) && (<ButtonComponant
                        customClassName="full-width"
                        key="signup-button"
                        type="contained"
                        text={"Sign In"}
                        size="small"
                        endIcon={<icons.ArrowForwardIosRounded />}
                        clickHandler={handleSignupClick}
                    />),
                    (!isAuthPage && isAuthenticated) && (
                        [
                            <NotificationButton key="notification-card" />,
                            <ProfileButton key="profile-card" clickHandler={handleProfileClick} />
                        ]
                    )
                ]}
            />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
