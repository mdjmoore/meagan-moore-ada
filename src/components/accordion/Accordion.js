import React from "react";

function Accordion(props) {
    console.log(props.nodes)
    return (
        <li>
            <h2>{props.title}</h2>
            {props.connections && (
                <ul>
                    {props.connections.map(connection => (
                        <li>
                            <p>{props.nodes[connection - 1].title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}

export default Accordion;
