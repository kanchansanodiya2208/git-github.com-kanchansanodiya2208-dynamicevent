import { redirect, json } from "react-router-dom";
import EventForm from "../compoents/EventForm";

function NewEventpage () {


    return(
       <EventForm method="post"></EventForm>

    );
}
export default NewEventpage;
// export async function action ({request, params}) {
//     const data = await request.formData();
//     const eventData = {
//         title: data.get('title'),
//         image: data.get('image'),
//         date: data.get('date'),
//         description: data.get('description'),
        
//     }
//     const response = await fetch('http://localhost:8080/events', 
//     {
//           method: 'POST',
//           headers: {
//             'Content-Type' : 'application/json',
//           },
//           body: JSON.stringify(eventData),
//     });
//     if(!response.ok) {
//         throw json({message: 'Could Not Save Event'}, {status: 500});
//     }
//     return redirect('/events');
// }