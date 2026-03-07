import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";

const holaMundoCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
    }
}`;

export const Introduccion = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={
        <TableOfContents
          items={[
            { id: "instalar-react", title: "Instalar React" },
            { id: "crear-proyecto", title: "Crear proyecto" },
            { id: "scripts", title: "Scripts disponibles" },
          ]}
        />
      }
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Introducción a Java
      </h1>
      <p className="text-xl text-[#757575] leading-relaxed">
        Java es un lenguaje de programación orientado a objetos ampliamente
        utilizado para el desarrollo de aplicaciones empresariales, backend,
        aplicaciones móviles y sistemas distribuidos.
      </p>

      <article className="max-w-none">
        <h2
          className="text-2xl font-bold mt-12 mb-4 text-[#141414]"
          id="que-es-java"
        >
          ¿Qué es Java?
        </h2>

        <p className="text-base leading-7 text-[#141414] my-6">
          Java fue creado por Sun Microsystems en 1995 y actualmente es
          mantenido por Oracle. Se caracteriza por su portabilidad, robustez y
          amplio ecosistema de herramientas y bibliotecas.
        </p>

        <p className="text-base leading-7 text-[#141414] my-6">
          Una de sus características más importantes es que los programas
          escritos en Java pueden ejecutarse en diferentes sistemas operativos
          sin necesidad de modificar el código fuente. Esto se logra porque el
          código Java se compila a{" "}
          <span className="font-semibold">bytecode</span>, que luego es
          interpretado por la{" "}
          <span className="font-semibold">Java Virtual Machine (JVM)</span>.
        </p>

        <div className="bg-[#f7f7f7] border-l-4 border-[#141414] p-5 my-8 rounded-r-lg">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-[#141414]">
              info
            </span>
            <div>
              <p className="font-bold text-sm mb-1 text-[#141414]">
                Principio fundamental
              </p>
              <p className="text-sm text-[#757575]">
                Java sigue la idea de{" "}
                <span className="font-semibold">Write Once, Run Anywhere</span>,
                es decir, escribir el programa una vez y ejecutarlo en cualquier
                plataforma que tenga una JVM instalada.
              </p>
            </div>
          </div>
        </div>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-[#141414]"
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
              La Java Virtual Machine es el motor que ejecuta el bytecode
              generado por el compilador. Permite que un mismo programa funcione
              en distintos sistemas operativos.
            </p>
          </div>

          <div className="p-6 border border-[#f2f2f2] rounded-xl">
            <h3 className="font-bold text-lg mb-2 text-[#141414]">JDK</h3>
            <p className="text-sm text-[#757575]">
              El Java Development Kit incluye todas las herramientas necesarias
              para desarrollar aplicaciones Java, como el compilador,
              bibliotecas estándar y utilidades de desarrollo.
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
          className="text-2xl font-bold mt-12 mb-4 text-[#141414]"
          id="usos-java"
        >
          ¿Para qué se usa Java?
        </h2>

        <p className="text-base leading-7 text-[#141414] my-6">
          Java se utiliza en muchos contextos gracias a su estabilidad y
          madurez. Es común encontrarlo en:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-6 border border-[#f2f2f2] rounded-xl">
            <h3 className="font-bold text-lg mb-2 text-[#141414]">
              Backend y APIs
            </h3>
            <p className="text-sm text-[#757575]">
              Es una de las tecnologías más usadas en aplicaciones
              empresariales, servidores, microservicios y APIs REST.
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
          className="text-2xl font-bold mt-12 mb-4 text-[#141414]"
          id="primer-programa"
        >
          Primer programa en Java
        </h2>

        <p className="text-base leading-7 text-[#141414] my-6">
          Un ejemplo clásico para empezar en Java es el programa{" "}
          <span className="font-semibold">Hola Mundo</span>:
        </p>

        <pre className="bg-[#f7f7f7] border border-[#f2f2f2] rounded-xl p-5 overflow-x-auto my-8">
          <code className="text-sm text-[#141414]">{holaMundoCode}</code>
        </pre>

        <p className="text-base leading-7 text-[#141414] my-6">
          En este ejemplo, la clase{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            Main
          </code>{" "}
          contiene el método{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            main
          </code>
          , que es el punto de entrada de cualquier aplicación Java.
        </p>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-[#141414]"
          id="compilar-ejecutar"
        >
          Compilar y ejecutar
        </h2>

        <p className="text-base leading-7 text-[#141414] my-6">
          Para compilar y ejecutar un programa Java desde la terminal puedes
          usar los siguientes comandos:
        </p>

        <pre className="bg-[#f7f7f7] border border-[#f2f2f2] rounded-xl p-5 overflow-x-auto my-8">
          <code className="text-sm text-[#141414]">
            javac Main.java java Main
          </code>
        </pre>

        <div className="bg-[#f7f7f7] border-l-4 border-[#141414] p-5 my-8 rounded-r-lg">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-[#141414]">
              terminal
            </span>
            <div>
              <p className="font-bold text-sm mb-1 text-[#141414]">Resumen</p>
              <p className="text-sm text-[#757575]">
                <span className="font-semibold">javac</span> compila el archivo
                fuente y genera el bytecode, mientras que{" "}
                <span className="font-semibold">java</span> ejecuta la clase
                usando la JVM.
              </p>
            </div>
          </div>
        </div>
      </article>
    </DocsLayout>
  );
};
