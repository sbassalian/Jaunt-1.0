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

    handleChange2(filter) {
        return e => this.props.updateFilter(filter, e.currentTarget.value)
    };



    render() {
        console.log(this.props.startDate)
        
        return (
            <div className="search-bar">
                <form >

                    <label id="locationpadding"> Location
                        <input type="text" placeholder="Where are you going?"  onChange={this.handleChange2('destination')} />
                    </label>

                    <label> Check in
                        <input type="date" value={this.props.startDate} onChange={this.handleChange2('startDate')}  />
                    </label>

                    <label> Check out
                        <input type="date" value={this.props.endDate} onChange={this.handleChange2('endDate')} />
                    </label>

                    <label id="guestscountborder"> Guests
                        <input type="number" placeholder={this.props.minGuests} onChange={this.handleChange('minGuests')} />
                    </label>


                    <button onClick={() => this.handleClick()}>
                        <img className="home-icon" src={window.searchicon} />
                    </button>

                </form>

            </div>
        );
    }
}

export default Search;



