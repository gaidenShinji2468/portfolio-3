import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import {
  // social
  Github,
  EnvelopeAtFill,
  Whatsapp,
  Linkedin,
  // nav
  HouseDoorFill,
  PersonFill,
  PenFill,
  ArchiveFill,
  BriefcaseFill,
  PersonLinesFill,
  // theme
  MoonFill,
  SunFill,

  FileEarmarkArrowDownFill
} from "react-bootstrap-icons";
import profilePhoto from "/images/profile_photo.jpg";
import "/src/assets/styles/MenuNav.css";

function MenuNav({action}) {
  const socials = [
    {
      content: <EnvelopeAtFill/>,
      link: "mailto:gaidenshinji2468@gmail.com"
    },
    {
      content: <Whatsapp/>,
      link: "https://api.whatsapp.com/send?phone=584120325803&text=Hola,%20¿qué%tal?"
    },
    {
      content: <Linkedin/>,
      link: "https://www.linkedin.com/in/romel-gil-4b1370213"
    },
    {
      content: <Github/>,
      link: "https://github.com/gaidenShinji2468"
    }
  ];
  const menuNav = [
    {
      title: "Inicio",
      icon: <HouseDoorFill/>,
      link: "#greet"
    },
    {
      title: "Acerca de Mí",
      icon: <PersonFill/>,
      link: "#about-me"
    },
    {
      title: "Mis Servicios",
      icon: <PenFill/>,
      link: "#services"
    },
    {
      title: "Portafolio",
      icon: <BriefcaseFill/>,
      link: "#portfolio"
    },
    {
      title: "Experiencia",
      icon: <ArchiveFill/>,
      link: "#experience"
    }, 
    {
      title: "Contáctame",
      icon: <PersonLinesFill/>,
      link: "#contact-me"
    }
  ];

  return (
    <div id="menu-nav">
      <Image
	src={profilePhoto}
	className="mb-3"
        fluid	
      />
      <ul>
	<li><h3>Romel Gil</h3></li>
	<li id="socials">
	  {
            socials.map((social, i) => {
              return (
                <Badge
		  key={i}
		  as="a"
		  href={social.link}
		  target="blank_"
		  pill
		  bg="secondary"
		  text="primary"
		>{social.content}</Badge>
	      );
	    })
	  }
	</li>
	{
          menuNav.map((menuItem, i) => {
            return (
              <li key={i}>
		<a
		  href={menuItem.link}
		  onClick={() => action()}
		>
		  {menuItem.icon}{menuItem.title}
		</a>
	      </li>
	    );
	  })
	}
	<li><span>GSH - Devs</span></li>
      </ul>
    </div>
  );
}

export default MenuNav;
