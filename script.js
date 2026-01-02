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

  // 🔥 1) WhatsApp OPEN FIRST (user click based – never blocked)
  var message =
    "📦 New Order – QuickPress\n\n" +
    "👤 Name: " + name + "\n" +
    "📞 Mobile: " + mobile + "\n" +
    "📍 Pickup: " + pickup + "\n" +
    "🏠 Delivery: " + delivery + "\n" +
    "⏰ Time: " + time;

  window.open(
    "https://wa.me/919997874502?text=" + encodeURIComponent(message),
    "_blank"
  );

  // 🔄 2) Save to Google Sheet in background
  fetch("https://script.google.com/macros/s/AKfycbxL6QLzvfnEp1RUv-wLnW-lYWy2-NfqUcXCJT2Z3i4T8-z3Sq-Hw7ZcmuskMGzZt83Y/exec", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      mobile: mobile,
      pickup: pickup,
      delivery: delivery,
      time: time
    })
  });

  // ✅ 3) UI update
  document.getElementById("deliveryStep").style.display = "none";
  document.getElementById("thankYouStep").style.display = "block";
  document.getElementById("panelTitle").innerText = "Thank You";
}
