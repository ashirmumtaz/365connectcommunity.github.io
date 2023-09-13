

  if (screen.height > screen.width){
    document.querySelector(".video-item").hidden = true;
    document.getElementById("header-logo").hidden = true;
  }

///////////////
// Menu data structure
var signedIn = true;
const menuData = [
{ label: 'Home', link: '#section1', submenu: [] },
{
  label: 'Our Family',
  link: '#',
  submenu: [
    { label: 'Contributors', link: '#section2' , visible: true },
    { label: 'Members', link: '#section3' , visible: true },
  ],
},
{
  label: 'Contributions',
  link: '#',
  submenu: [
    { label: 'Events', link: '#section2' , visible: true },
    { label: 'Blogs', link: '#section3' , visible: true },
  ],
},
{
  label: 'Contact Us',
  link: '#',
  submenu: [
    { label: 'Get Support', link: '#section2' , visible: true },
    { label: 'Seek Guidance', link: '#section3' , visible: true },
  ],
},
{
  label: 'Profile',
  link: '#',
  submenu: [
    { label: 'Sign In', link: '#section2' , visible: !signedIn },
    { label: 'My Profile', link: '#section3' , visible: signedIn },
    { label: 'My Registrations', link: '#section3' , visible: signedIn },
    { label: 'My Certificates', link: '#section3' , visible: signedIn },
    { label: 'Sign Out', link: '#section3' , visible: signedIn }
  ],
}
];

// Get the main menu ul element
const mainMenu = document.querySelector('.main-menu');

// Create and append menu items and submenus
menuData.forEach((menuItemData) => {
const li = document.createElement('li');
const a = document.createElement('a');
a.href = menuItemData.link;
a.textContent = menuItemData.label;
li.appendChild(a);

if (menuItemData.submenu.length > 0) {
  const subUl = document.createElement('ul');
  subUl.className = 'sub-menu';

  menuItemData.submenu.forEach((submenuItemData) => {
    const subLi = document.createElement('li');
    const subA = document.createElement('a');
    subA.href = submenuItemData.link;
    subA.textContent = submenuItemData.label;
    subA.onclick = handleSubmenuItemClicked;
    if(submenuItemData.visible){
      subLi.appendChild(subA);
      subUl.appendChild(subLi);
    }
    
  });

  li.appendChild(subUl);
}

mainMenu.appendChild(li);
});

function handleSubmenuItemClicked(event) {
// Prevent the default behavior of the link
event.preventDefault();

// Get the text content of the clicked submenu item
const submenuItemText = event.target.textContent;

// Check if the clicked submenu item is "Seek Guidance"
if (submenuItemText === 'Sign Out') {
  // Call the specific function or perform some action for "Seek Guidance"
  seekGuidanceFunction();
} else {
  // Handle other submenu items here
  console.log(`Submenu item clicked: ${submenuItemText}`);
}
}

// Function to handle "Seek Guidance" submenu item click
function seekGuidanceFunction() {
// Add your code to handle the "Seek Guidance" click here
console.log('Seek Guidance clicked. Performing specific action...');
}
