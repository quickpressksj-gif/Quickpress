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

// 🔥 ORDER ID FRONTEND (GUARANTEED)
function generateOrderId() {
  var d = new Date();
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  var rand = Math.floor(1000 + Math.random() * 9000);
  return "QP-" + y + m + day + "-" + rand;
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

  var orderId = generateOrderId();

  // ✅ 1) DIRECT WHATSAPP OPEN (NEVER BLOCKED)
  var waUrl =
    "https://wa.me/919997874502?text=" +
    encodeURIComponent(
      "📦 New Order – QuickPress\n\n" +
      "🆔 Order ID: " + orderId + "\n" +
      "👤 Name: " + name + "\n" +
      "📞 Mobile: " + mobile + "\n" +
      "📍 Pickup: " + pickup + "\n" +
      "🏠 Delivery: " + delivery + "\n" +
      "⏰ Time: " + time
    );

  window.location.href = waUrl; // 🔥 MOST RELIABLE

  // ✅ 2) SAVE TO GOOGLE SHEET (BACKGROUND)
  fetch("https://script.google.com/macros/s/AKfycbxL6QLzvfnEp1RUv-wLnW-lYWy2-NfqUcXCJT2Z3i4T8-z3Sq-Hw7ZcmuskMGzZt83Y/exec", {
    method: "POST",
    body: JSON.stringify({
      orderId: orderId,
      name: name,
      mobile: mobile,
      pickup: pickup,
      delivery: delivery,
      time: time
    })
  });

  // ✅ 3) UI UPDATE
  document.getElementById("deliveryStep").style.display = "none";
  document.getElementById("thankYouStep").innerHTML =
    "<h3>✅ Order Placed</h3><p>Your Order ID:<br><b>" +
    orderId +
    "</b></p>";
  document.getElementById("thankYouStep").style.display = "block";
  document.getElementById("panelTitle").innerText = "Thank You";
}
 
