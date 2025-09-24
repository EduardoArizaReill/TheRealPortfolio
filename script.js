$(document).ready(function () {
  // Importar helpers de viewport (verge ya está en la página)
  if (typeof verge !== "undefined") {
    $.extend(verge);
  }

  // Scroll suave
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top - 50 }, 900);
  });

  $("#down").on("click", function () {
    $('html,body').animate({ scrollTop: $("#about").offset().top - 50 }, 900);
  });

  var year = new Date().getFullYear();

  // --- Data de proyectos (imágenes por HTTPS para evitar mixed content) ---
  var projectData = [
    {
      title: "Quotes",
      text:
        '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-build-a-random-quote-machine" target="_blank"><i>Build a Random Quote Machine</i></a>. The user is able to show a new random quote and send that quote to Twitter. <strong>Quotes</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Graphics Editor:</strong> Gimp, pixlr.com<br> <strong>Images:</strong> lorempixel.com<br> <strong>Fonts:</strong> Font-awesome<br> <strong>Data:</strong> random famous quotes API',
      image: ["https://picsum.photos/seed/quotes/600/400"],
      site: [
        ["CodePen", "fa-codepen", "https://s.codepen.io/MutantSpore/full/dojjre"],
        ["Live Site", "fa-link", "https://2am.ninja/quotes/"]
      ]
    },
    {
      title: "Twitch TV",
      text:
        '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-use-the-twitchtv-json-api" target="_blank"><i>Use the Twitchtv JSON API</i></a>. A user can see if Free Code Camp is currently streaming on Twitch.tv.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Fonts:</strong> Ubuntu Mono<br> <strong>Data:</strong> Twitchtv API',
      image: ["https://picsum.photos/seed/twitch/600/400"],
      site: [["CodePen", "fa-codepen", "https://s.codepen.io/MutantSpore/full/jrEBgq"]]
    },
    {
      title: "Wiki Search",
      text:
        '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-build-a-wikipedia-viewer" target="_blank"><i>Build a Wikipedia Viewer</i></a>. A user can search Wikipedia entries in a search box and see the resulting Wikipedia entries.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Graphics Editor:</strong> pixlr.com<br> <strong>Images:</strong> unsplash.com<br> <strong>Data:</strong> Wikipedia API',
      image: ["https://picsum.photos/seed/wiki/600/400"],
      site: [["CodePen", "fa-codepen", "https://s.codepen.io/MutantSpore/full/rVRwor"]]
    },
    {
      title: "Pomodoro Timer",
      text:
        '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-build-a-pomodoro-clock" target="_blank"><i>Build a Pomodoro Clock</i></a>. A user can start a 25 minute pomodoro…</p> <strong>Code:</strong> HTML5, HTML5 Canvas, CSS3, Javascript, jQuery, ion.sound<br> <strong>Layout:</strong> Bootstrap, HTML5 Canvas<br> <strong>Fonts:</strong> IcoMoon',
      image: ["https://picsum.photos/seed/pomodoro/600/400"],
      site: [
        ["CodePen", "fa-codepen", "https://s.codepen.io/MutantSpore/full/WvVZyM"],
        ["Live Site", "fa-link", "https://2am.ninja/timer/"]
      ]
    },
    {
      title: "Local Weather",
      text:
        '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-show-the-local-weather" target="_blank"><i>Show the Local Weather</i></a>…</p> <strong>Data:</strong> Open Weather Map API, IP-API.com',
      image: ["https://picsum.photos/seed/weather/600/400"],
      site: [["CodePen", "fa-codepen", "https://codepen.io/MutantSpore/full/oXaoxb/"]]
    },
    {
      title: "Bar Graph",
      text:
        '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart" target="_blank"><i>Visualize Data with a Bar Chart</i></a>…</p> <strong>Code:</strong> D3, SVG',
      image: ["https://picsum.photos/seed/bargraph/600/400"],
      site: [["CodePen", "fa-codepen", "https://s.codepen.io/MutantSpore/full/PNJMpg"]]
    },
    {
      title: "Heat Map",
      text:
        '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/visualize-data-with-a-heat-map" target="_blank"><i>Visualize Data with a Heat Map</i></a>…</p>',
      image: ["https://picsum.photos/seed/heatmap/600/400"],
      site: [["CodePen", "fa-codepen", "https://s.codepen.io/MutantSpore/full/VeKNEa"]]
    },
    {
      title: "Tic-Tac-Toe",
      text:
        '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game" target="_blank"><i>Build a Tic Tac Toe Game</i></a>…</p>',
      image: ["https://picsum.photos/seed/tictactoe/600/400"],
      site: [["CodePen", "fa-codepen", "https://s.codepen.io/MutantSpore/full/jWWYLo"]]
    }
  ];

  // Flip de tarjetas
  function addListener() {
    var cards = document.querySelectorAll(".card.effect_click");
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function () {
        this.classList.toggle("flipped");
      });
    }
  }

  // Render de tarjetas
  function showProjectCards() {
    var html = "";
    projectData.forEach(function (project) {
      html += '<div class="col-sm-6 col-md-4">';
      html += '<div class="card effect_click"><div class="card_front">';
      html += '<figure><img class="img-responsive" src="' + project.image[0] + '" alt="' + project.title + '">';
      html += '<figcaption class="project-title">' + project.title + "</figcaption></figure></div>";

      html += '<div class="card_back"><figure>';
      html += '<div class="project-title">' + project.title + "</div>";
      html += "<figcaption>";
      html += '<div class="project-body">' + project.text + "</div>";
      html +=
        '<div><a data-toggle="tooltip" title="' +
        project.site[0][0] +
        '" data-placement="top" href="' +
        project.site[0][2] +
        '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' +
        project.site[0][1] +
        '" aria-hidden="true"></i></a>';

      if (typeof project.site[1] !== "undefined") {
        html +=
          '<a data-toggle="tooltip" title="' +
          project.site[1][0] +
          '" data-placement="top" href="' +
          project.site[1][2] +
          '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa ' +
          project.site[1][1] +
          '" aria-hidden="true"></i></a>';
      }

      html += "</div></figcaption></figure></div>";
      html += "</div></div>";
    });

    $("#theProjects").append(html);
    addListener();
  }

  showProjectCards();

  // Copyright
  $(".copyright").text("© " + year + " Eduardo Ariza Reillo. All rights reserved");

  // Tooltips de Bootstrap
  $('[data-toggle="tooltip"]').tooltip();
});
