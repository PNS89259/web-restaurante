# Página Web del restaurante “Sabores DAM”

Crear una página web en HTML5 (sin CSS) para el restaurante ficticio Sabores DAM.
La web debe mostrar información para los clientes usando etiquetas semánticas HTML5.

Solo se permite el JavaScript necesario para abrir y cerrar el cuadro de diálogo.

Nombre del archivo a crear: index.html

---

## Estructura de la página y requisitos:

### 1. Encabezado general del sitio — <header>

Crea un <header> que contenga:

* **Un logotipo o imagen para tu restaurante con un <figure>, acompañado de un <figcaption> breve (por ejemplo, “Restaurante Sabores DAM”).
* **Un título principal <h1> con el nombre del restaurante.
* **Un menú de navegación <nav> con enlaces <a> simulados a distintas secciones de la página (por ejemplo: “Inicio”, “Carta”, “Reservas”, “Contacto”). Ver los apuntes “HTML para enlaces”.

---

## 2. Sección principal — <main>

Dentro del <main>, organiza la información del restaurante en varias secciones semánticas:

###a) SECCIÓN Menú del día
* **Añade un encabezado <h2> “Menú del día”.
* **Incluye una tabla con:
* ** **<caption> descriptivo
* ** **<thead> con los encabezados
* ** **<tbody> con al menos 5 platos distintos.
* ** **<tfoot> con una nota (“Bebida no incluida” o “Menú completo: 15€”, o usa tu imaginación).
* **De cada plato del menú se debe incluir: el nombre o descripción breve delplato, tipo de plato, y precio.

###b) SECCIÓN Información adicional

Esta sección irá a continuación de la tabla con el menú del día e incluirá dos
bloques <details>:

* **Uno con el texto “Información de alérgenos” como texto que se ve cuanto el elemento <details> esté cerrado y que contenga una lista <ul> con varios alérgenos o advertencias que puede haber en el menú
* **Otro con el texto “Política de reservas” visible como texto cuando el elemento <details> esté cerrado y que contenga una lista ordenada <ol> con pasos (por ejemplo: elige fecha → confirma asistentes → recibe confirmación, y cualquier otra cuestión que queráis añadir).

###c) ARTÍCULO - Servicios del restaurante
* **Crea un <article> con un <h2> “Nuestros servicios”.
* **Dentro, una lista <ul> con diferentes servicios que ofrece el restaurante como:
* ** **Terraza exterior
* ** **Menú infantil
* ** **Pago con tarjeta
* ** **Para llevar
* **En uno de los elementos de la lista anterior (por ejemplo, Para llevar), anida una lista <ol> que muestre los pasos para recoger un pedido; o si has elegido otro de los elementos lo que tú decidas, siempre que tenga sentido y sea una <ol>.

###d) ASIDE - Información práctica
* **Añade un bloque lateral informativo usando el elemento <aside>, destinado a mostrar información complementaria sobre el restaurante.

Dentro de ese bloque, incluye un título adecuado con <h2> y una lista de definiciones <dl> donde cada elemento de la lista contenga un término y una o varias descripciones relacionadas para mostrar datos diferentes aspectos de utilidad para el cliente como, horarios, condiciones del servicio, recomendaciones o facilidades disponibles. Estructura la información de forma clara, usando pares de elementos relacionados, sin emplear listas convencionales de puntos o números.
Ejemplo de posible contenido:
Información práctica:
Horario: Lunes a sábado: 12:00–23:00
Domingos: 12:00–17:00
Accesibilidad: Entrada adaptada y baño accesible.Aparcamiento: Zona de estacionamiento gratuito para clientes.
Recomendación: Se aconseja reservar mesa los fines de semana.

---

## 3. Cuadro de diálogo - <dialog>

* **Crea un botón fuera del <aside> que diga “Reservar mesa”.
* **Al pulsarlo, debe abrir un cuadro <dialog> en modo modal
* **El cuadro de diálogo debe incluir:
* ** **Un encabezado <h3> “Solicitud de reserva”.
* ** **Una lista <ul> con normas o recordatorios (por ejemplo, máx. 6 personas, 15 min de cortesía, añade más normas).
* ** **Un botón “Cerrar” que cierre el cuadro de diálogo
Este es el único JavaScript permitido en toda la web.

---

## 4. Pie de página

* **Añade un <footer> con:
* ** **un bloque <address> con la información de contacto del restaurante, como el nombre del establecimiento (aparecerá resaltado con mucho énfasis), su dirección, teléfono, correo electrónico y página web. Los datos deben presentarse de manera legible, con enlaces funcionales para el correo y la web:
Restaurante Sabores DAM
Calle Sabores, 42 – Oviedo
Tel: 985 123 456
info@saboresdam.es
www.saboresdam.es
* ** **Finalmente, añade una línea con el aviso de derechos de autor y el año correspondiente.

---

## Consejos para hacer un buen ejercicio:
* **No utilices CSS ni estilos internos.
* **Asegúrate de que el HTML valida correctamente.
* **Piensa en la estructura semántica, no en la apariencia.
* **Cada bloque debe tener sentido real dentro del contexto del restaurante.