import {
  IoPodiumSharp,
  IoCalculator,
  IoAppsSharp,
  IoBusinessOutline,
} from "react-icons/io5";
import Button from "./Button";

function DashboardCard() {
  return (
    <>
      <div className="gap-16 mt-16 flex justify-center ml-72...">
        <div className="ml-72">
          <div className="card custome-card w-96 shadow-xl">
            <div className="card-body">
              <IoPodiumSharp className="size-10" />
              <p>Data Alternatif</p>
              <div className="card-actions justify-end">
                <Button />
              </div>
            </div>
          </div>
          <div className="card custome-card mt-10 w-96 shadow-xl">
            <div className="card-body">
              <IoAppsSharp className="size-10" />
              <p>Data Kriteria</p>
              <div className="card-actions justify-end">
                <Button />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card custome-card w-96 shadow-xl">
            <div className="card-body">
              <IoCalculator className="size-10" />
              <p>Data Perhitungan</p>
              <div className="card-actions justify-end">
                <Button />
              </div>
            </div>
          </div>
          <div className="card custome-card mt-10 w-96 shadow-xl">
            <div className="card-body">
              <IoBusinessOutline className="size-10" />
              <p>Data Hasil Akhir</p>
              <div className="card-actions justify-end">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCard;
