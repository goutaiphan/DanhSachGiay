let title = document.createElement('div');
title.className = 'title';
title.innerHTML = 'Danh sách Nike';

let array = [{name: 'Air Max 270 Big Kid', price: 190.2},
    {name: 'Kyrie Flytrap II', price: 150},
    {name: 'Hustle D9 Flyease', price: 130.2},
    {name: 'Air Max Oketo', price: 60},
    {name: 'Revolution 4 Flyease', price: 55},
    {name: 'Revolution 4', price: 45}];

let area = document.createElement('div');
area.append(title);

let board = document.createElement('div');
board.className = 'board';
area.append(board);
for (let i = 0; i < array.length; i++) {
    let shoe = document.createElement('div');
    shoe.className = 'shoe';
    for (let i = 0; i < 4; i++) {
        shoe.append(document.createElement('div'));
    }
    let children = shoe.children;
    children[0].onclick = () => children[0].classList.toggle('love');
    children[1].style.backgroundImage = `url(../media/shoe${i + 1}.jpg)`;
    children[2].innerHTML = array[i].name;
    children[3].innerHTML = '$' + array[i].price.toFixed(2);
    board.append(shoe);
}

document.body.append(area);



