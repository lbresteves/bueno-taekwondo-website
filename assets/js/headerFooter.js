class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">
                                <!-- ***** Logo Start ***** -->
                                <a href="index.html" class="logo">
                                    <img src="assets/images/logo.png" alt="">
                                </a>
                                <!-- ***** Logo End ***** -->
                                <!-- ***** Menu Start ***** -->
                                <ul class="nav">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="dev_page.html">Sobre</a></li>
                                    <li><a href="dev_page.html">Horários</a></li>
                                    <li><a href="dev_page.html">Fotos</a></li>
                                </ul>   
                                <a class='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                                <!-- ***** Menu End ***** -->
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        `;

        if ($('.menu-trigger').length) {
            $(".menu-trigger").on('click', function () {
                $(this).toggleClass('active');
                $('.header-area .nav').slideToggle(200);
            });
        }

        // Adiciona a classe 'active' ao link correspondente com base na URL atual
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav a');

        navLinks.forEach(link => { 
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }
}




class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = ` 
        <footer>
            <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <p> <a href="#">Bueno Taekwondo</a> All rights reserved. 
                <br>Insta: <a href="https://www.instagram.com/daybuenoc/" target="_blank" title="Dayane Bueno Instagram">@daybuenoc</a></p>
                </div>
            </div>
            </div>
        </footer>
      `;
        
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)