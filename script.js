const btnCarregar = document.getElementById('btnCarregar');
const postsContainer = document.getElementById('postsContainer');

async function carregarPostagens() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    postsContainer.innerHTML = '';

    posts.forEach(post => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <div class="card-info">
          <span><strong>ID:</strong> ${post.id}</span> | 
          <span><strong>User ID:</strong> ${post.userId}</span>
        </div>
      `;

      postsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Erro ao buscar as postagens:', error);
    postsContainer.innerHTML = '<p>Ocorreu um erro ao carregar as postagens.</p>';
  }
}


btnCarregar.addEventListener('click', carregarPostagens);