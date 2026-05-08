import { Divide, FolderHeart, Grid2x2 } from "lucide-react";

export default function SideBar() {
  const links = [
    {
      label: "Discover",
      icon: <Grid2x2 className="text-cyber-neon" size={30} />,
      path: "",
    },
    {
      label: "Favorites",
      icon: <FolderHeart className="text-cyber-neon" size={30} />,
      path: "",
    },
  ];
  return (
    <div className="min-h-screen bg-cyber-deep w-30 py-8 font-michroma">
      <div className="flex items-center flex-col">
        {links.map((link) => (
          <div
            key={link.label}
            className="flex flex-col justify-center items-center gap-1 mb-8 group cursor-pointer relative before:absolute before:-left-2 before:h-full before:w-1 before:bg-cyber-neon"
          >
            {link.icon}
            <p className="text-cyber-neon font-medium text-xs group-hover:text-shadow-sm group-hover:text-shadow-cyber-neon transition-normal duration-150">
              {link.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
