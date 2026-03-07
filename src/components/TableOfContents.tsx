import { useEffect, useState } from "react";

type TableOfContentsItem = {
  id: string;
  title: string;
};

type TableOfContentsProps = {
  title?: string;
  items?: TableOfContentsItem[];
};

export const TableOfContents = ({
  title = "En esta página",
  items = [],
}: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!items.length) return;

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveId(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "0px 0px -65% 0px",
        threshold: [0.1, 0.3, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [items]);

  return (
    <aside className="hidden h-[calc(100vh-64px)] w-64 shrink-0 overflow-y-auto p-8 xl:sticky xl:top-16 xl:block">
      <h5 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#757575]">
        {title}
      </h5>

      <nav aria-label={title}>
        <ul className="space-y-3 text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block transition-colors ${
                    isActive
                      ? "font-medium text-[#141414]"
                      : "text-[#757575] hover:text-[#141414]"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
