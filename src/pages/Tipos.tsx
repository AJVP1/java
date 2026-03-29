import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const classCode = `<span class="keyword">public</span> <span class="keyword">class</span> Usuario {
    String nombre;
    int edad;

    <span class="keyword">public</span> Usuario(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}`;

const interfaceCode = `<span class="keyword">public</span> <span class="keyword">interface</span> Vehiculo {
    <span class="keyword">void</span> arrancar();
}`;

const enumCode = `<span class="keyword">public</span> <span class="keyword">enum</span> Estado {
    ACTIVO,
    INACTIVO,
    PENDIENTE
}`;

const recordCode = `<span class="keyword">public</span> <span class="keyword">record</span> Persona(String nombre, int edad) { }`;

export const Tipos = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[1].items[4].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Tipos en Java
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Java ofrece diferentes tipos de estructuras para modelar datos y
        comportamientos. Entender cuándo usar <strong>class</strong>,{" "}
        <strong>interface</strong>, <strong>enum</strong> o{" "}
        <strong>record</strong> es clave para escribir código claro y
        mantenible.
      </p>

      {/* CLASS */}
      <h2
        id="class"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Class
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una <span className="font-semibold">class</span> define objetos con
        estado (atributos) y comportamiento (métodos). Es el tipo más flexible y
        utilizado en Java.
      </p>

      <Codeblock code={classCode} title="Java" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Cuándo usar</h3>
          <p className="text-sm text-[#757575]">
            Cuando necesitas representar entidades con lógica, validaciones o
            comportamiento complejo.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Ejemplo típico
          </h3>
          <p className="text-sm text-[#757575]">
            Usuarios, productos, servicios o cualquier entidad del dominio.
          </p>
        </div>
      </div>

      {/* INTERFACE */}
      <h2
        id="interface"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Interface
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una <span className="font-semibold">interface</span> define un contrato.
        No implementa lógica (en la mayoría de los casos), solo especifica qué
        métodos debe tener una clase.
      </p>

      <Codeblock code={interfaceCode} title="Java" />

      <Note title="Importante">
        Una clase puede implementar múltiples{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">interfaces</code>,
        lo que permite diseñar sistemas flexibles y desacoplados.
      </Note>

      {/* ENUM */}
      <h2
        id="enum"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Enum
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un <span className="font-semibold">enum</span> representa un conjunto
        fijo de valores constantes. Es ideal para estados o categorías
        predefinidas.
      </p>

      <Codeblock code={enumCode} title="Java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Garantiza que solo se utilicen valores válidos, evitando errores comunes
        con strings o números.
      </p>

      {/* RECORD */}
      <h2
        id="record"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Record
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un <span className="font-semibold">record</span> es una forma concisa de
        definir clases inmutables orientadas a datos. Java genera
        automáticamente constructores, getters y métodos como{" "}
        <code>equals</code> y <code>toString</code>.
      </p>

      <Codeblock code={recordCode} title="Java" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Ventaja principal
          </h3>
          <p className="text-sm text-[#757575]">
            Reduce mucho el código boilerplate en clases que solo contienen
            datos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Caso de uso común
          </h3>
          <p className="text-sm text-[#757575]">
            DTOs, respuestas de APIs o estructuras simples de datos.
          </p>
        </div>
      </div>

      <Note title="Resumen">
        <span className="font-semibold">class</span> define lógica y estado,{" "}
        <span className="font-semibold">interface</span> define contratos,{" "}
        <span className="font-semibold">enum</span> define valores constantes y{" "}
        <span className="font-semibold">record</span> simplifica la creación de
        objetos inmutables orientados a datos.
      </Note>
    </DocsLayout>
  );
};
