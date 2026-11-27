function calculateImpact() {
  const km = parseFloat(document.getElementById('runKm').value) || 0;
  const cups = parseInt(document.getElementById('cupsSaved').value) || 0;
  const meals = parseInt(document.getElementById('mealsSaved').value) || 0;

  // Carbon emission factors (approximate educational estimates):
  // Replacing scooter/car with walking/running saves ~0.12 kg CO2 per km
  // Avoiding a disposable cup saves ~0.05 kg CO2
  // Avoiding a disposable lunchbox saves ~0.15 kg CO2
  const co2Saved = (km * 0.12) + (cups * 0.05) + (meals * 0.15);
  const plasticItems = cups + meals;
  const treesEquivalent = (co2Saved / 1.8).toFixed(2);

  document.getElementById('co2Output').innerText = co2Saved.toFixed(2);
  document.getElementById('plasticOutput').innerText = plasticItems;
  document.getElementById('treeOutput').innerText = treesEquivalent;

  const msg = document.getElementById('encouragementText');
  if (co2Saved >= 3) {
    msg.innerText = "Awesome job! You are an Eco-Champion leading both personal health and climate action!";
  } else if (co2Saved > 0) {
    msg.innerText = "Great start! Every small green step counts toward a healthier planet.";
  } else {
    msg.innerText = "Enter your weekly habits above to start tracking your impact!";
  }

  document.getElementById('resultBox').style.display = 'block';
}
function updatePoints() {
  const checkboxes = document.querySelectorAll('.task-check');
  let total = 0;
  checkboxes.forEach(box => {
    if (box.checked) {
      total += parseInt(box.dataset.points) || 0;
    }
  });
  const pointsEl = document.getElementById('ecoPoints');
  if (pointsEl) {
    pointsEl.innerText = total;
  }
}

function filterSpots(category) {
  const cards = document.querySelectorAll('.spot-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}