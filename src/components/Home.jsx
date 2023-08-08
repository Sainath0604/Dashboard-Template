import Sidebar from "./Sidebar";
import Content from "./Content";

export default function Home() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}
