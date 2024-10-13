import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/roomList.css';

const RoomLink = ({ room }) => {
    return (
        <Link to={`/room/${room.id}`} className="room-link" key={room.id}>
            <div className="room-item" key={room.id}>
            <img src={room.image} alt={room.title} className="room-image" />
            <div className="room-details">
                <h3 className="room-title">{room.title}</h3>
                <p className="room-location">{room.location}</p>
            </div>
            <div className="room-rating">{room.rating} ★</div>
            <div className="room-price">${room.price} / night</div>
            </div>
        </Link>
    )
}

const RoomList = ({ rooms }) => {
    return (
        <div className="room-list">
          {rooms.map((room) => (
            <RoomLink room={room} />
          ))}
        </div>
    );
}

export default RoomList;