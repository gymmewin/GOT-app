let memberIndex = 0

$(() => {
   $('.sigil').on('click', (event) => {
      $(event.currentTarget).children().eq(1).removeClass('hide');
      //when they click the sigil, open the modal by removing class hide.
      let name = $(event.target).val()
      // console.log(name);
      // this 'name' variable will tell the url to update with the correct house name

      const $modal = $('.modal')

      const $closeButton = $('.close')

      const closeModal = () => {
         // console.log($(event.currentTarget).parent().parent());
         $modal.addClass('hide')
         return false
         //stops code from bubbling up and running openModal function.
      }

      $closeButton.on('click', closeModal)

      $.ajax(
         {
            url: `https://game-of-thrones-quotes.herokuapp.com/v1/house/${name}`,
         }
      ).then(
         (data) => {
         $('.text').remove()
         //clears the modal
         for (let info of data){
            for(i=0; i<info.members.length; i++){
               console.log(info.members[i].name);
               const $p = $('<p>').addClass('text').text(info.members[i].name).appendTo('.modal-textbox')
            }
         }
         // console.log(data);
         //logs an array of all the houses and all the members
         // console.log(data[0]);
         // access house with index 0 and the members in that house. Starks
      }),
      () => {
            console.log("bad request");
      }
   })

   $.ajax(
      {
         url: `https://game-of-thrones-quotes.herokuapp.com/v1/random/10`,
      }
   ).then(
      (data) => {
         for (let info of data){
            const $div = $('<div>').addClass('quotebox').appendTo('.quotes')
            //creates a div and sends it to quotes class in html
            const $h3 = $('<h3>').text(`"${info.sentence}"`).appendTo($div)
            const $h4 = $('<h4>').text(`-${info.character.name}`).appendTo($div)
            //creates quotes and person who said quote and sends to new div
            // console.log(info.sentence);
            // console.log(info.character.name);
         }
         let currentQuoteIndex = 0

         let currentQuote = $('.quotes').children().length-1

         $('.button').on('click', () => {
            $('.quotes').children().eq(currentQuoteIndex).css('display', 'none')

            if (currentQuoteIndex < currentQuote){
               currentQuoteIndex++
               //incrementing to the next quote
            } else{
               currentQuoteIndex = 0
            }
            $('.quotes').children().eq(currentQuoteIndex).css('display', 'block')
         })
      }
   ),
   () => {
      console.log("bad request");
   }
})


//==========Reference==========//
// GOT website href "https://gameofthronesquotes.xyz/""
// Marvel Keys
// const apiKey = "70b920f95932ae4fe546e834220435d2"
// const privateKey = "0a5d5403a5fd734ebffc0e8b91d6c9d71b3efb22"
