import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../compoents/MainNavigation";

function RootLayout () {

    // const navigation = useNavigation();
    
    return(
        <>
        <MainNavigation/>
        <main>
            {/* {navigation.state==='loading' && <p>Loading</p>}  */}
           <Outlet></Outlet>
        </main>
        </>
    );
}
export default RootLayout;