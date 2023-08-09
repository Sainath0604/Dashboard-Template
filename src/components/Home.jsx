import Sidebar from "./Sidebar";
import Content from "./Content";

export default function C2() {
  return (
    <div className="m-0 h-screen">
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className=" md:w-4/5">
          <Content />
        </div>
      </div>
    </div>
  );
}
