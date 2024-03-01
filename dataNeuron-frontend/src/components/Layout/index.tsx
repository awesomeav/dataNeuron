import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const Layout = () => {
  return (
    <div className="p-4   ">
      <div className="flex items-center gap-4">
        <Resizable
          className=" bg-red-500 border-black-500 flex items-center justify-center"
          defaultSize={{
            width: 200,
            height: 200,
          }}
        >
          001
        </Resizable>
        <Resizable
          className="bg-blue-500  border-black-500 flex items-center justify-center"
          defaultSize={{
            width: 200,
            height: 200,
          }}
        >
          002
        </Resizable>
      </div>
      <div>
        <Resizable
          className="bg-orange-500  mt-10 border-black-500 flex items-center justify-center"
          defaultSize={{
            width: 600,
            height: 400,
          }}
        >
          003
        </Resizable>
      </div>
    </div>
  );
};

export default Layout;
