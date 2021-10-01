const apiKey = "70b920f95932ae4fe546e834220435d2"
const privateKey = "0a5d5403a5fd734ebffc0e8b91d6c9d71b3efb22"

data: {"limit" : 3000}
//your rate limit is 3000 calls/day
$(() => {

   $.ajax(
      {
         url: `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=70b920f95932ae4fe546e834220435d2`
      }
   ).then(
      (data) => {
         console.log(data);
      },
      () => {
         console.log("bad request");
      }
   )
})
