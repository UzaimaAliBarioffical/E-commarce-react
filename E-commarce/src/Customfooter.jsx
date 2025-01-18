import React from 'react'

const Customfooter = () => {
  return (
    <div>
       <footer className="bg-dark text-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase"> UB Store Collection</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-light">
            <h5 className="text-uppercase">Products</h5>
            <ul className="list-unstyled mb-0 text-light">
              <li>
                <a href="#!" className="text-light">Grousery</a>
              </li>
              <li>
                <a href="#!" className="text-light">Food
        
                </a>
              </li>
              <li>
                <a href="#!" className="text-light">mobile</a>
              </li>
              <li>
                <a href="#!" className="text-light">computer</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Useful Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light">Your Account</a>
              </li>
              <li>
                <a href="#!" className="text-light">Help</a>
              </li>
              <li>
                <a href="#!" className="text-light">Terms of Service</a>
              </li>
              <li>
                <a href="#!" className="text-light">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-light" href="https://yourcompany.com/"> UB Store Collection</a>
      </div>
    </footer>
    </div>
  )
}

export default Customfooter