import React from "react";
import axios from "axios";
import Accordion from "../accordion/Accordion";

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
            <div>
                {!isLoading ? (
                    <ul>
                    {nodes.map(node => (
                        <Accordion
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
