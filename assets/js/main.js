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
        author_name: 'Pippo Baudo',
        author_img: 'https://unsplash.it/50/50',
        post_date: '3/12/2018',
        post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur nulla officiis ratione voluptas incidunt eum a voluptate explicabo? Aspernatur cupiditate vero numquam, provident dicta adipisci impedit eaque error dolorum.',
        post_img: 'https://unsplash.it/750/450',
        likes_counter: 80 

    },
    {
        author_name: 'Cippa Lippa',
        author_img: 'https://picsum.photos/50/50',
        post_date: '30/10/2019',
        post_content: 'Autem tenetur nulla officiis ratione voluptas incidunt eum a voluptate explicabo?',
        post_img: 'https://picsum.photos/750/450',
        likes_counter: 44 
    }
];

const postsContainer = document.querySelector('body > .container > .row');

displayPosts(posts, postsContainer)





function displayPosts(postsArray, domElement) {
    
    postsArray.forEach(element => {
        const htmlContent = `
        <div class="col">
            <div class="p-3 rounded rounded-3 bg-light">
                <div class="author_div d-flex align-items-center mb-3">
                    <img src=${element.author_img} alt="profile pic" class="rounded-pill">
                    <div class="ms-3 d-flex flex-column">
                        <h5 class="m-0">${element.author_name}</h5>
                        <span>${element.post_date}</span>
                    </div>
                </div>
                <div class="post_div mb-3">
                    <span class="lead">${element.post_content}</span>
                    <img src=${element.post_img} alt="" class="mt-3">
                </div>
                <div class="likes_div d-flex align-items-center">
                    <div class="like_btn w-50 d-flex justify-content-center align-itens-center">
                        <span class=""><i class="fa-solid fa-thumbs-up"></i> Mi Piace</span>
                    </div>
                    <div class="w-50 d-flex justify-content-center align-itens-center">
                        <span>Piace a <span class="fw-bold">${element.likes_counter}</span> persone</span>
                    </div>
                </div>
            </div>
        </div>
        `;

        domElement.insertAdjacentHTML('beforeend', htmlContent);
    })
}


const pippo = `
            <div class="col">
                <div class="p-3 rounded rounded-3 bg-light">
                    <div class="author_div d-flex align-items-center mb-3">
                        <img src="https://unsplash.it/50/50" alt="profile pic" class="rounded-pill">
                        <div class="ms-3 d-flex flex-column">
                            <h5 class="m-0">Autore Post</h5>
                            <span>Data</span>
                        </div>
                    </div>
                    <div class="post_div mb-3">
                        <span class="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Autem tenetur nulla officiis ratione voluptas incidunt eum a 
                            voluptate explicabo? Aspernatur cupiditate vero numquam, 
                            provident dicta adipisci impedit eaque error dolorum.
                        </span>
                        <img src="https://unsplash.it/750/450" alt="" class="mt-3">
                    </div>
                    <div class="likes_div d-flex align-items-center">
                        <div class="like_btn w-50 d-flex justify-content-center align-itens-center">
                            <span class="text-primary"><i class="fa-solid fa-thumbs-up"></i> Mi Piace</span>
                        </div>
                        <div class="w-50 d-flex justify-content-center align-itens-center">
                            <span>Piace a <span class="fw-bold">80</span> persone</span>
                        </div>
                    </div>
                </div>
            </div>
`;