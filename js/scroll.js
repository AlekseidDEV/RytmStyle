const scroll = () => {
    const navbar = document.querySelector(".nav__links");
    const navLink = navbar.querySelectorAll(".link_nav");
  
    navLink.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(link.getAttribute("href"));
  
        const section = document.querySelector(link.getAttribute("href"));
  
        if (section) {
          
          seamless.scrollIntoView(section, {
            behavior: "smooth",
            block: "start",
            inline: "center",
          });
        }
      });
    });
  };
  
  scroll()