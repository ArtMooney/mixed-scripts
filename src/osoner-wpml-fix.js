const menuLinks = document.getElementsByClassName("menu-link");

for (const link of menuLinks) {
  if (link.innerText === `' );">`)
    link.innerHTML = link.innerHTML.replace(`' );"&gt;`, "");
}
