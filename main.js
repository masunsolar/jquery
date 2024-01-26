$(document).on('click', '.button_remove', function () {
    const listItem = $(this).closest('li');
    listItem.fadeOut(300, function () {
        listItem.remove();
    });
});

$(document).ready(function () {
    // Toggle form visibility on button click
    $('header button').click(function () {
        // Slide toggle the form when the header button is clicked
        $('form').slideToggle();
    });

    // Hide form on cancel button click
    $('#cancel').click(function () {
        // Slide up the form when the cancel button is clicked
        $('form').slideUp();
    });

    // Global variable to store activity description
    let activityDescription = '';

    // Set activity description when clicking on the "stuffs" button
    $('form').on('click', '.stuffs', function () {
        // Prompt the user to enter the activity description
        activityDescription = prompt('Enter the activity description:');
        if (activityDescription !== null) {
            // Store the description as a data attribute on the list item
            $(this).parent().data('description', activityDescription);
            console.log('Activity Description:', activityDescription);
        }
    });

    // Show the activity description when clicking on the "descrip" button
    $(document).on('click', '.descrip', function () {
        // Retrieve and alert the stored activity description
        const description = $(this).parent().data('description');
        if (description) {
            alert(description);
        }
    });

    // Add and remove line styling on list item click
    $('ul').on('click', 'li span', function () {
        // Toggle the 'warning' class when clicking on a list item's text
        $(this).toggleClass('warning');
    });

    // Submit form and add a new item to the list
    $('form').on('submit', function (e) {
        e.preventDefault();
        const text = $('#nameAtv').val().trim();

        if (text !== '') {
            const newItem = $('<li style="display: none;"></li>');

            // Add a button for the description behind the text
            $(`<input type="button" class="descrip"><img class="plus" src="./img/mais.png"></img>`).appendTo(newItem);

            // Add a checkbox behind the text
            $(`<input type="checkbox" class="checkbox">`).appendTo(newItem);

            // Add a button to remove the item
            $(`<button class="button_remove"><img class="button_remove" src="./img/borracha.png"></img></button>`).appendTo(newItem);

            // Add the text to the list item
            const span = $(`<span>${text}</span>`).appendTo(newItem);

            // Append the new item to the list, fadeIn, and clear input
            $('ul').append(newItem);
            newItem.fadeIn();

            // Apply a typing effect to the newly added span element
            typeWriter(span);

            $('#nameAtv').val('');
        }
    });

    // Function to simulate typing effect
    function typeWriter(element) {
        const textArray = element.text().split('');
        element.text('');
        textArray.forEach((letter, i) => {
            setTimeout(() => element.text(element.text() + letter), 60 * i);
        });
    }
});