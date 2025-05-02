let transCard = document.getElementById('transcardImage');

let cardBox = document.getElementById('card');

//enter
cardBox.addEventListener('mouseenter', function(event){
    transCard.style.display = "block";

    const rect = cardBox.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const halfWidth = transCard.offsetWidth / 2;
    const halfHeight = transCard.offsetHeight / 2;

    transCard.style.left = (x - halfWidth) + 'px';
    transCard.style.top = (y - halfHeight) + 'px';
});

cardBox.addEventListener('mousemove', function(event){
    transCard.style.display = "block";

    const rect = cardBox.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const halfWidth = transCard.offsetWidth / 2;
    const halfHeight = transCard.offsetHeight / 2;

    transCard.style.left = (x - halfWidth) + 'px';
    transCard.style.top = (y - halfHeight) + 'px';
});

//leave
cardBox.addEventListener('mouseleave', function(event){
	transCard.style.display = "none";
	console.log('out')
});

console.log(cardBox);