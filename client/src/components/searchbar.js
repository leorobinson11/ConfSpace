import React, { useState, useRef } from 'react';
import '../styles/seachrbar.css';

const popularPlaces = [
    'New York',
    'Los Angeles',
    'London',
    'Tokyo',
    'Paris',
    'Sydney',
    'Rome',
    'Berlin',
    'San Francisco',
    'Toronto',
];

const RecomendationSearchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredPlaces, setFilteredPlaces] = useState(popularPlaces);

    const dropdownRef = useRef(null); // To track focus within the component

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Filter places based on search term
        const filtered = popularPlaces.filter((place) =>
            place.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredPlaces(filtered);
    };

    const handlePlaceSelect = (place) => {
        setSearchTerm(place);
        setShowDropdown(false); // Hide dropdown after selection
    };

    const handleFocus = () => {
        setShowDropdown(true); // Show dropdown when text box is focused
    };

    const handleBlur = (e) => {
        // Check if the focus is still inside the dropdown or input
        if (!dropdownRef.current.contains(e.relatedTarget)) {
            setShowDropdown(false); // Hide dropdown if focus is lost
        }
    };

    return (
        <div className="search-container" ref={dropdownRef}>
            <input
                type="text"
                placeholder="Search for a place"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="search-input"
            />

            {/* Show dropdown when the input is focused or typing */}
            {showDropdown && (
                <ul className="dropdown">
                    {filteredPlaces.length > 0 ? (
                        filteredPlaces.map((place, index) => (
                            <li
                                key={index}
                                onClick={() => handlePlaceSelect(place)}
                                tabIndex="0" // Makes the list items focusable
                                className="dropdown-item"
                                onBlur={handleBlur} // Handle focus loss for dropdown items
                            >
                                {place}
                            </li>
                        ))
                    ) : (
                        <li className="dropdown-item">No places found</li>
                    )}
                </ul>
            )}
        </div>
    );
};


const Seachrbar = () => {
    return (
        <section class="search-section">
            <div class="search-box">
                <RecomendationSearchbar />
                <input type="date" />
                <input type="number" placeholder="People" min="1" max="100" />
                <button type="button">Search</button>
            </div>
        </section>
    );
}


export default Seachrbar;