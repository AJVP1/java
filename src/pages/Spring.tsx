import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const crearProyectoCode = `src/
├── main/
│   ├── java/
│   │   └── com/ejemplo/demo/
│   │       ├── DemoApplication.java
│   │       ├── controller/
│   │       └── service/
│   └── resources/
│       └── application.properties
└── test/`;

const springBootAppCode = `<span class="keyword">import</span> org.springframework.boot.SpringApplication;
<span class="keyword">import</span> org.springframework.boot.autoconfigure.SpringBootApplication;

<span class="annotation">@SpringBootApplication</span>
<span class="keyword">public</span> <span class="keyword">class</span> DemoApplication {

    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        SpringApplication.<span class="function">run</span>(DemoApplication.<span class="keyword">class</span>, args);
    }

}`;

const controladorCode = `<span class="keyword">import</span> org.springframework.web.bind.annotation.GetMapping;
<span class="keyword">import</span> org.springframework.web.bind.annotation.RequestMapping;
<span class="keyword">import</span> org.springframework.web.bind.annotation.RestController;

<span class="annotation">@RestController</span>
<span class="annotation">@RequestMapping</span>(<span class="string">"/saludo"</span>)
<span class="keyword">public</span> <span class="keyword">class</span> SaludoController {

    <span class="annotation">@GetMapping</span>
    <span class="keyword">public</span> String saludar() {
        <span class="keyword">return</span> <span class="string">"Hola desde Spring Boot"</span>;
    }

}`;

const servicioCode = `<span class="keyword">import</span> org.springframework.stereotype.Service;

<span class="annotation">@Service</span>
<span class="keyword">public</span> <span class="keyword">class</span> SaludoService {

    <span class="keyword">public</span> String obtenerSaludo() {
        <span class="keyword">return</span> <span class="string">"Hola desde el servicio"</span>;
    }

}`;

const controladorConServicioCode = `<span class="keyword">import</span> org.springframework.web.bind.annotation.GetMapping;
<span class="keyword">import</span> org.springframework.web.bind.annotation.RequestMapping;
<span class="keyword">import</span> org.springframework.web.bind.annotation.RestController;

<span class="annotation">@RestController</span>
<span class="annotation">@RequestMapping</span>(<span class="string">"/saludo"</span>)
<span class="keyword">public</span> <span class="keyword">class</span> SaludoController {

    <span class="keyword">private</span> <span class="keyword">final</span> SaludoService saludoService;

    <span class="keyword">public</span> SaludoController(SaludoService saludoService) {
        <span class="keyword">this</span>.saludoService = saludoService;
    }

    <span class="annotation">@GetMapping</span>
    <span class="keyword">public</span> String saludar() {
        <span class="keyword">return</span> saludoService.obtenerSaludo();
    }

}`;

const apiRestCode = `<span class="keyword">import</span> org.springframework.web.bind.annotation.*;

<span class="annotation">@RestController</span>
<span class="annotation">@RequestMapping</span>(<span class="string">"/usuarios"</span>)
<span class="keyword">public</span> <span class="keyword">class</span> UsuarioController {

    <span class="annotation">@GetMapping</span>
    <span class="keyword">public</span> String listarUsuarios() {
        <span class="keyword">return</span> <span class="string">"Lista de usuarios"</span>;
    }

    <span class="annotation">@PostMapping</span>
    <span class="keyword">public</span> String crearUsuario() {
        <span class="keyword">return</span> <span class="string">"Usuario creado"</span>;
    }

}`;

export const Spring = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[2].items[3].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Spring Boot
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Spring Boot es uno de los frameworks más utilizados en Java para crear
        aplicaciones backend, APIs REST y servicios empresariales. Su objetivo
        es simplificar la configuración inicial y acelerar el desarrollo de
        aplicaciones basadas en el ecosistema Spring.
      </p>

      <h2
        id="que-es-spring"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es Spring Boot?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Spring Boot es una extensión del framework Spring que permite crear
        aplicaciones listas para ejecutarse con una configuración mínima.
        Incluye un servidor embebido, manejo automático de dependencias y una
        estructura pensada para proyectos modernos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Gracias a sus convenciones y auto-configuración, puedes comenzar un
        proyecto rápidamente sin tener que definir manualmente una gran cantidad
        de archivos de configuración.
      </p>

      <Note title="Idea clave">
        Spring Boot reduce la configuración repetitiva y permite enfocarte más
        en la lógica de negocio que en la infraestructura del proyecto.
      </Note>

      <h2
        id="crear-proyecto"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Crear proyecto
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un proyecto Spring Boot suele organizarse con una estructura estándar
        donde el código fuente principal, los recursos y las pruebas están
        claramente separados.
      </p>

      <Codeblock code={crearProyectoCode} title="Estructura" />

      <p className="text-base leading-7 text-[#141414] my-6">
        El punto de entrada de la aplicación suele definirse en una clase
        principal anotada con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @SpringBootApplication
        </code>
        .
      </p>

      <Codeblock code={springBootAppCode} title="Java" />

      <h2
        id="controladores"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Controladores
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los controladores reciben las solicitudes HTTP y devuelven respuestas al
        cliente. En Spring Boot se definen usando anotaciones como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @RestController
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @RequestMapping
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @GetMapping
        </code>
        .
      </p>

      <Codeblock code={controladorCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, el controlador expone una ruta que responde con un
        mensaje simple cuando recibe una petición GET.
      </p>

      <h2
        id="servicios"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Servicios
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La capa de servicios contiene la lógica de negocio de la aplicación. Su
        objetivo es separar responsabilidades y evitar que los controladores
        acumulen demasiada lógica.
      </p>

      <Codeblock code={servicioCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Un controlador puede inyectar un servicio mediante constructor para
        reutilizar la lógica de negocio de forma ordenada.
      </p>

      <Codeblock code={controladorConServicioCode} title="Java" />

      <Note title="Buena práctica">
        Mantén los controladores enfocados en recibir requests y devolver
        respuestas. La lógica de negocio debería vivir principalmente en los
        servicios.
      </Note>

      <h2
        id="apis-rest"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        APIs REST
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Spring Boot es especialmente popular para construir APIs REST. Puedes
        definir endpoints para listar, crear, actualizar o eliminar recursos
        utilizando anotaciones HTTP como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @GetMapping
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @PostMapping
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @PutMapping
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @DeleteMapping
        </code>
        .
      </p>

      <Codeblock code={apiRestCode} title="Java" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">GET</h3>
          <p className="text-sm text-[#757575]">
            Se utiliza para consultar y obtener recursos desde el servidor.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">POST</h3>
          <p className="text-sm text-[#757575]">
            Se utiliza para crear nuevos recursos dentro de la aplicación.
          </p>
        </div>
      </div>

      <Note title="Resumen">
        Spring Boot simplifica la creación de aplicaciones Java modernas. Usa{" "}
        <span className="font-semibold">controladores</span> para exponer rutas,
        <span className="font-semibold"> servicios</span> para encapsular lógica
        de negocio y facilita la construcción de{" "}
        <span className="font-semibold">APIs REST</span> de forma rápida y
        organizada.
      </Note>
    </DocsLayout>
  );
};
