const bookingCont = document.querySelector(".theatre_location");



async function getLiveEvents() {
  let url = "DB/theatre.json";
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data)
  let theatre = data.theatres;
  let theatreTime = data.theatres.Time;
  //   console.log(theatreTime);
  let template = "";
  theatre.forEach((ele) => {
    let template2 = "";
    let timeslots = ele.Time;
    timeslots.forEach((ele) => {
      template2 += `
          <div class="timing">
              <span class="booking_timing">${ele}</span>
              <p class="booking_flexibility"><span> <i class="fa-solid fa-circle"></i></span>Cancellation Available</p>
          </div>
          `;
    });
    template += `<div class="booking_location container ">
        <div class="theatre_wrapper">
         <div class="theatre_info">
         <i class="fa-regular fa-heart"></i>
         <p class="theatre_name">${ele.theatreName}</p>
         <span class="info">
             <i class="fa-solid fa-circle-info"></i>
             <span>INFO</span>
         </span>
        </div>
 
        <div class="ticket_food">
         <div class="mTicket">
             <i class="fa-solid fa-mobile-retro"></i>
             <SPAN>M-Ticket</SPAN>
         </div>
         <div class="foodbevrages">
             <i class="fa-solid fa-burger"></i>
             <span>Food & Beverages</span>
         </div>
 
         
        </div>
     </div>
 
       <div class="movie_timing">
        ${template2}
       </div>
 
 
 
     </div>
      `;
  });
  // workshopContainer.innerHTML = template;
  bookingCont.innerHTML += template;
}
getLiveEvents();

const workshopContainer = document.querySelector(".workshop");




const seats = document.querySelectorAll(".seats");
const seat = document.getElementById('one')
console.log(seat);

function numberOfSeats() {
  seats.forEach((ele) => {
    if (seat.id == "one") {
      
            seat.addEventListener("mouseover", () => {
                vechile.src = "/images/scooter.png";
                // numberOfSeats();
                console.log("click");
            })
    }
  });
}

const vechile = document.getElementById("vechile");



// const modal = document.querySelector(".termsandconditions_body");

// const bookingtime = document.querySelectorAll(".timing");

// bookingtime.forEach((element) => {
//   element.addEventListener("mouseover", () => {
//     modal.style.display = "block";
//     console.log("clicked")
//   });
// });

// async function getLiveEvents() {
//     let url = "theatre.json"
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data)
//     let theatre = data.theatres
//     let theatreTime = data.theatres.Time;
//     console.log(theatreTime)
//     let template = ""
//     let template2= ""
//     theatre.forEach((ele) => {
//         let timeslots = ele.Time;
//         template += `
//   <div class = "workshop-events">
//    <h1>${ele.theatreName}</h1>
//   </div>
//       `
//       timeslots.forEach((ele)=>{
//         template +=`<p>${ele}</p>`
//     })
//     })
//     // workshopContainer.innerHTML = template;
//     workshopContainer.innerHTML += template
// }
// getLiveEvents()
