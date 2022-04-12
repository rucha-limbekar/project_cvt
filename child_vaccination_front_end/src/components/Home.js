import React from "react";
import Carousel  from "react-bootstrap/Carousel";



class Home extends React.Component {

    render() {
        return (
            <div>
             
            <div className="container-fluid" style={{marginTop:"20px"}}>
            <Carousel>
                <Carousel.Item style={{ height: "100%" }}>
                  <img
                    style={{ height: "550px"}}
                    className="d-block w-100"
                    src="https://www.expatica.com/app/uploads/sites/5/2019/07/vaccinations-in-france-1920x1080.jpg"
                    alt="Child Vaccination"
                  />
                 
    
                  <Carousel.Caption>
                    <h4 style={{color:"gold"}}>Vaccination Need</h4>
                    <h6 style={{color:"wheat"}}>Vaccination protects children from serious illness and complications of vaccine-preventable 
                    diseases which can include amputation of an arm or leg, paralysis of limbs, hearing loss, convulsions, brain damage, and death.
                    Vaccine-preventable diseases, such as measles, mumps, and whooping cough, are still a threat.
                    If children aren’t vaccinated, they can spread the disease to other children who are too young to be vaccinated or to people
                     with weakened immune systems, such as transplant recipients and people with cancer. This could result in long-term complications 
                     and even death for these vulnerable people.</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100%" }}>
                  <img
                    style={{ height: "550px"}}
                    className="cimg d-block w-100"
                    src="https://www.biospace.com/getasset/11f6fa49-df4b-4929-8d07-34a38610e3c4/"
                    alt="Child Vaccination"
                  />
                  <Carousel.Caption>
                    <h4 style={{color:"maroon"}}>Immunization</h4>
                    <h6 style={{color:"black"}}>Immunisation describes the process whereby people are protected against illness caused by infection 
                    with micro-organisms (formally called pathogens). The term vaccine refers to the material used for immunisation, while vaccination 
                    refers to the act of giving a vaccine to a person.</h6>
                  </Carousel.Caption>
                </Carousel.Item>
    
                <Carousel.Item style={{ height: "100%"}}>
                  <img
                    style={{ height: "550px"}}
                    className="d-block w-100" 
                    src="http://127.0.0.1:5500/src/images/child1.jpg"
                    alt="Child Vaccination"
                  />
                  <Carousel.Caption>
                    <h4 style={{color:"white"}}>Importance</h4>
                    <h6 style={{color:"black"}}>Vaccination is the most important thing we can do to protect ourselves and our children against ill health.
                    Childhood vaccinations are so important because young immune systems are more vulnerable to diseases and illnesses.</h6>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            
            </div>
          </div>
        )
    }
}

export default Home;