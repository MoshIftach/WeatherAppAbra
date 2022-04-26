import React, { Component } from "react";
import Select from "react-select";

export default class Dropdown extends Component {
    render() {
        return (
            <div className="basic-single col-4 m-4 mx-auto search-bar">
                <Select
                    classNamePrefix="select"
                    placeholder="Search a city..."
                    isSearchable="true"
                    name="cities"
                    options={this.props.locations}
                    onChange={selectedOption =>
                        this.props.handleOnChange(selectedOption.label, selectedOption.code)
                    }
                />
            </div>
        );
    }
}
