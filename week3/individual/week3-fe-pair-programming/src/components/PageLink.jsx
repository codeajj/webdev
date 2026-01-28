const PageLink = ({link, itemClass}) => {
  return (
    <li>
      <a href={link.href} className={itemClass}
      ></a>
    </li>
  )
}

export default PageLink;