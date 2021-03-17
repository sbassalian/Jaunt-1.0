import React from 'react';
import { Link } from 'react-router-dom';



class Search extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className='search-form'>
                <form >
                    <label> Location
                        <input type="text" value="Where are you going?" />
                    </label>

                    <label> Check in
                        <input type="date" value="Add dates" />
                    </label>

                    <label> Check out
                        <input type="date" value="Add dates" />
                    </label>

                    <label> Guests
                        <input type="number" value="Add guests" />
                    </label>

                    <button>
                        <img className="home-icon" src={window.searchicon} /> Search
                    </button>

                </form>

            </div>
        );
    }
}

export default Search;