import MainServices from "./MainServices";

import ServicesBreadcam from "./ServicesBreadcam";

const services = () => {
  return (
    <div>
      <ServicesBreadcam logoText={"OUR SERVICES"}></ServicesBreadcam>
      <MainServices></MainServices>
    </div>
  );
};

export default services;
