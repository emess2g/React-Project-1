import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer class="footer row ">
    <div class=" footer__container ">
         <div class="footer__1">
          <a href="index.html" class="footer__logo"><h4>EMESS</h4></a>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, mollitia!
          </p>
         </div>

         <div class="footer__2">
          <h4>Permalinks</h4>
          <ul class="permalinks">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
         </div>

         <div class="footer__3">
          <h4>Privacy</h4>
          <ul class="privacy">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and condition </a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
         </div>

         <div class="footer__4">
          <h4>Contact Us</h4>
          <div>
            <p>+233549435786</p>
            <p>emess2gh@gmil.com</p>
          </div>

          <ul class="footer__socials">
            <li>
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </li>
          </ul>
         </div>

        
         </div>

         <div class="footer__copyright">
          <small>Copyright &copy; emess 2024</small>

         </div>
   </footer>

  )
}

export default Footer