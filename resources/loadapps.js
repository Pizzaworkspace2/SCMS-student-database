document.addEventListener('DOMContentLoaded', (event) => {

let link;
let res;
const classlink = document.getElementById('classlink');
const chesskid = document.getElementById('chesskid');
const canvas = document.getElementById('canvas');
const canva = document.getElementById('canva');
const master = document.getElementById('master');
const type = document.getElementById('type');
const wayground = document.getElementById('wayground');
const nced = document.getElementById('nced');
const sora = document.getElementById('sora');
const cli = document.getElementById('cli');
const cki = document.getElementById('cki');
const cai = document.getElementById('cai');
const caai = document.getElementById('caai');
const mas = document.getElementById('mas');
const ty = document.getElementById('ty');
const wg = document.getElementById('wg');
const cloud = document.getElementById('cloud');
const so = document.getElementById('so');

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
type.href = link.type;
wayground.href = link.wayground;
nced.href = link.nced;
cli.src = link.cli;
cki.src = link.cki;
cai.src = link.cai;
caai.src = link.caai;
mas.src = link.mas;
ty.src = link.ty;
wg.src = link.wg;
cloud.src = link.cloud;
so.src = link.so;

  });
});
