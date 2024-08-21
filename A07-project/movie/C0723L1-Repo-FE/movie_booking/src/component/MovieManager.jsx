import {SidebarCollection} from "../movie/SidebarCollection.jsx";
import {useState} from "react";
import * as movieService from "../service/MovieService.jsx"

export const MovieManager = () => {
    const [movies, setMovies] = useState([]);
    const getFindAllMovie = () =>{
        const temp = movieService.getFindAllMovie();
        setMovies(temp);
    }
    return <div>
        <SidebarCollection/>
      <div className="p-4 xl:ml-80">
              <div className="bg-white px-4 py-6 mx-4 rounded-xl shadow-lg mt-10">
                  <div className="flex gap-2">
                          <span className="inline-flex justify-center items-center size-[36px] rounded-full border-4 border-blue-100 bg-blue-200 text-blue-800 relative bottom-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                   className="size-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                              </svg>
                        </span>
                      <h1 className="text-xl font-medium ">Search</h1>
                  </div>

                  <form className="space-y-2" action="">
                      <div className="grid grid-cols-2 gap-5">
                          <div className="flex-col justify-center items-center">
                              <label className="font-medium text-[14px]" htmlFor="nameMovie">Tên phim:</label>
                              <input type="text" name="nameMovie" id="nameMovie" placeholder="Nhập tên phim"
                                     className="w-full rounded-lg border border-gray-300 mr-2 px-3 py-1"/>
                          </div>
                          <div className="flex-col justify-center items-center">
                              <label className="font-medium text-[14px]" htmlFor="actor">Diễn viên:</label>
                              <input type="text" name="actor" id="actor" placeholder="Nhập diễn viên phim"
                                     className="w-full rounded-lg border border-gray-300 mr-2 px-3 py-1"/>
                          </div>
                      </div>
                      <div className="grid grid-cols-4 gap-5">
                          <div className="flex flex-col">
                              <label className="font-medium text-[14px]" htmlFor="kind">Loại phim:</label>
                              <select name="kind" id="kind" className="w-full rounded-lg border border-gray-300 mr-2 py-1 text-center">
                                  <option value="">--Chọn loại phim--</option>
                                  <option value="">acb</option>
                              </select>
                          </div>
                          <div className="flex-col justify-center items-center col-span-3">
                              <label className="font-medium text-[14px]" htmlFor="director">Giám đốc:</label>
                              <input type="text" name="director" id="director" placeholder="Nhập giám đốc phim"
                                     className="w-full rounded-lg border border-gray-300 mr-2 px-3 py-1"/>
                          </div>
                      </div>

                      <div className="grid grid-cols-4 gap-5">
                          <div className="flex-col justify-center items-center">
                              <label className="font-medium text-[14px]" htmlFor="date">Ngày phát hành:</label>
                              <input type="date" name="date" id="date"
                                     className="w-full rounded-lg border border-gray-300 mr-2 px-3 py-1"/>
                          </div>
                          <div className="flex flex-col">
                              <label className="font-medium text-[14px]" htmlFor="status">Trạng thái phim:</label>
                              <select name="status" id="status" className="w-full rounded-lg border border-gray-300 mr-2 py-1 text-center">
                                  <option value="">--Chọn loại phim--</option>
                                  <option value="">acb</option>
                              </select>
                          </div>
                          <div className="flex-col justify-center items-center col-span-2">
                              <label className="font-medium text-[14px]" htmlFor="content">Nội dung:</label>
                              <textarea name="content" id="content"cols="10" rows="10"
                                        className="w-full h-10 rounded-lg border border-gray-300 mr-2 px-1 py-1 pl-2"></textarea>
                          </div>
                      </div>
                      <button className="bg-rose-500 text-cyan-50 px-5 py-1.5 ml-2 rounded-lg mt-2" type="submit">Tìm kiếm</button>
                  </form>
              </div>
              {/*Danh sách*/}
              <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-20 px-8">
                  <div className="relative flex justify-between items-center bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800
                      text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 p-6">
                      <h5 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-relaxed text-white">Danh sách phim</h5>
                      <button className="inline-block bg-gradient-to-tr from-green-500 to-green-300 text-white px-5 py-2 rounded-lg mt-2" type="submit">Thêm mới</button>
                  </div>
                  <div className="p-6 px-0 pt-0 pb-2 space-y-6">
                      <table className="w-full min-w-[640px] table-auto">
                          <tr className="text-left">
                              <th className="py-3 px-5 border-b border-blue-gray-50">Tên phim</th>
                              <th className="py-3 px-5 border-b border-blue-gray-50">Loại phim</th>
                              <th className="py-3 px-5 border-b border-blue-gray-50">Trạng thái</th>
                              <th className="py-3 px-5 border-b border-blue-gray-50">Diễn viên</th>
                              <th className="py-3 px-5 border-b border-blue-gray-50">Ngày phát hành</th>
                              <th className="py-3 px-5 border-b border-blue-gray-50">Chức năng</th>
                          </tr>
                          <tr>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <div className="flex items-center gap-4">
                                      <img src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg" alt=""
                                           className="w-9 h-9 rounded-md ml-4"/>
                                      <p className="font-medium">Iron Man</p>
                                  </div>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <div className="relative grid items-center font-sans uppercase select-none bg-gradient-to-tr from-cyan-500 to-cyan-300 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
                                      <span>Hài</span>
                                  </div>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <div className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
                                      <span>Online</span>
                                  </div>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <p className="text-[14px] font-semibold">Trấn Thành</p>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <p className="text-[14px] font-semibold">22/10/2024</p>
                              </td>
                              <td className="flex space-x-4 py-3 px-5 border-b border-blue-gray-50">
                                  <a href="">
                                          <span className="inline-flex justify-center items-center size-[36px] rounded-full border-4 border-blue-100 bg-blue-200 text-blue-800 relative bottom-1">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                                   stroke="currentColor"
                                                   className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                              </svg>
                                          </span>
                                  </a>
                                  <a href="">
                                          <span className="inline-flex justify-center items-center size-[36px] rounded-full border-4 border-red-100 bg-red-200 text-red-800 relative bottom-1">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                   strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                              </svg>
                                          </span>
                                  </a>
                              </td>
                          </tr>


                          <tr>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <div className="flex items-center gap-4">
                                      <img src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg" alt=""
                                           className="w-9 h-9 rounded-md ml-4"/>
                                      <p className="font-medium">Iron Man</p>
                                  </div>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <div className="relative grid items-center font-sans uppercase select-none bg-gradient-to-tr from-cyan-500 to-cyan-300 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
                                      <span>Hài</span>
                                  </div>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <div className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
                                      <span>Online</span>
                                  </div>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <p className="text-[14px] font-semibold">Trấn Thành</p>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <p className="text-[14px] font-semibold">22/10/2024</p>
                              </td>
                              <td className="flex space-x-4 py-3 px-5 border-b border-blue-gray-50">
                                  <a href="">
                                          <span className="inline-flex justify-center items-center size-[36px] rounded-full border-4 border-blue-100 bg-blue-200 text-blue-800 relative bottom-1">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                                   stroke="currentColor"
                                                   className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                              </svg>
                                          </span>
                                  </a>
                                  <a href="">
                                          <span className="inline-flex justify-center items-center size-[36px] rounded-full border-4 border-red-100 bg-red-200 text-red-800 relative bottom-1">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                   strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                              </svg>
                                          </span>
                                  </a>
                              </td>
                          </tr>

                          <tr>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <div className="flex items-center gap-4">
                                      <img src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg" alt=""
                                           className="w-9 h-9 rounded-md ml-4"/>
                                      <p className="font-medium">Iron Man</p>
                                  </div>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <div className="relative grid items-center font-sans uppercase select-none bg-gradient-to-tr from-cyan-500 to-cyan-300 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
                                      <span>Hài</span>
                                  </div>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <div className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
                                      <span>Online</span>
                                  </div>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <p className="text-[14px] font-semibold">Trấn Thành</p>
                              </td>
                              <td className="py-3 px-5 border-b border-blue-gray-50">
                                  <p className="text-[14px] font-semibold">22/10/2024</p>
                              </td>
                              <td className="flex space-x-4 py-3 px-5 border-b border-blue-gray-50">
                                  <a href="">
                                          <span className="inline-flex justify-center items-center size-[36px] rounded-full border-4 border-blue-100 bg-blue-200 text-blue-800 relative bottom-1">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                                   stroke="currentColor"
                                                   className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                              </svg>
                                          </span>
                                  </a>
                                  <a href="">
                                      <span className="inline-flex justify-center items-center size-[36px] rounded-full border-4 border-red-100 bg-red-200 text-red-800 relative bottom-1">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                               strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                          </svg>
                                      </span>
                                  </a>
                              </td>
                          </tr>
                      </table>
                  </div>
              </div>
      </div>
</div>
}