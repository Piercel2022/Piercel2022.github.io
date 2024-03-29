/** Create data object */
const projects = [{
  name: 'Awesome Books',
  details: ['MICROVERSE', 'Front End Dev', '2022'],
  smallDescription: 'Awesome Books is a project that is built with classes in ECMA Script version 6. The user enter books in a beautiful interface.',
  bigDescription: 'Awesome Books is a project that is built with classes in ECMA Script version 6. The user enter books in a beautiful interface with the field title and author.The user also has the possibility to remove the books added.',
  imageUrlMobile: 'assets/images/awesome_mobile.png',
  imageUrlDesktop: 'assets/images/awesome_desktop.png',
  popupImageUrlMobile: 'assets/images/awesome_mobile.png',
  popupImageUrlDesktop: 'assets/images/awesome_desktop.png',
  technologiesPopup: ['html', 'css', 'javaScript', 'ES6', ' Linters'],
  technologies: ['html', 'css', 'javaScript'],
  linkLive: 'https://piercel2022.github.io/awesome-books-es6/',
  linkSource: 'https://github.com/Piercel2022/awesome-books-es6.git/',
},
{
  name: 'TODO List',
  details: ['MICROVERSE', 'Front End Dev', '2022'],
  smallDescription: 'Todo List is a web application that let you enter  daily activities. The user can add items and delete them from the list as soon as the tasks is completed. ',
  bigDescription: 'Todo List is a web application that let you enter  daily activities. The user can add items and delete them from the list as soon as the tasks is completed.The user can modified the item in the field or correct them if he want to make a change.  ',
  imageUrlMobile: 'assets/images/todo-list-mobile.png',
  imageUrlDesktop: 'assets/images/todo-list-desktop.png',
  popupImageUrlMobile: 'assets/images/todo-list-mobile.png',
  popupImageUrlDesktop: 'assets/images/todo-list-desktop.png',
  technologiesPopup: ['html', 'css', 'javaScript', 'ES6', 'WebPack', ' Git', 'Linters'],
  technologies: ['html', 'css', 'javaScript, webpack', 'Linters'],
  linkLive: 'https://piercel2022.github.io/todo-list/dist/',
  linkSource: 'https://github.com/Piercel2022/todo-list.git',
},
{
  name: 'Capstone 1',
  details: ['MICROVERSE', 'Front End Dev', '2022'],
  smallDescription: 'The capstone1 is the conference page about the summit event happening this years. There some featured speakers who has spoken about topics concerning the JavaScript programming language.',
  bigDescription: 'The capstone1 is the conference page about the summit event happening this years. There some featured speakers who has spoken about topics concerning the JavaScript programming language. There were some activities during the summit like lectures, exhibition, forum and workshops. ',
  imageUrlMobile: 'assets/images/capstone1-mobile.png',
  imageUrlDesktop: 'assets/images/capstone1-desktop.png',
  popupImageUrlMobile: 'assets/images/capstone1-mobile.png',
  popupImageUrlDesktop: 'assets/images/capstone1-desktop.png',
  technologiesPopup: ['html', 'css', 'javaScript', 'ES6', 'Linters'],
  technologies: ['html', 'css', 'javaScript'],
  linkLive: 'https://piercel2022.github.io/capstone1/',
  linkSource: 'https://piercel2022.github.io/capstone1.git',
},
{
  name: 'Zoo Animals',
  details: ['MICROVERSE', 'Front End Dev', '2022'],
  smallDescription: 'Zoo-Animals is the a API-based webapp capstone project at the of the second module about the javascript language. ',
  bigDescription: 'Zoo-Animals is the a API-based webapp capstone project at the of the second module about the javascript language. In this project, we are receiving data from the Zoo-API . There is also an involvement API we use on the project to display likes. The animals are showing up randomly on the page every time the page is refresh.',
  imageUrlMobile: 'assets/images/zoo-mobile.png',
  imageUrlDesktop: 'assets/images/zoo-animals-desktop.png',
  popupImageUrlMobile: 'assets/images/zoo-mobile.png',
  popupImageUrlDesktop: 'assets/images/popup-deskt.png',
  technologiesPopup: ['html', 'css', 'javaScript', 'ES6', 'WebPack', ' Linters'],
  technologies: ['html', 'Webpack', 'CSS', 'JavaScript', 'Jest'],
  linkLive: 'https://piercel2022.github.io/Zoo-Animals/dist/',
  linkSource: 'https://github.com/Piercel2022/Zoo-Animals.git',
}];

/** Create data object end */

/** Set up mobile menu start */

const menuOverlay = document.querySelector('#menu-overlay');
const mobileMenuButton = document.querySelector('#mobileMenuButton');

function mobileMenuToogle() {
  menuOverlay.style.width = '100%';
}

function closeMobileMenu() {
  menuOverlay.style.width = '0';
}

mobileMenuButton.addEventListener('click', () => {
  mobileMenuToogle();
});

