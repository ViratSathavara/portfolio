// toggle mode start
let menu = document.getElementById("#menu-icon");
let navbar = document.querySelector(".navbar");

function toggle() {
  if (navbar.style.top == "-500px") {
    navbar.style.top = "0px";
    navbar.remove = "0px";
    document.getElementById("togglebtn").style.paddingTop = "60px";
    document.getElementById("darkmode").style.marginRight = "40px";
  } else {
    navbar.style.top = "-500px";
  }
}

// dark and light mode start
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// dark and light mode end

// items start
function myHide() {
  var x = document.getElementById("projects1");
  var y = document.getElementById("btnseemore");
  if (x.style.display !== "none") {
    x.style.display = "none";
    y.innerHTML = "See More";
  } else {
    x.style.display = "block";
    y.innerHTML = "See Less";
  }
}
// items end

function SendMail() {
  var params = {
    
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value

  }
  emailjs.send("service_zt94sxg","template_kqm7r8s",params).then(function(res) {
    alert("SuccesFully Sent" + res.status)
  })

}