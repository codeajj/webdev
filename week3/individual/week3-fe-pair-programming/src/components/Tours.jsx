import Title from "./Title"
import Tour from "./Tour"
import {tours} from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="subtitle"/>
      <div className="section_center featured_center">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id}/>
        })}
      </div>
    </section>
  )
}