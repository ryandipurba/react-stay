import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search">
                <form>
                    <input type="text" />
                    <button type="submit">Find</button>
                </form>
            </div>
        );
    }
}

export default Search;