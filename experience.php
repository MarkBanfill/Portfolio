<!doctype html>
<html class="no-js" lang="">

<?php include_once("head.html"); ?>

<body>

  <?php include_once("header.html"); ?>

  <div id="backgrounds">
    <img src="img/experience.jpg" alt="experience" />
    <img src="img/html.jpg" alt="html" />
    <img src="img/css.jpg" alt="css" />
    <img src="img/js.jpg" alt="js" />
    <img src="img/php.jpg" alt="php" />
    <img src="img/seo.jpg" alt="seo" />
    <img src="img/sql.jpg" alt="sql" />
    <img src="img/typography.jpg" alt="sql" />
  </div>

  <div id="main" class="scroll-container">

    <section id="experience" data-title="Experience" data-navcolour="000" data-linecolour="fa5959">
      <div class="grid">
        <h1 class="animate-letters" aria-label="Experience">Experience.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            I've been developing websites for over 15 years<span class="desktop"> and during this time I have learnt many different programming languages and techniques</span>.
            <a href="#1">Scroll down</a> for more details about my experience.
          </p>
        </div>
      </div>
      <div class="word-cloud">
        <span>CSS</span><span>HTML</span><span>SEO</span><span>PHP</span><span>JS</span><span>SQL</span>
      </div>
    </section>

    <section id="html" data-title="Hypertext Markup Language" data-navcolour="000" data-linecolour="fa5959">
      <div class="grid">
        <h1 class="animate-letters" aria-label="HTML">HTML.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            I always aim to produce semantically correct HTML which validates against <a target="_blank" href="http://validator.w3.org/">W3C</a> standards and WCAG 2.0 accessibility guidelines.
            <span class="tablet">Valid code helps with cross-browser, cross-platform and future compatibility ensuring your site reaches it’s maximum possible audience.</span>
            <span class="desktop">During my time at Allied Healthcare accessibility was one of my top priorities and I would regularly check my code for issues using the <a target="_blank" href="https://wave.webaim.org/">WAVE</a> Web Accessibility Evaluation Tool.</span>
          </p>
        </div>
      </div>
    </section>

    <section id="css" data-title="Cascading Style Sheets" data-navcolour="000" data-linecolour="fa5959">
      <div class="grid">
        <h1 class="animate-letters" aria-label="CSS">CSS.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            After years of dealing with browser inconsistencies and evolving design trends I have a very thorough knowledge of most CSS techniques.
            <span class="desktop">An attractive design and subtle animations can greatly enhance the user experience.</span>
            <span class="tablet">For most websites I like to take advantage of the variables and nesting built into <a target="_blank" href="https://sass-lang.com/">SASS</a> and for larger, team based projects <a target="_blank" href="http://getbem.com/">BEM</a> should be used to avoid coding conflicts.</span>
          </p>
        </div>
      </div>
    </section>

    <section id="js" data-title="JavaScript" data-navcolour="000" data-linecolour="fa5959">
      <div class="grid">
        <h1 class="animate-letters" aria-label="JavaScript">JavaScript.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            I started learning JavaScript on the <a target="_blank" href="https://www.w3schools.com/">W3Schools</a> website back in 2005 and am currently getting used to the new commands and syntax introduced with ES6.
            <span class="tablet">Wherever possible I like to use vanilla JavaScript but many of my sites use <a target="_blank" href="https://jquery.com/">jQuery</a> as it speeds up development and produces clean, easy to read code.</span>
          </p>
        </div>
      </div>
    </section>

    <section id="php" data-title="PHP: Hypertext Preprocessor" data-navcolour="000" data-linecolour="fa5959">
      <div class="grid">
        <h1 class="animate-letters" aria-label="PHP">PHP.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            My PHP skills improved recently when I created a WordPress image slider plugin called <a target="_blank" href="https://lightweight-slider.markbanf.co.uk/">Lightweight Slider</a>. This website is written in PHP.
          </p>
        </div>
      </div>
    </section>

    <section id="seo" data-title="Search Engine Optimization" data-navcolour="000" data-linecolour="fa5959">
      <div class="grid">
        <h1 class="animate-letters" aria-label="SEO">SEO.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            Search engine optimisation and internet marketing are essential for most public facing websites.
            <span class="tablet">I understand the importance of creating compelling content which answers the users query whilst including relevent keywords to attract future searches.</span>
            <span class="desktop">Page speed, inbound links and symantically correct markup are also important factors. Don't forget your alt text!</span>
          </p>
        </div>
      </div>
    </section>

    <section id="sql" data-title="Structured Query Language" data-navcolour="000" data-linecolour="F00">
      <div class="grid">
        <h1 class="animate-letters" aria-label="SQL">SQL.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            I’ve been using SQL for decades and regularly perform backups or restore data using MySQL.
            <span class="tablet">I became skilled with SQL Server when I worked as a Database Analyst for Bourne Leisure.</span>
          </p>
        </div>
      </div>
    </section>

    <section id="typography" data-title="Typography" data-navcolour="000" data-linecolour="F00">
      <div class="grid">
        <h1 class="animate-letters" aria-label="Typography">Typography.</h1>
      </div>
      <div class="grid">
        <div class="info">
          <p>
            Font selection, visual hierarchy, contrast, line height and white space are all important factors when creating a good looking website with great legibility.
            <span class="tablet">Selecting the <a target="_blank" href="https://fonts.google.com/">correct font</a> helps to establish a visual identity for your brand in order to attract your target customer base.</span>
          </p>
        </div>
      </div>
    </section>

  </div>

  <?php include_once("scripts.html"); ?>

</body>

</html>
