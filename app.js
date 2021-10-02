//Marvel Keys
// const apiKey = "70b920f95932ae4fe546e834220435d2"
// const privateKey = "0a5d5403a5fd734ebffc0e8b91d6c9d71b3efb22"
//GOT website href "https://gameofthronesquotes.xyz/""

$(() => {
   $


   $.ajax(
      {
         url: `https://game-of-thrones-quotes.herokuapp.com/v1/houses`,

      }
   ).then(
      (data) => {
         console.log(data);
         //logs an array of all the houses and all the members
         console.log(data[0].members);
         //access house with index 0 and the members in that house. Starks
      },
      () => {
         console.log("bad request");
      }
   )
})
