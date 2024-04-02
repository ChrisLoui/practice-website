function rain(){
 let cloud = document.querySelector('.cloud');
 let e = document.createElement('div');

 let devwidth = cloud.getBoundingClientRect().width * 0.98;


 let left = Math.floor(Math.random() * devwidth);
 let height = Math.random() * 10;

 e.classList.add('drop');
 cloud.appendChild(e);
 e.style.left = left + 'px';
 e.style.height = height + 'px';

 setTimeout(function(){
    cloud.removeChild(e)
 },1000)
}

setInterval(function(){
    rain()
},5);