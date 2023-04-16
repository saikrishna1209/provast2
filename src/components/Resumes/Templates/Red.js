import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";

import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";

export const Red = ({ componentRef }) => {
  const {
    profile,
    social,
    objective,
    education,
    projects,
    skills,
    awards,
    hobbies,
    work,
    certifications,
    languages,
    layout,
  } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  return (
    <>
      <div
        ref={componentRef}
        style={{ fontFamily: layout?.font }}
        className={`w-a4W bg-white mx-auto h-a4H my-5`}
      >
        <div className="grid grid-cols-3">
          <div
            className=" bg-red-700 h-[297mm]"
            style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})` }}
          >
            <div className="ml-8 bg-gray-200 h-[297mm] p-4">
              <div>
                <img
                  //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                  src={profile?.image}
                  alt="ProfilePhoto"
                />
                <h1 className="text-red-700 text-[16px] font-semibold mt-3 mb-1 heading">
                  PERSONAL DETAILS
                </h1>
                <div>
                  <h1 className="text-[12px] font-semibold ">
                    {profile?.firstName.toUpperCase()}{" "}
                    {profile?.lastName.toUpperCase()}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[12px]  font-semibold m-0.5">
                    {profile?.email}
                  </h1>
                </div>
                <div>
                  <span className="text-[12px]  font-semibold m-0.5">
                    {profile?.phone}
                  </span>
                </div>
                {social?.filter((social) => social?.enabled)?.length > 0 && (
                  <div>
                    <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1 heading">
                      SOCIAL
                    </h1>
                    {social
                      ?.filter((social) => social?.enabled === true)
                      .map((item) => (
                        <div className="text-[12px] font-semibold m-0.5">
                          <a href="{item.url}">{item.network}</a>
                        </div>
                      ))}
                  </div>
                )}
              </div>
              {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
                <div>
                  <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1 heading">
                    SKILLS
                  </h1>
                  {skills
                    ?.filter((skill) => skill?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="text-[12px] m-0.5">
                          <span className="font-bold">{item.name}</span> -{" "}
                          {item.level}
                        </h1>
                      </div>
                    ))}
                </div>
              )}
              {awards?.filter((awa) => awa?.enabled)?.length > 0 && (
                <div>
                  <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1 heading">
                    AWARDS
                  </h1>
                  {awards
                    ?.filter((awa) => awa?.enabled === true)
                    .map((item) => (
                      <div className="py-1">
                        <h1 className="text-[13px] font-semibold relative m-0.5">
                          {item.name} -{" "}
                          <span className="font-normal text-[12px]">
                            {item.awarder}
                          </span>
                        </h1>
                        <h1 className="font-normal text-[12px] mx-0.5">
                          {item.summary.data}
                        </h1>
                      </div>
                    ))}
                </div>
              )}
              {languages?.filter((lang) => lang?.enabled)?.length > 0 && (
                <div>
                  <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1 heading">
                    LANGUAGES
                  </h1>
                  {languages
                    ?.filter((lang) => lang?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="text-[12px] font-semibold m-0.5">
                          <span className="font-bold">{item.name}</span>
                        </h1>
                      </div>
                    ))}
                </div>
              )}
              {hobbies?.filter((hob) => hob?.enabled)?.length > 0 && (
                <div>
                  <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1 heading">
                    HOBBIES
                  </h1>
                  {hobbies
                    ?.filter((hob) => hob?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="text-[12px] font-semibold m-0.5">
                          {item.name}
                        </h1>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2 p-6">
            <h1 className="text-red-700 text-[30px] text-semibold heading">
              {profile?.firstName} {profile?.lastName}
            </h1>
            {objective && (
              <div>
                <h1 className="text-red-700 text-[16px] font-semibold mt-4 heading">
                  PROFILE
                </h1>
                <p className="text-[12px]">{objective}</p>
              </div>
            )}
            {work?.filter((work) => work?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-red-700 text-[16px] font-semibold mt-3 mb-1 heading">
                  INTERNSHIPS
                </h1>
                {work
                  ?.filter((work) => work?.enabled === true)
                  .map((item) => (
                    <div className="py-1">
                      <h1 className="text-[12px] font-bold relative">
                        {item.company}
                        <span className="text-[12px] absolute right-0">
                          {item.from.slice(0, 10)} - {item.to.slice(0, 10)}
                        </span>
                      </h1>
                      <p className="text-[12px] font-semibold">
                        {item.designation}
                      </p>
                      <p className="text-[12px]">{item.summary.data}</p>
                    </div>
                  ))}
              </div>
            )}
            {education?.filter((edu) => edu?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-red-700 text-[16px] font-semibold mt-3 mb-1 heading">
                  EDUCATION
                </h1>
                {education
                  ?.filter((edu) => edu?.enabled === true)
                  .map((item) => (
                    <div className="py-1">
                      <h1 className="text-[13px] font-bold relative">
                        {item.institution}
                        <span className="text-[12px] absolute right-0">
                          {item.startDate.slice(0, 4)} -{" "}
                          {item.endDate.slice(0, 4)}
                        </span>
                      </h1>
                      <p className="text-[12px] font-semibold">
                        {item.fieldOfStudy}
                      </p>
                      <p className="text-[12px]">{item.summary.data}</p>
                    </div>
                  ))}
              </div>
            )}
            {projects?.filter((pro) => pro?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-red-700 text-[16px] font-semibold mt-3 mb-1 heading">
                  PROJECTS
                </h1>
                {projects
                  ?.filter((pro) => pro?.enabled === true)
                  .map((item) => (
                    <div className="py-1">
                      <h1 className="text-[13px] font-bold relative">
                        {item.name}
                        <span className="text-[12px] absolute right-0">
                          {item.from.slice(0, 10)} - {item.to.slice(0, 10)}
                        </span>
                      </h1>
                      <p className="text-[12px] font-semibold">
                        {item.website}
                      </p>
                      <p className="text-[12px]">{item.summary.data}</p>
                    </div>
                  ))}
              </div>
            )}
            {certifications?.filter((cer) => cer?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-red-700 text-[16px] font-semibold mt-3 mb-1 heading">
                  CERTIFICATIONS
                </h1>
                {certifications
                  ?.filter((cer) => cer?.enabled === true)
                  .map((item) => (
                    <div className="py-1">
                      <h1 className="text-[13px] font-bold relative">
                        {item.title}
                        <span className="text-[12px] absolute right-0">
                          {item.date}
                        </span>
                      </h1>
                      <p className="text-[12px] font-semibold">{item.issuer}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .heading {
            color: rgba(${r}, ${g}, ${b}, ${a});
          }
        `}
      </style>
    </>
  );
};
