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
  document.getElementById("deliveryStep").style.display = "none";
  document.getElementById("thankYouStep").style.display = "block";
  document.getElementById("panelTitle").innerText = "Thank You";
}
