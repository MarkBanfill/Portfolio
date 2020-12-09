<!doctype html>
<html class="no-js" lang="">

<?php include_once("head.html"); ?>

<body>

  <?php include_once("header.html"); ?>

  <div id="backgrounds">
    <div id="video-container">
      <div class="fader"></div>
      <video autoplay="" loop="" muted="" playsinline="" style="opacity: 0.930404;"><source src="img/introduction2.mp4" type="video/mp4"></video>
    </div>
    <img src="img/about.jpg" alt="about" />
    <img src="img/design.jpg" alt="skills" />
    <img src="img/technique.jpg" alt="technique" />
    <img src="img/background.jpg" alt="background" />
    <img src="img/contact.jpg" alt="contact" />
  </div>

  <div id="main" class="scroll-container">

    <section id="introduction" data-title="Introduction" data-navcolour="FFF" data-linecolour="00BEEF">
      <div class="grid">
        <h1 class="animate-letters" aria-label="I make websites">I make websites.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <h2>
            Need a web developer with over 15 years experience?
          </h2>
          <p>
            This is my portfolio site which contains details on my experince, how I work and the tools I use.
            Please <a href="#1">scroll down</a> to find out more about me.
          </p>
        </div>
      </div>
    </section>

    <section id="about" data-title="About Me" data-navcolour="FFF" data-linecolour="00FFF0">
      <div class="grid">
        <h1 class="animate-letters" aria-label="Experience counts">Experience counts.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            Do you need someone with a wide range of skills who has the experince to take on all aspects of web development?
            <span class="desktop">During my career I have worked with ASP.NET, Drupal and more recently WordPress.
            I also enjoy handcrafting websites like this one which was built from scratch using <a target="_blank" href="https://html5boilerplate.com/">HTML5 Boilerplate</a>.</span>
            Please check the <a href="experience">experience</a> page for further details.
          </p>
        </div>
      </div>
    </section>

    <section id="design" data-title="Design" data-navcolour="FFF" data-linecolour="D1EF17">
      <div class="grid">
        <h1 class="animate-letters" aria-label="An eye for detail">An eye for detail.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            I've spent many years working with responsive designs and thanks to this I am able to consistently produce websites which look great on any device.
            <span class="desktop">I understand the fundamental principles of design like emphasis, balance and alignment, contrast, proportion and white space.</span>
            <span class="desktop">You can see examples of my work on the <a href="portfolio">portfolio</a> page.</span>
          </p>
        </div>
      </div>
    </section>

    <section id="technique" data-title="Technique" data-navcolour="FFF" data-linecolour="FCC">
      <div class="grid">
        <h1 class="animate-letters" aria-label="Simplicity first">Simplicity first.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            I prefer a clean, simple design which gets your point across quickly and with minimal fuss.<span class="desktop"> Websites with fewer assets load quicker and are less prone to error.
            I aim to use best practice techniques in all languages which produce clean, easy to read, re-usable code.
            Where possible I try to avoid plugins and opt for a home grown approach to development.</span>
            For an in depth look at my workflow process check the <a href="development">development</a> page.
          </p>
        </div>
      </div>
    </section>

    <section id="background" data-title="Background" data-navcolour="FFF" data-linecolour="D1EF17">
      <div class="grid">
        <h1 class="animate-letters" aria-label="I've been busy">I've been busy.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            In my last job I worked for 10 years as a web developer for Allied Healthcare.
            This involved the development, deployment and management of many customer facing websites.
            <span class="desktop">We used Windows and Linux environments so I have plenty of experince with IIS, DOS, Apache and Unix shell Bash scripts.
              Before that I was a database analyst for Bourne Leisure so SQL is second nature to me.</span>
          </p>
        </div>
      </div>
    </section>

    <section id="contact" data-title="Contact" data-navcolour="FFF" data-linecolour="00FFF0">
      <div class="grid">
        <h1>Get in touch.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            <a href="mailto:markbanf@gmail.com">markbanf@gmail.com</a>
          </p>
          <p>
            <a href="tel:07866080085">07866 080085</a>
          </p>
          <p>
            I'm based in sunny Hemel Hempstead. I'd love to hear from you if you are interested in my services.
          </p>
        </div>
      </div>
      <div class="footer">
        <div class="grid">
          <div class="grid">
            <div>
              <h3>Mark Banfill</h3>
              <p>
                Web Developer
              </p>
              <p>
                &nbsp;
              </p>
              <p>
                &nbsp;
              </p>
              <p>
                &copy; Mark Banfill <?php echo date("Y"); ?>
              </p>
            </div>
            <div>
              <h3>
                Menu
              </h3>
              <p>
                <a href="./">Introduction</a>
              </p>
              <p>
                <a href="./experience">Experience</a>
              </p>
              <p>
                <a href="./development">Development</a>
              </p>
              <p>
                <a href="./portfolio">Portfolio</a>
              </p>
            </div>
            <div>
              <h3>Social</h3>
              <p>
                <a href="https://www.linkedin.com/in/mark-banfill-web-designer/">LinkedIn</a>
              </p>
              <p>
                <a href="https://github.com/MarkBanfill">GitHub</a>
              </p>
              <p>
                <a href="https://codepen.io/Zen777/">CodePen</a>
              </p>
              <p>
                <a href="https://www.pinterest.co.uk/markbanf">Pinterest</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

  <?php include_once("scripts.html"); ?>

</body>

</html>
