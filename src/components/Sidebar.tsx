import { NavLink } from "react-router-dom";

type SidebarItem = {
  to: string;
  label: string;
  icon: string;
};

type SidebarGroup = {
  title: string;
  items: SidebarItem[];
};

const groups: SidebarGroup[] = [
  {
    title: "Primeros Pasos",
    items: [
      { to: "/docs/start", label: "Empezar un proyecto", icon: "rocket_launch" },
      { to: "/docs/install", label: "Instalación", icon: "download" },
    ],
  },
  {
    title: "Conceptos Básicos",
    items: [
      { to: "/docs/components", label: "Componentes", icon: "widgets" },
      { to: "/docs/hooks", label: "Hooks", icon: "data_object" },
    ],
  },
  {
    title: "Avanzado",
    items: [
      { to: "/docs/performance", label: "Performance", icon: "speed" },
      { to: "/docs/testing", label: "Testing", icon: "science" },
    ],
  },
];

export const Sidebar = () => {
  return (
    <aside className="sidebar-scroll hidden md:flex md:w-72 md:flex-col md:sticky md:top-16 md:h-[calc(100vh-64px)] overflow-y-auto border-r border-[#f2f2f2] p-6">
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#757575]">
              {group.title}
            </h5>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-[#141414] text-white font-medium"
                          : "text-[#141414] hover:bg-[#f2f2f2]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`material-symbols-outlined text-base ${
                            isActive ? "text-white" : "text-[#757575]"
                          }`}
                        >
                          {item.icon}
                        </span>
                        {item.label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};
