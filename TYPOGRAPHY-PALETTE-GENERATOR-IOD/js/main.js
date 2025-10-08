document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del formulario
    const colorBg = document.getElementById("color-bg");
    const colorFg = document.getElementById("color-fg");
    const colorPrimary = document.getElementById("color-primary");
    const fontSans = document.getElementById("font-sans");
    const fontWeight = document.getElementById("font-weight");
    const fontSize = document.getElementById("font-size");
    const defaultFontSize = "16px";

    const btnCopy = document.getElementById("copy-vars");
    const btnReset = document.getElementById("reset-vars");

    const formNombre = document.getElementById("form-nombre");
    const inputNombre = document.getElementById("nombre");

    // Guardamos los valores originales del documento
    const originalVars = {
        bg: getComputedStyle(document.body).backgroundColor,
        fg: getComputedStyle(document.body).color,
        primary: "#1a73e8",
        fontFamily: getComputedStyle(document.body).fontFamily,
        fontWeight: getComputedStyle(document.body).fontWeight,
        fontSize: defaultFontSize,
    };

    // Guardamos también los colores originales de enlaces y botones
    const originalLinkColors = [];
    document.querySelectorAll("a, .button, button").forEach((el) => {
        originalLinkColors.push({
            element: el,
            color: getComputedStyle(el).color,
            background: getComputedStyle(el).backgroundColor,
        });
    });

    // Aplica los cambios seleccionados
    function applyChanges() {
        document.body.style.backgroundColor = colorBg.value;
        document.body.style.color = colorFg.value;
        document.documentElement.style.setProperty("--color-primary", colorPrimary.value);
        document.body.style.fontFamily = fontSans.value;
        document.body.style.fontWeight = fontWeight.value;
        document.body.style.fontSize = fontSize.value;

        // Aplica el color primario a enlaces y botones
        document.querySelectorAll("a, .button, button").forEach((el) => {
            el.style.color = colorPrimary.value;
        });
    }


    // Al pulsar “Copiar variables”: aplica cambios y copia al portapapeles
    btnCopy.addEventListener("click", () => {
        applyChanges();

        const vars = `
--color-bg: ${colorBg.value};
--color-fg: ${colorFg.value};
--color-primary: ${colorPrimary.value};
--font-family: ${fontSans.value};
--font-weight: ${fontWeight.value};
`;
        navigator.clipboard.writeText(vars).then(() => {
            alert("🎨 Cambios aplicados y variables copiadas al portapapeles");
        });
    });

    // Restablece todo al estado original
    btnReset.addEventListener("click", () => {
        document.body.style.backgroundColor = originalVars.bg;
        document.body.style.color = originalVars.fg;
        document.documentElement.style.setProperty("--color-primary", originalVars.primary);
        document.body.style.fontFamily = originalVars.fontFamily;
        document.body.style.fontWeight = originalVars.fontWeight;;
        document.body.style.fontSize = originalVars.fontSize;
        fontSize.value = originalVars.fontSize;

        // Restablecer colores de enlaces y botones exactamente como estaban
        originalLinkColors.forEach(({ element, color, background }) => {
            element.style.color = color;
            element.style.backgroundColor = background;
        });

        // Restablecer valores de los inputs
        colorBg.value = "#ffffff";
        colorFg.value = "#222222";
        colorPrimary.value = "#1a73e8";
        fontSans.selectedIndex = 0;
        fontWeight.value = "700";
        fontSize.value = "16px";
    });

    // Interceptamos el envío del formulario
    formNombre.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que se recargue la página

        const nombre = inputNombre.value.trim(); // Eliminamos espacios

        if (nombre) {
            alert(`¡Hola, ${nombre}! 👋`);
        } else {
            alert("Por favor, escribe tu nombre antes de enviar.");
        }

        // Limpiar el input después de enviar
        inputNombre.value = "";
    });
});

