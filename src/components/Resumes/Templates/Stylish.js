import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Stylish = ({ componentRef, filter = null }) => {
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
      className="w-a4W  mx-auto h-a4H my-5 relative  bg-zinc-800"
    >
      

      <div className="flex px-5">
        <div className="flex-col mt-[5%] py-3 pl-1 w-[40%] bg-white rounded-xl ">
          {/* image */}
          {profile && (
            <div className=" flex text-black   justify-around ">
              <img
                src={profile.image}
                alt=""
                className="w-[60%] h-[50%] rounded-full mb-3"
              />
            </div>
          )}
          {/* name */}
          {profile && (
            <div className="flex-col bg-zinc-200 py-2">
              <span className=" text-[20px] font-extrabold pl-3 tracking-wide font-serif ">
                {profile.firstName} {profile.lastName}
              </span>
              <p className="  text-[16px] pl-3 tracking-wider font-thin ">
                {profile.role}
              </p>
            </div>
          )}
          {/* network */}
          {profile && (
            <div className="py-1 px-2 text-black pt-2">
              <p className="text-[16px] font-bold tracking-wider heading font-serif px-4 py-2">
                NETWORK
              </p>

              <div className="text-[14px] px-2">
                <div className="px-2">
                  <p>{profile.phone}</p>
                  <p> {profile.email}</p>
                </div>
              </div>
            </div>
          )}
          {/* skills */}
          {skills?.filter((skill) => skill?.enabled).length > 0 && (
            <div className="py-1 px-2 text-black">
              <p className="text-[16px] font-bold tracking-wider heading font-serif px-4 py-2">
                SKILLS
              </p>
              {skills.map((item) => (
                 <>
                 {item.enabled == true && (
                <div className="text-[14px] px-2">
                  <span className="">
                    <li>
                      {item.name} - {item.level}
                    </li>
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
            <div className="py-1 px-2 text-black">
              <p className="text-[16px] font-bold tracking-wider heading font-serif px-4 py-2">
                LANGUAGES
              </p>
              {languages.map((item) => (
                <>
                {item.enabled == true && (
                <div className="text-[14px] px-2">
                  <li>
                    {item.name} : {item.fluency}
                  </li>
                  <p>{item.enabled}</p>
                </div>
                )}
                </>
              ))}
            </div>
             )}
             </div>
          )}
          {/* hobbies */}
          {hobbies?.filter((hobbie) => hobbie?.enabled).length > 0 && (
            <div>
              {hobbies.length != 0 && (
                <div className="py-1 px-2 text-black">
                  <p className="text-[16px] font-bold tracking-wider heading font-serif px-4 py-2">
                    HOBBIES
                  </p>
                  {hobbies.map((item) => (
                    <>
                      {item.enabled && (
                        <div key={item.name} className="text-[14px] px-2">
                          <li>{item.name}</li>
                          <p>{item.enabled}</p>
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
                <div className="py-1 px-2 text-black">
                  <p className="text-[16px] font-bold tracking-wider heading font-serif px-4 py-2">
                    AWARDS
                  </p>
                  {awards.map((item) => (
                    <>
                    {item.enabled && (
                    <div className="text-[14px] px-2 font-semibold ">
                      <li>
                        {item.name}
                        <p className="px-4 font-mono text-[12px] font-normal">
                          [{item.date.slice(0, 4)}]
                        </p>
                        <p className="px-4 font-normal">{item.awarder}</p>

                        <p>{item.summary.enabled}</p>
                        <p>{item.enabled}</p>
                      </li>
                    </div>
                    )}
                    </>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex w-[60%] mt-[4%] ml-3 mr-3">
          <div className="flex-col">
            {/* profile */}
            {objective && (
              <div>
                {objective != 0 && (
                  <div>
                    <p className=" text-white font-semibold text-[16px] heading tracking-wider  p-1  mt-3 ">
                      PROFILE
                    </p>
                    <hr></hr>
                    <p className="text-[12px] text-white p-1 pt-4">
                      {objective}
                    </p>
                  </div>
                )}
              </div>
            )}
            {/* education */}
            {education?.filter((education) => education?.enabled).length > 0 && (
              <div>
                {education.length != 0 && (
                  <div className="p-1">
                    <p className=" text-white font-semibold text-[16px] heading tracking-wider  p-1  mt-3 ">
                      EDUCATION
                    </p>
                    <hr></hr>
                    {education.map((item) => (
                      <>
                      {item.enabled && (
                      <div className="text-[12px] p-2 text-white">
                        <p className="font-semibold text-[14px] relative text-white">
                          {item.institution}
                          <span className="text-white absolute text-[11px] right-0">
                            [ {item.startDate.slice(0, 4)} ] - [{" "}
                            {item.endDate.slice(0, 4)} ]
                          </span>
                        </p>
                        <p className="text-white">{item.fieldOfStudy}</p>
                        <p className="text-white">
                          {item.typeOfDegree} - {item.gpa}
                        </p>
                        <p className="text-white">{item.summary.enabled}</p>
                        <p className="text-white">{item.enabled}</p>
                      </div>
                      )}
                      </>
                    ))}
                  </div>
                )}
              </div>
            )}
            {/* Internship */}
            {work?.filter((work) => work?.enabled).length > 0 && (
              <div>
                {work.length != 0 && (
                  <div className="p-1">
                    <p className="text-white font-semibold text-[16px] heading tracking-wider p-1 mt-3 ">
                      INTERNSHIP
                    </p>
                    <hr></hr>
                    {work.map((item) => (
                      <>
                      {item.enabled && (
                      <div className="text-[12px] p-2 text-white">
                        <p className="text-white text-[14px] relative ">
                          <p href={item.website}>
                            {item.company} - {item.designation}
                          </p>
                          <span className="absolute right-0 text-[10px] top-1 text-white">
                            [{item.from.slice(0, 10)}] - [{item.to.slice(0, 10)}
                            ]
                          </span>
                        </p>

                        <p className="px-4  font-normal"></p>
                        <p className="text-[12px] text-white">
                          {item.summary.data}
                        </p>
                        <p>{item.summary.enabled}</p>
                        <p>{item.enabled}</p>
                      </div>
                      )}</>
                    ))}
                  </div>
                )}
              </div>
            )}
            {/* projects */}
            {projects?.filter((project) => project?.enabled).length > 0 && (
              <div>
                {projects.length != 0 && (
                  <div className="p-1">
                    <p className=" text-white font-semibold text-[16px] heading tracking-wider  p-1  mt-3 ">
                      PROJECTS
                    </p>
                    <hr></hr>
                    {projects.map((item) => (
                      <>
                      {item.enabled && (
                      <div className="text-[12px] p-2 text-white">
                        <Link href={item.website}>
                          <p className="relative font-bold text-white tracking-wider">
                            {item.name}
                            <span className="absolute right-0 text-[10px] text-white">
                              [{item.from.slice(0, 10)}] - [
                              {item.to.slice(0, 10)}]
                            </span>
                          </p>
                        </Link>

                        <p className="text-[12px] text-white">
                          {item.summary.data}
                        </p>
                        <p>{item.summary.enabled}</p>
                        <p>{item.enabled}</p>
                      </div>
                      )}</>
                    ))}
                  </div>
                )}
              </div>
            )}
            {/* certification */}
            {certifications?.filter((certification) => certification?.enabled).length > 0 && (
              <div>
                {certifications.length != 0 && (
                  <div className="p-1">
                    <p className=" text-white font-semibold text-[16px] heading tracking-wider  p-1  mt-3 ">
                      CERTIFICATION
                    </p>
                    <hr></hr>
                    {certifications.map((item) => (
                      <>
                      {item.enabled && (
                      <div className="text-[12px] p-2 text-white">
                        <p className="font-semibold  text-white">
                          {item.title}
                        </p>

                        <p className=" text-white relative">
                          {item.issuer}
                          <span className="absolute right-0 text-[12px] text-white">
                            [{item.date}]
                          </span>
                        </p>
                        <p className="text-[12px] text-white">
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
