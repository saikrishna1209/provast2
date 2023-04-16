import React, { useEffect } from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Amsterdam = ({ componentRef }) => {
  const {
    profile,
    objective,
    education,
    projects,
    work,
    skills,
    hobbies,
    languages,
    certifications,
    social,
    awards,
    layout,
    setdesign

  } = useResumeContext();
  console.log(profile);

  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const templateRef = document.getElementById("template");
  setdesign(templateRef)
  return (
    <>
      <div
        ref={componentRef}
        style={{ fontFamily: layout?.font }}
        className={`w-a4W bg-white mx-auto h-a4H my-5 relative`}
      id="template"

      >
      
        <div className="absolute left-44 top-5 border-[3px] border-gray-500 h-40 w-96 bg-white text-center">
          {profile && (
            <>
              <h1 className="mt-8 font-extrabold text-2xl tracking-[3px]">
                {profile.firstName.toUpperCase()}{" "}
                {profile.lastName.toUpperCase()}
              </h1>
              <h1 className="mt-3">{profile.role}</h1>
            </>
          )}
          {social && (
            <div className="mt-5 mb-4 flex  justify-center align-middle">
              {social.length != 0 && (
                <>
                  {social.map((item) => (
                    <div className="mx-5 mt-1 text-[12px]" key={item.network}>
                      <span className="">
                        <Link href={item.url}>
                          <img
                            src={
                              "https://www." + item.network + ".com/favicon.ico"
                            }
                            className="w-5 grayscale-[40%] "
                          />
                        </Link>
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        <div className="flex">
          <div className="w-[40%] h-[297mm] bg-gray-200">
            <div className="mt-56 mx-10 flex flex-col">
              <div>
                <h4 className="font-bold tracking-[4px] text-[16px] heading">
                  CONTACTS
                </h4>
                <hr className="w-[100%] h-1 bg-black my-2" />
                {profile && (
                  <div className="text-[12px]">
                    <p className="font-semibold my-2 ">{profile.email}</p>
                    <p className="font-semibold my-2">{profile.phone}</p>
                  </div>
                )}
              </div>

              {education?.filter((edu) => edu?.enabled).length > 0 && (
                <>
                  <h4 className="font-bold tracking-[4px] text-[16px]  mt-4 heading">
                    EDUCATION
                  </h4>
                  <hr className="w-[100%] h-1 bg-black my-2" />

                  {education
                    ?.filter((edu) => edu?.enabled === true)
                    .map((item) => (
                      <div
                        className="flex flex-col text-[12px] "
                        key={item.institution}
                      >
                        <span className="text-black font-semibold mt-4">
                          {item.institution}
                        </span>
                        <span className="mb-2 font-semibold">
                          ({item.startDate.slice(0, 4)} -{" "}
                          {item.endDate.slice(0, 4)})
                        </span>

                        <span className="font-semibold">
                          {item.typeOfDegree}
                        </span>
                        <span className="">{item.fieldOfStudy}</span>

                        <span className="">
                          <b>GPA - </b> {item.gpa}
                        </span>
                      </div>
                    ))}
                </>
              )}
              {/* </div> */}
            </div>

            <div className="mx-10 flex flex-col  ">
              {skills?.filter((skill) => skill?.enabled).length > 0 && (
                <div>
                  <h4 className="font-bold tracking-[4px] text-[16px]  heading">
                    SKILLS
                  </h4>
                  <hr className="w-[100%] h-1 bg-black my-2" />
                  {skills
                    ?.filter((skill) => skill?.enabled === true)
                    .map((item) => (
                      <div className="flex justify-between text-[12px] ">
                        <span className="font-semibold mt-1" key={item.name}>
                          {item.name}
                        </span>
                        <span className=" mt-1 mb-3 ">{item.level}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="mx-10 flex flex-col  ">
              {awards?.filter((award) => award?.enabled).length > 0 && (
                <div>
                  <h4 className="font-bold tracking-[4px] text-[16px]  heading">
                    AWARDS
                  </h4>
                  <hr className="w-[100%] h-1 bg-black my-2" />
                  {awards
                    ?.filter((award) => award?.enabled === true)
                    .map((item) => (
                      <div className="text-[12px] ">
                        <p className="font-semibold mt-1 " key={item.name}>
                          {item.name}({item.date.slice(0, 4)})
                        </p>
                        <span className="mb-3">{item.awarder}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="mx-10 flex flex-col  ">
              {hobbies?.filter((hobby) => hobby?.enabled).length > 0 && (
                <div>
                  <h4 className="font-bold tracking-[4px] text-[16px]  heading">
                    HOBBIES
                  </h4>
                  <hr className="w-[100%] h-1 bg-black my-2" />
                  {hobbies
                    ?.filter((hobby) => hobby?.enabled === true)
                    .map((item) => (
                      <div className="text-[12px] ">
                        <span className="font-semibold mt-1">{item.name}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="mx-10 flex flex-col  ">
              {languages?.filter((language) => language?.enabled).length >
                0 && (
                <div>
                  <h4 className="font-bold tracking-[4px] text-[16px]  heading">
                    LANGUAGES
                  </h4>
                  <hr className="w-[100%] h-1 bg-black my-2" />
                  {languages
                    ?.filter((language) => language?.enabled === true)
                    .map((item) => (
                      <div className="text-[12px] ">
                        <span className="font-semibold mt-1" key={item.name}>
                          {item.name}
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
            {/* {languages?.filter((lang) => lang?.enabled)?.length > 0 && (
                <div>
                  <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1">
                    Languages
                  </h1>
                  {languages
                    ?.filter((lang) => lang?.enabled === true)
                    .map((item) => ())})} */}

            {/* 
                       <div className="text-[12px] ">
                                  <span
                                    className="font-semibold mt-1"
                                    key={item.name}
                                  >
                                    {item.name}
                                  </span>
                                </div> */}
          </div>
          <div className="w-[60%] h-auto mt-52 mx-10">
            {objective && (
              <div>
                {objective.length != 0 && (
                  <>
                    <h2 className="font-bold tracking-[4px] heading">
                      OBJECTIVE
                    </h2>
                    <hr className="w-[100%] h-1 bg-black my-1" />
                    <p className="my-4">{objective}</p>
                  </>
                )}
              </div>
            )}

            {projects?.filter((project) => project?.enabled).length > 0 && (
              <>
                <h2 className="font-bold tracking-[4px] text-[16px]  heading">
                  PROJECTS
                </h2>
                <hr className="w-[100%] h-1 bg-black my-1" />

                {projects
                  ?.filter((project) => project?.enabled === true)
                  .map((item) => (
                    <>
                      {console.log("pro", item)}
                      {item.enabled && (
                        <div className="text-[12px] ">
                          <div className="my-4">
                            <span className="text-black text-[16px]  font-bold mt-3">
                              {item.name} ({" "}
                              <span className="text-black font-semibold">
                                {item.from.slice(0, 4)} to {item.to.slice(0, 4)}
                              </span>{" "}
                              ){" "}
                            </span>

                            <p className="ml-4 mt-2">{item.summary.data}</p>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
              </>
            )}

            {work?.filter((wo) => wo?.enabled).length > 0 && (
              <div>
                {work.length != 0 && (
                  <>
                    <h2 className="font-bold text-[16px]  tracking-[4px] heading">
                      WORK
                    </h2>
                    <hr className="w-[100%] h-1 bg-black my-1" />
                    {work
                      ?.filter((wo) => wo?.enabled === true)
                      .map((item) => (
                        <div className="text-[12px] ">
                          <div className="flex flex-col" key={item.company}>
                            {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                            <span className="text-black text-[16px]  font-bold mt-3">
                              {item.company}{" "}
                              <span className="font-semibold">
                                ({item.from.slice(0, 4)} to{" "}
                                {item.to.slice(0, 4)})
                              </span>
                            </span>
                            <span className="text-black font-semibold mx-4">
                              {item.designation}
                            </span>
                            <p className="ml-4">{item.summary.data}</p>
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </div>
            )}

            {certifications?.filter((certificate) => certificate?.enabled)
              .length > 0 && (
              <div>
                {certifications.length != 0 && (
                  <>
                    <h2 className="font-bold tracking-[4px] text-[16px] mt-4 heading">
                      CERTIFICATIONS
                    </h2>
                    <hr className="w-[100%] h-1 bg-black my-1" />
                    {certifications
                      ?.filter((certificate) => certificate?.enabled === true)
                      .map((item) => (
                        <div className="text-[12px] ">
                          <div className="flex flex-col" key={item.title}>
                            {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                            <span className="text-black font-bold mt-3">
                              {item.title}
                              <span className="font-semibold">{item.date}</span>
                            </span>
                            <span className="text-black font-semibold mx-4">
                              {item.issuer}
                            </span>
                            {/* <p className="ml-4">{item.summary.data}</p> */}
                          </div>
                        </div>
                      ))}
                  </>
                )}
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
