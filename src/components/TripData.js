// import "./Trip.css";
// import "./Trip";
// import { useState } from "react";


// function TripData(props){

// const [search,setSearch]=useState('')



//     return(<>
     
//     <form className="d-flex" role="search">
//         <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
//     </form>

//    <div className="tripcard">
//     <div className="t-card-container">
//         {props.product.filter((element)=>{
//           return search.toLowerCase()===''?element: element.heading.toLowerCase().includes(search); })

//                   .map((element)=>{
//                    return(<>
               
//                 <div className="t-card">
//                     <div className="t-image">
//                 <img src={element.image} alt="image"/> 
//                 </div>
//                 <h4>{element.heading}</h4>
//                 <p>{element.text}</p>
//                 <p>  <i class="fa-solid fa-calendar-days"></i>  {element.day}</p>
//                <p><i class="fa-solid fa-dollar-sign"></i>  {element.price}    </p>
               
//                </div>
            
//                 </>
//                 )
//             })}
//             </div>
//             </div>
            
//                 </>
            

//     )
// }

// export default TripData;
// import React, { useState } from "react";
// import "./Trip.css";
// import "./Trip";

// function TripData(props) {
//   const [search, setSearch] = useState('');
//   const [favorites, setFavorites] = useState([]);
//   const [showFavorites, setShowFavorites] = useState(false);

//   // Function to add a trip to favorites
//   const addToFavorites = (trip) => {
//     if (!favorites.some((favorite) => favorite.heading === trip.heading)) {
//       setFavorites([...favorites, trip]);
//     }
//   };

//   // Function to remove a trip from favorites
//   const removeFromFavorites = (trip) => {
//     setFavorites(favorites.filter((favorite) => favorite.heading !== trip.heading));
//   };

//   // Function to toggle showing favorite trips
//   const toggleFavorites = () => {
//     setShowFavorites(!showFavorites);
//   };

//   return (
//     <>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
//       </form>

//       <div className="tripcard">
//         <div className="t-card-container">
//           {props.product.filter((element) => {
//             return search.toLowerCase() === '' ? element : element.heading.toLowerCase().includes(search);
//           }).map((element) => {
//             const isFavorite = favorites.some((favorite) => favorite.heading === element.heading);

//             return (
//               <div className="t-card" key={element.heading}>
//                 <div className="t-image">
//                   <img src={element.image} alt="image" /> 
//                 </div>
//                 <h4>{element.heading}</h4>
//                 <p>{element.text}</p>
//                 <p><i className="fa-solid fa-calendar-days"></i> {element.day}</p>
//                 <p><i className="fa-solid fa-dollar-sign"></i> {element.price}</p>
                
//                 {/* Render appropriate button based on whether it's a favorite */}
//                 {isFavorite ? (
//                   <button className="but12" onClick={() => removeFromFavorites(element)}>Remove from Favorite</button>
//                 ) : (
//                   <button className="but12" onClick={() => addToFavorites(element)}>Add to Favorite</button>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Display favorite trips */}
//       <button onClick={toggleFavorites}><h2>Favorite Trips</h2></button>
      
//       {showFavorites && (
//         <div>
//           {favorites.map((trip) => (
//             <div className="t-card" key={trip.heading}>
//               <div className="t-image">
//                 <img src={trip.image} alt="image" />
//               </div>
//               <h4>{trip.heading}</h4>
//               <p>{trip.text}</p>
//               <p><i className="fa-solid fa-calendar-days"></i> {trip.day}</p>
//               <p><i className="fa-solid fa-dollar-sign"></i> {trip.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   )
// }

// export default TripData;


// import React, { useState } from "react";
// import "./Trip.css";
// import "./Trip";
// import Navbar from "./Navbar";
// import Fav from './Fav'


// function TripData(props) {
//   const [search, setSearch] = useState('');
//   const [favorites, setFavorites] = useState([]);
//   const [showFavorites, setShowFavorites] = useState(false);

//   // Function to add a trip to favorites
//   const addToFavorites = (trip) => {
//     if (!favorites.some((favorite) => favorite.heading === trip.heading)) {
//       setFavorites([...favorites, trip]);
//     }
//   };

//   // Function to remove a trip from favorites
//   const removeFromFavorites = (trip) => {
//     setFavorites(favorites.filter((favorite) => favorite.heading !== trip.heading));
//   };

//   // Function to toggle showing favorite trips
//   const toggleFavorites = () => {
//     setShowFavorites(!showFavorites);
//   };

  
//   return (
//     <>
//  <Navbar favoritesCount={favorites.length} toggleFavorites={toggleFavorites} />
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
//       </form>


      

