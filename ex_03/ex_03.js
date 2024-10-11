document.addEventListener('DOMContentLoaded', () => {

    const imagesData  = [['https://media.giphy.com/media/3oD3Yrwt1gRDhiQZ5S/giphy.gif', 'Who am I'],
        ['https://media.giphy.com/media/3oD3YiCUVULluiN9WU/giphy.gif', 'Happy sausage'],
        ['https://media.giphy.com/media/3oD3YLTOkztY9xfiQE/giphy.gif', 'Stripes'],
        ['https://media.giphy.com/media/l3UcCohhJm3KEhTWw/giphy.gif', 'Tornadoes'],
        ['https://media.giphy.com/media/3oD3YiL23DDll9bAWc/giphy.gif', 'Walking squares'],
        ['https://media.giphy.com/media/26ufjJgVk087WtjEI/giphy.gif', 'Cubes'],
        ['https://media.giphy.com/media/l3Ucp4ROadmpk7aVy/giphy.gif', 'Hairy'],
        ['https://media.giphy.com/media/3oD3YOacdm13voG59K/giphy.gif', 'The Beanstalk'],
        ['https://media.giphy.com/media/l3UcDs1plijcJfOzC/giphy.gif', 'Tiles'],
        ['https://media.giphy.com/media/3oD3YnBHaVfd0rSY1i/giphy.gif', 'In and Out'],
        ['https://media.giphy.com/media/26ACqq4q3I8UDF3IA/giphy.gif', 'Switching points']]
    
    
        generateCards(imagesData);
    
        const cardElements = document.querySelectorAll('.card');
        let zoomedElement = null;
    
        cardElements.forEach(card => {
            card.addEventListener('click', function () {
                this.classList.add('zoomed');
                cardElements.forEach(c => c.classList.add('fade'));
                zoomedElement = this;   
    
                if (zoomedElement) {
                    zoomedElement.classList.add('zoomed');
                    zoomedElement.classList.remove('fade');
                }});});
    
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' ) {
                zoomedElement.classList.remove('zoomed');
                cardElements.forEach(c => c.classList.remove('fade')); 
                zoomedElement = null;
            }});
    
        const cardsList = document.getElementById('cards-list');
        cardsList.addEventListener('wheel', (event) => {
            event.preventDefault();
            cardsList.scrollLeft += event.deltaY;
        });});