/* 
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
*/

const posts = [
    {
        post_id: 1,
        author_name: 'Pippo',
        author_surname: 'Baudo',
        author_img: 'https://unsplash.it/50/50',
        post_date: '3/12/2018',
        post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur nulla officiis ratione voluptas incidunt eum a voluptate explicabo? Aspernatur cupiditate vero numquam, provident dicta adipisci impedit eaque error dolorum.',
        post_img: 'https://unsplash.it/750/450',
        likes_counter: 80 

    },
    {
        post_id: 2,
        author_name: 'Cippa',
        author_surname: 'Lippa',
        author_img: 'https://picsum.photos/50/50',
        post_date: '30/10/2019',
        post_content: 'Autem tenetur nulla officiis ratione voluptas incidunt eum a voluptate explicabo?',
        post_img: 'https://picsum.photos/750/450',
        likes_counter: 44 
    },
    {
        post_id: 3,
        author_name: 'Ursula',
        author_surname: 'Labronici',
        //author_img: 'https://picsum.photos/50/50',
        post_date: '30/2/2020',
        post_content: 'Quel giorno accarezzai un orsetto lavatore &hearts;',
        post_img: 'https://unsplash.it/750/450',
        likes_counter: 20 
    },
    {
        post_id: 4,
        author_name: 'Gianfranco',
        author_surname: 'Franco',
        author_img: 'https://unsplash.it/50/50',
        post_date: '27/03/2021',
        post_content: 'Buongiornissimo!!!! cAFFééééééé?',
        //post_img: 'https://unsplash.it/750/450',
        likes_counter: 2 
    },
    {
        post_id: 5,
        author_name: 'Gigi',
        author_surname: 'Cella',
        //author_img: 'https://picsum.photos/50/50',
        post_date: '31/21/2021',
        post_content: 'Felice anno nuovo!!',
        post_img: 'https://picsum.photos/750/450',
        likes_counter: 99 
    },
];

const postsContainer = document.querySelector('body > .container > .row');

displayPosts(posts, postsContainer)

const likeButtons = document.querySelectorAll('.like_btn');

likeButtons.forEach((element, i)=> {
    element.addEventListener('click', function() {
        //element.classList.toggle('text-primary');
        

        if (element.clicked !== true) {
            element.classList.add('text-primary');
            element.clicked = true; 

            //console.log(`.number_of_likes_${element.post_id}`);

            //console.log(parseInt(document.querySelector(`.number_of_likes_${i+1}`).innerText));

            document.querySelector(`.number_of_likes_${i+1}`).innerHTML = parseInt(document.querySelector(`.number_of_likes_${i+1}`).innerText) + 1;
            //console.log('mi hai cliccato');

            //aumenta il contatore
        } else {
            element.classList.remove('text-primary');
            element.clicked = false; 

            document.querySelector(`.number_of_likes_${i+1}`).innerHTML = parseInt(document.querySelector(`.number_of_likes_${i+1}`).innerText) - 1;

            //console.log('mi hai DEcliccato');
        }
        
    })
})


/* document.querySelectorAll('.like_btn').addEventListener('click', function() {
    console.log('mi hai cliccato');
}) */
//const likeButtons = 




function displayPosts(postsArray, domElement) {
    
    postsArray.forEach(element => {

        //console.log(element.post_img);
        //console.log(typeof element.post_img);

        

        let imgProfileContent;

        let imgPostContent;

        if (element.author_img !== undefined) {

            imgProfileContent = `<img src=${element.author_img} alt="profile pic" class="rounded-pill">`;

        } else {

            imgProfileContent = `<div class="rounded-pill d-flex justify-content-center align-items-center border" style="height: 50px; width: 50px; background-color: lightblue">${element.author_name.at(0).toUpperCase()}${element.author_surname.at(0).toUpperCase()}</div>`;
        }

        if (element.post_img !== undefined) {

            imgPostContent = `<img src=${element.post_img} alt="" class="mt-3">`;

        } else {

            imgPostContent = '';
        }

        const htmlContent = `
        <div class="col">
            <div class="p-3 rounded rounded-3 bg-light">
                <div class="author_div d-flex align-items-center mb-3">
                    ${imgProfileContent}
                    <div class="ms-3 d-flex flex-column">
                        <h5 class="m-0">${element.author_name} ${element.author_surname}</h5>
                        <span>${element.post_date}</span>
                    </div>
                </div>
                <div class="post_div mb-3">
                    <span class="lead">${element.post_content}</span>
                    ${imgPostContent}
                </div>
                <div class="likes_div d-flex align-items-center">
                    <div class="like_btn w-50 d-flex justify-content-center align-itens-center">
                        <span class=""><i class="fa-solid fa-thumbs-up"></i> Mi Piace</span>
                    </div>
                    <div class="w-50 d-flex justify-content-center align-itens-center">
                        <span>Piace a <span class="fw-bold number_of_likes_${element.post_id}">${element.likes_counter}</span> persone</span>
                    </div>
                </div>
            </div>
        </div>
        `;
 
        domElement.insertAdjacentHTML('beforeend', htmlContent);

    })
}




/* const pippo  = `
<div class="col">
    <div class="p-3 rounded rounded-3 bg-light">
        <div class="author_div d-flex align-items-center mb-3">
            ${ALTRAIMMAGINEEEEE}
            <div class="ms-3 d-flex flex-column">
                <h5 class="m-0">${element.author_name} ${element.author_surname}</h5>
                <span>${element.post_date}</span>
            </div>
        </div>
        <div class="post_div mb-3">
            <span class="lead">${element.post_content}</span>
            ${IMMAGINEEEE}
        </div>
        <div class="likes_div d-flex align-items-center">
            <div class="like_btn w-50 d-flex justify-content-center align-itens-center">
                <span class=""><i class="fa-solid fa-thumbs-up"></i> Mi Piace</span>
            </div>
            <div class="w-50 d-flex justify-content-center align-itens-center">
                <span>Piace a <span class="fw-bold number_of_likes_${element.post_id}">${element.likes_counter}</span> persone</span>
            </div>
        </div>
    </div>
</div>
`; */