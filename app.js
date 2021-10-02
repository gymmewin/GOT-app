$(() => {
   const $modal = $('.modal');

   const $closeButton = $('.close');

   const openModal = () => {
      $modal.removeClass('hide');
   }

   const closeModal = () => {
      // console.log($(event.currentTarget).parent().parent());
      $modal.addClass('hide');
      return false;
   }

   $('.sigil').on('click', openModal);
   //when they click the sigil, open the modal.

   $closeButton.on('click', closeModal);

   $.ajax(
      {
         url: `https://game-of-thrones-quotes.herokuapp.com/v1/houses`,

      }
   ).then(
      (data) => {
         $('.text').remove()
         //clears the modal
         for (let info of data){
            console.log(info.name);
            const $p = $('<p>').addClass('text').text(info.name).appendTo('.modal-textbox')
         }



         console.log(data);
         //logs an array of all the houses and all the members
         console.log(data.name);
         console.log(data[0].members);
         // access house with index 0 and the members in that house. Starks
      },
      () => {
         console.log("bad request");
      }
   )
})


//==========Reference==========//
// Marvel Keys
// const apiKey = "70b920f95932ae4fe546e834220435d2"
// const privateKey = "0a5d5403a5fd734ebffc0e8b91d6c9d71b3efb22"
// GOT website href "https://gameofthronesquotes.xyz/""
