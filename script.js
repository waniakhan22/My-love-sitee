let count = 0;
let interval = null;

function startHold() {
  if (interval) return;

  interval = setInterval(() => {
    if (count < 100) {
      count++;
      document.getElementById("count").innerText = count + "%";
    } else {
      clearInterval(interval);
      window.location.href = "envelop.html";
    }
  }, 40);
}

function stopHold() {
  clearInterval(interval);
  interval = null;
}

let index = 0;
const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
  if (i !== 0) card.style.display = "none";
});

function nextCard(card) {
  card.classList.add("slide");

  setTimeout(() => {
    card.style.display = "none";
    index++;
    if (cards[index]) {
      cards[index].style.display = "flex";
    }
  }, 500);
}

function openGift() {
  window.location.href = "ticket.html";
}

  function claimTicket() {
    window.location.href = "bestwishes.html";
  }

 // Final cards with paper card logic
const bwCards = document.querySelectorAll(".card");
let bwIndex = 0;

function nextCard(card){
  card.classList.add("slide");
  setTimeout(() => {
    card.classList.remove("active");
    card.style.display = "none";
    bwIndex++;
    if(bwCards[bwIndex]){
      bwCards[bwIndex].classList.add("active");
      bwCards[bwIndex].style.display = "flex";
    } else {
      // Show paper card
      document.getElementById("paperCard").style.display = "flex";
    }
  }, 500);
}

function openPaper(){
  // Final New Year message or redirect to final page
  window.location.href = "final.html";
}
