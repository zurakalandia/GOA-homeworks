let date = new Date();

document.getElementById('display').textContent = date.toLocaleString();

date.setDate(date.getDate() + 3);
date.setHours(date.getHours() + 7);

document.getElementById('display').textContent = date.toLocaleString();

