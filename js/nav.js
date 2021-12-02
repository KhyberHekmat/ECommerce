const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
        <img src="img/dark-logo.png" alt="En-Ligne Shopping" class="brand-logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, products">
                <button class="search-btn">Search</button>
            </div>
            <a href="#"><img src="img/user.png"></a>
            <a href="#"><img src="img/cart.png"></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="links-item"><a href="#" class="link">home</a></li>
        <li class="links-item"><a href="#" class="link">women</a></li>
        <li class="links-item"><a href="#" class="link">men</a></li>
        <li class="links-item"><a href="#" class="link">kids</a></li>
        <li class="links-item"><a href="#" class="link">accessories</a></li>
    </ul>
    `;
}
createNav();