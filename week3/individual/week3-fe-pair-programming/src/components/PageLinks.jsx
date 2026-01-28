import PageLink from "./PageLink"
import { pageLinks } from "../data"

const PageLinks = ({parent, itemClass}) => {
  return (
    <ul className={parent} id="links">
    {pageLinks.map((link) => {
      return <PageLink key={link.id} link={link} itemClass={itemClass}/>
    })}
    </ul>
  )
}

export default PageLinks;