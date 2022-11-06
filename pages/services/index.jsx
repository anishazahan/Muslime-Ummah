import React from 'react';
import MainServices from './MainServices';
import ServiceDetails from './serviceDetails';
import ServicesBreadcam from './ServicesBreadcam';

const services = () => {
     return (
          <div>
              <ServicesBreadcam></ServicesBreadcam>
              {/* <MainServices></MainServices> */}
              <ServiceDetails></ServiceDetails>
          </div>
     );
};

export default services;