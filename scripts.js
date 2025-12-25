
import Color from "./color.js";

// Elementos del DOM
const header = document.querySelector('.header')
const inputTextColor_1 = document.getElementById('input-color-1');
const inputTextColor_2 = document.getElementById('input-color-2');
const inputColor_1 = document.getElementById('color-1');
const inputColor_2 = document.getElementById('color-2');
const colorIndicator_1 = document.getElementById('color-indicator-1')
const colorIndicator_2 = document.getElementById('color-indicator-2')
const switchColorsButton = document.getElementById('switch-button');
const randomButton = document.querySelectorAll('.random-button');
const elements = document.querySelectorAll('.element')
const invertedElements = document.querySelectorAll('.invert')
const shadows = document.querySelectorAll('.shadow');
const shadowsInverted = document.querySelectorAll('.shadow-invert');
const ratioIndicators = document.querySelectorAll('.ratio-indicator')
const ratioIndicatorText = document.querySelectorAll('.ratio-indicator-text')
const formatControl = document.getElementById('format-control')
const daySpan = document.querySelector('.day')
const timeSpan = document.querySelector('.time')
const sugetionButtonsLabels = document.querySelectorAll('.sugestion-name')
const sugestionButtons = document.querySelectorAll('.sugestions-item')
const formatControlMobile = document.getElementById('format-control-mobile');
const playListScrollbar = document.querySelector('.playlist')
const passwordVisibleButton = document.getElementById('showPassword')
const chartProgress = document.querySelector('.circle-progress');
const chartValue = document.querySelector('.chart-value');


function getContrast(color_1, color_2) {
    // obtiene el contraste entre dos colores segun la WCAG21 Pautas de Accesibilidad al Contenido Web 
    const c1 = new Color(color_1);
    const c2 = new Color(color_2);
    
    const contrast = c1.contrast(c2, "WCAG21")
    return contrast.toFixed(2)
}
function getTime() {
    //funcion para actualizar la fecha del calendario
    const weekDate = new Date().getDay()
    const day = new Date().getDate()
    const month = new Date().getMonth() + 1 // ojo aca, los meses empiezan en 0 
    const year = new Date().getFullYear()
    
    timeSpan.textContent = `${day}/${month}/${year}`
    // obtiene el string del indice del dia de la semana
    daySpan.textContent = getWeekDayString(weekDate)
}

getTime()

function getWeekDayString(number) {
    switch (number) {
        case 0: return 'Domingo';
        case 1: return 'Lunes';
        case 2: return 'Martes';
        case 3: return 'Miércoles';
        case 4: return 'Jueves';
        case 5: return 'Viernes';
        case 6: return 'Sábado';
        default: return '(error al cargar el dia actual)';
    }
}

function refresh() {
    // se ejecuta una vez y luego como el boton random
    const colorArray = generateTriangleRamdomColors()
    const [darkColor, lightColor] = colorArray;
    const ratioValidation = ratioValidate(darkColor, lightColor)
    if (!ratioValidation) {
        refresh()
        return
    }
    // intercambia los colores aletoriamente
    const switchColor = switchColorsRamdomly();
    if (switchColor) {
        updateColor(darkColor, lightColor, true)
    } else {
        updateColor(lightColor, darkColor)
    }
}

const ratioValidate = (color_1, color_2) => {
    // funcion que filtra los colores que hacen contraste
    const objColor_1 = new Color(color_1)
    const objColor_2 = new Color(color_2)
    const contrastRatio = getContrast(objColor_1, objColor_2)
    if (contrastRatio < 6) {
        return false
    } else {
        return true
    }
}

const switchColors = () => {
    const color_1 = elements[0].style.backgroundColor
    const color_2 = elements[0].style.color
    updateColor(color_2, color_1, true)
}

const switchColorsRamdomly = () => {
    // funcion que usada para intercambiar los colores aleatoriamente
    const randomNumber = Math.floor(Math.random() * 2) + 1
    if (randomNumber === 1) {
        return false
    } else { return true }
}

