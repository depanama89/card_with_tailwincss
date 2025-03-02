const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex justify-center items-center  ">
      <div className="flex justify-start flex-col  gap-4 bg-zinc-50 border border-zinc-200 shadow-2xl p-8 rounded-2xl max-w-sm">
        <div>
          <h1 className="font-bold text-2xl">Hello</h1>
          <p className="text-sm/6 text-justify text-zinc-800">
            Lorem ipsum is a dummy text used in typesetting and graphic design
            for previewing layouts. It features scrambled Latin text, which
            emphasizes the design over content of the layout, and is widely
            accepted in the design and publishing industries.
          </p>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="bg-zinc-200 rounded-md px-4 py-2 text-zinc-600 shadow-sm ">
            Malte
          </li>
          <li className="bg-zinc-200 rounded-md px-4 py-2  text-zinc-600 shadow-sm">
            Fromage
          </li>
          <li className="bg-zinc-200 rounded-md px-4 py-2 text-zinc-600 shadow-sm ">
            Mange
          </li>
          <li className="bg-zinc-200 rounded-md px-4 py-2 text-zinc-600 shadow-sm ">
            Orange
          </li>
        </ul>
        <button className="bg-purple-600 text-purple-200 px-4 py-2 cursor-pointer shadow-lg rounded-2xl">
          Click
        </button>
      </div>
    </div>
  );
};

export default App;
