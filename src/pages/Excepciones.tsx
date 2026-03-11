import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const tryCatchCode = `<span class="keyword">public</span> <span class="keyword">class</span> Main {

    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {

        <span class="keyword">try</span> {
            <span class="keyword">int</span> resultado = <span class="number">10</span> / <span class="number">0</span>;
            System.out.<span class="function">println</span>(resultado);
        } <span class="keyword">catch</span> (ArithmeticException e) {
            System.out.<span class="function">println</span>(<span class="string">"Error: división por cero"</span>);
        }

    }

}`;

const finallyCode = `<span class="keyword">try</span> {

    System.out.<span class="function">println</span>(<span class="string">"Intentando ejecutar código"</span>);

} <span class="keyword">catch</span> (Exception e) {

    System.out.<span class="function">println</span>(<span class="string">"Ocurrió un error"</span>);

} <span class="keyword">finally</span> {

    System.out.<span class="function">println</span>(<span class="string">"Este bloque siempre se ejecuta"</span>);

}`;

const throwThrowsCode = `<span class="keyword">public</span> <span class="keyword">void</span> validarEdad(<span class="keyword">int</span> edad) <span class="keyword">throws</span> Exception {

    <span class="keyword">if</span> (edad &lt; <span class="number">18</span>) {
        <span class="keyword">throw</span> <span class="keyword">new</span> Exception(<span class="string">"Debes ser mayor de edad"</span>);
    }

    System.out.<span class="function">println</span>(<span class="string">"Edad válida"</span>);
}`;

const excepcionPersonalizadaCode = `<span class="keyword">class</span> EdadInvalidaException <span class="keyword">extends</span> Exception {

    <span class="keyword">public</span> EdadInvalidaException(String mensaje) {
        <span class="keyword">super</span>(mensaje);
    }

}

<span class="keyword">public</span> <span class="keyword">class</span> Main {

    <span class="keyword">static</span> <span class="keyword">void</span> validarEdad(<span class="keyword">int</span> edad) <span class="keyword">throws</span> EdadInvalidaException {

        <span class="keyword">if</span> (edad &lt; <span class="number">18</span>) {
            <span class="keyword">throw</span> <span class="keyword">new</span> EdadInvalidaException(<span class="string">"Edad no permitida"</span>);
        }

    }

}`;

export const Excepciones = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[1].items[3].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Manejo de excepciones
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Las excepciones en Java permiten manejar errores que ocurren durante la
        ejecución de un programa. Gracias a ellas es posible evitar que la
        aplicación se detenga inesperadamente y controlar situaciones
        problemáticas de forma segura.
      </p>

      <h2
        id="que-son-excepciones"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué son las excepciones?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una excepción es un evento que ocurre durante la ejecución del programa
        y que interrumpe el flujo normal de las instrucciones. Esto puede
        suceder por diferentes razones como divisiones por cero, archivos que no
        existen o accesos inválidos a memoria.
      </p>

      <Note title="Ejemplo común">
        Intentar dividir un número entre cero genera una excepción llamada{" "}
        <span className="font-semibold">ArithmeticException</span>.
      </Note>

      <h2
        id="try-catch"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        try / catch
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El bloque <code>try</code> se utiliza para envolver el código que puede
        generar una excepción. Si ocurre un error, el bloque <code>catch</code>{" "}
        permite manejarlo.
      </p>

      <Codeblock code={tryCatchCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, si ocurre una división por cero, el programa captura la
        excepción y muestra un mensaje en lugar de detener la ejecución.
      </p>

      <h2
        id="finally"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        finally
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El bloque <code>finally</code> se ejecuta siempre, independientemente de
        si ocurre una excepción o no. Es útil para cerrar recursos como archivos
        o conexiones a bases de datos.
      </p>

      <Codeblock code={finallyCode} title="Java" />

      <Note title="Uso común">
        El bloque <code>finally</code> se utiliza con frecuencia para liberar
        recursos del sistema, como cerrar archivos o conexiones.
      </Note>

      <h2
        id="throw-throws"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        throw y throws
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La palabra clave <code>throw</code> se utiliza para lanzar manualmente
        una excepción, mientras que <code>throws</code> indica que un método
        puede generar una excepción.
      </p>

      <Codeblock code={throwThrowsCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto permite delegar el manejo del error al método que invoca la
        función.
      </p>

      <h2
        id="excepciones-personalizadas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Excepciones personalizadas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Java también permite crear excepciones personalizadas extendiendo la
        clase <code>Exception</code>. Esto es útil cuando necesitas manejar
        errores específicos de tu aplicación.
      </p>

      <Codeblock code={excepcionPersonalizadaCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Las excepciones personalizadas ayudan a mantener el código más claro y
        permiten describir errores específicos del dominio de la aplicación.
      </p>

      <Note title="Resumen">
        El manejo de excepciones permite construir aplicaciones más robustas.
        Los bloques <span className="font-semibold">try</span>,{" "}
        <span className="font-semibold">catch</span> y{" "}
        <span className="font-semibold">finally</span> controlan errores,
        mientras que <span className="font-semibold">throw</span> y{" "}
        <span className="font-semibold">throws</span> permiten lanzar y propagar
        excepciones dentro del programa.
      </Note>
    </DocsLayout>
  );
};