const updateShadows = () => {
    const currentColor_1 = invertedElements[0].style.color
    const currentColor_2 = elements[0].style.color
    let L1 = new Color(currentColor_1).luminance
    let L2 = new Color(currentColor_2).luminance
    let newShadow_1;
    let newShadow_2;
    if (L1 < L2) {
        newShadow_1 = '#FFF'
        newShadow_2 = '#000'
    } else {
        newShadow_1 = '#000'
        newShadow_2 = '#FFF'
    }
    shadows.forEach(shadow => {
        shadow.style.boxShadow = `0 0 20px ${newShadow_1}`
    });
    shadowsInverted.forEach(shadow => {
        shadow.style.boxShadow = `0 0 20px ${newShadow_2}`
    });
}

function hexToRgb(hex) {
    // elimina el '#' si lo tiene
    hex = hex.replace(/^#/, '');
    
    // ojo aca, maneja códigos cortos (3 dígitos) expandiéndolos a 6 dígitos
    if (hex.length === 3) {
        hex = hex.split('').map(function (hex) {
            return hex + hex;
        }).join('');
    }

    // Extrae los componentes rgb y los convierte a decimal
    const r = parseInt(hex.substring(0, 2), 16); // Base 16 para hexadecimal
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}

function rgbaToHex(rgbaString) {
    // extraer los valores R, G, B, A de la cadena
    const match = rgbaString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/);
    if (!match) {
        console.log("Formato RGBA inválido:", rgbaString);
        return null;
    }
    
    // convertir a números enteros (R, G, B) y normalizar el Alpha (A)
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    const alpha = parseFloat(match[4] || 1); // Si no hay alpha, es 1 (opaco)
    
    // convertir R, G, B a hexadecimal y rellenar a 2 dígitos
    const toHex = (c) => c.toString(16).padStart(2, '0');

    // calcular el valor hexadecimal del Alpha (0-255)
    const hexAlpha = Math.round(alpha * 255).toString(16).padStart(2, '0');
    
    // concatenar y devolver el resultado
    return `#${toHex(r)}${toHex(g)}${toHex(b)}${hexAlpha}`;
}

const updateColor = (darkColor, lightColor, switchColors = false) => {
    //funcion principal que actualiza elementos del dom para que los cambios puedan verse
    // ACTUALIZA EL COLOR DEL INDICADOR
    colorIndicator_1.style.backgroundColor = darkColor;
    colorIndicator_2.style.backgroundColor = lightColor;
    // ACTUALIZA EL COLOR DEL INPUT TIPO TEXTO
    if (formatControl.textContent.trim() === 'RGB') {
        inputTextColor_1.value = darkColor;
        inputTextColor_2.value = lightColor;
    } else {
        //!codigo optimizable!
        const hexColorDark = rgbaToHex(darkColor).toUpperCase()
        const hexColorlight = rgbaToHex(lightColor).toUpperCase()
        if (inputTextColor_1.value.length > 0 && inputTextColor_2.value.length > 0) {
            //atencion aca logica que puede parecer compleja
            // en este caso solo recibimos valores hexadecimales
            if (inputTextColor_1.value.trim().length === 4 || inputTextColor_1.value.trim().length === 7) {
                //si el input 1 es de longitud 4, ej: #567 se actualiza con la longitud 4
                //lo mismo para el 7, ya que los colores de ambas longitudes son validos
                inputTextColor_1.value = hexColorDark.slice(0, inputTextColor_1.value.trim().length)
            }
            
            if (inputTextColor_2.value.trim().length === 4 || inputTextColor_2.value.trim().length === 7) {
                //lo mismo que hicimos con el primer input pero ahora con el segundo
                inputTextColor_2.value = hexColorlight.slice(0, inputTextColor_2.value.trim().length)
            }
            if (!(inputTextColor_2.value.trim().length === 4 || inputTextColor_2.value.trim().length === 7) &&
            !(inputTextColor_2.value.trim().length === 4 || inputTextColor_2.value.trim().length === 7)) {
                //En caso de que ninguna de las dos anterioes condiciones sean verdaderas
                //actualizamos con la longitud de 7 caracteres
                inputTextColor_1.value = hexColorDark.slice(0, 7)
                inputTextColor_2.value = hexColorlight.slice(0, 7)
            }
        } else {
            //actualiza los valores de los inputs aunque esten en blanco
            inputTextColor_1.value = hexColorDark.slice(0, 7)
            inputTextColor_2.value = hexColorlight.slice(0, 7)
        }
    }
    
    
    const ratio = getContrast(darkColor, lightColor)
    updateRatioIndicators(ratio)
    
    
    // ACTUALIZA EL COLOR DEL INPUT TIPO COLOR
    inputColor_1.value = rgbaToHex(darkColor).slice(0, 7);
    inputColor_2.value = rgbaToHex(lightColor).slice(0, 7);
    // actualiza el color de los elementos del dom
    elements.forEach(element => {
        element.style.backgroundColor = darkColor;
        element.style.color = lightColor;
    })
    invertedElements.forEach(invertedElement => {
        invertedElement.style.color = darkColor;
        invertedElement.style.backgroundColor = lightColor;
    })
    //actualiza: el scrollbar de la playlist, el color del formato, y las sombras de los elemetos
    playListScrollbar.style.scrollbarColor = darkColor + ' ' + lightColor
    formatControl.style.backgroundColor = 'initial'
    updateShadows()
}

