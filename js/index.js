document.addEventListener("DOMContentLoaded",() =>{
    firstMovie()
    movieMenu()
})



//function to display the first movie when the page loads

firstMovie = function(){
    fetch("https://lorraineken.github.io/server/db.json")
    .then(response => response.json())
    .then((movie) => {
        let movie1 = movie.films[0]

   let div=document.getElementById('first-movie')
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
}

//function to display the menu of movies

movieMenu = function(){
    fetch("https://lorraineken.github.io/server/db.json")
    .then(response => response.json())
    .then(menu => {
        
        for(item of menu.films){
            const ul=document.getElementById('films')
            const li =document.createElement('li')
            const img=document.createElement('img')
            const p=document.createElement('p')
            let availableTickets=item.capacity-item.tickets_sold
            p.textContent=`Available tickets: ${availableTickets}`
            const button=document.createElement('button')
            button.textContent='Buy Ticket'
            img.src=item.poster
            img.className='h-25 w-25'
            li.textContent=item.title
            ul.appendChild(li) 
            ul.appendChild(img)
            ul.appendChild(p)
            ul.appendChild(button)

            

            button.addEventListener('click',()=>{
                if (availableTickets>0){
                p.textContent=`Available tickets: ${--availableTickets}`
                }
                else{
                    p.textContent='Sold Out'
                }
            })

            
        }
    })
}

