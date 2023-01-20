// tady je místo pro náš program

let nadpis = document.querySelector(".nadpis");
nadpis.style.color = "red";

let odstavec = document.querySelector(".odstavec");
odstavec.innerHTML = "<strong>Učím se manipulovat s obsahem stránky. K tomu se používá divná a tajemná věc, které se říká DOM (Document Object Model). Pomocí ní mohu ke všm prvkům na stránce přistupovat jako k objektům a měnit jejich vlastnosti. Jako první chci zvládnout následující úkoly...</strong>";

odstavec.style.fontSize = "20px";

let pes = document.querySelector(".kocka");
pes.src = "kocka.jpg";

let stvorec = document.querySelector(".ctverecek");
stvorec.style.marginLeft = "100px"
stvorec.style.transform = "rotate(90deg)"