function sendEmail() {
  var parameters = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    msg: document.getElementById("msg").value,
  };
  emailjs
    .send("service_rfig2k2", "template_lz0jb1m", parameters)
    .then(function (res) {
      alert("Sucessfully sent");
    });
}
