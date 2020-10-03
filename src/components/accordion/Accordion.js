import React, { useState, useRef } from "react";

{/*

    I wanted to avoid using class component where possible to keep this streamlined and opted to use some hooks
    to handle the opening and closing of the accordion. 

    If I had time, I would have liked to make this component more robust by allowing the connections connections visible on toggle, perhaps by nesting more accordion components.

*/}

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleAccordion(connections) {
        if(connections) {
            setActiveState(setActive === "" ? "active" : "");
            setHeightState(
                setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
            );
        } else {
            return false;
        }
    }
    
    return (
        
        <li className="node-header">
            <button onClick={() => toggleAccordion(props.connections)} className={setActive}>{props.title}</button>
            {props.connections && (
                <ul ref={content} style={ {maxHeight: `${setHeight}`} }>
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
