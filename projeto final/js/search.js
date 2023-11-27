$(document).ready(function () {
    var resultsFound = false;
  
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#searchResults").empty();
  
      if (value === "") {
        $("#main-search .col").show();
        resultsFound = true;
      } else {
        resultsFound = false;
        $("#main-search .col").filter(function () {
          var cardText = $(this).text().toLowerCase();
          var cardFound = cardText.indexOf(value) > -1;
  
          if (cardFound) {
            $(this).clone().css('display', '').appendTo("#searchResults");
            resultsFound = true;
          } else {
            $(this).hide();
          }
  
          return cardFound;
        });
      }
  
      // Adiciona a mensagem "Não Encontrado" se nenhum resultado for encontrado
      var notFoundMessage = $("#not-found");
      if (!resultsFound && notFoundMessage.is(':empty')) {
        $("#main-cards .col:hidden").show(); // Mostra todos os cards ocultos
        $("<h1>").addClass("container text-white text-center").text("Não Encontrado").appendTo("#not-found");
      } else if (resultsFound) {
        notFoundMessage.empty(); // Limpa a mensagem "Não Encontrado" se houver resultados
      }
    });
  });
  