const wraperMecanic = document.querySelector(".wraperMecanic")
let mecanic = [
    { id: 1, title: " لمینت اتومات (120 * 160)" },
    { id: 1, title: " فلسکو 4 رنگ ابعاد 240 cm" },
    { id: 1, title: " دایکات فکی و ریلی در ابعاد های مختلف" },
    { id: 1, title: "لب چسب کارتن اتومات" },
    { id: 1, title: "منگنه اتومات" },
    { id: 1, title: "لب چسب جعبه اتومات" },
    { id: 1, title: "سلفون کشی اتومات ( براق - مات )" }
];

mecanic.forEach((it) => {
    wraperMecanic.insertAdjacentHTML('beforeend', `
    <div class="d-flex flex-column col-10 col-sm-5 col-md-4 col-lg-3 rounded nemonekarItem p-1 m-3 shadow">
                    <img src="./images/dastgak.jpg" alt="nemoneKar" class="w-100 rounded">
                    <span class="m-auto fw-bolder">
                        ${it.title}
                    </span>
                </div>
    `)
})