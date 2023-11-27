$(document).ready(function () {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#searchResults").empty(); // Limpa os resultados anteriores

      if (value === "") {
        $("#main-search .col").show(); // Mostra todas as colunas se a pesquisa estiver vazia
      } else {
        $("#main-search .col").filter(function () {
          var cardText = $(this).text().toLowerCase();
          var cardFound = cardText.indexOf(value) > -1;

          if (cardFound) {
            $(this).clone().css('display', '').appendTo("#searchResults");
          } else {
            $(this).hide();
          }

          return cardFound;
        });
      }
    });
  });