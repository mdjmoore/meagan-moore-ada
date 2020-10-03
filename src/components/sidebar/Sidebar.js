import React from "react";
import axios from "axios";
import Accordion from "../accordion/Accordion";
import "./sidebar.css";

{/* 

    I started working here to get the data from the api. I made 2 calls to get all the data needed to populate the sidebar,
    making sure that I wasn't directly editing the nodes in state in getDetails and instead made a new object with all the
    info and setting that as the state.

    From there I'm passing the important data to Accordion to render that component for each node returned from the API.

    If I had time, I would have liked to refactor all of this to instead be in the App.js file so the data can be shared down to Sidebar.js and Details.js without backtracking or multiple API calls. Because I was focused on getting Challenge 1 completed, I ended up making this calls in a unideal place. 

    I also originally used the react-bootstrap Accordion component before realizing that it can't have multiple children inside the Accordion.Collapse component. I pivoted instead to creating my own component. 

*/}

export default class Sidebar extends React.Component {
    state = {
        nodes: [],
        isLoading: true,
    }

    getNodes = async () => {
        try {
            const { data } = await axios.get('/nodes');
            this.setState({
                nodes: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount() {
        await this.getNodes();
        this.state.nodes.forEach( async (node) => {
            await this.getDetails(node.id);
        });
    }

    getDetails = async (id) => {
        try {
            const { data } = await axios.get(`/nodes/${id}`);
            // copy state to I'm not editing it directly
            const copiedNodes = this.state.nodes;
            // account for arrays starting at 0 and set the value of the corresponding node
            // to include the connections and content
            copiedNodes[id -1] = data[0];
            this.setState({
                nodes: copiedNodes,
                isLoading: false,
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { nodes, isLoading } = this.state;
        return (
            <div className="sidebar">
                {!isLoading ? (
                    <ul>
                    {nodes.map(node => (
                        <Accordion
                            key={node.id}
                            title={node.title}
                            connections={node.connections}
                            nodes={nodes}
                        >
                        </Accordion>
                    ))}
                    </ul>
                ) : (<h2>Loading...</h2>)}
            
                
            </div>
        );
    }
};
