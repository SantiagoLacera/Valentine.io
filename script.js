function sendEmail() {
  Email.send({
    secureToken: "e714909f-0f5e-4885-9a51-2cfe6862747d",
    To: "santiagolacera251@gmail.com",
    From: "Adriana@gmail.com",
    Subject: "valentine's day requests",
    Body:
      "Food: " +
      document.getElementById("FoodInput").value +
      "Activity: " +
      document.getElementById("ActivityInput").value +
      "Snack: " +
      document.getElementById("SnackInput").value +
      "Gift: " +
      document.getElementById("GiftInput").value,
  }).then((message) => alert("You got it Amor <B"));
}
