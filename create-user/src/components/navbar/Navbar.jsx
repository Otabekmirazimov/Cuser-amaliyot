import './Navbar.css'


function Navbar({usersLength}) {
  return (
    <div className='navbar'>
      <div className='navbar-container container'>
        <h1 className='navbar-logo'>Cuser</h1>
        <h2 className='navbar-counter'>
          {usersLength > 0 ? "You have: " + usersLength : "No users :("}
        </h2>
      </div>
    </div>
  )
}

export default Navbar