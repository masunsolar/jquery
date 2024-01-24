$(document).ready(function () {
    // Toggle form visibility on button click
    $('header button').click(function () {
        $('form').slideToggle();
    });

    // Hide form on cancel button click
    $('#cancel').click(function () {
        $('form').slideUp();
    });

    // Show pop-up for activity description on stuffs button click
    $('form').on('click', '.stuffs', function () {
        const description = prompt('Digite a descrição da atividade:');
        if (description !== null) {
            // You can handle the description as needed (e.g., store it, display it, etc.)
            console.log('Descrição da atividade:', description);
        }
    });

    // Add and remove line styling on list item click
    $('ul').on('click', 'li span', function () {
        $(this).toggleClass('completed');
    });

    // Submit form and add new item to the list
    $('form').on('submit', function (e) {
        e.preventDefault();
        const text = $('#nameAtv').val().trim();

        if (text !== '') {
            const newItem = $('<li style="display: none;"></li>');

            // Add the text to the list item
            const span = $(`<span>${text}</span>`).appendTo(newItem);

            // Add a checkbox behind the text
            $(`<input type="checkbox" class="checkbox">`).prependTo(newItem);

            $(`<input type="button" class="descrip"><img class="plus" src="./img/mais.png"></img>`).prependTo(newItem);

            // Append new item to the list, fadeIn, and clear input
            $('ul').append(newItem);
            newItem.fadeIn();

            // Apply typing effect to the newly added span element
            typeWriter(span);

            $('#nameAtv').val('');
        }
    });

    // Function to simulate typing effect
    function typeWriter(element) {
        const textArray = element.text().split('');
        element.text('');
        textArray.forEach((letra, i) => {
            setTimeout(() => element.text(element.text() + letra), 60 * i);
        });
    }
});