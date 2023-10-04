import Link from "next/link";
const NavItem = (props) => {
  return (
   <Link href={props.url} 
        className={`nav__item ${
          props.active ? "active" : ""
        }`}
        >{props.post_title}
    </Link> 

  );
};

export default NavItem;