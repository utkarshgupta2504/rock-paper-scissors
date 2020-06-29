$('.play-icon').on('click', event => {

    $('.play').hide();
    $('.played-turn').show();
    playGame(event.target.alt);
})

function playGame(choice) {

    $('#user-choice').attr('src', `images/icon-${choice}.svg`);
    $('#user-choice').addClass(`${choice}`);
    // $('#user-choice').css('width: 200%');
}
