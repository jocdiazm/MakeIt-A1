## Diseño de una página de mercado

El resultado de este diseño se puede visualizar en el siguiente demo:

**Despliegue en Netelify**

[Demo en Netlify](https://makeit-assessment1-jcdiaz.netlify.app/)

**Repositorio de Github:**

[Rama Develop en - jocdiazm/MakeIt-A1](https://github.com/jocdiazm/MakeIt-A1/tree/develop)

### Feature list:

**Spinner component**

Mientras se cargan los productos desde la API solicitada tenemos un spinner de carga. 
![loading-spinner](https://user-images.githubusercontent.com/13368066/146826000-55b21de7-a8ad-4bad-bf4e-4784aa83bad6.gif)


**Navbar & footbar**

Componentes que están en todos los endpoint. Tienen enlaces de navegación internos (Routing) así como externos (anchor).
![Untitled](https://user-images.githubusercontent.com/13368066/146826384-153005d5-bd2a-430b-befb-622adee020e6.png)

![Untitled 1](https://user-images.githubusercontent.com/13368066/146826393-9acbdfbc-bb61-45c2-b7f4-40723c110c50.png)


**Product Catalog**

Componente de alto orden con un listado de **cards** responsive. Este card lista el título, descripción, precio, reviews, rating, y una imagen de este.
![Untitled 2](https://user-images.githubusercontent.com/13368066/146826416-246348b4-2ccf-4854-a855-d8394642cb15.png)


**Product timer**

Cada producto tiene un componente **Countdown** , el cual informa que si un producto está en oferta o no.

![product-offer-countdown](https://user-images.githubusercontent.com/13368066/146826442-bf934d51-4901-4b88-ae9c-5a8a8c087114.gif)


En el momento en que este deja de estar en oferta, su botón de ir a ver el producto se deshabilita.

**Página de Product Detail an Navigation**

Para cuando la oferta está activa es posible ir al detalle de cada producto. En el detalle el **countdown** sigue activo, por lo que es posible volver a home y volver a navegar a las ofertas las ofertas, mientras se esté activo.

![product-detail-navigation](https://user-images.githubusercontent.com/13368066/146826940-877bf489-f649-4748-92f5-8245eca6e762.gif)


**Página de About.**

En ella tengo los datos básicos (nombre, correo, perfil de github) así como una breve descripción personal.

![Untitled 3](https://user-images.githubusercontent.com/13368066/146826521-0b0290c8-9049-4e5d-be89-46ee70d96934.png)


### Lecciones interesantes:

En esta página implementé un **ProductProvider** empleando `Context` . En este proveedor realizo dos funciones:

- Hago los llamados a la **API de productos  y se los asigno a un componente**  que alimenta a toda a la aplicación, minimizando llamados al servidor
- Proveeo un con estado, el **Timer** de cada producto, con un valor random entre 10 y 120 segundo. Este timer es consumido por el componente de Countdown, el cual actualiza el tiempo restante así como si el producto está en oferta o no.

![Untitled 4](https://user-images.githubusercontent.com/13368066/146826539-ec93b67b-fddf-4af0-9583-68595554776b.png)


### Posibles refactorizaciones

Sería posible hacer un refactor de laparte del **Timer alojando el Timer** en el localstorage del navegador, y en vez de usar segundos, colocaría “fechas” (TimeDate). Habría que refactorizar el componente de **`Countdown`** para que calcule la diferencia entre esta fecha y la fecha actual (new Date Now() ).

## Preguntas

### 1. ¿Cuales son las ceremonias más importantes de un Sprint y cual es la idea de ellas?

**Las ceremonias de un Sprint, el cual demora usualmente entre 1 y 2 semenas, son:**

- **Sprint Planning:** Toma lugar al comienzo de un sprint, y si es un proyecto en curso, luego del retrospective. La idea de esta es planificar las actividades que se llevarán a cabo en el Sprint (Sprint Backlog) con el equipo de trabajo, asignar responsables y tiempos de trabajo.
- **Daily Scrum (meeting):** Se realiza a diario y la idea es que no tome más de 15minutos. En ella se discuten , de forma individual, principalmente las actividades realizadas , los posibles inconvenientes y lo que se va a realizar en el día.
- **Sprint review:** Se presenta al final de un sprint. En ella se acostumbra a invitar a Stakeholders, PO’s, otros departamentos involucarados en el proyecto. La idea de esta es mostrar los avances y obtener feedback sobre el incremento del producto realizado.
- **Sprint retrospective:** Toma lugar al final del sprint Review, y es interna al equipo de trabajo. En ella se discuten aspectos positivos y por mejorar del pasado sprint, usualmente toma entre 45-1 hora, y generalmente deja como resultados planes de mejora.

### 2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

Los wireframes son representaciones de baja fidelidad de la distribución de los elementos dentro una página web o aplicación utilizados usualmente en las etapas de maquetación de productos. La idea con estos es representar procesos de navegación, interacción básica, responsividad del sitio o aplicación.

Algunas de las herramientas para hacer wireframes: 

**UxPin**

[UXPin | UI Design and Prototyping Tool](https://www.uxpin.com/)

**Mockflow**

[MockFlow - Wireframe Tools, Prototyping Tools, UI Mockups, UX Suite, Remote designing](https://mockflow.com/)

**MockFlow**

[Mockplus](https://www.mockplus.com/)

**Adobe XD**

[Adobe XD | Herramienta rápida y poderosa de diseño y colaboración de experiencias e interfaces de usuario](https://www.adobe.com/la/products/xd.html)

### 3. Explicar la diferencia entre `var`, `let` y `const`. Y dar un ejemplo en qué caso se utilizará.

Las keywords `var` `let` y `const`  se utilizan para declarar e inicializar variables en el lenguaje de Javascript. 

Existen dos aspectos que las diferencian, son el `scope` y la `mutabilidad`  y `declaratividad`.

 El primer aspecto se refiere al “horizonte de acción” en la cual la variable declarada es accesible para el código ejecutado. En este caso las variables declaradas con  `var`  presentan un `scope general` y `scope funcional`  mientras que las declaradas coni`let` y `const`  presentan un `block scope`  , el cual se refiere a un scope definido por curly braces `{}`

Un ejemplo de esta diferencia:

```jsx
{ // scope de bloque
var A = 10;
let B = 20;
const C = 30;
console.log(A,B,C);
}
```

![Untitled 5](https://user-images.githubusercontent.com/13368066/146826576-e20b4a0c-30ab-4d14-83bc-ac3051b83d84.png)


En el anterior caso, desde el scope general, la variable `A`  está declarada y tiene un valor de `10` mientras que las variables `B` y `C`  no están ni siquiera declaradas o definidas (ni mucho menos tienen asignado un valor) .

Si en el anterior caso decidieramos hacer un `console.log` dentro del bloque podríamos acceder a ellas.

![Untitled 6](https://user-images.githubusercontent.com/13368066/146826590-4a703679-b335-400a-a787-271648b61201.png)


En el caso de la `mutabilidad`  las variables definidas con `var` y `let` pueden ser actualizadas dentro de su scope, mienstras que que con `const` **NO.**

```jsx
//declaración en el global scope
var A = 10;
let B = 20;
const C = 30;

//actualizamos los valores
A = 40;
B=50;
C=60;
```

![Untitled 7](https://user-images.githubusercontent.com/13368066/146826604-7194afe2-893e-46f5-b10b-42e31be37c42.png)


Finalmente  la declaratividad hace referencia a si una variable puede ser `vuelta a definir` con el mismo identificardor  en este caso `var` es la única que puede hacer esto.

```jsx
//declaramos y re declaramos
var A = 10;
var A = "Jose";

let B = 20;
let B = "Carlos";

const C = 30;
const C = "Diaz";
```

![Untitled 8](https://user-images.githubusercontent.com/13368066/146826608-b00c6e64-16e6-4442-9064-308bb80c9f06.png)


**Dentro de los casos de usos:**

- `var` : **No se debería emplear**. Esto debido a su mutabilidad, declaratividad y scope global, pueden existir efectos inesperados y fuentes de bug. Cosas malas le pasan a la gente buena cuando se decalara con esta keyword.
- `let` : Para decalarar variables cuyo valor se puede actualizar a lo largo de la ejecución de nuestro código. Ej: en una iteración, estados de nuestra aplicación.
- `const` : Para valores inmutables, que deberían ser constantes a lo largo de la ejecución. Ej: el resutlado de una consulta o `fetch` , variables de entorno como los puertos.

### 4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada `rama-1`?

En Git, se pueden emplear los siguientes comandos:

```jsx
git branch rama-1 
git checkout -B rama-1
git switch -C rama-1
```

**Notas:**

- En el primer comando, no se mueve a la neuva rama. En los otros dos si.
- Switch es un comando más nuevo y especial para moverse y crear ramas.

### 5. Explicar la diferencia entre git merge y git rebase.

A pesar que ambos comandos se utilizan para integrar cambios de una rama a otra, su diferencia radica en los efectos en la historia.

- `**merge`**  integra toda la historia de una rama y la “une” o “fusiona” a otra rama.
- `**rebase`**  toma como punto de partida los cambios realizados en una rama y los pone de “referencia” para calcular tus cambios en los archivos, generando de esta manera una historia “más limpia”

**Ejemplos de los resultados en la historia, basados en esta historia:**

![Untitled 9](https://user-images.githubusercontent.com/13368066/146826620-95b7d7d9-63e9-4bb5-b533-cbfb476aac95.png)


Con **merge:**

```bash
git checkout main
git merge prueba
```
![Untitled 10](https://user-images.githubusercontent.com/13368066/146826651-c1d21846-b8b1-4f23-b680-22240bff9178.png)



Con **rebase:**

```bash
git checkout main
git rebase prueba
```

![Untitled 11](https://user-images.githubusercontent.com/13368066/146826663-dd80b884-949b-4f56-be64-08e84432181f.png)


### 6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando `git pull`?

A pesar de su parecido nombre son dos acciones muy diferentes en el entorno de trabajo de Git.

Un `Pull Request` es la acción dentro de Git de pedir que los cambios de una rama sean incorporados a otro. Permite que existan comentarios, aprobación de terceros o propios, cambios y adecuaciones previas a la acción de fusión. Las acciones usuales que se pueden desencadenar de un **PR** son **aprobación, solicitud de modificación o rechazo**.

Por otro lado un `git pull`  es un comando que involucra dos acciones en secuencia:

1. Git `fetch` : el caual “trae” los cambios desde un lugar a otro pero no los incorpora.
2. git `merge` : el cual “fusiona” o incorpora los cambios traidos a nuestro código, o rama de forma local.

### 7. ¿Qué es el Virtual DOM?

El Virtual DOM o **VDOM** es una concepto implementado por la llibrería `React` y frameworks de javascript en el cual se almacena en Memoria una copia especial del DOM de una página o aplicación web, y es donde dicha librería realiza de forma especializada cambios los cuales sincroniza con el **DOM** mediante un proceso de reconciliación.

El VDOM tiene la particularidad en la que los elementos están representados por “componentes” los cuales son renderizados, actualizados, o deshechados de forma eficiente y fácilmente manipulabrle medianite estados o `states.` 

![Untitled 12](https://user-images.githubusercontent.com/13368066/146826689-db956ecd-6e69-47a0-8cf0-7a862f3a7f24.png)


Ejemplo de proceso de reconciliación del VDOM

### 8. Dado el siguiente [codePen](https://codepen.io/cristian-makeitreal/pen/NWadqqa?editors=1100), el cual solo tiene un HTML, por medio de css llegar a esta respuesta. [Imagen](https://github.com/makeitrealcamp/assesment-1-programa-top/blob/main/assets/services-section.gif).

El ejercicio fue resuelto en el siguiente **codePEN:**

[assesment-1-flebox](https://codepen.io/jocdiazm/pen/mdBwXRY)

![Untitled 13](https://user-images.githubusercontent.com/13368066/146826729-4b31d0e6-06d0-49ac-bb42-94e521085751.png)


![assessment-8](https://user-images.githubusercontent.com/13368066/146826742-feae89de-e6ea-4328-92b1-e79991bc7f37.gif)

