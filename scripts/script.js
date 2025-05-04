let loader = $('#loader')

$('#order__btn').click(function () {
    let product = $('#product');
    let name = $('#name');
    let phone = $('#phone');
    let hasError = false;
    let thankYou = $('#thank_you');
    let orderImage = $('.order__image');
    let orderInfo = $('.order__info');

    $('.error_input').hide();
    $('.order__write').css('border', '1px solid #821328');

    if (!product.val()) {
        product.next().show();
        product.css('border', '1px solid red');
        hasError = true;
    }
    if (!name.val()) {
        name.next().show();
        name.css('border', '1px solid red');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.css('border', 'solid 1px red');
        hasError = true;
    }

    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.ru/checkout",
            data: { product: product.val(), name: name.val(), phone: phone.val() }
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    thankYou
                    orderImage.hide();
                    orderInfo.hide();
                    $('.order__container').css('padding', '130px 30px')
                    thankYou.css('display', 'flex');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                }
                console.log(msg);
            });
    }
})

let menu = $('#menu')
$('#burger').click(function () {
    menu.show();
})

$('.close').click(function () {
    menu.hide();
})