function firstDark_afterLight(color_1, color_2) {
    // funcion que calcula la diferencia de luminocidad y devuelve los valores en orden
    let L1 = new Color(color_1).luminance;
    let L2 = new Color(color_2).luminance;
    let darkColor
    let lightColor
    
    if (L1 < L2) {
        darkColor = color_1;
        lightColor = color_2;
    } else {
        darkColor = color_2;
        lightColor = color_1;
    }
    return [darkColor, lightColor]
}


const generateTriangleRamdomColors = () => {
    // algoritmo principal que selecciona los colores aletoriamente
    //combina un como vivo y alegre con uno mas oscuro y seco
    //puede que cambie en el futuro
    const lowestColor = 1;
    const highestColor = 4;
    const rgbPartition = 64;
    const finalColorsArray = []
    let color_1
    let color_2
    let color_3
    
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            // colores altos y luminosos y alegres
            color_1 = (Math.floor(Math.random() * rgbPartition) + 1) * highestColor
            color_2 = (Math.floor(Math.random() * rgbPartition) + 1) * highestColor
            color_3 = (Math.floor(Math.random() * rgbPartition) + 1) * highestColor
        } else {
            // colores bajos y oscuros y fuertes
            color_1 = (Math.floor(Math.random() * (rgbPartition / 2)) + 1) * lowestColor
            color_2 = (Math.floor(Math.random() * (rgbPartition / 2)) + 1) * lowestColor
            color_3 = (Math.floor(Math.random() * (rgbPartition / 2)) + 1) * lowestColor
        }
        //selenccionar un array al azar lo hace mas "aleatorio"
        let colorPosibilities = [
            [color_1, color_2, color_3],
            [color_1, color_3, color_2],
            [color_2, color_1, color_3],
            [color_2, color_3, color_1],
            [color_3, color_2, color_1],
            [color_3, color_1, color_2],
        ]
        
        const ramdomIndex = Math.floor(Math.random() * colorPosibilities.length)
        const randomOrderArray = colorPosibilities[ramdomIndex]
        colorPosibilities.splice(ramdomIndex)
        //se arma el color de salida final ya procesado
        const finalColor = `rgb(${randomOrderArray[0]}, ${randomOrderArray[1]}, ${randomOrderArray[2]})`
        finalColorsArray.push(finalColor)
    }
    let [color1, color2] = finalColorsArray;

    //ahora asignar la valores de oscuro y claro a los colores correspondientes
    const [darkColor, lightColor] = firstDark_afterLight(color1, color2)
    
    return [darkColor, lightColor]
}
inputColor_2.addEventListener('input', event => {
    let value = inputColor_2.value
    const color_1 = invertedElements[0].style.color
    const rgbvalue = hexToRgb(value);
    (rgbvalue) ? updateColor(color_1, rgbvalue) : console.log('formato inválido')
})

inputTextColor_1.addEventListener('input', () => {
    filterInputText(inputTextColor_1)
})

inputTextColor_2.addEventListener('input', () => {
    filterInputText(inputTextColor_2)
})

