var Heart = document.querySelector('.Heart'),
    Close = document.getElementById('Close'),
    Valores = document.getElementById('Valores'),
    Imagen = document.getElementById('Imagen'),
    Notf = document.getElementById('Notf'),
    Pop = document.getElementById('Pop'),
    Zas = document.getElementById('Zas'),
    Plop = document.getElementById('Plop'),
    Notificacion = document.getElementById('Notificacion'),
    Activo = true;

if (localStorage.getItem('Num')) {
    Num = localStorage.getItem('Num');
} else {
    Num = 0;
}

if (localStorage.getItem('Val')) {
    Val = localStorage.getItem('Val');
} else {
    Val = 0;
}

if (localStorage.getItem('Opcion')) {
    Opcion = localStorage.getItem('Opcion');
} else {
    Opcion = 0;
}

Valores.innerHTML = Num;

function Click() {
    if (Opcion <= 12) {
        Pop.play();
        Val++;
        Num++;
        console.log(Num);
        Valores.innerHTML = Num;
        localStorage.setItem('Val', Val);
        localStorage.setItem('Num', Num);
        Heart.style.left = Math.random(0, 100) * 100 + '%';
        Heart.style.top = Math.random(0, 100) * 100 + '%';

        if (Val == 9) {
            Val = 0;
            Tras = 1;
            Angle = 0;
            Opcion++;
            Continuar = false;
            Heart.disabled = true;
            Heart.style.cursor = 'default';
            localStorage.setItem('Val', Val);
            localStorage.setItem('Opcion', Opcion);
            var Mensaje = document.querySelector('.Ms' + Opcion);

            for (var i = 1; i < 11; i++) (function (Visible) {
                setTimeout(function () {
                    Tras = Tras - 0.1;
                    Heart.style.opacity = Tras;

                    if (i == 10) {
                        Continuar = true;
                        Heart.style.display = 'none';
                    }

                }, Visible * 100)
            }(i))

            Notf.play();
            Notificacion.style.top = '50%';
            Notificacion.style.left = '50%';

            do {
                for (var i = 0; i < 15; i++) (function (Time) {
                    setTimeout(function () {
                        if (Angle == 20) {
                            Imagen.style.transform = 'rotate(' + Angle + 'deg)';
                            Angle = -20;
                        } else {
                            Imagen.style.transform = 'rotate(' + Angle + 'deg)';
                            Angle = 20;
                        }

                        if (Time == 14) {
                            Notificacion.style.top = '-75%';
                            Imagen.style.transform = 'rotate(' + 0 + 'deg)';
                        }
                    }, Time * 500)
                }(i))

                function Mensajes() {
                    Zas.play();
                    Mensaje.style.top = '50%';
                } setTimeout(Mensajes, 8000);

                setTimeout(function () {
                    Notificacion.style.top = '25%';
                    Notificacion.style.left = '200%';
                }, 10000);

            }
            while (Continuar == true)
        }
    }else{
        localStorage.clear();
        window.location = 'Index.html';
    }
}

function Cerrar() {
    console.log(Opcion);
    Tras = 0;
    Plop.play();
    Heart.disabled = false;
    Heart.style.cursor = 'pointer';
    var Mensaje = document.querySelector('.Ms' + Opcion);
    Mensaje.style.top = '-120%';

    for (var i = 1; i < 11; i++) (function (Visible) {
        setTimeout(function () {
            Tras = Tras + 0.1;
            Heart.style.opacity = Tras;
        }, Visible * 100)
    }(i))
}