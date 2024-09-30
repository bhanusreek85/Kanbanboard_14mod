import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

// const Navbar = () => {
//   const [ loginCheck, setLoginCheck ] = useState(false);

//   const checkLogin = () => {
//     if(auth.loggedIn()) {
//       setLoginCheck(true);
//     }
//     else{setLoginCheck(false);}
//   };

//   useEffect(() => {
//     console.log(loginCheck);
//     checkLogin();
//   }, [loginCheck])

//   return (
//     <div className='nav'>
//       <div className='nav-title'>
//         <Link to='/'>Krazy Kanban Board</Link>
//       </div>
//       <ul>
//       {
//         !loginCheck ? (
//           <li className='nav-item'>
//             <button type='button'>
//               <Link to='/login'>Login</Link>
//             </button>
//           </li>
//         ) : (
//           <li className='nav-item'>
//             <button type='button' onClick={() => {
//               auth.logout();
//             }}>Logout</button>
//           </li>
//         )
//       }
//       </ul>
//     </div>
//   )
// }


interface NavbarProps {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

const Navbar = ({  loggedIn, setLoggedIn }: NavbarProps) => {
  const [loginCheck, setLoginCheck] = useState(loggedIn);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
      setLoggedIn(true);
    } else {
      setLoginCheck(false);
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [loggedIn]); // Run only once when the component mounts

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
        {
          !loginCheck ? (
            <li className='nav-item'>
              <button type='button'>
                <Link to='/login'>Login</Link>
              </button>
            </li>
          ) : (
            <li className='nav-item'>
              <button type='button' onClick={() => {
                auth.logout();
                setLoginCheck(false); // Update state after logout
                setLoggedIn(false); // Update parent state after logout
              }}>Logout</button>
            </li>
          )
        }
      </ul>
    </div>
  );
}


export default Navbar;