const filterInputText = (inputTextColor_X) => {
    inputTextColor_X.parentElement.style.backgroundColor = '#ff000022'
    
    const value = inputTextColor_X.value
    if (value.length < 3) {
        return
    }
    const isHex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i // expresion regular para validar hexadecimales
    const isRGB = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/; // epresion para validar rgbs
    const hexTest = isHex.test(value)
    const rgbMatch = value.match(isRGB)
    if (hexTest) {
        if (formatControl.textContent.trim().toUpperCase() === 'RGB' && 
            (inputTextColor_1.value.trim().toUpperCase().startsWith('#') ||
            inputTextColor_2.value.trim().toUpperCase().startsWith('#'))) {
                // en caso de que el usuario escriba los colores en el formato incorrecto
                //se lazara una alerta indicandole que debe cambiar el formato
            Swal.fire({
                title: 'Error de formato',
                text: 'Debes cambiar el formato a Hexadecimal',
                icon: 'Error',
                confirmButtonText: 'Aceptar'
            })
            // resalta el botton de formato
            formatControl.style.backgroundColor = '#88ff8eff'
            inputTextColor_1.value = '' //vaciamos ambos inputs
            inputTextColor_2.value = '' //vaciamos ambos inputs
        }
        //actualiza los colores dependiendo de cual sea el input
        // se ejecuta si el formato hexadecimal es válido y ha pasado por todos los filtros
        if (inputTextColor_X.id.endsWith('1')) {
            const color_opossite = colorIndicator_2.style.backgroundColor
            updateColor(hexToRgb(value), color_opossite)
            inputTextColor_X.parentElement.style.backgroundColor = 'initial'
        } else if (inputTextColor_X.id.endsWith('2')) {
            const color_opossite = colorIndicator_1.style.backgroundColor
            updateColor(color_opossite, hexToRgb(value))
            inputTextColor_X.parentElement.style.backgroundColor = 'initial'
        } else {
            return
        }
    } else if(rgbMatch) {
        if (formatControl.textContent.trim().toUpperCase() === '#' &&
        (inputTextColor_1.value.trim().toUpperCase().startsWith('RGB')
        || inputTextColor_2.value.trim().toUpperCase().startsWith('RGB'))) {
            // en caso de que el usuario escriba los colores en el formato incorrecto
            //se lazara una alerta indicandole que debe cambiar el formato
            Swal.fire({
            title: 'Error de formato',
            text: 'Debes cambiar el formato a RGB',
            icon: 'Error',
            confirmButtonText: 'Aceptar'
            })
            formatControl.style.backgroundColor = '#88ff8eff'
            inputTextColor_1.value = ''
            inputTextColor_2.value = ''
        }
        // extraemos los valores (grupos 1, 2, 3) si es que es valido
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);

        // comprobamos que cada valor este en el rango 0-255
        if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
            // se ejecuta si el formato rgb es valido y ha pasado por todos los filtros
            if (inputTextColor_X.id.endsWith('1')) {
                const color_opossite = colorIndicator_2.style.backgroundColor
                updateColor(hexToRgb(value), color_opossite)
                inputTextColor_X.parentElement.style.backgroundColor = 'initial'
            } else if (inputTextColor_X.id.endsWith('2')) {
                const color_opossite = colorIndicator_1.style.backgroundColor
                updateColor(color_opossite, hexToRgb(value))
                inputTextColor_X.parentElement.style.backgroundColor = 'initial'
            } else {
                return
            }
        }
        
    }
    return ; // No válido o fuera de rango
}
// Event Listeners
randomButton.forEach(button => {
    button.addEventListener('click', () => {
        refresh()
    })
})

switchColorsButton.addEventListener('click', event => {
    switchColors()
})

inputColor_1.addEventListener('input', event => {
    let value = inputColor_1.value
    const color_2 = elements[0].style.color
    const rgbvalue = hexToRgb(value);
    (rgbvalue) ? updateColor(rgbvalue, color_2) : console.log('formato inválido')
})


passwordVisibleButton.addEventListener('click',()=> {
    const password = document.getElementById('password')
        console.log(password)
    const type = password.getAttribute('type')
    if (type==='password') {
        password.setAttribute('type', 'text')
    } else if(type==='text') {
        password.setAttribute('type', 'password')
    }
})

