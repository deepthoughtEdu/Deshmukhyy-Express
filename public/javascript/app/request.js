$(window).on('load', initialize);

function initialize() {

    $('#request-form').on('submit', function (e) {
        e.preventDefault();

        const formData = {};
        const data = $(this).serializeArray();

        console.log(data);//experiment

        data.forEach(({ name, value }) => {
            formData[name] = value;
        })

        console.log(formData) //experiments

        $.ajax({
            url: '/api/request', //change the api route
            method: 'post',
            cache: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(formData),
            success: function () {
                Swal.fire(
                    'Success!',
                    'Your request is updated.',
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