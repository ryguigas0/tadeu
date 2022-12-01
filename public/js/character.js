$(function () {
    $('[data-toggle="tooltip"]').mouseenter(function () {
        $(this).tooltip("show")
    })
})

function back() {
    window.location.href = "../characters";
}

function editar(id) {
    window.location.href = "../../create/" + id
}