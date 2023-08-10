import './Navbar.css';
// import React, { Component } from "react";
import React, { useState } from "react";
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import Fav from './Fav';

function Navbar  (props){
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!clicked);
    };

   
    const [search,setSearch]=useState('')


    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
  
    // Function to add a trip to favorites
    const addToFavorites = (trip) => {
      if (!favorites.some((favorite) => favorite.heading === trip.heading)) {
        setFavorites([...favorites, trip]);
      }
    };
  
    // Function to remove a trip from favorites
    const removeFromFavorites = (trip) => {
      setFavorites(favorites.filter((favorite) => favorite.heading !== trip.heading));
    };
  
    // Function to toggle showing favorite trips
    const toggleFavorites = () => {
      setShowFavorites(!showFavorites);
    };
  

    return (
      <>
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Dream Destinations Hub</h1>

        {/* <div className='Favorite' onClick={()=>props.toggleFavorites()}>
              <i className="fas fa-star" />
              </div> */}

<div className='Favorite' onClick={props.toggleFavorites}>
          <i className="fas fa-star" />
        </div>



        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
            
          />

           {/* <button className="but" type="submit">
             Search
           </button> */}
        </form>

        <div className='menu-icons' onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}

          <li>
            <div className='b'>
          
              <div class="profile-first">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-regular fa-user"></i>
                  {'  '}Profile
                  
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link class="dropdown-item" to="/Profile" >  Myprofile</Link>
                  </li>
                

                  <li>
                    <Link to="/Login" className="dropdown-item">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav> 


      <>

{/* <div> fvoritesCount={favorites.length} toggleFavorites={toggleFavorites} </div>a */}
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
      </form>

      <div className="t-card-container">
          {props.product.filter((element) => {
            return search.toLowerCase() === '' ? element : element.heading.toLowerCase().includes(search);
          }).map((element) => {
            const isFavorite = favorites.some((favorite) => favorite.heading === element.heading);

            // Check if showFavorites is true, and only display favorite trips
            if (showFavorites && !isFavorite) {
              return null;
            }

            return (
              <div className="t-card" key={element.heading}>
                <div className="t-image">
                  <img src={element.image} alt="image" /> 
                </div>
                <p>
                  <h4>
                    {element.heading}
                    {isFavorite ? (
                      <button className="but12" onClick={() => removeFromFavorites(element)}>
                        <i className="fas fa-star" /> {/* Replace with the FontAwesome star icon */}
                      </button>
                    ) : (
                      <button className="but12" onClick={() => addToFavorites(element)}>
                        <i className="far fa-star" /> {/* Replace with the FontAwesome outline star icon */}
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
        </>
        {showFavorites && <Fav  favorites={favorites} />}
            </>
    );
  
}

export default Navbar;


// import React, { useState } from "react";
// import { MenuItems } from './MenuItems';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <nav className='NavbarItems'>
//       <h1 className='navbar-logo'>Dream Destinations Hub</h1>

//       <form className="d-flex" role="search">
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//         />
//       </form>

//       <div className='menu-icons' onClick={handleClick}>
//         <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
//       </div>

//       <ul className={clicked ? "nav-menu active" : "nav-menu "}>
//         {MenuItems.map((item, index) => (
//           <li key={index}>
//             <Link className={item.cName} to={item.url}>
//               <i className={item.icon}></i>
//               {item.title}
//             </Link>
//           </li>
//         ))}

//         <li>
//           <div className='b'>
//             <div className="profile-first">
//               <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                 <i className="fa-regular fa-user"></i>
//                 {'  '}Profile
//               </button>
//               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                 <li>
//                   <Link className="dropdown-item" to="/Profile">Myprofile</Link>
//                 </li>
//                 <li>
//                   <Link to="/Login" className="dropdown-item">Logout</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
