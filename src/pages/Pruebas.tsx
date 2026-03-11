import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const junitCode = `<span class="keyword">import</span> org.junit.jupiter.api.Test;
<span class="keyword">import</span> <span class="keyword">static</span> org.junit.jupiter.api.Assertions.assertEquals;

<span class="keyword">public</span> <span class="keyword">class</span> CalculadoraTest {

    <span class="annotation">@Test</span>
    <span class="keyword">void</span> deberiaSumarDosNumeros() {
        Calculadora calculadora = <span class="keyword">new</span> Calculadora();
        <span class="keyword">int</span> resultado = calculadora.sumar(<span class="number">2</span>, <span class="number">3</span>);

        assertEquals(<span class="number">5</span>, resultado);
    }

}`;

const mockitoCode = `<span class="keyword">import</span> org.junit.jupiter.api.Test;
<span class="keyword">import</span> <span class="keyword">static</span> org.mockito.Mockito.*;
<span class="keyword">import</span> <span class="keyword">static</span> org.junit.jupiter.api.Assertions.assertEquals;

<span class="keyword">public</span> <span class="keyword">class</span> UsuarioServiceTest {

    <span class="annotation">@Test</span>
    <span class="keyword">void</span> deberiaObtenerNombreDesdeElRepositorio() {
        UsuarioRepository repository = mock(UsuarioRepository.<span class="keyword">class</span>);
        when(repository.buscarNombrePorId(<span class="number">1</span>)).thenReturn(<span class="string">"Armando"</span>);

        UsuarioService service = <span class="keyword">new</span> UsuarioService(repository);
        String nombre = service.obtenerNombre(<span class="number">1</span>);

        assertEquals(<span class="string">"Armando"</span>, nombre);
    }

}`;

const pruebaUnitariaCode = `<span class="keyword">public</span> <span class="keyword">class</span> Calculadora {

    <span class="keyword">public</span> <span class="keyword">int</span> multiplicar(<span class="keyword">int</span> a, <span class="keyword">int</span> b) {
        <span class="keyword">return</span> a * b;
    }

}`;

const buenasPracticasCode = `<span class="annotation">@Test</span>
<span class="keyword">void</span> deberiaRetornarCeroCuandoLaListaEstaVacia() {
    EstadisticasService service = <span class="keyword">new</span> EstadisticasService();

    <span class="keyword">int</span> resultado = service.contarElementos(List.of());

    assertEquals(<span class="number">0</span>, resultado);
}`;

export const Pruebas = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[2].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Pruebas
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Las pruebas permiten verificar que el código funciona como se espera. En
        Java, las pruebas unitarias son una parte fundamental del desarrollo, ya
        que ayudan a detectar errores temprano y facilitan el mantenimiento de
        la aplicación.
      </p>

      <h2
        id="junit"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        JUnit
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">JUnit</span> es el framework de testing
        más utilizado en Java. Permite definir y ejecutar pruebas de forma
        sencilla mediante anotaciones y aserciones.
      </p>

      <Codeblock code={junitCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, la anotación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Test
        </code>{" "}
        indica que el método es una prueba, y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          assertEquals
        </code>{" "}
        verifica que el resultado esperado coincida con el valor real.
      </p>

      <Note title="Idea clave">
        Una buena prueba debe ser simple, clara y enfocada en validar un único
        comportamiento.
      </Note>

      <h2
        id="mockito"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Mockito
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">Mockito</span> es una librería que se
        utiliza para crear objetos simulados o{" "}
        <span className="font-semibold">mocks</span>. Esto es útil cuando una
        clase depende de otras y quieres probarla sin usar implementaciones
        reales.
      </p>

      <Codeblock code={mockitoCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este caso, el repositorio se simula para controlar la respuesta y
        probar únicamente la lógica del servicio.
      </p>

      <h2
        id="pruebas-unitarias"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Pruebas unitarias
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una prueba unitaria valida una pequeña parte del sistema, normalmente un
        método o una clase, de forma aislada.
      </p>

      <Codeblock code={pruebaUnitariaCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Después de definir una clase como esta, puedes escribir pruebas para
        comprobar que cada método devuelve el resultado correcto para distintos
        casos.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Ventaja principal
          </h3>
          <p className="text-sm text-[#757575]">
            Detectan errores rápido y reducen el riesgo de romper
            funcionalidades existentes.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Aislamiento</h3>
          <p className="text-sm text-[#757575]">
            Se enfocan en una sola unidad de código para facilitar el análisis
            de fallos.
          </p>
        </div>
      </div>

      <h2
        id="buenas-practicas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Buenas prácticas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Al escribir pruebas en Java conviene seguir algunas recomendaciones para
        que sean más útiles y mantenibles.
      </p>

      <Codeblock code={buenasPracticasCode} title="Java" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Nombres descriptivos
          </h3>
          <p className="text-sm text-[#757575]">
            El nombre de la prueba debe explicar claramente qué comportamiento
            está validando.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Un caso por prueba
          </h3>
          <p className="text-sm text-[#757575]">
            Cada prueba debería concentrarse en una sola expectativa para que el
            resultado sea fácil de interpretar.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Evitar dependencias externas
          </h3>
          <p className="text-sm text-[#757575]">
            Usa mocks cuando sea necesario para que la prueba no dependa de base
            de datos, APIs o archivos reales.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Probar casos límite
          </h3>
          <p className="text-sm text-[#757575]">
            No solo pruebes el caso feliz; también valida listas vacías, valores
            nulos o entradas inválidas.
          </p>
        </div>
      </div>

      <Note title="Resumen">
        <span className="font-semibold">JUnit</span> permite crear y ejecutar
        pruebas, <span className="font-semibold">Mockito</span> ayuda a simular
        dependencias y las pruebas unitarias sirven para validar pequeñas partes
        del sistema de forma aislada. Aplicar buenas prácticas mejora la
        claridad, confiabilidad y mantenimiento del código.
      </Note>
    </DocsLayout>
  );
};
