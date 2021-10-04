let membersIndex = 0

$(() => {
   $('.sigil').on('click', (event) => {
      $(event.currentTarget).children().eq(1).removeClass('hide');

      let name = $(event.target).val()
      console.log(name);

   const $modal = $('.modal');

   const $closeButton = $('.close');

   // const openModal = () => {
   //    $modal.removeClass('hide');
   // }

   const closeModal = () => {
      // console.log($(event.currentTarget).parent().parent());
      $modal.addClass('hide');
      return false;
      //stops code from bubbling up and running openModal function.
   }


   //when they click the sigil, open the modal.

   $closeButton.on('click', closeModal);


   $.ajax(
      {
         url: `https://game-of-thrones-quotes.herokuapp.com/v1/house/${name}`,

      }
   ).then(
      (data) => {
         $('.text').remove()
         //clears the modal

         for (let info of data){

            // if (membersIndex < info.members.length -1){
            //    membersIndex++
            for (i=0; i<info.members.length; i++){
            console.log(info.members[i].name);
            const $p = $('<p>').addClass('text').text(info.members[i].name).appendTo('.modal-textbox')
         }
      }

         console.log(data);
         //logs an array of all the houses and all the members
         // console.log(data[0]);
         // access house with index 0 and the members in that house. Starks

      },
      () => {
         console.log("bad request");
      }
   )
   });
})


//==========Reference==========//
// Marvel Keys
// const apiKey = "70b920f95932ae4fe546e834220435d2"
// const privateKey = "0a5d5403a5fd734ebffc0e8b91d6c9d71b3efb22"
// GOT website href "https://gameofthronesquotes.xyz/""
