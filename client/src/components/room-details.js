import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/roomDetails.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RoomDetails = ({ rooms }) => {
    const { id } = useParams();
    const room = rooms.find((room) => room.id === parseInt(id));

    const [selectedDate, setSelectedDate] = useState(null);
    const handleBookRoom = () => {
        if (selectedDate) {
          alert(`Room ${room.title} booked for ${selectedDate.toDateString()}`);
        } else {
          alert('Please select a date before booking.');
        }
    };


    if (!room) {
        return <h2>Room not found</h2>;
    }

    return (
        <div className="room-detail">
          <h1>{room.title}</h1>
    
          {/* Image and booking section side by side */}
          <div className="room-detail-content">
            <img src={room.image} alt={room.title} className="room-detail-image" />
            <div className="room-booking">
              <h3>Select a date to book:</h3>
              
              <input class="date-picker" type="date" selected={selectedDate} onChange={(date) => setSelectedDate(date)}/>

              <button className="book-room-btn" onClick={handleBookRoom}>
                Book Room
              </button>
            </div>
          </div>
    
          {/* Rest of the room details */}
          <p>{room.description}</p>
          <p><strong>Location:</strong> {room.location}</p>
          <p><strong>Rating:</strong> {room.rating} ★</p>
          <p><strong>Price:</strong> ${room.price} / night</p>
        </div>
    );
};


export default RoomDetails;