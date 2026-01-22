document.addEventListener('DOMContentLoaded', (event) => {

let link;
let res;
const classlink = document.getElementById('classlink');
const chesskid = document.getElementById('chesskid');
const cli = document.getElementById('cli');
const cki = document.getElementById('cki');
const cai = document.getElementById('cai');

async function getJSON() {
  res = await fetch(`links.json`);
  link = await res.json();
}

getJSON().then(() => {
classlink.href = link.classlink;
chesskid.href = link.chesskid;
cli.src = link.cli;
cki.src = link.cki;
cai.src = link.cai;
  
  });
});
