import React from "react";
import "./details.css";

{/*

    This component has much less in it that I was hoping. Because I started building in the sidebar component, 
    the data that came back from the API was in a sibling component rather than the parent component like I would perfer. 

    With more time, I would have a function here that loops over each of the items in the content array and creates a new Card for them. I would check the value of type in each and conditionally render an img tag if the type was set as 
    Image. Since so many of them were set to Text that would be the default Card type.

*/}

function Details(props) {
    return (
        <div className="details">
            <p>details</p>
        </div>
    )
}

export default Details;