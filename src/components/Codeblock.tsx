interface CodeblockProps {
  code: string;
}

export default function Codeblock({ code }: CodeblockProps) {
  return (
    <pre className="bg-[#f7f7f7] border border-[#f2f2f2] rounded-xl p-5 overflow-x-auto my-8">
      <code className="text-sm text-[#141414]">{code}</code>
    </pre>
  );
}
