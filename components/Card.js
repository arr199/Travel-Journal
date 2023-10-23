import React from "react"

export const Card = ( { item : { title , location , googleMapsUrl 
, startDate , endDate , description ,imageUrl}  } ) => {
   
    return (
            <section className="card-section">
                    <img className="card-img"  src={imageUrl} />
                    <div className="card-info">
                        <img className="location-icon" src="../images/location.svg"/>
                        <span className="card-country">{location}</span>
                        <a className="card-link" href={googleMapsUrl} target="_blank" >View in Google Maps</a>
                           <h1 className="card-title">{title}</h1>
                        <p><b>{startDate} - {endDate}</b></p>
                        <p className="card-description">{description}</p>
                    </div>  
            </section>
        
            )
}