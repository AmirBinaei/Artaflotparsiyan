const nemoneKarcontent = document.querySelector(".wraperCard")

let nemoneKar = [
    { id: 1, img: "./images/yadaki.jpg", title: "لوازم یدکی ، قطعات اتومبیل" },
    { id: 2, img: "./images/khanegi.jpg", title: "لوازم خانگی و اشپزخانه" },
    { id: 3, img: "./images/sabzi.jpg", title: "میوه جات، سبزیجات و صیفی جات" },
    { id: 4, img: "./images/barghi.jpg", title: "لوازم الکتریکی و برقی" },
    { id: 5, img: "./images/nemoneKar.jpg", title: "ظروف بلوری و چینی و آرکوپال" },
    { id: 6, img: "./images/nemoneKar.jpg", title: "مواد غذایی و رستورانی" },
    { id: 7, img: "./images/nemoneKar.jpg", title: "کیف و کفش" },
    { id: 8, img: "./images/nemoneKar.jpg", title: "خشکبار و آجیل" },
    { id: 9, img: "./images/nemoneKar.jpg", title: "دارویی و مشتقات آن" },
    { id: 10, img: "./images/nemoneKar.jpg", title: "سموم کشاورزی" },
    { id: 11, img: "./images/nemoneKar.jpg", title: "شیرآالت ساختمانی و محصوالت وابسته" },
    { id: 12, img: "./images/nemoneKar.jpg", title: "ظروف یکبار مصرف" },
    { id: 13, img: "./images/nemoneKar.jpg", title: "گلخانه ها" },
    { id: 14, img: "./images/nemoneKar.jpg", title: "تولیدی های صنعتی و ایمنی" }
];

nemoneKar.forEach((it) => {
    nemoneKarcontent.insertAdjacentHTML('beforeend', `
    <div class="d-flex flex-column col-10 col-sm-5 col-md-4 col-lg-3 rounded nemonekarItem p-1 m-3 shadow">
                    <img src="${it.img}" alt="nemoneKar" class="w-100 rounded">
                    <span class="m-auto fw-bolder">
                        ${it.title}
                    </span>
                </div>
    `)
})


const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400 ,
    // reset : true
})

sr.reveal(".transitiontop")