// Función para sincronizar ambos controles y actualizar inputs
function updateFormatControls(newFormat) {
    formatControl.textContent = newFormat;
    formatControlMobile.textContent = newFormat;
    
    const color_1 = invertedElements[0].style.color;
    const color_2 = elements[0].style.color;
    
    if (newFormat === 'RGB') {
        inputTextColor_1.value = color_1;
        inputTextColor_2.value = color_2;
    } else if (newFormat === '#') {
        inputTextColor_1.value = rgbaToHex(color_1).toUpperCase();
        inputTextColor_2.value = rgbaToHex(color_2).toUpperCase();
    }
}

if (formatControl) {
    formatControl.addEventListener('click', () => {
        const format = formatControl.textContent.trim();
        
        if (format === '#') {
            updateFormatControls('RGB');
        } else if (format === 'RGB') {
            updateFormatControls('#');
        }
    });
}

// Agregar event listener para el control móvil
if (formatControlMobile) {
    formatControlMobile.addEventListener('click', () => {
        const format = formatControlMobile.textContent.trim();
        
        if (format === '#') {
            updateFormatControls('RGB');
        } else if (format === 'RGB') {
            updateFormatControls('#');
        }
    });
}
sugetionButtonsLabels.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.previousElementSibling
        const [darkColorDiv, lightColorDiv] = target.children;
        updateColor(darkColorDiv.style.backgroundColor, lightColorDiv.style.backgroundColor)
    })
})
sugestionButtons.forEach(button=> {
    button.addEventListener('click', ()=> {
        const [darkColorDiv, lightColorDiv] = button.children;
        updateColor(darkColorDiv.style.backgroundColor, lightColorDiv.style.backgroundColor)
    })
});

// funcion que actualiza el valor del circulo de radio
function updateCircularChart(ratio) {
    if (!chartProgress || !chartValue) return;
    
    // el ratio máximo es 21:1 (contraste máximo posible)
    const maxRatio = 21;
    // calculamos el porcentaje (limitamos a 100%)
    let percentage = Math.min((ratio / maxRatio) * 100, 100);

    const circumference = 100; // 100% del círculo
    const dashArray = `${percentage}, ${circumference}`;
    chartProgress.style.strokeDasharray = dashArray;
    
    // actualizamos el texto
    chartValue.textContent = ratio;
    
    // Cambiamos el color del círculo según el ratio
    let progressColor;
    if (ratio >= 9) {
        progressColor = '#00a352ff'; // verde para excelente
    } else if (ratio >= 6 && ratio < 9) {
        progressColor = '#b8d432'; // verde amarillento para bien
    } else if (ratio >= 4.5 && ratio < 6) {
        progressColor = '#ffcc00'; // Amarillo para aceptable
    } else {
        progressColor = '#ff4d4d'; // rojo para muy bajo
    }
    
    chartProgress.style.stroke = progressColor
    chartValue.style.fill = progressColor;
}

// Modifica la función updateRatioIndicators para incluir el gráfico
function updateRatioIndicators(ratio) {
    ratioIndicators.forEach(ratioI => {
        ratioI.textContent = ratio;
        if (ratio >= 9) {
            ratioI.style.color = '#006810ff'
        } else if (ratio < 9 && ratio >= 6) {
            ratioI.style.color = '#6c7a12ff'
        } else if (ratio < 6 && ratio >= 4.5) {
            ratioI.style.color = '#b99d00ff'
        } else if (ratio < 4.5) { 
            ratioI.style.color = '#ad0000ff' 
        }
    })
    
    ratioIndicatorText.forEach(ratioIndTex => {
        ratioIndTex.textContent = ratio;
        if (ratio >= 9) {
            ratioIndTex.style.color = '#006810ff'
            ratioIndTex.textContent = 'Excelente'
            return
        } else if (ratio < 9 && ratio >= 6) {
            ratioIndTex.style.color = '#6c7a12ff'
            ratioIndTex.textContent = 'Bien'
            return
        } else if (ratio < 6 && ratio >= 4.5) {
            ratioIndTex.style.color = '#b99d00ff'
            ratioIndTex.textContent = 'Aceptable'
            return
        } else if (ratio < 4.5) { 
            ratioIndTex.style.color = '#ae0000ff' 
        }
        ratioIndTex.textContent = 'Muy bajo'
    })
    
    // Actualizar el gráfico circular
    updateCircularChart(ratio);
}

// tambien asegúrate de que la función updateColor llame a updateRatioIndicators esto es importante
// Inicializar con colores aleatorios al cargar
refresh()