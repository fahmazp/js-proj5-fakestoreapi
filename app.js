const productsContainer = document.getElementById('products-container');

// Function to fetch and display products
async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products'); 
    const products = await response.json(); 

    // Loop through the products and create cards
    products.forEach(product => {
      
      const productCard = document.createElement('div');
      productCard.className = 'col-md-4 mb-4';

      productCard.innerHTML = `
        <div class="card h-100">
          <div class="image-container" style="overflow: hidden; height: 200px;">
            <img src="${product.image}" class="card-img-top img-fluid pt-3" alt="${product.title}" style="object-fit: contain; width: 100%; height: 100%;" />
          </div>
          <div class="card-body">
            <h6 class="card-title">${product.title}</h6>
            <p class="card-text">
              ${product.description.slice(0, 100)}... <!-- Limit description to 100 characters -->
            </p>
            <p class="card-text"><strong>Price: $${product.price}</strong></p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      `;

      // Append the card to the container
      productsContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();
