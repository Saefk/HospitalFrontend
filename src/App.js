import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className ="container">
      <div className="row">
        <div className= "col">
          <h1 className="mt-3">Hospital</h1>
        </div>

        <div className="col text-end">
          <a href = "#!"><span className="badge bg-success">Login</span></a>
        </div>
        <hr className="mb-3"></hr>
      </div>


      <div className="row">
        <div className ="col-md-2">
          <nav>
            <div className="list-group">
              {/* If youre using link instead of a href you wouldnt need to refresh the page,
                  only the component 
              */}
              <Link to= "/" className="list-group-item list-group-item-action">Home</Link>
              <Link to= "/doctors" className="list-group-item list-group-item-action">Doctors</Link>
              <Link to= "/patients" className="list-group-item list-group-item-action">Patients</Link>
              <Link to= "/wards" className="list-group-item list-group-item-action">Wards</Link>
              <Link to= "/staff/cases" className="list-group-item list-group-item-action">Case Files</Link>
              <Link to= "/staff/analytics" className="list-group-item list-group-item-action">Analytics</Link>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
