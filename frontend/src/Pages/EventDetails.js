import { useParams, json, useLoaderData, redirect , defer, Await, useRouteLoaderData} from "react-router-dom";
import EventItem from "../compoents/EventItem";
import EventList from '../compoents/EventList';
import { Suspense } from "react";

function EventDetailspage () {
    // const params = useParams();
    // const data = useLoaderData();

    const {event, events} = useRouteLoaderData('event-detail');


    return (
        <>
          <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={event}>
              {(loadedEvent) => <EventItem event={loadedEvent} />}
            </Await>
          </Suspense>
          <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
              {(loadedEvents) => <EventList events={loadedEvents} />}
            </Await>
          </Suspense>
        </>
      );
}
export default EventDetailspage;
export async function loadevent(id) {
   
    const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};
export async function loadevents() {
    
    const response = await fetch('http://localhost:8080/events');
    if(!response.ok) {
        throw json(
            {
                message: 'Could Not fetch Event Details',
            },
            {
                status: 500,
            },
        );
    }
    else{
        const data=await response.json();
        return data.events;
    }
};


export async function loader({ request, params }) {
    const id = params.eventId;
  
    return defer({
        event : await loadevent(id),
        events: loadevents(),
    });
  }

export async function action({params, request}) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+ eventId, {
        method: request.method,
    });
    if(!response.ok) {
        throw json(
            {
                message: 'Could not Delete Event',
            },
            {
                status: 500,
            },
        )
    }
    return redirect('/events');
};
