function displayData(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
      var skills = [];
      var skillCheckboxes = document.getElementsByName("skills");

      for (var i = 0; i < skillCheckboxes.length; i++) {
        if (skillCheckboxes[i].checked) {
          skills.push(skillCheckboxes[i].value);
        }
      }

    var cardsContainer = document.getElementById("cards-container");
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = "<h3>" + name + "</h3><p><strong>Email:</strong> " + email + "</p><p><strong>Phone:</strong> " + phone + 
                     "</p><p><strong>Gender:</strong> " + gender + "</p><p><strong>Skills:</strong> " + skills.join(", ") + "</p>";
      cardsContainer.appendChild(card);

 
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender").value = "";

    for (var i = 0; i < skillCheckboxes.length; i++) {
      skillCheckboxes[i].checked = false;
    }


    return false;
}