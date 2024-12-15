import { IoTrash, IoOpenSharp } from "react-icons/io5";

function TabelKriteria() {
  return (
    <>
      <div className="overflow-x-auto ml-96 mr-40 mt-10">
        <button className="btn btn-primary mb-10 cursor-pointer text-white">
          Add Kriteria
        </button>
        <table className="table table-custom text-center">
          {/* head */}
          <thead className="text-base ">
            <tr className="text-black">
              <th>No</th>
              <th>Kode Kriteria</th>
              <th>Nama Kriteria</th>
              <th>Bobot</th>
              <th>Jenis</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-base">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>C1</td>
              <td>Jarak</td>
              <td>0.3</td>
              <td>Benefit</td>
              <td>
                <div className="flex items-center justify-center gap-2">
                  <span>
                    <IoOpenSharp className="size-5 text-blue-700 cursor-pointer hover:text-blue-500" />
                  </span>
                  <span>
                    <IoTrash className="size-5 text-red-700 cursor-pointer hover:text-red-500" />
                  </span>
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th className="text-center">2</th>
              <td>C2</td>
              <td>Jarak</td>
              <td>0.3</td>
              <td>Benefit</td>
              <td>
                <div className="flex items-center gap-2 justify-center">
                  <span>
                    <IoOpenSharp className="size-5 text-blue-700" />
                  </span>
                  <span>
                    <IoTrash className="size-5 text-blue-700" />
                  </span>
                </div>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="text-center">3</th>
              <td>C3</td>
              <td>Jarak</td>
              <td>0.3</td>
              <td>Benefit</td>
              <td>
                <div className="flex items-center justify-center gap-2">
                  <span>
                    <IoOpenSharp className="size-5 text-blue-700" />
                  </span>
                  <span>
                    <IoTrash className="size-5 text-blue-700" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th className="text-center">4</th>
              <td>C4</td>
              <td>Jarak</td>
              <td>0.3</td>
              <td>Benefit</td>
              <td>
                <div className="flex items-center justify-center gap-2">
                  <span>
                    <IoOpenSharp className="size-5 text-blue-700" />
                  </span>
                  <span>
                    <IoTrash className="size-5 text-blue-700" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th className="text-center">5</th>
              <td>C5</td>
              <td>Jarak</td>
              <td>0.3</td>
              <td>Benefit</td>
              <td>
                <div className="flex items-center justify-center gap-2">
                  <span>
                    <IoOpenSharp className="size-5 text-blue-700" />
                  </span>
                  <span>
                    <IoTrash className="size-5 text-blue-700" />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="join grid grid-cols-2 mt-4 w-72 cursor-pointer">
          <button className="join-item btn btn-outline border-blue-700 hover:bg-blue-700 hover:text-white">
            Previous page
          </button>
          <button className="join-item btn btn-outline border-blue-700 hover:bg-blue-700 hover:text-white">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default TabelKriteria;
