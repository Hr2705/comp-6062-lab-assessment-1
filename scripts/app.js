const studentFullName = "Harprit Wadekar";  
const studentNumber = "1196416";

console.log('${studentFullName} - ${studentNumber}');

const headerContent = document.querySelector('h1');
headerContent.innerHTML = `${studentFullName} - ${studentNumber}`;
headerContent.classList.add('headingPrimary');
