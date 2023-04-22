import { Component } from "react";


class PersonalBio extends Component{
constructor(){
    super();
    this.state = {
        persons: [
            {
            name: "Emmanuel",
            description: "I am a tall guy who likes to code",
        },
        {
            name: "Nancy",
            description: "I am a tall girl who likes to cook",
        },
    ],
    name: "",
    description: "",
    };
}
handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value});
}
handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
        name: this.state.name,
        description: this.state.description
    }
    this.setState({
        persons: [...this.state.persons, newPerson]
    })
}

render(){
    return(
        <section style={{ margin: "2rem"}}>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                    <br/>
                    <input 
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>Description</label>
                    <br/>
                    <textarea 
                    name="description" 
                    value={this.state.description}
                    onChange={this.handleChange}></textarea>
                </div>
                <button>Submit</button>
            </form>

            {this.state.persons.map((item, index) => {
                return(
                    <div key={index}>
                    <h1>Name: {item.name}</h1>
                    <p>Description: {item.description}</p>
                    </div>
                )
            }
            )
            }
           
        </section>
    )
}
}

export default PersonalBio;