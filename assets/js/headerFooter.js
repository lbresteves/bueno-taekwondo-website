class SpecialHeader extends HTMLElement {
    connectedCallback(){
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
                            <li><a href="index.html" class="active">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="deals.html">Deals</a></li>
                            <li><a href="reservation.html">Reservation</a></li>
                            <li><a href="reservation.html">Book Yours</a></li>
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
      `
        
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
                <br>Insta: <a href="https://www.instagram.com/daybuenoc/" target="_blank" title="free CSS templates">@daybuenoc</a></p>
                </div>
            </div>
            </div>
        </footer>
      `
        
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)