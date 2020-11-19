<!doctype html>
<html class="no-js" lang="">

<?php include_once("head.html"); ?>

<body>

  <?php include_once("header.html"); ?>

  <div id="backgrounds">
    <img src="img/development.jpg" alt="development" />
    <img src="img/design.jpg" alt="design" />
    <img src="img/graphics.jpg" alt="graphics" />
    <img src="img/coding.jpg" alt="coding" />
    <img src="img/backups.jpg" alt="backups" />
    <img src="img/content.jpg" alt="content" />
  </div>

  <div id="main" class="scroll-container">

    <section id="development" data-title="Development" data-navcolour="FFF" data-linecolour="D1EF17">
      <div class="grid">
        <h1 class="animate-letters" aria-label="Development">Development.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            Scroll down to see my full development process and the tools I currently use.
          </p>
        </div>
      </div>
      <div class="word-cloud">
        <span>GIMP</span><span>Figma</span><span>???</span><span>Atom</span><span>Git</span><span>WP</span>
      </div>
    </section>
    <section id="design" data-title="Design & Prototyping" data-navcolour="FFF" data-linecolour="00FFF0">
      <div class="grid">
        <h1 class="animate-letters" aria-label="Figma">Figma.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            Most of my projects begin here. Figma is a collaborative interface design tool which is great for rapid design and prototyping. It runs in the browser and can be used on any operating system.
          </p>
        </div>
      </div>
    </section>

    <section id="graphics" data-title="Graphics" data-navcolour="FFF" data-linecolour="00FFF0">
      <div class="grid">
        <h1 class="animate-letters" aria-label="GIMP">GIMP.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            Having used Photoshop for most of my career I found it easy to transition to this open source image manipulation software.
          </p>
          <p>
            GIMP has many advanced features and best of all it’s free!
          </p>
        </div>
      </div>
    </section>

    <section id="coding" data-title="Coding" data-navcolour="FFF" data-linecolour="D1EF17">
      <div class="grid">
        <h1 class="animate-letters" aria-label="Atom">Atom.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            Atom is a free and open-source code editor which allows for a great deal of customisation.
            In the past I have used Sublime Text and Visual Studio Code.
          </p>
          <p>

          </p>
        </div>
      </div>
    </section>

    <section id="backups" data-title="Backups & Source Control" data-navcolour="FFF" data-linecolour="D1EF17">
      <div class="grid">
        <h1 class="animate-letters" aria-label="GitHub">GitHub.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            GitHub is a great place to backup and host your code. It supports version control and team collaoration.
          </p>
          <p>

          </p>
        </div>
      </div>
    </section>

    <section id="content" data-title="Content Management" data-navcolour="FFF" data-linecolour="00FFF0">
      <div class="grid">
        <h1 class="animate-letters" aria-label="WordPress">WordPress.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            I’ve been using WordPress to create websites since 2017.
          </p>
          <p>
            My latest project was an image slider plugin called Lightweight Slider which is now hosted at wordpress.org.
          </p>
        </div>
      </div>
    </section>

  </div>

  <?php include_once("scripts.html"); ?>

</body>

</html>
