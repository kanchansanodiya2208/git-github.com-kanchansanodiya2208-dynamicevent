import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../compoents/EventForm";

function EditEventpage () {

    const data = useRouteLoaderData('event-detail');
 
    return(
        <>
        
        <EventForm method="patch" event={data.event}></EventForm>
        
        </>
    );
}
export default EditEventpage;