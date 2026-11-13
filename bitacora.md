# Bitácora – Semana 3: personalización con Bootstrap y lanzamiento v2.0

## Qué hice
- Sobrescribí variables globales de Bootstrap en `css/styles.css` (cargado después de Bootstrap): `--bs-primary`, `--bs-primary-rgb`, `--bs-body-font-family`, `--bs-link-color`, `--bs-link-hover-color` y `--bs-border-radius`.
- Ajusté `.btn-primary` y `.btn-outline-primary` con variables `--bs-btn-*` (Verde Ruta, con `hover` y `active`) y creé `.btn-pedal` (Naranja Pedal con texto oscuro).
- Clases propias: `.navbar-marca`, `.portada-marca`, `.titulo-seccion`, `.icono-beneficio`, `.pie`.
- Bootstrap Icons 1.11.3 por CDN en navbar, contacto (pie y reservas), beneficios y WhatsApp. Íconos decorativos con `aria-hidden="true"`; botones solo con ícono (toggler, cerrar, carrusel) con `aria-label` o texto `visually-hidden`.

## Qué aprendí
- Cambiar una variable `--bs-*` en `:root` actualiza todos los componentes que la usan, sin `!important`.
- Una utilidad de Bootstrap como `bg-body-tertiary` usa `!important`; para poder personalizar la navbar usé una clase propia.
- A igual especificidad gana la regla que aparece después, por eso `styles.css` va después de Bootstrap.

## Contraste (mínimo 4,5:1)
| Combinación | Ratio |
|---|---|
| Blanco sobre Verde Ruta | 5,31 |
| Blanco sobre verde hover / active | 7,46 / 10,26 |
| Texto oscuro sobre Naranja Pedal (normal / hover / active) | 7,20 / 5,44 / 4,77 |
| Enlace verde sobre el fondo | 4,93 |
| Texto secundario sobre el fondo | 5,57 |
| Texto de la navbar sobre su fondo | 12,07 |

## Pruebas
- Sin desbordamiento horizontal a 360, 768 y 1280 px.
- Formulario vacío muestra un mensaje por campo; el modal se cierra con `Esc`; la alerta se cierra con su botón.

## Capturas
- `img/capturas/antes-bootstrap-por-defecto-inicio.png`
- `img/capturas/despues-v2-inicio.png`

## Publicación
`git tag v2.0` y publicación en GitHub Pages.
