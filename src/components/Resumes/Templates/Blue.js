import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Blue = ({ componentRef, filter = null }) => {
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
    setdesign
  } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-lg text-center capitalize font-bold text-gray-700 mb-2 pb-1";

  const templateRef = document.getElementById("template");
  setdesign(templateRef)
  return (
    <div
      ref={componentRef}
      className="w-a4W bg-white mx-auto h-a4H my-5 relative"
      id="template"
    >
      <div
        className={`h-[95%] w-[35%] bg-sky-200 absolute left-10 rounded-b-full p-5 z-10`}
      >
        {profile && (
          <>
            <img
              src={profile.image}
              alt=""
              className="rounded-full h-40 mb-5 mx-auto"
            />
          </>
        )}
        <>
          {profile && (
            <>
              <div className="flex">
                <span>
                  <img
                    src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                    className="w-3 h-3"
                  />
                </span>
                <h1 className="mx-4 text-[12px]">{profile.phone}</h1>
              </div>
              <div className="flex my-1">
                <span>
                  <img
                    src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                    className="w-4 h-4"
                  />
                </span>
                <h1 className="mx-2 text-[12px]">{profile.email}</h1>
              </div>
            </>
          )}
          {social && (
            <>
              {social.map((item) => (
                <div className="my-3 flex " key={item.network}>
                  <span>
                    <img
                      src={"https://www." + item.network + ".com/favicon.ico"}
                      alt=""
                      srcset=""
                      className="w-3 grayscale-[40%]"
                    />
                  </span>

                  <Link href={item.url}>
                    <span className="mx-4 text-[12px]">{item.username}</span>
                  </Link>
                </div>
              ))}
            </>
          )}
        </>

        {/* {skills && (
            <div>
              {skills.length != 0 && (
                <>
                  <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                    SKILLS
                  </h1>

                  <div className="my-2">
                    {skills.map((item) => (
                      <div className="flex" key={item.name}>
                        <h1 className="">{item.name}</h1>
                        <p className="absolute right-5">{item.level}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )} */}

        {skills?.filter((skill) => skill?.enabled).length > 0 && (
          <div>
            <h1 className="text-[16px] font-semibold tracking-[2px] mt-5  heading">
              SKILLS
            </h1>
            <div className="my-2 text-[12px]">
              {skills.map((item) => (
                <>
                  {item.enabled == true && (
                    <div className="flex" key={item.name}>
                      <h1 className="">{item.name}</h1>
                      <p className="absolute right-5 ">{item.level}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        )}

        {languages?.filter((language) => language?.enabled).length > 0 && (
          <div>
            {languages.length != 0 && (
              <>
                <h1 className="text-[16px] font-semibold tracking-[2px] mt-5 heading">
                  LANGUAGES
                </h1>
                <div className="my-2">
                  {languages.map((item) => (
                    <>
                      {item.enabled && (
                        <div className="flex text-[12px]" key={item.name}>
                          <h1 className="">{item.name}</h1>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {hobbies && (
          <div>
            {hobbies.length != 0 && (
              <>
                <h1 className="text-[16px] font-semibold tracking-[2px] mt-5 heading">
                  HOBBIES
                </h1>
                <div className="my-2">
                  {hobbies.map((item) => (
                    <>
                      {item.enabled && (
                        <div className="flex text-[12px]  " key={item.name}>
                          <h1 className="">{item.name}</h1>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {awards?.filter((award) => award?.enabled).length > 0 && (
          <div>
            {awards.length != 0 && (
              <>
                <h1 className="text-[16px] font-semibold tracking-[2px] mt-5 heading">
                  AWARDS
                </h1>
                <div className="my-2 ">
                  {awards
                    ?.filter((award) => award?.enabled === true)
                    .map((item) => (
                      <>
                        {item.enabled && (
                          <div className="flex text-[12px]" key={item.name}>
                            <span className=" text-[15px] my-1">
                              {item.name}{" "}
                              <span className="text-[12px]">
                                ({item.date.slice(0, 10)})
                              </span>
                            </span>
                          </div>
                        )}
                      </>
                    ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* 
          {certifications && (
            <div>
              {certifications.length != 0 && (
                <>
                    <h1 className="text-[16px] font-semibold tracking-[2px] heading">
                      CERTIFICATIONS
                    </h1>
                  <div className="mt-4">
                    {certifications.map((item) => (
                      <p className="my-2 text-[12px]" key={item.name}>
                        {item.title}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>
          )} */}
      </div>
      <div
        className={`w-[100%] h-36 bg-sky-100 top-10 relative z-1 rounded-l-full  p-10`}
      >
        {profile && (
          <>
            <h1 className="text-3xl ml-[50%] font-bold tracking-widest">
              {profile.firstName.toUpperCase()}{" "}
              <span>{profile.lastName.toUpperCase()}</span>
            </h1>
            <h1 className="ml-[58%] my-2 tracking-widest">{profile.role}</h1>
          </>
        )}
        <div className="absolute mt-10  left-[330px] w-[57%] h-[100%] text-black">
          {objective && (
            <>
              {objective != 0 && (
                <>
                  <h1 className="text-[16px] font-bold tracking-[1px] heading">
                    OBJECTIVE
                  </h1>
                  <p className="text-[12px]">{objective}</p>
                </>
              )}
            </>
          )}

          {education?.filter((edu) => edu?.enabled).length > 0 && (
            <>
              <h4 className="text-[16px] mt-2 font-bold tracking-[1px] heading">
                EDUCATION
              </h4>
              <hr className="w-[100%] h-1 bg-black my-2" />

              {education
                ?.filter((edu) => edu?.enabled === true)
                .map((item) => (
                  <div className="mt-2 text-[12px]" key={item.institution}>
                    <h1 className="font-semibold">
                      {item.institution}{" "}
                      <span className="font-medium">
                        ({item.startDate.slice(0, 4)}-{item.endDate.slice(0, 4)}
                        )
                      </span>{" "}
                    </h1>

                    <p className="ml-5">{item.typeOfDegree}</p>
                    <p className="ml-5 my-1">{item.summary.data}</p>
                    <p className="ml-5">GPA-{item.gpa}</p>
                  </div>
                ))}
            </>
          )}

          {/* <h1 className="text-[16px] font-bold tracking-[1px] mt-4 heading">
                      INTERNSHIP
                    </h1> */}

          {work?.filter((wo) => wo?.enabled).length > 0 && (
            <div>
              {work.length != 0 && (
                <>
                  <h1 className="text-[16px] font-bold tracking-[1px] mt-4 heading">
                    INTERNSHIP
                  </h1>
                  <hr className="w-[100%] h-1 bg-black my-1" />
                  {work
                    ?.filter((wo) => wo?.enabled === true)
                    .map((item) => (
                      <>
                        {item.enabled && (
                          <div className="mt-2 text-[12px]" key={item.company}>
                            <h1 className="font-semibold">
                              {item.company}{" "}
                              <span className="font-medium">
                                ({item.from.slice(0, 4)}-{item.to.slice(0, 4)})
                              </span>{" "}
                            </h1>

                            <span className="ml-5 tracking-wider font-semibold">
                              {item.designation}
                            </span>
                            <span className="ml-5 text-sm">
                              {item.summary.data}
                            </span>
                          </div>
                        )}
                      </>
                    ))}
                </>
              )}
            </div>
          )}

          {/* <h1 className="text-[16px] font-bold tracking-[1px] mt-4 heading">
                      PROJECTS
                    </h1> */}

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
                    {item.enabled && (
                      <div className="mt-2 text-[12px]" key={item.name}>
                        {/* <Link href={item.website}> */}
                        <h1 className="font-semibold">
                          {item.name}{" "}
                          <span className="font-medium">
                            ({item.from.slice(0, 4)}-{item.to.slice(0, 4)})
                          </span>{" "}
                        </h1>{" "}
                        {/* </Link> */}
                        <span className="ml-5 tracking-wider font-semibold">
                          {item.designation}
                        </span>
                        <span className="ml-5 text-sm">
                          {item.summary.data}
                        </span>
                      </div>
                    )}
                  </>
                ))}
            </>
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
    // </div>
  );
};
