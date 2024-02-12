import React from "react";
import { formatDate } from "../../utils/FormateDate"; // Corrected the import statement

const DoctorAbout = (name, about, qualifications, experiences) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Terra Sarr
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          hendrerit ullamcorper lacus in sollicitudin. Cras sollicitudin, risus
          sit amet accumsan placerat, enim justo accumsan justo, eget finibus
          est nulla eget tortor. Mauris suscipit magna in erat maximus, quis
          sollicitudin diam suscipit. Vivamus sit amet iaculis tortor.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("2021-08-20")} - {formatDate("2021-08-20")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PHD in surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Le Dantec hospital, Dakar
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("2019-02-28")} - {formatDate("2019-02-28")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PHD in surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Le Dantec hospital, Dakar
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("2019-02-28")} - {formatDate("2019-02-28")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
              Le Dantec hospital, Dakar
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("2019-02-28")} - {formatDate("2019-02-28")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
              Le Dantec hospital, Dakar
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
