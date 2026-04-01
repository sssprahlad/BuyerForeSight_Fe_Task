import "./UserDetails.css";
import { useState, useEffect, useCallback } from "react";
import { USERS_API } from "../../constants/constant";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [status] = useState(false);
  console.log(status, "status");

  console.log(id, "userId")

  const fetchUserDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${USERS_API}/${id}`);
      const data = await response.json();
      console.log(data);
      setUserDetails(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchUserDetails();
    }
  }, [id, fetchUserDetails]);


  if (loading) {
    return (
      <div className='user-details-container'>
        <div className='content-container'>
          <div className="loading">Loading user details...</div>
        </div>
      </div>
    );
  }

  if (!userDetails) {
    return (
      <div className='user-details-container'>
        <div className='content-container'>
          <div className="error">User not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className='user-details-container'>
      <div className='content-container'>

        <div className="button-container">
          <button onClick={() => navigate(-1)} className="back-btn">Back</button>

          <div className="user-header">
            <h1 className="user-name">{userDetails.name}</h1>
            <p className="user-username">@{userDetails.username}</p>
          </div>
        </div>

        <div className="user-info-grid">
          <div className="info-card">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="label">Email:</span>
              <span className="value">{userDetails.email}</span>
            </div>
            <div className="info-item">
              <span className="label">Phone:</span>
              <span className="value">{userDetails.phone}</span>
            </div>
            <div className="info-item">
              <span className="label">Website:</span>
              <span className="value">{userDetails.website}</span>
            </div>
          </div>

          <div className="info-card">
            <h3>Address</h3>
            <div className="info-item">
              <span className="label">Street:</span>
              <span className="value">{userDetails.address.street}</span>
            </div>
            <div className="info-item">
              <span className="label">Suite:</span>
              <span className="value">{userDetails.address.suite}</span>
            </div>
            <div className="info-item">
              <span className="label">City:</span>
              <span className="value">{userDetails.address.city}</span>
            </div>
            <div className="info-item">
              <span className="label">Zipcode:</span>
              <span className="value">{userDetails.address.zipcode}</span>
            </div>
          </div>

          <div className="info-card">
            <h3>Company</h3>
            <div className="info-item">
              <span className="label">Name:</span>
              <span className="value">{userDetails.company.name}</span>
            </div>
            <div className="info-item">
              <span className="label">Catch Phrase:</span>
              <span className="value">{userDetails.company.catchPhrase}</span>
            </div>
            <div className="info-item">
              <span className="label">Business:</span>
              <span className="value">{userDetails.company.bs}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails;