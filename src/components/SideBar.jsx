import {
  IoMenu,
  IoAppsOutline,
  IoApps,
  IoPodiumSharp,
  IoClipboardOutline,
  IoCalculator,
  IoBusinessOutline,
  IoPeopleSharp,
} from "react-icons/io5";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="navbar container px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <label htmlFor="my-drawer">
              <IoMenu className="text-xl cursor-pointer" />
            </label>
          </div>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay lg:hidden"
                id="drawer-overlay-transparent"
              ></label>
              <ul className="menu text-base-content min-h-full w-80 p-4 bg-blue-700">
                {/* Sidebar content here */}
                <li className="text-white">
                  <ul className="menu p-2">
                    <li className="mt-6">
                      <Link to={"/"}>
                        <a className="text-lg text-lime-300">Dashboard</a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <a className="text-sm">
                        <IoApps />
                        <Link to={"/halaman-kriteria"}>Data Kriteria</Link>
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-sm">
                        <IoAppsOutline /> Data Sub Kriteria
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-sm">
                        <IoPodiumSharp /> Data Alternatif
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-sm">
                        <IoClipboardOutline /> Data Penilaian
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-sm">
                        <IoCalculator /> Data Perhitungan
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-sm">
                        <IoBusinessOutline /> Data Hasil Akhir
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-sm">
                        <IoPeopleSharp /> Data User
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default SideBar;
