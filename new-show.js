console.log('new show')


function sendData(event){
    event.preventDefault();

    const form = document.forms['create'];

    const formData = new FormData(form);

    const newShow = {
        title: formData.get('title'),
        author: formData.get('author'),
        imageUrl: formData.get('imageUrl'),
        isOver: formData.get('isOver') === 'on' ? true : false,
        upVotes: 0,
        downVotes: 0
    }

    console.log(newShow);

    if (newShow.title === '' || newShow.author === '' || newShow.imageUrl === '') {
        alert('Uno o più campi sono rimasti vuoti.');
        return;
    }

    DBService.createShow(newShow)
    .then(show => window.location = './index.html')
    .catch(error => alert(error.message));
}