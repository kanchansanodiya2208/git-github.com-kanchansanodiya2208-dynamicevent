import { useRouteError } from "react-router-dom";
import MainNavigation from "../compoents/MainNavigation";
import PageContent from "../compoents/PageContent";

function ErrorPage () {

    const error = useRouteError();
    let title = 'An Error Occured';
    let message = 'Something Event Wrong';

    if(error.status===500) {
        message = error.data.message;
    }
    if(error.status===404) {
        title = 'Not Found';
        message = 'Could Not Find Resourse';
    }

    return(
        <>
        <MainNavigation/>
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
        </>
    );
}
export default ErrorPage;