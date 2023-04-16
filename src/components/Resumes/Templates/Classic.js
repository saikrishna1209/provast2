import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Classic = ({ componentRef, filter = null }) => {
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
    <div ref={componentRef} className="w-a4W bg-gray-200 mx-auto h-a4H my-5">
      

      <div className="p-4">
        <div className="space-x-2 m-2 border-separate">
          <div className="flex  border-b-1  bg-white border-solid text-black  ">
            {profile && (
              <>
                <img
                  src={profile.image}
                  alt=""
                  className="rounded-full h-40 py-3 mx-auto"
                />
              </>
            )}
            {profile && (
              <>
                {/* <img
              className="w-[20%] h-[30] p-3 pb-5 pl-7"
              src="https://randomuser.me/api/portraits/women/71.jpg"
            ></img> */}
                {/* personal detail */}

                <div className="m-auto">
                  <p className=" text-center text-black text-4xl tracking-widest font-serif m-4 mt-5 ml-8">
                    { profile.firstName} { profile.lastName}
                  </p>
                  <p className="  text-2xl  text-black font-thin  tracking-wider mb-3 ml-10 ">
                    { profile.role}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="m-2">
          <div className="flex gap-3 ">
            <div className=" min-w-[50%]">
              <div className=" m-4 ">
                {objective && (
                  <>
                    {objective != 0 && (
                      <>
                        <p className="bg-gray-800 tracking-widest  text-white p-1 w-[100%] rounded-md mt-3 text-center heading">
                          PROFILE
                        </p>
                        <p className="text-[12px] p-1 ">{ objective}</p>
                      </>
                    )}
                  </>
                )}
              </div>
              <div>
                {/* <span className=" bg-gray-800 text-white pt-1 p-1 rounded-sm">PERSONAL</span> */}

                {/* HOBBIES */}
                {hobbies?.filter((hobbie) => hobbie?.enabled).length > 0 && (
                  <div>
                    {hobbies.length != 0 && (
                      <div className="m-3">
                        <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center heading">
                          HOBBIES
                        </p>
                        { hobbies.map((item) => (
                          <>
                            {item.enabled && (
                              <div
                                key={item.name}
                                className="pt-1 font-serif text-[12px] pl-4"
                              >
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

                {/* LANGUAGES
                    { languages.length != 0 &&
                       languages.filter((languages) => languages.enabled)
                        .length > 0 && (
                        <div className="m-3">
                          <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center heading">
                            LANGUAGES
                          </p>
                          { languages.map((item) => (
                            <>
                              {item.enabled && (
                                <div key={item.name} className="pt-2 pl-4">
                                  <li className=" text-[12px] text-base font-serif tracking-wide">
                                    {item.name} - {item.fluency}
                                  </li>
                                  <p>{item.enabled}</p>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      )} */}

                {/* EDUCATION */}
                {education?.filter((education) => education?.enabled).length > 0 && (
                  <div>
                    {education.length != 0 && (
                      <div className="p-2 pt-0 ">
                        <p className="bg-gray-800 tracking-widest text-center rounded-md text-white p-1 m-1 heading">
                          EDUCATION
                        </p>

                        { education.map((item) => (
                          <>
                            {item.enabled && (
                              <div
                                key={item.institution}
                                className="text-base pl-4"
                              >
                                <p className="font-semibold font-serif text-[13px]">
                                  {item.institution}
                                  
                                </p>
                                
                                <div className="text-[12px] relative">
                                  <p>{item.fieldOfStudy}
                                  <span className="absolute right-1 text-[10px] text-gray-800 font-semibold">
                                  {" "}
                                  [ {item.startDate.slice(0, 4)} ] - [ {item.endDate.slice(0, 4)} ]
                                </span>
                                  </p>
                                  <p>
                                    {item.typeOfDegree} {item.gpa}
                                  </p>
                                  {/* <p>{item.summary.data}</p>
                                  <p>{item.summary.enabled}</p> */}
                                  <p>{item.enabled}</p>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* SKILLS */}

                {skills?.filter((skill) => skill?.enabled).length > 0 && (
                  <div className="p-2 pt-0 ">
                    <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1 heading">
                      SKILLS
                    </p>
                    { skills.map((item) => (
                      <>
                        {item.enabled && (
                          <div key={item.name} className=" pl-4 font-serif ">
                            <li className="text-[12px] p-1">
                              {item.name} - {item.level}
                            </li>
                            <p>{item.enabled}</p>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                )}
              </div>
              {/* projects */}
              {projects?.filter((project) => project?.enabled).length > 0 && (
                <div>
                  {projects.length != 0 && (
                    <div className="  p-3">
                      <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1 heading">
                        PROJECTS
                      </p>
                      { projects.map((item) => (
                        <>
                          {item.enabled && (
                            <div key={item.name} className="p-1 pl-5 ">
                              <p className="font-bold font-serif text-[14px] ">
                                {item.name}
                              </p>
                              <p className="text-[11px]">[ {item.from.slice(0, 7)} ] - [ {item.to.slice(0, 7)} ]</p>
                              <Link href={`{item.website}$`}>
                                <p className="font-semibold text-[12px] tracking-wider">
                                  {item.website}
                                </p>
                              </Link>
                              <p className="text-[12px]">{item.summary.data}</p>
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
            <div className="  min-w-[50%] ">
              {/* NETWORK */}
              
              <div className="m-4">
              {profile && (
              
                <>
                  <h1 className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md heading">
                    NETWORK
                  </h1>
                  <div className="pl-4 text-[12px]">
                    <p className=" tracking-wider">{ profile.phone}</p>
                    <p className="tracking-wider">{ profile.email}</p>
                  </div>
                </>
                
                )}

                {/* INTERNSHIPS */}

                {work?.filter((work) => work?.enabled).length > 0 && (
                  <div>
                    {work.length != 0 && (
                      <>
                        <p className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md  heading">
                          INTERNSHIPS
                        </p>
                        { work.map((item) => (
                          <>
                            {item.enabled && (
                              <div key={item.company} className="m-2">
                                <Link href={`{item.website}$`}>
                                  <p className="font-bold text-[13px] font-serif tracking-wide relative">
                                    {item.company}
                                    <span className="font-sans text-[10px] top-1 absolute text-gray-700 right-0">
                                    [{item.from.slice(0, 4)}-{item.to.slice(0, 4)}]
                                    </span>
                                  </p>
                                </Link>
                                <p className=" text-[13px] font-semibold">
                                  {item.designation}
                                </p>
                                <p className="text-[12px]">
                                  {item.summary.data}
                                </p>
                                <p className="">{item.summary.enabled}</p>
                              </div>
                            )}
                          </>
                        ))}
                      </>
                    )}
                  </div>
                )}

                <div>
                  {/* AWARDS */}
                  {awards?.filter((award) => award?.enabled).length > 0 && (
                    <div>
                      {awards.length != 0 && (
                        <div className="mt-5">
                          <p className="bg-gray-800 tracking-widest rounded-md text-center  text-white p-1 m-1 heading">
                            AWARDS
                          </p>
                          { awards.map((item) => (
                            <>
                              {item.enabled && (
                                <div key={item.name} className=" m-2">
                                  <p className="font-bold font-serif text-[14px] tracking-wide">
                                    {item.name}
                                  </p>
                                  <p className="text-[12px]  font-semibold relative">
                                    Awarder : {item.awarder}{" "}
                                     <span className="text-[10px] absolute right-0  ">[ {item.date.slice(0,4)} ]</span>
                                    
                                  </p>
                                  <p className="text-[12px]">
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

                  {/* CERTIFICATIONS */}
                  {certifications?.filter((certification) => certification.enabled).length > 0 && (
                    <div>
                      {certifications.length != 0 && (
                        <div className="mt-5">
                          <p className="bg-gray-800 tracking-widest rounded-md mt-2 text-center text-white p-1 m-1 heading">
                            CERTIFICATION
                          </p>
                          { certifications.map((item) => (
                            <>
                              {item.enabled && (
                                <div key={item.title} className="pl-2 pt-1">
                                  <p className="font-semibold  font-serif text-[13px]">
                                    {item.title}{" "}
                                  </p>
                                  <p className="font-bold text-gray-600 text-[13px] font relative">
                                    {item.issuer}{" "}
                                    <span className=" font-bold font-sans text-gray-700 text-[12px] absolute right-1 ">
                                      [{item.date}]
                                    </span>{" "}
                                  </p>
                                  <p className="text-[12px] mr-3">
                                    {item.summary.data}
                                  </p>
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
