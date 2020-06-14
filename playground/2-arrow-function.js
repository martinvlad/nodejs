const square= (x) =>  
{
    return x * x
}
 console.log(square(20))

 const event = {
     name : 'Birthday Party',
     guestList: ['Jon','Caroline','Mark', 'Claudia' ],
     printGuestList(){
         console.log("Guest list for " +  this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + " will be attending this " + this.name)
        })

     }
 }

 event.printGuestList()