function openPanel() {
  document.getElementById("orderPanel").classList.add("open");
}

function closePanel() {
  document.getElementById("orderPanel").classList.remove("open");
}

function goToDelivery() {
  document.getElementById("pickupStep").style.display = "none";
  document.getElementById("deliveryStep").style.display = "block";
  document.getElementById("panelTitle").innerText = "Delivery Details";
}

function confirmOrder() {
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var pickup = document.getElementById("pickup").value;
  var delivery = document.getElementById("delivery").value;
  var time = document.getElementById("time").value;

  if (!name || !mobile || !pickup || !delivery) {
    alert("Please fill all details");
    return;
  }

  var message =
    "📦 New Order – QuickPress\n\n" +
    "👤 Name: " + name + "\n" +
    "📞 Mobile: " + mobile + "\n" +
    "📍 Pickup: " + pickup + "\n" +
    "🏠 Delivery: " + delivery + "\n" +
    "⏰ Time: " + time;

  var url =
    "https://wa.me/919997874502?text=" + encodeURIComponent(message);

  window.open(url, "_blank");

  document.getElementById("deliveryStep").style.display = "none";
  document.getElementById("thankYouStep").style.display = "block";
  document.getElementById("panelTitle").innerText = "Thank You";
}
function openPanel() {
  document.getElementById("orderPanel").classList.add("open");
}

function closePanel() {
  document.getElementById("orderPanel").classList.remove("open");
}

function goToDelivery() {
  document.getElementById("pickupStep").style.display = "none";
  document.getElementById("deliveryStep").style.display = "block";
  document.getElementById("panelTitle").innerText = "Delivery Details";
}

function confirmOrder() {
  var data = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    pickup: document.getElementById("pickup").value,
    delivery: document.getElementById("delivery").value,
    time: document.getElementById("time").value
  };

  if (!data.name || !data.mobile || !data.pickup || !data.delivery) {
    alert("Please fill all fields");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbxL6QLzvfnEp1RUv-wLnW-lYWy2-NfqUcXCJT2Z3i4T8-z3Sq-Hw7ZcmuskMGzZt83Y/exec", {
    method: "POST",
    body: JSON.stringify(data)
  });

  var message =
    "📦 New Order – QuickPress\n\n" +
    "👤 Name: " + data.name + "\n" +
    "📞 Mobile: " + data.mobile + "\n" +
    "📍 Pickup: " + data.pickup + "\n" +
    "🏠 Delivery: " + data.delivery + "\n" +
    "⏰ Time: " + data.time;

  window.open(
    "https://wa.me/919997874502?text=" + encodeURIComponent(message),
    "_blank"
  );

  document.getElementById("deliveryStep").style.display = "none";
  document.getElementById("thankYouStep").style.display = "block";
  document.getElementById("panelTitle").innerText = "Thank You";
}