const mobileMenuLinks = document.querySelectorAll('.menu-mobile li a');
for (let i = 0; i < mobileMenuLinks.length; i += 1) {
  mobileMenuLinks[i].addEventListener('click', () => {
    closeMobileMenu();
  });
}

/** Set up mobile menu finish */
function technologies(popup, techData) {
  let m = 1;
  let technologiesPopup = '';
  let technologies = '';
  techData.forEach((tech) => {
    if (!popup) {
      if (tech.toLowerCase().includes('ruby')) {
        technologies += `<li class="lang ruby">${tech}</li>`;
      } else {
        technologies += `<li class="lang">${tech}</li>`;
      }
    } else {
      if (m <= 3) {
        technologies += `<li class="lang">${tech}</li>`;
      } else {
        technologiesPopup += `<li class="lang ruby">${tech}</li>`;
      }
      m += 1;
    }
  });
  return [technologies, technologiesPopup];
}

/** Sort out technologies */

/** * Dynamically adding works-flex items in works section start */
let projectsItemsBuild = '';
for (let i = 0; i < projects.length; i += 1) {
  // determine flex postion of image and work description
  let flexPosition = 'start';
  let flexPositionReverse = 'end';
  if (i % 2 !== 0) {
    flexPosition = 'end';
    flexPositionReverse = 'start';
  }

  // further loop within the parent loop to break and read technologies
  const techData = technologies(false, projects[i].technologies);

  projectsItemsBuild += `<div class="works-flex">
                          <div class="works-flex-item work-image ${flexPosition}">
                              <img src="${projects[i].imageUrlMobile}" class="img-style" alt="${projects[i].name} project screenshot"/>
                              <img src="${projects[i].imageUrlDesktop}" class="img-style-desktop" alt="${projects[i].name} project screenshot"/>
                          </div>
                          <div class="wcontainer ${flexPositionReverse}">
                              <div class="works-flex-item">
                                  <h3 class="intro-text-works">${projects[i].name}</h3>
                              </div>
                              <ul class=" works-flex-item titles-container">
                                  <li class="list-main">${projects[i].details[0]}</li>
                                  <li class="titles-item">${projects[i].details[1]}</li>
                                  <li class="titles-item">${projects[i].details[2]}</li>
                              </ul>
                              <p class="works-flex-item works-description">
                                  ${projects[i].smallDescription}
                              </p>
                              <div class="works-flex-item">
                                  <ul class="lang-container">
                                      ${techData[0]}
                                  </ul>
                              </div>
                              <div class="works-flex-item">
                                  <div class="btn-see">
                                      <a href="javascript:void(0)" class="btn-see-project" project-index="${i}">See project</a>
                                  </div>
                              </div>
                          </div>
                        </div>`;
}

document.querySelector('#portfolio').innerHTML = projectsItemsBuild;

/** * Dynamically adding works-flex items in works section end */
function displayProjectDescriptionPopup(value) {
  const techData = technologies(true, projects[value].technologiesPopup);
  const projectPopup = document.querySelector('#projectPopup');
  const popupContentBuilder = `<div class="popup-content">
                                   <div class="popup-header">
                                       <div class="popup-title">
                                           <div class="topic">
                                               <h1 class="project_title">${projects[value].name}</h1>
                                               <span class="close-popup">&times;</span>
                                           </div>
                                           <ul>
                                           <li class="list-main">${projects[value].details[0]}</li>
                                           <li class="titles-item">${projects[value].details[1]}</li>
                                           <li class="titles-item">${projects[value].details[2]}</li>
                                           </ul>
                                       </div>
                                   </div>
                                   <div class="popup-body">
                                       <div class="work-image">
                                           <img src="${projects[value].popupImageUrlMobile}" class="img-style" alt="${projects[value].name} project screenshot"/>
                                           <img src="${projects[value].popupImageUrlDesktop}" class="img-style-desktop-popup" alt="${projects[value].name} project screenshot"/>
                                       </div>
                                       <div class="description-container">
                                           <div class="project-text intro-message">
                                               <p>
                                               ${projects[value].bigDescription}
                                               </p>
                                           </div>
                                           <div class="project-tags">
                                               <div class="tags">
                                                   <ul>
                                                    ${techData[0]}
                                                   </ul>
                                                   <ul>
                                                    ${techData[1]}
                                                   </ul>
                                               </div>
                                               <div class="tags-buttons">
                                                   <a href="${projects[value].linkLive}" class="btn-see-project icon">See live<img  src="/assets/images/icon.png  "
                                                   /></a> 
                                                   <a href="${projects[value].linkSource}" class="btn-see-project">See source <i class="fa fa-github"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>`;
  projectPopup.innerHTML = popupContentBuilder;
  projectPopup.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    projectPopup.style.display = 'none';
  });
}
const seeProjectButtons = document.querySelectorAll('.btn-see-project');
for (let c = 0; c < seeProjectButtons.length; c += 1) {
  seeProjectButtons[c].addEventListener('click', () => {
    displayProjectDescriptionPopup(seeProjectButtons[c].getAttribute('project-index'));
  });
}
const changeColor = document.querySelector('h1');
changeColor.style.display = '#172B4D';
