document.addEventListener('DOMContentLoaded', (event) => {

let link;
let res;
const classlink = document.getElementById('classlink');
const chesskid = document.getElementById('chesskid');
const canvas = document.getElementById('canvas');
const canva = document.getElementById('canva');
const master = document.getElementById('master');
const cli = document.getElementById('cli');
const cki = document.getElementById('cki');
const cai = document.getElementById('cai');
const caai = document.getElementById('caai');
const mas = document.getElementById('mas');

async function getJSON() {
  res = await fetch(`links.json`);
  link = await res.json();
}

getJSON().then(() => {
classlink.href = link.classlink;
chesskid.href = link.chesskid;
canvas.href = link.canvas;
canva.href = link.canva;
master.href = link.master;
cli.src = link.cli;
cki.src = link.cki;
cai.src = link.cai;
caai.src = link.caai;
mas.src = link.mas;
  });
});
