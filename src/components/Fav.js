import React from "react";

function Fav({favorites}){
    return(
        <>
        {favorites.showFavorites && (
        <div>
          {favorites.map((trip) => (
            <div className="t-card" key={trip.heading}>
              <div className="t-image">
                <img src={trip.image} alt="image" />
              </div>
              <h4>{trip.heading}</h4>
              <p>{trip.text}</p>
              <p><i className="fa-solid fa-calendar-days"></i> {trip.day}</p>
              <p><i className="fa-solid fa-dollar-sign"></i> {trip.price}</p>
            </div>
          ))}
        </div>
      )}
        </>
    )
}

export default Fav;