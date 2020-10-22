import React from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'

const LaunchItem = ({launch: {flight_number, mission_name, launch_date_local, launch_success}}) => {
  
  return (
    <div className="card card-body mb-3">
      <div className="row">
      <div className="col-md-9 d-flex flex-column justify-content-center align-items-start">
        <h4 style={{color: '#FFF4EA'}}>Mission: <span 
          style={{color: launch_success ? '#9CCd62' : '#FF5976'}}
        >
          {mission_name}
        </span>
        </h4>
        <p>Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></p>
      </div>
      <div className="col-md-3 d-flex align-items-center justify-content-center">
        <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Launch Details</Link>
      </div>
      </div>
    </div>
  )
}

export default LaunchItem
