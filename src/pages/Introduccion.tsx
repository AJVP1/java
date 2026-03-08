import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const holaMundoCode = `<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        System.<span class="function">println</span>(<span class="string">"Hola Mundo"</span>);
    }
}`;

const compilarEjecutarCode = `javac Main.java\njava Main`;

export const Introduccion = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[0].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Introducción a Java
      </h1>
      <p className="text-xl text-[#757575] leading-relaxed">
        Java es un lenguaje de programación orientado a objetos ampliamente
        utilizado para el desarrollo de aplicaciones empresariales, backend,
        aplicaciones móviles y sistemas distribuidos.
      </p>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="que-es-java"
      >
        ¿Qué es Java?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Java fue creado por Sun Microsystems en 1995 y actualmente es mantenido
        por Oracle. Se caracteriza por su portabilidad, robustez y amplio
        ecosistema de herramientas y bibliotecas.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una de sus características más importantes es que los programas escritos
        en Java pueden ejecutarse en diferentes sistemas operativos sin
        necesidad de modificar el código fuente. Esto se logra porque el código
        Java se compila a <span className="font-semibold">bytecode</span>, que
        luego es interpretado por la{" "}
        <span className="font-semibold">Java Virtual Machine (JVM)</span>.
      </p>

      <Note title="Principio fundamental">
        Java sigue la idea de{" "}
        <span className="font-semibold">Write Once, Run Anywhere</span>, es
        decir, escribir el programa una vez y ejecutarlo en cualquier plataforma
        que tenga una JVM instalada.
      </Note>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="ecosistema-java"
      >
        Componentes del ecosistema Java
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para trabajar correctamente con Java es importante conocer los
        componentes principales de su entorno de ejecución y desarrollo.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">JVM</h3>
          <p className="text-sm text-[#757575]">
            La Java Virtual Machine es el motor que ejecuta el bytecode generado
            por el compilador. Permite que un mismo programa funcione en
            distintos sistemas operativos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">JDK</h3>
          <p className="text-sm text-[#757575]">
            El Java Development Kit incluye todas las herramientas necesarias
            para desarrollar aplicaciones Java, como el compilador, bibliotecas
            estándar y utilidades de desarrollo.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">JRE</h3>
          <p className="text-sm text-[#757575]">
            El Java Runtime Environment contiene los elementos necesarios para
            ejecutar aplicaciones Java, pero no incluye herramientas de
            compilación.
          </p>
        </div>
      </div>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="usos-java"
      >
        ¿Para qué se usa Java?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Java se utiliza en muchos contextos gracias a su estabilidad y madurez.
        Es común encontrarlo en:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Backend y APIs
          </h3>
          <p className="text-sm text-[#757575]">
            Es una de las tecnologías más usadas en aplicaciones empresariales,
            servidores, microservicios y APIs REST.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Aplicaciones empresariales
          </h3>
          <p className="text-sm text-[#757575]">
            Muchas organizaciones utilizan Java para sistemas bancarios,
            plataformas corporativas y software de gran escala.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Aplicaciones Android
          </h3>
          <p className="text-sm text-[#757575]">
            Durante años Java fue uno de los lenguajes principales para el
            desarrollo de aplicaciones móviles en Android.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Sistemas distribuidos
          </h3>
          <p className="text-sm text-[#757575]">
            También se usa en plataformas que requieren alto rendimiento,
            concurrencia y escalabilidad.
          </p>
        </div>
      </div>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="primer-programa"
      >
        Primer programa en Java
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un ejemplo clásico para empezar en Java es el programa{" "}
        <span className="font-semibold">Hola Mundo</span>:
      </p>

      <Codeblock code={holaMundoCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, la clase{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">Main</code>{" "}
        contiene el método{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">main</code>
        , que es el punto de entrada de cualquier aplicación Java.
      </p>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="compilar-ejecutar"
      >
        Compilar y ejecutar
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para compilar y ejecutar un programa Java desde la terminal puedes usar
        los siguientes comandos:
      </p>

      <Codeblock code={compilarEjecutarCode} title="Terminal" />

      <Note title="Resumen" icon="terminal">
        <span className="font-semibold">javac</span> compila el archivo fuente y
        genera el bytecode, mientras que{" "}
        <span className="font-semibold">java</span> ejecuta la clase usando la
        JVM.
      </Note>
    </DocsLayout>
  );
};
