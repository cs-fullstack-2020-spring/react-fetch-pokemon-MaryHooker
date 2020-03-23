import React, { Component } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
        }
    }
    //when page mounts run the function inside
    componentDidMount() {
        this.loadData();
    }
    //function to pull down pokedex api and update state of array to containe all of its data
    loadData = async () => {
        //sanity
        console.log(`Trying To Fetch Data`)
        //fetch information and save it unde response
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=51 ');
        //save the information from the notation leading to the information inside of api
        const json = await response.json();
        //upload info inside above array and use dot notation to get to the actual pokemon
        this.setState(
            {
                pokemon:json.results
            }
        )
            //sanity
            // console.log(this.state.pokemon)
    }

    render() {
    
        return (
            <div>
                <h1>Pokemon App</h1>
               
            <div className='container'>
                {
                    this.state.pokemon.map((pokemon,index)=>{
                        return(
                            <div key={index}>
                               <p className='element'>{pokemon.name}</p> 
                               <img src={`/img/${pokemon.name}.png`}alt="image" id={`/img/${pokemon.url}.png`} parts={pokemon.url.split('/')}/>
                            </div>
                        )
                    }

                    )
                }
            </div>
            </div>
        );
    }
}

export default AppContainer;