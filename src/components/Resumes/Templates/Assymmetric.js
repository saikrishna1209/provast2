import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Assymmetric = ({ componentRef, filter = null }) => {
  const {
    profile,
    social,
    objective,
    education,
    awards,
    certifications,
    projects,
    work,
    skills,
    hobbies,
    languages,
    layout,
  } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-lg text-center capitalize font-bold text-gray-700 mb-2 pb-1";
  return (
    <div
      ref={componentRef}
      className="w-a4W bg-white mx-auto h-a4H my-5 relative"
    >
      <div className="flex gap-3 m-7 p-4">
        <div className="w-[35%] pl-3">
          {profile && (
            <>
              <img
                src={profile.image}
                alt=""
                className="w-[35mm] h-[30mm] rounded-full my-2"
              />
            </>
          )}

          {/* network */}
          {profile && (
            <div className="py-3">
              <h1 className="text-[16px] font-bold">NETWORK</h1>
              <div className="pl-2 text-[12px]">
                <p className="">{profile.phone}</p>
                <p className="">{profile.email}</p>
              </div>
            </div>
          )}

          {/* hobbies */}
          {hobbies?.filter((hobbie) => hobbie?.enabled).length > 0 && (
            <div>
              {hobbies.length != 0 && (
                <div className="py-1">
                  <p className="text-[16px] font-bold">HOBBIES</p>
                  {hobbies.map((item) => (
                    <>
                      {item.enabled && (
                        <div key={item.name} className="text-[12px]">
                          <p>{item.name}</p>
                          <p>{item.enabled}</p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* skills */}
          {skills?.filter((skill) => skill?.enabled).length > 0 && (
            <div className="py-1">
              <p className="text-[16px] font-bold">SKILLS</p>
              {skills.map((item) => (
                <>
                  {item.enabled == true && (
                    <div key={item.name}>
                      <span className="text-[12px]">
                        {item.name} - {item.level}
                      </span>
                      <p>{item.enabled}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          )}
          {/* languages */}
          {languages?.filter((language) => language?.enabled).length > 0 && (
            <div>
              {languages.length != 0 && (
                <div className="py-1">
                  <p className="text-[16px] font-bold">LANGUAGES</p>
                  {languages.length != 0 &&
                    languages.filter((languages) => languages.enabled).length >
                      0 && (
                      <div className="">
                        {languages.map((item) => (
                          <>
                            {item.enabled && (
                              <div key={item.name} className="pt-2">
                                <p className="text-[12px]">
                                  {item.name} - {item.fluency}
                                </p>
                                <p>{item.enabled}</p>
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    )}
                </div>
              )}
            </div>
          )}

          {/* internship */}
          {work?.filter((work) => work?.enabled).length > 0 && (
            <div>
              {work.length != 0 && (
                <div className="py-1">
                  <p className="text-[16px] font-bold pb-1">INTERNSHIP</p>
                  {work.map((item) => (
                    <>
                      {item.enabled && (
                        <div key={item.company} className="">
                          <li className="relative font-bold text-gray-800 text-[14px] tracking-wider">
                            {item.company}
                          </li>
                          <p>
                            <span className=" text-[12px]">
                              [ {item.from.slice(0, 10)}] - [
                              {item.to.slice(0, 10)}]
                            </span>
                          </p>

                          <p className="text-[12px]">{item.designation}</p>
                          <p className="pl-1 text-[12px]">
                            {item.summary.data}
                          </p>
                          <p>{item.summary.enabled}</p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* awards */}
          {awards?.filter((award) => award?.enabled).length > 0 && (
            <div>
              {awards.length != 0 && (
                <div className="pb-1">
                  <p className="text-black font-bold tracking-wider  px-2 py-1 ">
                    AWARDS:
                  </p>
                  {awards.map((item) => (
                    <>
                      {item.enabled && (
                        <div key={item.name} className="text-[12px]">
                          <li className="font-bold text-gray-700">
                            {item.name}
                          </li>
                          <span className="pl-2">
                            [{item.date.slice(0, 4)}]
                          </span>
                          <p className="pl-2">{item.awarder}</p>
                          <p className="pl-2 text-[12px]">
                            {item.summary.data}
                          </p>
                          <p>{item.summary.enabled}</p>
                          <p>{item.enabled}</p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="w-[65%] pr-4 pl-3 ">
          {profile && (
            <div className="py-4">
              <p className="font-bold text-center text-[20px]  font-sans tracking-widest ">
                {profile.firstName} {profile.lastName}
              </p>
              <p className="text-black font-thin text-[16px] tracking-widest text-center  ">
                {profile.role}
              </p>
            </div>
          )}
          <div className=" bg-gray-200 rounded-xl p-1 my-2">
            {objective && (
              <>
                {objective != 0 && (
                  <>
                    <p className=" text-black font-semibold text-[16px] px-3 py-1 tracking-wid  ">
                      PROFILE
                    </p>
                    <p className="text-[12px] text-black px-2 pb-2 ">
                      {objective}
                    </p>
                  </>
                )}
              </>
            )}
          </div>

          {/* education */}
          {education?.filter((education) => education?.enabled).length > 0 && (
            <div>
              {education.length != 0 && (
                <div className="bg-gray-200 rounded-xl p-1 my-2">
                  <p className="text-black font-semibold text-[16px] px-3 py-1 tracking-wid">
                    EDUCATION
                  </p>
                  {education.map((item) => (
                    <>
                      {item.enabled && (
                        <div
                          key={item.institution}
                          className="text-[12px] p-1 pl-3"
                        >
                          <p className="relative font-bold text-gray-800 text-[14px]">
                            {item.institution}
                            <span className="absolute right-1 font-normal text-[12px]">
                              [{item.startDate.slice(0, 4)}] - [
                              {item.endDate.slice(0, 4)}]
                            </span>
                          </p>
                          <p className="">{item.fieldOfStudy}</p>

                          <p>
                            {item.typeOfDegree} - {item.gpa}
                          </p>
                          <p>{item.summary.enabled}</p>
                          <p>{item.enabled}</p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* project */}
          {projects?.filter((project) => project?.enabled).length > 0 && (
            <div>
              {projects.length != 0 && (
                <div className="bg-gray-200 rounded-xl p-1 my-2">
                  <p className="text-black font-semibold text-[16px] px-3 py-1 tracking-wider">
                    PROJECTS
                  </p>

                  {projects.map((item) => (
                    <>
                      {item.enabled && (
                        <div key={item.name} className=" text-black pl-3 ">
                          <p className="font-bold relative text-gray-800 text-[14px]  tracking-wider">
                            {item.name}

                            <span className="absolute right-2 font-normal text-[10px]">
                              [{item.from.slice(0, 7)} ] - [{" "}
                              {item.to.slice(0, 7)} ]
                            </span>
                          </p>
                          <p className="text-[12px] pr-1">
                            {item.summary.data}
                          </p>
                          <p>{item.summary.enabled}</p>
                          <p>{item.enabled}</p>
                          <p className="p-2"> </p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          )}

          {certifications?.filter((certification) => certification?.enabled)
            .length > 0 && (
            <div>
              {certifications.length != 0 && (
                <div className="bg-gray-200 rounded-xl p-1 my-2 pb-2 ">
                  <p className=" text-black font-semibold text-[16px] px-3 py-1 tracking-wider ">
                    CERTIFICATION
                  </p>

                  {certifications.map((item) => (
                    <>
                      {item.enabled && (
                        <div key={item.title} className="pt-4 text-black mx-3 ">
                          <p className="font-bold  text-gray-800 text-[14px]  tracking-wider">
                            {item.title}
                          </p>
                          <p className="font-bold relative text-gray-600 text-[13px]  tracking-wider">
                            {item.issuer}
                            <span className="absolute right-0 font-normal text-[10px]">
                              [ {item.date.slice(0, 10)} ]
                            </span>
                          </p>
                          <p className="text-[12px] pr-1">
                            {item.summary.data}
                          </p>
                          <p>{item.summary.enabled}</p>
                          <p>{item.enabled}</p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <style jsx> 
    {`
      .heading{
        color:rgba(${r},${g},${b},${a})
      }
    
    `}
    </style>
    </div>
    // </div>
  );
};
