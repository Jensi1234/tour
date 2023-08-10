import './Navbar.css';
// import React, { Component } from "react";
import React, { useState } from "react";
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';


function Navbar  (props){
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!clicked);
    };

    // const [search,setSearch]=useState('')
  
    
    return (
      <>
      <nav className='NavbarItems'>
       <p><h2 className='navbar-logo'>Dream Destinations Hub</h2></p> 
       
      
 

        <form className="d-flex" role="search">
          {/* <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
            
          /> */}

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

<div className='Favorite' onClick={()=>props.toggleFavorites()}>
<i class="fa-solid fa-star"></i>
              </div>

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


       {/* <div className="t-card-container">
        {props.product.filter((element)=>{
          return search.toLowerCase()===''?element: element.heading.toLowerCase().includes(search); })

                  .map((element)=>{
                   return(<>
               
                <div className="t-card">
                    <div className="t-image">
                <img src={element.image} alt="image"/> 
                </div>
                <h4>{element.heading}</h4>
                <p>{element.text}</p>
                <p>  <i class="fa-solid fa-calendar-days"></i>  {element.day}</p>
               <p><i class="fa-solid fa-dollar-sign"></i>  {element.price}</p>
               </div>
            
                </>
                )
            })}   
            </div> */}
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
