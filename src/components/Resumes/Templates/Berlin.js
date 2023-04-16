import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";

import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";

export const Berlin = ({ componentRef }) => {
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
        className={`w-a4W bg-white mx-auto h-a4H my-5 p-8`}
      >
        <div className="h-auto pb-8 border-b-4">
          {profile && (
            <div>
              <h1 className="text-[25px] font-sans font-semibold">
                {profile?.firstName.toUpperCase()}{" "}
                {profile?.lastName.toUpperCase()}
              </h1>
              <h1 className="text-[16px] text-gray-500 font-semibold mt-2">
                {profile?.role}
              </h1>
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 mt-6">
          <div className="border-r-4 h-[245mm] pr-8">
            <div>
              <h1 className="text-[16px] font-semibold">DETAILS</h1>
              <hr className="w-[15%] h-1 bg-black mb-2"></hr>
              {profile?.dob && (
                <h1 className="text-[12px] font-semibold pt-1">
                  DOB
                  <span className="text-[12px] text-gray-600">
                    {" : "}
                    {profile?.dob}
                  </span>
                </h1>
              )}
              <h1 className="text-[12px] font-semibold pt-1">
                PHONE
                <span className="text-[12px] text-gray-600">
                  {" : "}
                  {profile?.phone}
                </span>
              </h1>
              <h1 className="text-[12px] font-semibold pt-1">
                EMAIL
                <span className="text-[12px] text-gray-600">
                  {" : "}
                  {profile?.email}
                </span>
              </h1>
              {social
                ?.filter((social) => social.enabled === true)
                .map((item) => (
                  <div className="text-[12px] font-semibold pt-1">
                    <a href="{item.url}">{item.network}</a>
                  </div>
                ))}
            </div>
            {education?.filter((edu) => edu?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-[16px] font-semibold pt-4">EDUCATION</h1>
                <hr className="w-[15%] h-1 bg-black"></hr>
                {education
                  ?.filter((edu) => edu?.enabled === true)
                  .map((item) => (
                    <div className="mt-1">
                      <span className="text-[13px] font-bold">
                        {item.institution}
                      </span>
                      <p className="text-[12px]  font-semibold text-gray-600">
                        {item.fieldOfStudy}{" "}
                        <span className="text-[12px] font-semibold text-gray-600">
                          ({item.startDate.slice(0, 4)} -
                          {item.endDate.slice(0, 4)})
                        </span>
                      </p>
                      <h1 className="text-[12px]">{item.summary.data}</h1>
                    </div>
                  ))}
              </div>
            )}
            {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
              <div className="">
                <h1 className="text-[16px] font-semibold pt-4">SKILLS</h1>
                <hr className="w-[15%] h-1 bg-black"></hr>
                {skills
                  ?.filter((skill) => skill?.enabled === true)
                  .map((item) => (
                    <div className="mt-1" key={item?._id}>
                      <h1 className="text-[12px] text-black pt-0.5 flex justify-between">
                        <div className="font-semibold">{item.name} </div>
                        <div>{item.level}</div>
                      </h1>
                    </div>
                  ))}
              </div>
            )}
            {awards?.filter((award) => award?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-[16px] font-semibold pt-4">AWARDS</h1>
                <hr className="w-[15%] h-1 bg-black"></hr>
                {awards
                  ?.filter((award) => award?.enabled === true)
                  .map((item) => (
                    <div className="mt-1">
                      <span className="text-[13px] font-bold">{item.name}</span>
                      <p className="text-[12px] pt-1 font-semibold text-gray-600">
                        {item.awarder}{" "}
                        <span className="text-[12px] font-semibold text-gray-600">
                          ({item.date.slice(0, 4)})
                        </span>
                      </p>
                    </div>
                  ))}
              </div>
            )}
            {hobbies?.filter((hobby) => hobby?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-[16px] font-semibold pt-4">HOBBIES</h1>
                <hr className="w-[15%] h-1 bg-black"></hr>
                {hobbies
                  ?.filter((hobby) => hobby?.enabled === true)
                  .map((item) => (
                    <div className="mt-1">
                      <h1 className="text-[12px] font-semibold text-black pt-1">
                        {item.name}
                      </h1>
                    </div>
                  ))}
              </div>
            )}
            {languages?.filter((lang) => lang?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-[16px] font-semibold pt-4">LANGUAGES</h1>
                <hr className="w-[15%] h-1 bg-black"></hr>
                {languages
                  ?.filter((lang) => lang?.enabled === true)
                  .map((item) => (
                    <div className="mt-1">
                      <h1 className="text-[12px] font-semibold text-black pt-1">
                        {item.name}
                      </h1>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="col-span-2 pl-10">
            {objective && (
              <div>
                <h1 className="text-[16px] font-semibold">PROFILE</h1>
                <hr className="w-[7%] h-1 bg-black"></hr>
                <p className="text-[13px] text-black py-3">{objective}</p>
              </div>
            )}
            {work?.filter((work) => work?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-[16px] font-semibold pt-3 border-t-2">
                  EMPLOYMENT HISTORY
                </h1>
                <hr className="w-[7%] h-1 bg-black mb-2"></hr>
                {work
                  ?.filter((work) => work?.enabled === true)
                  .map((item) => (
                    <div className="pb-3">
                      <div className="flex justify-between">
                        <span className="text-[13px] font-bold mt-1">
                          {item.company}
                          {" - "}
                          <span className="text-[12px] font-bold mt-1">
                            {item.designation}
                          </span>
                        </span>
                        <p className="text-[12px] py-1 font-semibold text-gray-600">
                          ({item.from.slice(0, 4)} - {item.to.slice(0, 4)})
                        </p>
                      </div>
                      <p className="text-[12px] text-gray-600">
                        {item.summary.data}
                      </p>
                    </div>
                  ))}
              </div>
            )}
            {projects?.filter((project) => project?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-[16px] font-semibold pt-3 border-t-2">
                  PROJECTS
                </h1>
                <hr className="w-[7%] h-1 bg-black mb-2"></hr>
                {projects
                  ?.filter((project) => project?.enabled === true)
                  .map((item) => (
                    <div className="pb-3">
                      <div className="flex justify-between">
                        <div className="text-[13px] font-bold mt-1">
                          <a href="{item.website}">{item.name}</a>
                        </div>
                        <div className="text-[12px] py-1 font-semibold text-gray-600">
                          ({item.from.slice(0, 4)} to {item.to.slice(0, 4)})
                        </div>
                      </div>
                      <p className="text-[12px] text-gray-600">
                        {item.summary.data}
                      </p>
                    </div>
                  ))}
              </div>
            )}
            {certifications?.filter((cer) => cer?.enabled)?.length > 0 && (
              <div>
                <h1 className="text-[16px] font-semibold pt-3 border-t-2">
                  CERTIFICATIONS
                </h1>
                <hr className="w-[7%] h-1 bg-black mb-2"></hr>
                {certifications
                  ?.filter((cer) => cer?.enabled === true)
                  .map((item) => (
                    <div className="pb-2">
                      <div className="flex justify-between">
                        <div className="text-[13px] font-bold mt-1">
                          <a href="{item.website}">{item.title}</a>
                        </div>
                        <div className="text-[12px] py-1 font-semibold text-gray-600">
                          ({item.date.slice(0, 4)})
                        </div>
                      </div>
                      <p className="text-[12px] text-gray-600">
                        {item.summary.data}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
        <style jsx>
          {`
            .heading {
              color: rgba(${r}, ${g}, ${b}, ${a});
            }
          `}
        </style>
      </div>
    </>
  );
};
