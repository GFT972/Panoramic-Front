import React from "react";
import Decoreleft from "../../assets/img/decore-left.png";
import Decoreright from "../../assets/img/decore-right.png";


const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="dashboard-widgets row">
        <div className="col-lg-6">
          <div className="card-widget widget-user mb-2">
            <div className="widget-user-decore">
              <div className="widget-decore-left">
                <img src={Decoreleft} alt={Decoreleft} />
              </div>
              <div className="widget-decore-right">
                <img src={Decoreright} alt={Decoreright} />
              </div>
            </div>
            <div className="card-widget-header">
              <div className="widget-icon">
                <i className="bx bx-award"></i>
              </div>
            </div>
            <div className="card-widget-body">
              <div className="widget-user-details">
                <h1 className="widget-user-title">
                  Aujourd'hui, c'est l'anniversaire de "Lucie"
                </h1>
                <p className="widget-user-description">
                  Souhaitons lui une bonne journée
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-widget mb-2">
                <div className="widget-flex">
                  <div className="widget-icon">
                    <i className="bx bx-package"></i>
                  </div>
                  <div className="card-widget-body">
                    <h1 className="widget-count">3</h1>
                    <p className="widget-name">Produits en rupture</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-lg-6">
              <div className="card-widget mb-2">
                <div className="widget-flex">
                  <div className="widget-icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <div className="card-widget-body">
                    <h1 className="widget-count">12</h1>
                    <p className="widget-name">Commande en cours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
