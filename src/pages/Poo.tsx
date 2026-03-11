import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const clasesObjetosCode = `<span class="keyword">class</span> Persona {

    String nombre;
    <span class="keyword">int</span> edad;

    <span class="keyword">void</span> saludar() {
        System.out.<span class="function">println</span>(<span class="string">"Hola, soy "</span> + nombre);
    }

}`;

const crearObjetoCode = `<span class="keyword">public</span> <span class="keyword">class</span> Main {

    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {

        Persona persona = <span class="keyword">new</span> Persona();
        persona.nombre = <span class="string">"Armando"</span>;
        persona.edad = <span class="number">25</span>;

        persona.saludar();

    }

}`;

const constructorCode = `<span class="keyword">class</span> Persona {

    String nombre;

    <span class="keyword">public</span> Persona(String nombre) {
        <span class="keyword">this</span>.nombre = nombre;
    }

}`;

const encapsulamientoCode = `<span class="keyword">class</span> Persona {

    <span class="keyword">private</span> String nombre;

    <span class="keyword">public</span> String getNombre() {
        <span class="keyword">return</span> nombre;
    }

    <span class="keyword">public</span> <span class="keyword">void</span> setNombre(String nombre) {
        <span class="keyword">this</span>.nombre = nombre;
    }

}`;

const polimorfismoCode = `Animal a1 = <span class="keyword">new</span> Animal();
Animal a2 = <span class="keyword">new</span> Perro();

a1.<span class="function">hacerSonido</span>(); <span class="comment">// El animal hace un sonido</span>
a2.<span class="function">hacerSonido</span>(); <span class="comment">// El perro ladra</span>`;

const abstraccionCode = `<span class="keyword">abstract class</span> Figura {

    <span class="keyword">abstract double</span> <span class="function">calcularArea</span>();

    <span class="keyword">void</span> <span class="function">mostrarArea</span>() {
        System.out.<span class="function">println</span>(<span class="string">"Área: "</span> + <span class="function">calcularArea</span>());
    }

}

<span class="keyword">class</span> Circulo <span class="keyword">extends</span> Figura {

    <span class="keyword">double</span> radio;

    Circulo(<span class="keyword">double</span> radio) {
        <span class="keyword">this</span>.radio = radio;
    }

    <span class="keyword">double</span> <span class="function">calcularArea</span>() {
        <span class="keyword">return</span> Math.PI * radio * radio;
    }

}`;

const herenciaCode = `<span class="keyword">class</span> Animal {

    <span class="keyword">void</span> hacerSonido() {
        System.out.<span class="function">println</span>(<span class="string">"El animal hace un sonido"</span>);
    }

}

<span class="keyword">class</span> Perro <span class="keyword">extends</span> Animal {

    <span class="keyword">void</span> hacerSonido() {
        System.out.<span class="function">println</span>(<span class="string">"El perro ladra"</span>);
    }

}`;

export const POO = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[1].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Programación orientada a objetos
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Java es un lenguaje basado en programación orientada a objetos (POO).
        Este paradigma organiza el código en clases y objetos para modelar
        entidades del mundo real de forma estructurada y reutilizable.
      </p>

      <h2
        id="clases-objetos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Clases y objetos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una <span className="font-semibold">clase</span> es una plantilla que
        define las propiedades y comportamientos de un objeto. Un{" "}
        <span className="font-semibold">objeto</span> es una instancia concreta
        de esa clase.
      </p>

      <Codeblock code={clasesObjetosCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Una vez definida la clase, puedes crear objetos utilizando la palabra
        clave <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">new</code>.
      </p>

      <Codeblock code={crearObjetoCode} title="Java" />

      <Note title="Idea clave">
        Las clases definen la estructura y comportamiento, mientras que los
        objetos representan instancias reales que utilizan esa estructura.
      </Note>

      <h2
        id="constructores"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Constructores
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un constructor es un método especial que se ejecuta cuando se crea un
        objeto. Se utiliza para inicializar los valores de sus atributos.
      </p>

      <Codeblock code={constructorCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        El nombre del constructor debe ser exactamente igual al nombre de la
        clase y no tiene tipo de retorno.
      </p>

      <h2
        id="encapsulamiento"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Encapsulamiento
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El encapsulamiento consiste en proteger los datos de una clase para que
        no puedan modificarse directamente desde el exterior. Esto se logra
        utilizando modificadores de acceso como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">private</code>.
      </p>

      <Codeblock code={encapsulamientoCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Para acceder o modificar los atributos privados se utilizan métodos
        públicos conocidos como <span className="font-semibold">getters</span> y{" "}
        <span className="font-semibold">setters</span>.
      </p>

      <Note title="Ventaja del encapsulamiento">
        Permite controlar cómo se accede y modifica la información de los
        objetos, lo que mejora la seguridad y mantenimiento del código.
      </Note>

      <h2
        id="herencia"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Herencia
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La herencia permite crear nuevas clases basadas en otras existentes. La
        clase hija hereda atributos y métodos de la clase padre, lo que facilita
        la reutilización de código.
      </p>

      <Codeblock code={herenciaCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, la clase{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">Perro</code> hereda
        de <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">Animal</code> y
        redefine el comportamiento del método{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">hacerSonido</code>.
      </p>

      <h2
        id="polimorfismo"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Polimorfismo
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El polimorfismo permite que un mismo método tenga diferentes
        comportamientos dependiendo del objeto que lo ejecute.
      </p>

      <Codeblock code={polimorfismoCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Aunque <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">a2</code>{" "}
        está declarado como <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">Animal</code>,
        en tiempo de ejecución Java llama al método de{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">Perro</code>.
      </p>

      <h2
        id="abstraccion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Abstracción
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La abstracción consiste en definir una estructura común sin implementar
        todos los detalles. En Java se logra con clases{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">abstract</code>,
        que obligan a las clases hijas a implementar ciertos métodos.
      </p>

      <Codeblock code={abstraccionCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        No se puede instanciar una clase abstracta directamente. Su propósito es
        servir de base para otras clases que sí implementen los métodos
        abstractos.
      </p>

      <Note title="Conceptos fundamentales de POO">
        Los cuatro pilares principales de la programación orientada a objetos
        son: <span className="font-semibold">encapsulamiento</span>,{" "}
        <span className="font-semibold">herencia</span>,{" "}
        <span className="font-semibold">polimorfismo</span> y{" "}
        <span className="font-semibold">abstracción</span>.
      </Note>
    </DocsLayout>
  );
};
