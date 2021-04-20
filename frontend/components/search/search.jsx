import React from 'react';
import { Link } from 'react-router-dom';



class Search extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props);
    }

    handleClick() {
        this.props.history.push(`/listings`);
    }

    handleChange(filter){
        return e => this.props.updateFilter(filter, parseInt(e.currentTarget.value))
    };



    render() {
        let today = new Date();

        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        

        return (
            <div className='search-form'>
                <form >
                    <label> Location
                        <input type="text" value="" placeholder="Where are you going?" />
                    </label>

                    <label> Check in
                        <input type="date" value={today} />
                    </label>

                    <label> Check out
                        <input type="date" value={today} />
                    </label>

                    <label> Guests
                        <input type="number" value={this.props.minGuests} onChange={this.handleChange('minGuests')} />
                    </label>


                    <button onClick={() => this.handleClick()}>
                        <img className="home-icon" src={window.searchicon} /> Search
                    </button>

                </form>

            </div>
        );
    }
}

export default Search;



