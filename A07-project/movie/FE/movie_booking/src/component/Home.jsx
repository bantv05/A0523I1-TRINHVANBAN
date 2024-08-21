import {SidebarCollection} from "../movie/SidebarCollection.jsx";

export const Home = () => {
  return <div className="w-full ">
      <SidebarCollection/>
      <div className="min-h-screen items-center justify-center flex xl:ml-80">
          {/*bg-clip-text: cắt văn bản vào nền; text-transparent làm cho văn bản trở nên trong suốt.*/}
          <h1 className="font-black font-mono text-[26px]
          bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400
          inline-block text-transparent bg-clip-text">Xin chào, Ban!</h1>
      </div>
  </div>
}