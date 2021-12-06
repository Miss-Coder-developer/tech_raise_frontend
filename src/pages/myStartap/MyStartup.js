import React, { useState, useEffect } from 'react';
//import MyStartupButton from '../../components/UI/buttons/MyStartupButton';
import Listing from '../../components/improveListing/ImproveListing'
import './MyStartup.scss';
import CompanyFeatures from '../../components/items/my-startup-page/companyFeatures/CompanyFeatures';
import SellingDetails from '../../components/items/my-startup-page/sellingDetails/SellingDetails';
import FinancialDetails from '../../components/items/my-startup-page/financialDetails/FinancialDetails';
import BasicInformation from '../../components/items/my-startup-page/basicInformation/BasicInformation';
import Metrics from '../../components/metrics/Metrics';
import axios from 'axios';
import { useLocation } from 'react-router-dom'


const MyStartup = () => {

    // const [userData, setUserData] = useState("");
    const [editInfo, setEditInfo] = useState(false);

    const location = useLocation()

    useEffect(() => {
        let b;
        if(location.role) {
            b = location.role
            console.log(b)
        }else {
            return
        }
    },[])

    console.log(location);

    const [userData, setUserData] = useState()



    function handleUserData(e) {
      setUserData({
          ...userData,
          [e.target.name]: e.target.value,
      })
  }
  console.log(userData,'wwwww');



    useEffect(() => {
      async function fetchAPI() {
        await axios.get(`${process.env.REACT_APP_API_URL}/startup/get-one?user_id=1`)
        .then((res) => {
          setUserData(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
      }

      fetchAPI()
        
    }, []);

    const showInfo = () => {
        if(editInfo) {
          console.log(userData,'userDataPut');
          axios.put(`${process.env.REACT_APP_API_URL}/startup/update`, {
              "id": userData.id,
              "user_id": userData.user_id,
              "contact_name": userData.contact_name,
              "contact_email": userData.contact_email,
              "startup_name": userData.startup_name,
              "website": userData.website
          
          })
        }

        setEditInfo(!editInfo);
    }

    // console.log(userData.contact_name);

    return (
      <section className="founder-main__container wrapper">
        <Listing />
        <div className="informations">
          <div className="informations__public-info">
            <h2 className="public-info__title"> Public information </h2>
            <p className="public-info__text">
              {" "}
              Everyone on MicroAcquire can view these details{" "}
            </p>
            <div className="public-info__items">
              <BasicInformation />
              <CompanyFeatures />
              <SellingDetails />
              <FinancialDetails />
            </div>
          </div>
          <div className="founder-main__private-info">
            {editInfo && userData ? (
            <form className='signup-startup__form'>
              <h2 className='signup-startup__form-title'>Public information</h2>
              <h3 className='signup-startup__form-subtitle'>Buyers will see this after you give access</h3>

              <label className='signup__label'>
                  <span>Contact name </span>
                  <input  className='signup__input' name='contact_name' type='text' value={userData.contact_name} 
                          onChange={handleUserData} /> 
              </label> 
              <label className='signup__label'>
                  <span>Startup name </span>
                  <input  className='signup__input' name='startup_name' type='text' value={userData.startup_name} 
                          onChange={handleUserData} /> 
              </label> 
              <label className='signup__label'>
                  <span>Contact Email </span>
                  <input  className='signup__input' name='contact_email' type='email' value={userData.contact_email} 
                          onChange={handleUserData} /> 
              </label> 
              <label className='signup__label'>
                  <span>Website </span>
                  <input  className='signup__input' name='website' type='text' value={userData.website} 
                          onChange={handleUserData} /> 
              </label> 
              <button className='signup__btn' type="submit" onClick={showInfo}>Save Changes</button>
          </form>
            ) : (
              <>
                <div className="private-info__actions">
                  <h2 className="private-info__title"> Private information </h2>
                  <button
                    type="button"
                    className="private-info__edit-info-butn"
                    onClick={showInfo}
                  >
                    Edit info
                  </button>
                </div>
                <p className="private-info__text">
                  {" "}
                  Buyers will see this after you give access{" "}
                </p>
                <p className="private-info__auto-approve">
                  {" "}
                  Auto-approve buyers requests{" "}
                </p>
                <p className="private-info__intro-text">
                  {" "}
                  Video intro from the Founder{" "}
                </p>
                <button
                  type="button"
                  className="private-info__watch-video-butn"
                  // onClick={}
                >
                  Watch the video
                </button>
                <div className="private-info__user-info-box">
                  <p> Contact Name </p>
                  <h5> {userData?.contact_name} </h5>
                </div>
                <div className="private-info__user-info-box">
                  <p> Startup name </p>
                  <h5> {userData?.startup_name} </h5>
                </div>
                <div className="private-info__user-info-box">
                  <p> Contact e-mail </p>
                  <a
                    href="mailto:tom@Funnelnite.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="user-info-box__email"
                  >
                    {userData?.contact_email}
                  </a>
                </div>
                <div className="private-info__user-info-box">
                  <p> Website </p>
                  <a
                    href="mailto:WWW.Funnelnite.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="user-info-box__website"
                  >
                    {userData?.website}
                  </a>
                </div>
                <div className="private-info__user-info-box">
                  <p> Capital structure </p>
                  <h5> Lorem ipson text </h5>
                </div>
                <div className="private-info__user-info-box">
                  <p> Use of funds </p>
                  <h5> Lorem ipson text </h5>
                </div>
                <div className="private-info__user-info-box">
                  <p> Outstanding debts </p>
                  <h5> Lorem ipson text </h5>
                </div>
                <div className="private-info__user-info-box">
                  <p> Previous equity fundraises </p>
                  <h5> Lorem ipson text </h5>
                </div>
                <div className="private-info__user-info-box">
                  <p> Voting power </p>
                  <h5> Lorem ipson text </h5>
                </div>
                <div className="private-info__user-info-box">
                  <p> The board of directors </p>
                  <h5> Lorem ipson text </h5>
                </div>
                <div className="private-info__user-info-box-pitch">
                  <p> Pitch deck files </p>
                  <h5>
                    {" "}
                    Upload your file to share your vision with potential buyers{" "}
                  </h5>
                </div>
                <div className="private-info__upload-files-box">
                  <label htmlFor="deck_file">
                    <div />
                    <span> Click to upload files </span>
                  </label>
                  <input type="file" id="deck_file" />
                </div>
              </>
            )}
          </div>
        </div>
        <Metrics />
        {/* <div className="founder-main__metrics">
                <h2 className="metrics__title"> Metrics </h2>
                <div className="metrics__action-box">
                    <div className="action-box__content">
                        <h2 className="metrics__suggestion"> Want to sell your startup faster? Add metrics! </h2>
                        <p className="metrics__description"> 
                            Metrics give potential buyers greater insight into your business and will attract more acquisition offers for your startup. 
                        </p>
                        <MyStartupButton 
                            className="improve-listing__add-metrics-butn"
                            label="Add metrics"
                            // onButnClick={}
                        />
                    </div>
                </div>
            </div> */}
      </section>
    );
};

export default MyStartup;
