import { Outlet } from "react-router-dom";
import EventNavigation from "../compoents/EventsNavigation";

function EventRootLayout () {
    return(
        <>
        <EventNavigation/>
        <Outlet></Outlet>

        </>
    );
}
export default EventRootLayout;