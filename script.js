let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


// let season30 = false

// window.onload = function initializeSeasonSwitcher() {
//   toggleSeason()
// }

// function toggleSeason() {
//   season30 = !season30;

//   let season29Stuff = document.getElementsByClassName("season29");
//   let season30Stuff = document.getElementsByClassName("season30");

//   for (let i = 0; i < season29Stuff.length; i++) {
//     if (season30) {
//       season29Stuff[i].style.display = "none";
//     } else {
//       season29Stuff[i].style.display = "flex";
//     }
//   }

//   for (let i = 0; i < season30Stuff.length; i++) {
//     if (season30) {
//       season30Stuff[i].style.display = "flex";
//     } else {
//       season30Stuff[i].style.display = "none";
//     }
//   }
// }

let season = 30;

window.onload = function initializeUpdateSeason() {
  updateSeason()
}

function changeSeasonNumber(newSeasonNumber) {
  season = newSeasonNumber;
  console.log("changeSeasonNumber season: " + season);

  updateSeason()
}

function updateSeason() {
  // hide all seasons
  let season29Stuff = document.getElementsByClassName("season29");
  let season30Stuff = document.getElementsByClassName("season30");

  for (let i = 0; i < season29Stuff.length; i++) {
    season29Stuff[i].style.display = "none";
  }

  for (let i = 0; i < season30Stuff.length; i++) {
    season30Stuff[i].style.display = "none";
  }

  // show the current one
  switch (season) {
    case 29:
      for (let i = 0; i < season29Stuff.length; i++) {
        season29Stuff[i].style.display = "flex";
      }
      break;
    case 30: 
      for (let i = 0; i < season30Stuff.length; i++) {
        season30Stuff[i].style.display = "flex";
      }
      break;
    default:
      console.log("invalid season")
  }
}