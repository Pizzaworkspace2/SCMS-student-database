document.addEventListener('DOMContentLoaded', (event) => {

let data;
let res;
const classlink = document.getElementById('classlink');
const chesskid = document.getElementById('chesskid');

async function getJSON() {
  res = await fetch(`links.json`);
  data = await res.json();
}

getJSON().then(() => {
classlink.href = data.classlink;
chesskid.href = data.chesskid;
  
  });
});