//       <div className="tripcard">


        
//         <div className="t-card-container">
//           {props.product.filter((element) => {
//             return search.toLowerCase() === '' ? element : element.heading.toLowerCase().includes(search);
//           }).map((element) => {
//             const isFavorite = favorites.some((favorite) => favorite.heading === element.heading);

//             return (
//                 <div>
//               {/* {showFavorites ? <Fav favorites={favorites} showFavorites={showFavorites}/> :  */}
//                 {showFavorites ? <Fav showFavorites={showFavorites} favorites={favorites} /> : 
//               <div className="t-card" key={element.heading}>
//                 <div className="t-image">
//                   <img src={element.image} alt="image" /> 
//                 </div>
//               <p> <h4>{element.heading}
//                 {isFavorite ? (
//                   <button className="but12" onClick={() => removeFromFavorites(element)}>
//                     <i className="fas fa-star" /> {/* Replace with the FontAwesome star icon */}
//                   </button>
//                 ) : (
//                   <button className="but12" onClick={() => addToFavorites(element)}>
//                     <i className="far fa-star" /> {/* Replace with the FontAwesome outline star icon */}
//                   </button>
//                 )}</h4></p> 


//                 <p>{element.text}</p>
//                 <p><i className="fa-solid fa-calendar-days"></i> {element.day}</p>
//                 <p><i className="fa-solid fa-dollar-sign"></i> {element.price}</p>
                
//                 {/* Render appropriate icon based on whether it's a favorite */}
               
//               </div>}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Display favorite trips */}
//       <button onClick={toggleFavorites}><h2>Favorite Trips</h2></button>
      
      
//     </>
//   )
// }

// export default TripData;


// import React, { useState } from "react";
// import "./Trip.css";
// import "./Trip";
// import Navbar from "./Navbar";
// import Fav from './Fav'

// function TripData(props) {
//   const [search, setSearch] = useState('');
//   const [favorites, setFavorites] = useState([]);
//   const [showFavorites, setShowFavorites] = useState(false);

//   // Function to add a trip to favorites
//   const addToFavorites = (trip) => {
//     if (!favorites.some((favorite) => favorite.heading === trip.heading)) {
//       setFavorites([...favorites, trip]);
//     }
//   };

//   // Function to remove a trip from favorites
//   const removeFromFavorites = (trip) => {
//     setFavorites(favorites.filter((favorite) => favorite.heading !== trip.heading));
//   };

//   // Function to toggle showing favorite trips
//   const toggleFavorites = () => {
//     setShowFavorites(!showFavorites);
//   };

//   return (
//     <>
//       <Navbar favoritesCount={favorites.length} toggleFavorites={toggleFavorites} />
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
//       </form>

//       <div className="tripcard">
//         <div className="t-card-container">
//           {props.product.filter((element) => {
//             return search.toLowerCase() === '' ? element : element.heading.toLowerCase().includes(search);
//           }).map((element) => {
//             const isFavorite = favorites.some((favorite) => favorite.heading === element.heading);

//             return (
//               <div className="t-card" key={element.heading}>
//                 <div className="t-image">
//                   <img src={element.image} alt="image" /> 
//                 </div>
//                 <p>
//                   <h4>
//                     {element.heading}
//                     {isFavorite ? (
//                       <button className="but12" onClick={() => removeFromFavorites(element)}>
//                         <i className="fas fa-star" /> {/* Replace with the FontAwesome star icon */}
//                       </button>
//                     ) : (
//                       <button className="but12" onClick={() => addToFavorites(element)}>
//                         <i className="far fa-star" /> {/* Replace with the FontAwesome outline star icon */}
//                       </button>
//                     )}
//                   </h4>
//                 </p>
//                 <p>{element.text}</p>
//                 <p><i className="fa-solid fa-calendar-days"></i> {element.day}</p>
//                 <p><i className="fa-solid fa-dollar-sign"></i> {element.price}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Display favorite trips */}
//       {/* <button onClick={toggleFavorites}><h2>Favorite Trips</h2></button> */}
      
//       {showFavorites && <Fav showFavorites={showFavorites} favorites={favorites} />}
//     </>
//   )
// }

// export default TripData;

// import React, { useState } from "react";
// import "./Trip.css";
// import "./Trip";
// import Navbar from "./Navbar";
// import Fav from './Fav';

// function TripData(props) {
//   const [search, setSearch] = useState('');
//   const [favorites, setFavorites] = useState([]);
//   const [showFavorites, setShowFavorites] = useState(false);

