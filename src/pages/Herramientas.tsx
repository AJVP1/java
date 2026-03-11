import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const mavenCode = `<span class="keyword">&lt;project</span> <span class="string">xmlns="http://maven.apache.org/POM/4.0.0"</span><span class="keyword">&gt;</span>
    <span class="keyword">&lt;modelVersion&gt;</span><span class="string">4.0.0</span><span class="keyword">&lt;/modelVersion&gt;</span>
    <span class="keyword">&lt;groupId&gt;</span><span class="string">com.ejemplo</span><span class="keyword">&lt;/groupId&gt;</span>
    <span class="keyword">&lt;artifactId&gt;</span><span class="string">mi-app</span><span class="keyword">&lt;/artifactId&gt;</span>
    <span class="keyword">&lt;version&gt;</span><span class="string">1.0.0</span><span class="keyword">&lt;/version&gt;</span>
<span class="keyword">&lt;/project&gt;</span>`;

const gradleCode = `<span class="keyword">plugins</span> {
    id <span class="string">'java'</span>
}

<span class="keyword">group</span> = <span class="string">'com.ejemplo'</span>
<span class="keyword">version</span> = <span class="string">'1.0.0'</span>

<span class="keyword">repositories</span> {
    mavenCentral()
}`;

const dependenciasMavenCode = `<span class="keyword">&lt;dependencies&gt;</span>
    <span class="keyword">&lt;dependency&gt;</span>
        <span class="keyword">&lt;groupId&gt;</span><span class="string">org.junit.jupiter</span><span class="keyword">&lt;/groupId&gt;</span>
        <span class="keyword">&lt;artifactId&gt;</span><span class="string">junit-jupiter</span><span class="keyword">&lt;/artifactId&gt;</span>
        <span class="keyword">&lt;version&gt;</span><span class="string">5.10.2</span><span class="keyword">&lt;/version&gt;</span>
        <span class="keyword">&lt;scope&gt;</span><span class="string">test</span><span class="keyword">&lt;/scope&gt;</span>
    <span class="keyword">&lt;/dependency&gt;</span>
<span class="keyword">&lt;/dependencies&gt;</span>`;

const dependenciasGradleCode = `<span class="keyword">dependencies</span> {
    testImplementation <span class="string">'org.junit.jupiter:junit-jupiter:5.10.2'</span>
}`;

const estructuraProyectoCode = `mi-app/
├── src/
│   ├── main/
│   │   └── java/
│   │       └── com/ejemplo/Main.java
│   └── test/
│       └── java/
│           └── com/ejemplo/MainTest.java
├── pom.xml
└── build.gradle`;

export const Herramientas = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[2].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Herramientas
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        En Java, herramientas como Maven y Gradle facilitan la gestión de
        dependencias, la compilación del proyecto, la ejecución de pruebas y la
        automatización de tareas comunes del ciclo de desarrollo.
      </p>

      <h2
        id="que-es-maven"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es Maven?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">Maven</span> es una herramienta de
        automatización y gestión de proyectos basada en un archivo de
        configuración llamado{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          pom.xml
        </code>
        . Su objetivo principal es centralizar la configuración del proyecto y
        simplificar tareas como compilar, ejecutar pruebas, empaquetar y manejar
        dependencias.
      </p>

      <Codeblock code={mavenCode} title="pom.xml" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este archivo se define la información básica del proyecto, como su
        identificador, versión y dependencias necesarias.
      </p>

      <h2
        id="que-es-gradle"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es Gradle?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">Gradle</span> es otra herramienta muy
        popular en el ecosistema Java. A diferencia de Maven, utiliza una
        sintaxis más flexible y programable para definir la configuración del
        proyecto.
      </p>

      <Codeblock code={gradleCode} title="build.gradle" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Gradle permite definir plugins, repositorios, tareas personalizadas y
        dependencias en un formato más dinámico, lo que resulta útil en
        proyectos complejos.
      </p>

      <Note title="Diferencia general">
        Maven suele ser más declarativo y estructurado, mientras que Gradle
        ofrece mayor flexibilidad para personalizar el proceso de build.
      </Note>

      <h2
        id="dependencias"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Gestión de dependencias
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una dependencia es una librería externa que tu proyecto necesita para
        funcionar. Tanto Maven como Gradle permiten declarar dependencias y
        descargarlas automáticamente desde repositorios como Maven Central.
      </p>

      <Codeblock code={dependenciasMavenCode} title="Maven" />

      <Codeblock code={dependenciasGradleCode} title="Gradle" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En estos ejemplos se agrega JUnit como dependencia de pruebas. Esto
        evita descargar manualmente archivos y mantiene el proyecto organizado.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Ventaja principal
          </h3>
          <p className="text-sm text-[#757575]">
            Las dependencias quedan versionadas y documentadas dentro del
            proyecto, lo que facilita reproducir el entorno en otros equipos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Repositorios
          </h3>
          <p className="text-sm text-[#757575]">
            Herramientas como Maven y Gradle descargan librerías desde
            repositorios remotos y las integran automáticamente en el build.
          </p>
        </div>
      </div>

      <h2
        id="estructura-proyecto"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Estructura del proyecto
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una estructura ordenada facilita el mantenimiento, las pruebas y la
        escalabilidad del proyecto. En Java se suele separar el código fuente
        principal del código de pruebas.
      </p>

      <Codeblock code={estructuraProyectoCode} title="Terminal" />

      <p className="text-base leading-7 text-[#141414] my-6">
        La carpeta{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          src/main/java
        </code>{" "}
        contiene la aplicación, mientras que{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          src/test/java
        </code>{" "}
        se utiliza para las pruebas automatizadas.
      </p>

      <Note title="Resumen">
        <span className="font-semibold">Maven</span> y{" "}
        <span className="font-semibold">Gradle</span> son herramientas clave en
        proyectos Java. Permiten automatizar builds, gestionar dependencias y
        mantener una estructura consistente que facilita el desarrollo y el
        trabajo en equipo.
      </Note>
    </DocsLayout>
  );
};
