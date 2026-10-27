import Motion from "@/components/Motion";
import ScrollReset from "@/components/ScrollReset";

// Re-mounts on every navigation: gives each page a short CSS entrance and
// re-initialises the scroll motion for the new page, starting at the top.
export default function Template({ children }) {
  return (
    <div className="page-enter">
      <ScrollReset />
      <Motion />
      {children}
    </div>
  );
}
