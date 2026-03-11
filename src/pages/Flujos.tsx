import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const lambdaCode = `<span class="keyword">import</span> java.util.List;

<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        List&lt;String&gt; nombres = List.of(<span class="string">"Ana"</span>, <span class="string">"Luis"</span>, <span class="string">"Armando"</span>);

        nombres.forEach(nombre -&gt; System.out.<span class="function">println</span>(nombre));
    }
}`;

const streamApiCode = `<span class="keyword">import</span> java.util.List;

<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        List&lt;Integer&gt; numeros = List.of(<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>);

        numeros.stream()
            .forEach(numero -&gt; System.out.<span class="function">println</span>(numero));
    }
}`;

const filterMapCode = `<span class="keyword">import</span> java.util.List;
<span class="keyword">import</span> java.util.stream.Collectors;

<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        List&lt;Integer&gt; numeros = List.of(<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>);

        List&lt;Integer&gt; resultado = numeros.stream()
            .filter(numero -&gt; numero % <span class="number">2</span> == <span class="number">0</span>)
            .map(numero -&gt; numero * <span class="number">10</span>)
            .collect(Collectors.toList());

        System.out.<span class="function">println</span>(resultado);
    }
}`;

const reduceCode = `<span class="keyword">import</span> java.util.List;

<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        List&lt;Integer&gt; numeros = List.of(<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>);

        <span class="keyword">int</span> suma = numeros.stream()
            .reduce(<span class="number">0</span>, (acumulador, numero) -&gt; acumulador + numero);

        System.out.<span class="function">println</span>(suma);
    }
}`;

const optionalCode = `<span class="keyword">import</span> java.util.Optional;

<span class="keyword">public</span> <span class="keyword">class</span> Main {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> main(String[] args) {
        Optional&lt;String&gt; nombre = Optional.ofNullable(<span class="keyword">null</span>);

        System.out.<span class="function">println</span>(nombre.orElse(<span class="string">"Valor por defecto"</span>));
    }
}`;

export const Flujos = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[2].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Streams y Lambdas
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Las expresiones lambda y la Stream API permiten escribir código más
        declarativo, legible y expresivo en Java. Son herramientas muy útiles
        para procesar colecciones de datos de forma compacta y funcional.
      </p>

      <h2
        id="expresiones-lambda"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Expresiones lambda
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una expresión lambda es una forma breve de representar una función
        anónima. Se utiliza para pasar comportamiento como argumento,
        especialmente en operaciones sobre colecciones.
      </p>

      <Codeblock code={lambdaCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, cada elemento de la lista se recorre con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          forEach
        </code>{" "}
        y se imprime usando una lambda.
      </p>

      <Note title="Idea clave">
        Las lambdas reducen el código repetitivo y hacen más simple trabajar con
        interfaces funcionales.
      </Note>

      <h2
        id="stream-api"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Stream API
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un stream representa una secuencia de elementos sobre la que puedes
        realizar operaciones como filtrar, transformar, ordenar o reducir
        resultados.
      </p>

      <Codeblock code={streamApiCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        La Stream API no modifica la colección original, sino que permite
        procesar sus datos de manera encadenada y declarativa.
      </p>

      <h2
        id="filter-map"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        filter y map
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las operaciones{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          filter
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">map</code>{" "}
        son dos de las más utilizadas en streams.
      </p>

      <Codeblock code={filterMapCode} title="Java" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">filter</h3>
          <p className="text-sm text-[#757575]">
            Permite quedarte solo con los elementos que cumplen una condición.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">map</h3>
          <p className="text-sm text-[#757575]">
            Transforma cada elemento en otro valor, manteniendo el flujo del
            stream.
          </p>
        </div>
      </div>

      <h2
        id="reduce"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        reduce
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La operación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          reduce
        </code>{" "}
        se utiliza para combinar todos los elementos del stream en un único
        resultado.
      </p>

      <Codeblock code={reduceCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Es muy útil para sumar valores, concatenar cadenas o construir
        acumuladores a partir de una colección.
      </p>

      <h2
        id="optional"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Optional
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Optional
        </code>{" "}
        es una clase que ayuda a representar valores que pueden o no estar
        presentes, evitando muchos errores por valores nulos.
      </p>

      <Codeblock code={optionalCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Con métodos como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          orElse
        </code>
        , puedes definir un valor alternativo cuando no existe contenido.
      </p>

      <Note title="Resumen">
        Las lambdas permiten escribir funciones breves, los streams facilitan el
        procesamiento declarativo de colecciones,{" "}
        <span className="font-semibold">filter</span> y{" "}
        <span className="font-semibold">map</span> transforman datos,{" "}
        <span className="font-semibold">reduce</span> los combina en un solo
        resultado y <span className="font-semibold">Optional</span> ayuda a
        manejar ausencias de valor de forma más segura.
      </Note>
    </DocsLayout>
  );
};
