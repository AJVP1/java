import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const listCode = `<span class="keyword">import</span> java.util.ArrayList;
<span class="keyword">import</span> java.util.List;

<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        List&lt;String&gt; nombres = <span class="keyword">new</span> ArrayList&lt;&gt;();

        nombres.add(<span class="string">"Ana"</span>);
        nombres.add(<span class="string">"Luis"</span>);
        nombres.add(<span class="string">"Armando"</span>);

        System.out.<span class="function">println</span>(nombres);
    }
}`;

const setCode = `<span class="keyword">import</span> java.util.HashSet;
<span class="keyword">import</span> java.util.Set;

<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        Set&lt;String&gt; colores = <span class="keyword">new</span> HashSet&lt;&gt;();

        colores.add(<span class="string">"rojo"</span>);
        colores.add(<span class="string">"azul"</span>);
        colores.add(<span class="string">"rojo"</span>);

        System.out.<span class="function">println</span>(colores);
    }
}`;

const mapCode = `<span class="keyword">import</span> java.util.HashMap;
<span class="keyword">import</span> java.util.Map;

<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        Map&lt;String, Integer&gt; edades = <span class="keyword">new</span> HashMap&lt;&gt;();

        edades.put(<span class="string">"Ana"</span>, <span class="number">22</span>);
        edades.put(<span class="string">"Luis"</span>, <span class="number">30</span>);
        edades.put(<span class="string">"Armando"</span>, <span class="number">25</span>);

        System.out.<span class="function">println</span>(edades.get(<span class="string">"Luis"</span>));
    }
}`;

const arrayListCode = `<span class="keyword">import</span> java.util.ArrayList;

<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        ArrayList&lt;Integer&gt; numeros = <span class="keyword">new</span> ArrayList&lt;&gt;();

        numeros.add(<span class="number">10</span>);
        numeros.add(<span class="number">20</span>);
        numeros.add(<span class="number">30</span>);

        System.out.<span class="function">println</span>(numeros.get(<span class="number">1</span>));
    }
}`;

const hashMapCode = `<span class="keyword">import</span> java.util.HashMap;

<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        HashMap&lt;String, String&gt; capitales = <span class="keyword">new</span> HashMap&lt;&gt;();

        capitales.put(<span class="string">"Argentina"</span>, <span class="string">"Buenos Aires"</span>);
        capitales.put(<span class="string">"Chile"</span>, <span class="string">"Santiago"</span>);
        capitales.put(<span class="string">"Perú"</span>, <span class="string">"Lima"</span>);

        System.out.<span class="function">println</span>(capitales);
    }
}`;

export const Colecciones = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[1].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Colecciones
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Las colecciones en Java permiten almacenar y manipular grupos de datos
        de forma dinámica. Son fundamentales para trabajar con listas de
        elementos, conjuntos sin duplicados y estructuras clave-valor.
      </p>

      <h2
        id="listas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        List
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La interfaz <span className="font-semibold">List</span> representa una
        colección ordenada de elementos. Permite acceder a los valores por
        índice y admite elementos duplicados.
      </p>

      <Codeblock code={listCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Es una de las estructuras más utilizadas cuando necesitas mantener el
        orden de inserción y recorrer elementos en secuencia.
      </p>

      <h2
        id="sets"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Set
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La interfaz <span className="font-semibold">Set</span> representa una
        colección de elementos únicos. No permite duplicados y resulta útil
        cuando necesitas evitar repeticiones.
      </p>

      <Codeblock code={setCode} title="Java" />

      <Note title="Importante">
        Si intentas agregar un valor repetido a un{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">Set</code>, la
        colección lo ignorará automáticamente.
      </Note>

      <h2
        id="maps"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Map
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La interfaz <span className="font-semibold">Map</span> se utiliza para
        almacenar datos en pares{" "}
        <span className="font-semibold">clave-valor</span>. Cada clave es única
        y permite recuperar rápidamente el valor asociado.
      </p>

      <Codeblock code={mapCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esta estructura es muy útil para representar configuraciones, catálogos,
        relaciones entre entidades o cualquier dato que necesite una clave para
        su acceso.
      </p>

      <h2
        id="arraylist"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ArrayList
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">ArrayList</span> es una implementación
        concreta de <span className="font-semibold">List</span>. Se usa cuando
        necesitas una lista redimensionable y acceso rápido por índice.
      </p>

      <Codeblock code={arrayListCode} title="Java" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Ventaja principal
          </h3>
          <p className="text-sm text-[#757575]">
            Permite agregar y leer elementos fácilmente sin definir un tamaño
            fijo como ocurre con los arrays tradicionales.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Caso de uso común
          </h3>
          <p className="text-sm text-[#757575]">
            Es ideal para manejar listados dinámicos, resultados de consultas o
            colecciones que cambian durante la ejecución.
          </p>
        </div>
      </div>

      <h2
        id="hashmap"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        HashMap
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">HashMap</span> es una implementación de{" "}
        <span className="font-semibold">Map</span> muy utilizada por su
        eficiencia. Permite almacenar pares clave-valor y acceder a ellos de
        forma rápida.
      </p>

      <Codeblock code={hashMapCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Es una excelente opción cuando necesitas búsquedas rápidas a partir de
        una clave, por ejemplo usuarios por ID, productos por código o países
        por nombre.
      </p>

      <Note title="Resumen">
        <span className="font-semibold">List</span> mantiene orden y admite
        duplicados, <span className="font-semibold">Set</span> evita elementos
        repetidos y <span className="font-semibold">Map</span> organiza datos en
        pares clave-valor. Entre sus implementaciones más comunes están{" "}
        <span className="font-semibold">ArrayList</span> y{" "}
        <span className="font-semibold">HashMap</span>.
      </Note>
    </DocsLayout>
  );
};
