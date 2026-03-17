# Snow contrast

## Descripción

Snow contrast es una herramienta útil para probar combinaciones de colores en una página web, te ayuda a encontrar la paleta que mejor se adapte a tu proyecto. incluye características como el ratio de contraste, generación de colores aleatorios, y puedes escoger entre formato hexadecimal y rgb.

### Autor: Samuel Nelo

### Propósito

Mejorar la accesibilidad de las páginas web, ayudando a los desarrolladores a encontrar combinaciones de colores que sean accesibles para todos los usuarios.

### Caracteristicas deseadas

Por los momentos solo tenemos formatos rgb y hexadecimal, pero me gustaria que se pudiera escoger entre hsl, hwb, lch, oklch, etc.

Tambien me gustaria que se pudiera guardar las combinaciones de colores en local storage, para que se pueda acceder a ellas mas tarde.

### Este proyecto esta abierto a contribuciones

Si tienes alguna idea, o deseas agregar alguna característica de las ya mensionadas, puedes hacer un pull request y estaré encantado de revisar los cambios en el código

### Arquitectura

.
├── README.md
├── burger-menu.js
├── color.js
├── components
│   ├── calendar
│   │   ├── calendar.css
│   │   └── calendar.js
│   ├── chart
│   │   ├── chart.css
│   │   └── chart.js
│   ├── developer
│   │   ├── developer.css
│   │   └── developer.js
│   ├── login
│   │   ├── login.css
│   │   └── login.js
│   ├── music-player
│   │   ├── music-player.css
│   │   └── music-player.js
│   └── suggestions
│   ├── suggestions.css
│   └── suggestions.js
├── index.html
├── package-lock.json
├── scripts.js
├── snow-contrast-imgs
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── logo.jfif
│   └── site.webmanifest
└── styles.css
