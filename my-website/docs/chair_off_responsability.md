# chair_off_responsability

El patrón **Chain of Responsibility** es una solución de diseño que aborda la distribución dinámica de responsabilidades en sistemas complejos. Este enfoque permite procesar solicitudes mediante una cadena de manejadores, donde cada uno evalúa si puede resolver el problema o pasarlo al siguiente elemento en la secuencia. Este modelo fomenta el desacoplamiento entre los emisores y receptores de solicitudes, mejorando la flexibilidad y modularidad del código. En esta introducción exploraremos cómo funciona este patrón, su utilidad en la programación y ejemplos prácticos para entender su implementación y ventajas.

### ¿Cómo Funciona?

**Cuando se recibe una solicitud, cada manejador:**
* Evalúa si tiene la capacidad para procesarla.
* Si no puede procesarla, la pasa al siguiente manejador en la cadena.
* El proceso continúa hasta que un manejador la resuelve o se agotan los manejadores disponibles.

**Este diseño es especialmente útil en escenarios donde:**
Las responsabilidades están distribuidas jerárquicamente.
El manejo de solicitudes debe adaptarse dinámicamente.
Se busca desacoplar emisores y receptores para mejorar la modularidad.

### ¿Cómo identificar cuándo utilizar este patrón?
La necesidad de aplicar este patrón se puede identificar en procesos que se basan en pasos secuenciales, donde se deben agregar verificaciones o condiciones. A medida que la funcionalidad crece, el código tiende a saturarse de declaraciones if, lo que puede dificultar su mantenimiento y comprensión. El patrón Chain of Responsibility ayuda a resolver este problema al separar las responsabilidades de cada paso del proceso en clases independientes.

Por ejemplo, en el caso del scoring de un pedido, se pueden identificar varios pasos que se deben validar:

¿El cliente del pedido tiene pedidos previos?
¿El cliente realiza el pago con su método de pago habitual?
¿El pedido supera una cierta cantidad?

La aplicación del patrón permite que cada paso del proceso se separe en distintas clases, donde cada clase tiene una única responsabilidad. De esta manera, el pedido o solicitud puede ser procesado a través de una cadena de manejadores, que se encargan de evaluar y aplicar cada paso hasta obtener un resultado final. Esto no solo mejora la organización del código, sino que también facilita su expansión y mantenimiento a medida que se agregan nuevas verificaciones o condiciones.

### ¿Cómo implementar el patrón?

Al igual que muchos otros patrones de diseño de comportamiento, la implementación del patrón Chain of Responsibility se basa en transformar comportamientos específicos en objetos independientes denominados Handlers. Cada verificación dentro del proceso debe extraerse a su propia clase, la cual contará con un único método encargado de realizar la acción correspondiente. La solicitud, junto con sus datos y contexto, se pasa como argumento a este método, lo que permite iniciar la cadena de responsabilidad.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/0*7PGB4poMp_-feEy2.png)

Existen múltiples ejemplos de implementaciones de este patrón, y se puede adaptar a una amplia variedad de contextos. Al final del artículo, se incluirá un ejemplo concreto de implementación del patrón en ES6, para ilustrar cómo aplicar este enfoque de manera práctica.

### Ventajas del uso del patrón
Una vez implementado el patrón, surgen varias ventajas que demuestran su utilidad. Es importante preguntarse si la jerarquía de clases creada para aplicarlo realmente aporta beneficios. A continuación, se detallan las principales ventajas del patrón Chain of Responsibility y los principios SOLID que se cumplen al utilizarlo:

* Control del orden de los pasos: El patrón permite gestionar el orden de ejecución de los pasos de manera dinámica, lo que facilita la modificación del flujo de trabajo sin afectar otras partes del sistema.

* Cumplimiento del principio de responsabilidad única (Single Responsibility Principle): El patrón desacopla la invocación de las operaciones y la ejecución de las acciones en clases separadas. Esto facilita la prueba de cada acción de manera aislada, mejorando la mantenibilidad y claridad del código.

* Cumplimiento del principio abierto/cerrado (Open/Closed Principle): La implementación del patrón facilita la adición de nuevos manejadores sin necesidad de modificar el código existente. Esto mejora la escalabilidad y mantenibilidad del sistema, permitiendo que evolucione sin introducir errores en el código que ya está funcionando.

### Desventajas:

* Puede ser difícil depurar y entender el flujo, especialmente si la cadena es larga y compleja.
* La petición puede quedar sin gestionar si la cadena no incluye un gestor "catch-all".
* Pueden surgir problemas de rendimiento debido a la posibilidad de pasar por varios 
* gestores antes de encontrar el correcto, o no encontrarlo en absoluto.

### Diagrama de clases

![](https://java-design-patterns.com/assets/img/chain-of-responsibility.urm.1c5875a9.png)

### Estructura

![](https://upload.wikimedia.org/wikipedia/commons/1/1f/Chain_of_responsibility.jpg)


### Ejemplo Práctico de Código.

```// Clase abstracta base
abstract class Manejador {
    protected Manejador siguienteManejador;

    public void setSiguiente(Manejador manejador) {
        this.siguienteManejador = manejador;
    }

    public abstract void manejar(String solicitud);
}

// Manejadores concretos
class ManejadorA extends Manejador {
    public void manejar(String solicitud) {
        if ("A".equals(solicitud)) {
            System.out.println("ManejadorA procesó la solicitud.");
        } else if (siguienteManejador != null) {
            siguienteManejador.manejar(solicitud);
        }
    }
}

class ManejadorB extends Manejador {
    public void manejar(String solicitud) {
        if ("B".equals(solicitud)) {
            System.out.println("ManejadorB procesó la solicitud.");
        } else if (siguienteManejador != null) {
            siguienteManejador.manejar(solicitud);
        }
    }
}

class Cliente {
    public static void main(String[] args) {
        Manejador manejadorA = new ManejadorA();
        Manejador manejadorB = new ManejadorB();

        manejadorA.setSiguiente(manejadorB);

        manejadorA.manejar("A");
        manejadorA.manejar("B");
        manejadorA.manejar("C");
    }
}
