
const container = document.querySelector('.content');
document.getElementById('submit').onclick = function () {
    var radios = document.getElementsByName('radiogroup1');
    for (var radio of radios) {
        if (radio.checked) {
            container.innerHTML = `<div class="content" id="card-ty">
            <div class="img-container-ty">
                <img src="illustration-thank-you.svg" alt="">
            </div>
            <div class="your-rating-container">
                <p id="you-rated" class="your-rating">
                    You selected ${radio.value} out of 5
                </p>
            </div>
            <div class="h1-container">
                <h1>Thank you!</h1>
            </div>
            <div class="paragraph-container">
                <p>We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!</p>
            </div>
        </div>`

        }

    }

}