//   // Function to add a trip to favorites
//   const addToFavorites = (trip) => {
//     if (!favorites.some((favorite) => favorite.heading === trip.heading)) {
//       setFavorites([...favorites, trip]);
//     }
//   };

//   // Function to remove a trip from favorites
//   const removeFromFavorites = (trip) => {
//     setFavorites(favorites.filter((favorite) => favorite.heading !== trip.heading));
//   };

//   // Function to toggle showing favorite trips
//   const toggleFavorites = () => {
//     setShowFavorites(!showFavorites);
//   };
  
  

//   return (
//     <>
//       <Navbar favoritesCount={favorites.length} toggleFavorites={toggleFavorites} />
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" id="search" type="search" placeholder="Search..." aria-label="Search" onChange={(e) => setSearch(e.target.value) } /> 
//       </form>

//       <div className="tripcard">
//         <div className="t-card-container" >
//           {props.product.filter((element) => {
//             return search.toLowerCase() === '' ? element : element.heading.toLowerCase().includes(search);
//           }).map((element) => {
//             const isFavorite = favorites.some((favorite) => favorite.heading === element.heading);

//             // Check if showFavorites is true, and only display favorite trips
//             if (showFavorites && !isFavorite) {
//               return null;
//             }

//             return (
//               <div className="t-card" data-aos="fade-up"
//               data-aos-duration="3000" key={element.heading}>
//                 <div className="t-image" >
//                   <img src={element.image} alt="image" /> 
//                 </div>
//                 <p>
//                   <h4>
//                     {element.heading}
//                     {isFavorite ? (
//                       <button className="but12" onClick={() => removeFromFavorites(element)} >
//                         <i className="fas fa-star" /> {/* Replace with the FontAwesome star icon */}
//                       </button>
//                     ) : (
//                       <button className="but12" onClick={() => addToFavorites(element)}>
//                         <i className="far fa-star" /> {/* Replace with the FontAwesome outline star icon */}
//                       </button>
//                     )}
//                   </h4>
//                 </p>
//                 <p>{element.text}</p>
//                 <p><i className="fa-solid fa-calendar-days"></i> {element.day}</p>
//                 <p><i className="fa-solid fa-dollar-sign"></i> {element.price}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Display favorite trips */}
//       {/* <button onClick={toggleFavorites}><h2>Favorite Trips</h2></button> */}
      
//       {/* Show favorite trips when showFavorites is true */}
//       {showFavorites && <Fav  favorites={favorites} />}
//     </>
//   )
// }

// export default TripData;


import React, { useState, useEffect } from "react";
import "./Trip.css";
import "./Trip";
import Navbar from "./Navbar";
import Fav from './Fav';

function TripData(props) {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Function to save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (trip) => {
    if (!favorites.some((favorite) => favorite.heading === trip.heading)) {
      setFavorites([...favorites, trip]);
    }
  };

  const removeFromFavorites = (trip) => {
    setFavorites(favorites.filter((favorite) => favorite.heading !== trip.heading));
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <>
      <Navbar favoritesCount={favorites.length} toggleFavorites={toggleFavorites} />
      <form className="d-flex" role="search">
        <input className="form-control me-2" id="search" type="search" placeholder="Search..." aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
      </form>

      <div className="tripcard">
        <div className="t-card-container">
          {props.product.filter((element) => {
            return search.toLowerCase() === '' ? element : element.heading.toLowerCase().includes(search);
          }).map((element) => {
            const isFavorite = favorites.some((favorite) => favorite.heading === element.heading);

            if (showFavorites && !isFavorite) {
              return null;
            }

            return (
              <div className="t-card" data-aos="fade-up" data-aos-duration="3000" key={element.heading}>
                <div className="t-image">
                  <img src={element.image} alt="image" />
                </div>
                <p>
                  <h4>
                    {element.heading}
                    {isFavorite ? (
                      <button className="but12" onClick={() => removeFromFavorites(element)}>
                        <i className="fas fa-star" />
                      </button>
                    ) : (
                      <button className="but12" onClick={() => addToFavorites(element)}>
                        <i className="far fa-star" />
                      </button>
                    )}
                  </h4>
                </p>
                <p>{element.text}</p>
                <p><i className="fa-solid fa-calendar-days"></i> {element.day}</p>
                <p><i className="fa-solid fa-dollar-sign"></i> {element.price}</p>
              </div>
            );
          })}
        </div>
      </div>

      {showFavorites && <Fav favorites={favorites} />}
    </>
  )
}

export default TripData;




