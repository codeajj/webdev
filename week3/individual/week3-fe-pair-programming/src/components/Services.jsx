import {services} from "../data";
import Title from "./Title"
import Service from "./Service"

const Services = () => {
  return (
    <section className="section_services" id="services">
      <Title title="our" subTitle="services"/>
      <div className="section_center services_center">
        {services.map((service) => {
          return <Service {...service} key={service.id}/>
        })}
      </div>
    </section>
  )
}

export default Services;
 