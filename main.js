$(document).ready(function () {
    // Toggle form visibility on button click
    $('header button').click(function () {
        $('form').slideToggle();
    });

    // Hide form on cancel button click
    $('#cancel').click(function () {
        $('form').slideUp();
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
            const newItem = $('<li style="display: none"></li>');

            // Add the text to the list item
            $(`<span>${text}</span>`).appendTo(newItem);

            // Add a checkbox behind the text
            $(`<input type="checkbox" class="checkbox">`).prependTo(newItem);

            // Append new item to the list, fadeIn, and clear input
            $('ul').append(newItem);
            newItem.fadeIn(200);
            $('#nameAtv').val('');
        }
    });
});