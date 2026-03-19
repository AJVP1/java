import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const estructuraProgramaCode = `<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        System.out.<span class="function">println</span>(<span class="string">"Hola Java"</span>);
    }
}`;

const variablesTiposCode = `<span class="keyword">int</span> edad = <span class="number">25</span>;
<span class="keyword">long</span> poblacion = <span class="number">8000000000L</span>;
<span class="keyword">double</span> precio = <span class="number">19.99</span>;
<span class="keyword">float</span> temperatura = <span class="number">36.6f</span>;
<span class="keyword">char</span> inicial = <span class="string">'A'</span>;
<span class="keyword">boolean</span> activo = <span class="keyword">true</span>;
String nombre = <span class="string">"Armando"</span>;`;

const operadoresCode = `<span class="keyword">int</span> a = <span class="number">10</span>;
<span class="keyword">int</span> b = <span class="number">5</span>;

System.out.<span class="function">println</span>(a + b);  <span class="comment">// suma</span>
System.out.<span class="function">println</span>(a - b);  <span class="comment">// resta</span>
System.out.<span class="function">println</span>(a * b);  <span class="comment">// multiplicación</span>
System.out.<span class="function">println</span>(a / b);  <span class="comment">// división</span>
System.out.<span class="function">println</span>(a % b);  <span class="comment">// módulo</span>`;

const condicionalesCode = `<span class="keyword">int</span> edad = <span class="number">20</span>;

<span class="keyword">if</span> (edad >= <span class="number">18</span>) {
    System.out.<span class="function">println</span>(<span class="string">"Eres mayor de edad"</span>);
} <span class="keyword">else</span> {
    System.out.<span class="function">println</span>(<span class="string">"Eres menor de edad"</span>);
}`;

const switchCode = `<span class="keyword">int</span> dia = <span class="number">3</span>;

<span class="keyword">switch</span> (dia) {
    <span class="keyword">case</span> <span class="number">1</span>:
        System.out.<span class="function">println</span>(<span class="string">"Lunes"</span>);
        <span class="keyword">break</span>;
    <span class="keyword">case</span> <span class="number">2</span>:
        System.out.<span class="function">println</span>(<span class="string">"Martes"</span>);
        <span class="keyword">break</span>;
    <span class="keyword">case</span> <span class="number">3</span>:
        System.out.<span class="function">println</span>(<span class="string">"Miércoles"</span>);
        <span class="keyword">break</span>;
    <span class="keyword">default</span>:
        System.out.<span class="function">println</span>(<span class="string">"Otro día"</span>);
}`;

const buclesCode = `<span class="comment">// for</span>
<span class="keyword">for</span> (<span class="keyword">int</span> i = <span class="number">0</span>; i &lt; <span class="number">5</span>; i++) {
    System.out.<span class="function">println</span>(i);
}

<span class="comment">// while</span>
<span class="keyword">int</span> contador = <span class="number">0</span>;
<span class="keyword">while</span> (contador &lt; <span class="number">3</span>) {
    System.out.<span class="function">println</span>(contador);
    contador++;
}`;

export const Sintaxis = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[1].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Sintaxis básica
      </h1>
      <p className="text-xl text-[#757575] leading-relaxed">
        La sintaxis de Java define cómo se escriben las clases, variables,
        métodos y estructuras de control. Comprender estos elementos es clave
        para comenzar a desarrollar programas correctamente.
      </p>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="estructura-programa"
      >
        Estructura de un programa
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En Java, todo programa parte de una clase. Dentro de ella, el método{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">main</code>{" "}
        funciona como punto de entrada de la aplicación.
      </p>

      <Codeblock code={estructuraProgramaCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        La clase{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">Main</code>{" "}
        contiene la lógica inicial que se ejecuta cuando corres el programa.
      </p>

      <Note title="Idea clave">
        En Java, cada instrucción termina con punto y coma y las llaves definen
        bloques de código como clases, métodos y condicionales.
      </Note>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="variables-tipos"
      >
        Variables y tipos de datos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Java es un lenguaje fuertemente tipado, lo que significa que cada
        variable debe declararse con un tipo de dato específico.
      </p>

      <Codeblock code={variablesTiposCode} title="Java" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Tipos numéricos
          </h3>
          <p className="text-sm text-[#757575]">
            <code>int</code> y <code>double</code> se usan para representar
            números enteros y decimales.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Texto y lógica
          </h3>
          <p className="text-sm text-[#757575]">
            <code>char</code>, <code>String</code> y <code>boolean</code> se
            utilizan para caracteres, cadenas de texto y valores verdaderos o
            falsos.
          </p>
        </div>
      </div>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="operadores"
      >
        Operadores
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los operadores permiten realizar cálculos, comparaciones y evaluaciones
        lógicas dentro del programa.
      </p>

      <Codeblock code={operadoresCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Además de los operadores aritméticos, Java también incluye operadores de
        comparación como <code>==</code>, <code>!=</code>, <code>&gt;</code>,{" "}
        <code>&lt;</code>, y operadores lógicos como <code>&amp;&amp;</code> y{" "}
        <code>||</code>.
      </p>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="condicionales"
      >
        Condicionales
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las estructuras condicionales permiten ejecutar distintos bloques de
        código según se cumpla o no una condición.
      </p>

      <Codeblock code={condicionalesCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        También puedes usar{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          switch
        </code>{" "}
        cuando tienes múltiples casos posibles para evaluar una misma variable.
      </p>

      <Codeblock code={switchCode} title="Java" />

      <Note title="Buena práctica">
        Usa <code>if</code> para decisiones simples y <code>switch</code> cuando
        necesites comparar varios valores concretos de forma más ordenada.
      </Note>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="bucles"
      >
        Bucles
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los bucles permiten repetir instrucciones mientras se cumpla una
        condición o durante una cantidad determinada de iteraciones.
      </p>

      <Codeblock code={buclesCode} title="Java" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">for</h3>
          <p className="text-sm text-[#757575]">
            Es útil cuando sabes de antemano cuántas veces quieres repetir una
            acción.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">while</h3>
          <p className="text-sm text-[#757575]">
            Es útil cuando la repetición depende de una condición que puede
            cambiar durante la ejecución.
          </p>
        </div>
      </div>

      <Note title="Siguiente paso" icon="arrow_forward">
        Después de dominar la sintaxis básica, el siguiente paso es entender
        cómo Java organiza el código mediante clases, objetos, constructores y
        principios de programación orientada a objetos.
      </Note>
    </DocsLayout>
  );
};
