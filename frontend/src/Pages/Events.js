import { Suspense, useEffect, useState } from "react";
import { Link, json, useLoaderData, defer, Await } from "react-router-dom";
import EventList from "../compoents/EventList";

function  Eventpage() {

    const {events} = useLoaderData();
    // const events = data.events;
 
    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
          <Await resolve={events}>
            {(loadedEvents) => <EventList  events={loadedEvents} />}
          </Await>
        </Suspense>
      );
}
export default Eventpage;
export async function loadevents() {
    const response = await fetch('http://localhost:8080/events');
           if(!response.ok){
            // throw new Response (JSON.stringify({message:'Could Not Fetch Events'}),{
            //     status: 500,
            // })
            throw json(
                {
                    message: 'Could Not Fetch Events',
                },
                {
                    status: 500,
                },
            );
           }
           else{
            const resData= await response.json();  
            return resData.events;
           }
} 
// Function to Call loader in App.js...................
export function loader() {
    return defer({
        events: loadevents(),
    })
}