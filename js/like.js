
function changeColor(event, data_key, i) {
    var svg = event.target.closest('.photo').querySelector('svg');
    var counterElement = event.target.closest('.like').querySelector('#counter');
    var counter = parseInt(counterElement.textContent);
    
    

    if (svg.classList.contains('clicked')) {
        svg.classList.remove('clicked');
        counter--;
    } else {
        svg.classList.add('clicked');
        counter++;
    }

    counterElement.textContent = counter;
    

    data[i][data_key].like = counter.toString();
}