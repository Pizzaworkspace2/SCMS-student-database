document.addEventListener('DOMContentLoaded', (event) => {

let link;
let res;
const classlink = document.getElementById('classlink');
const chesskid = document.getElementById('chesskid');
const cli = document.getElementById('cli');

async function getJSON() {
  res = await fetch(`links.json`);
  link = await res.json();
}

getJSON().then(() => {
classlink.href = link.classlink;
chesskid.href = link.chesskid;
cli.src = link.cli;
  
  });
});
