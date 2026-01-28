import {socialLinks} from "../data"
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  return (
    <ul className={parent}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} link={link} itemClass={itemClass}/>
      })}
    </ul>
  )
}

export default SocialLinks;
 