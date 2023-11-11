$(window).on('load', initialize);

function initialize() {

    $('#note-form').on('submit', function (e) {
        e.preventDefault();

        const formData = {};
        const data = $(this).serializeArray();

        data.forEach(({ name, value }) => {
            formData[name] = value;
        })

        $.ajax({
            url: '/api/note',
            method: 'post',
            cache: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(formData),
            success: function () {
                Swal.fire(
                    'Success!',
                    'Note created successfully.',
                    'success'
                )
            },
            error: function () {
                Swal.fire(
                    'Error!',
                    'Something went wrong.',
                    'error'
                );
            }
        })
    });

}