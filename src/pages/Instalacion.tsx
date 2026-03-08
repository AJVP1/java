import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const verificarVersionCode = `java -version
javac -version`;

const javaHomeWindowsCode = `setx JAVA_HOME "C:\\Program Files\\Java\\jdk-21"
setx PATH "%JAVA_HOME%\\bin;%PATH%"`;

const javaHomeLinuxCode = `export JAVA_HOME=/usr/lib/jvm/jdk-21
export PATH=$JAVA_HOME/bin:$PATH`;

const javaHomeMacCode = `export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-21.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH`;

export const Instalacion = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[0].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Instalación de Java
      </h1>
      <p className="text-xl text-[#757575] leading-relaxed">
        Antes de comenzar a programar en Java, necesitas instalar el JDK,
        configurar correctamente tu entorno y verificar que las herramientas de
        compilación estén disponibles desde la terminal.
      </p>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="requisitos-previos"
      >
        Requisitos previos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para trabajar con Java necesitas un sistema operativo compatible, acceso
        a la terminal y permisos para instalar software en tu equipo. También es
        recomendable contar con un editor o IDE para escribir y ejecutar tus
        programas con mayor comodidad.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Sistema operativo
          </h3>
          <p className="text-sm text-[#757575]">
            Java puede instalarse en Windows, Linux y macOS sin cambios en el
            código fuente de tus programas.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Terminal</h3>
          <p className="text-sm text-[#757575]">
            Necesitarás usar la línea de comandos para verificar la instalación,
            compilar archivos y ejecutar programas Java.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Editor o IDE
          </h3>
          <p className="text-sm text-[#757575]">
            Puedes empezar con VS Code, IntelliJ IDEA o Eclipse para facilitar
            el desarrollo y la depuración.
          </p>
        </div>
      </div>

      <Note title="Recomendación">
        Para proyectos nuevos suele ser conveniente instalar una versión LTS del
        JDK, ya que ofrece soporte prolongado y mayor estabilidad para
        desarrollo y producción.
      </Note>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="descargar-jdk"
      >
        Descargar el JDK
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El <span className="font-semibold">JDK</span> es el kit de desarrollo de
        Java. Incluye el compilador, herramientas de desarrollo, bibliotecas
        estándar y la máquina virtual necesaria para crear y ejecutar
        aplicaciones.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Durante la instalación debes seleccionar el paquete correspondiente a tu
        sistema operativo. Una vez descargado, sigue el asistente del instalador
        hasta completar el proceso.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Windows</h3>
          <p className="text-sm text-[#757575]">
            Descarga el instalador del JDK, ejecútalo y completa el asistente de
            instalación.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Linux / macOS
          </h3>
          <p className="text-sm text-[#757575]">
            Puedes instalar Java con paquetes oficiales, gestores de paquetes o
            instaladores provistos por la distribución.
          </p>
        </div>
      </div>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="configurar-java-home"
      >
        Configurar JAVA_HOME
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La variable de entorno{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          JAVA_HOME
        </code>{" "}
        permite que otras herramientas encuentren la instalación de Java
        correctamente. En muchos entornos de trabajo también se usa para
        configurar IDEs, servidores y herramientas de build.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        El valor de{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          JAVA_HOME
        </code>{" "}
        debe apuntar a la carpeta raíz del JDK, no a la carpeta{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">bin</code>.
      </p>

      <Codeblock code={javaHomeWindowsCode} title="Windows" />

      <Codeblock code={javaHomeLinuxCode} title="Linux" />

      <Codeblock code={javaHomeMacCode} title="macOS" />

      <Note title="Importante">
        Después de modificar variables de entorno, cierra y vuelve a abrir la
        terminal para que los cambios se apliquen correctamente.
      </Note>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="verificar-instalacion"
      >
        Verificar instalación
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una vez finalizada la instalación, verifica que Java y el compilador
        estén disponibles ejecutando estos comandos:
      </p>

      <Codeblock code={verificarVersionCode} title="Terminal" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Si todo está configurado correctamente, la terminal mostrará la versión
        instalada de Java y del compilador{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          javac
        </code>
        .
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Comando java
          </h3>
          <p className="text-sm text-[#757575]">
            Comprueba que la máquina virtual está instalada y disponible desde
            la terminal.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Comando javac
          </h3>
          <p className="text-sm text-[#757575]">
            Verifica que el compilador forma parte del JDK y está configurado en
            el PATH del sistema.
          </p>
        </div>
      </div>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="ides-recomendados"
      >
        IDEs recomendados
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Aunque Java puede trabajarse desde la terminal, usar un IDE mejora mucho
        la experiencia de desarrollo. Estas son algunas opciones recomendadas:
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            IntelliJ IDEA
          </h3>
          <p className="text-sm text-[#757575]">
            Muy popular para desarrollo Java por su autocompletado, refactors y
            excelente integración con frameworks.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Eclipse</h3>
          <p className="text-sm text-[#757575]">
            Un entorno clásico en el ecosistema Java, ampliamente utilizado en
            entornos educativos y empresariales.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">VS Code</h3>
          <p className="text-sm text-[#757575]">
            Ligero y flexible. Con las extensiones adecuadas puede ser una muy
            buena opción para aprender y desarrollar proyectos Java.
          </p>
        </div>
      </div>

      <Note title="Siguiente paso" icon="arrow_forward">
        Cuando ya tengas Java instalado y verificado, el siguiente paso natural
        es aprender la sintaxis básica del lenguaje y escribir tus primeros
        programas.
      </Note>
    </DocsLayout>
  );
};
