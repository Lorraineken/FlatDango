document.addEventListener("DOMContentLoaded",() =>{
    fetch("http://localhost:3000/films/1")
    .then(response => response.json())
    .then(movie1 => {
    console.log(movie1)

   const div=document.getElementById('first-movie')
   const h3 = document.createElement('h3')
   const p1 =document.createElement('p')
   const p2 =document.createElement('p')
   const p3 =document.createElement('p')
   p1.textContent = `Runtime:${movie1.runtime}`
   p2.textContent =`Showtime: ${movie1.showtime}`
   p3.textContent =`Available tickets: ${movie1.capacity-movie1.tickets_sold}`
   const img=document.createElement('img')
   img.src=movie1.poster
   h3.textContent = `${movie1.title}`
   div.appendChild(h3)
   div.appendChild(p1)
   div.appendChild(p2)
   div.appendChild(p3)
   div.appendChild(img)

    })
})