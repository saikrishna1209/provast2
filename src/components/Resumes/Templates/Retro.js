import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Retro = ({ componentRef, filter = null }) => {
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
      <div className="">
        <div className="flex mx-2 mt-[2%]  ">
          {profile && (
            <div className="left-0 w-[20%]">
              <img
                src={profile.image}
                alt=""
                className="rounded-full h-[38mm] p-1  m-2"
              />
            </div>
          )}

          {objective && (
            <div className="right-0 w-[80%]">
              <p className=" text-black font-bold text-[16px] p-1   heading pt-3 pl-4 tracking-wide mt-1 heading ">
                PROFILE
              </p>
              <p className="text-[12px] text-black p-2 pl-2 pt-1">
                {objective}
              </p>
            </div>
          )}
        </div>

        {profile && (
          <div className=" bg-black px-4 py-1">
            <span className="text-[20px] bg-white p-1 pl-2 rounded-sm font-bold text-black tracking-wider font-mono  ml-1">
              {profile.firstName} {profile.lastName}
            </span>
            <span className=" text-[16px] pl-[10%] text-white tracking-wider font-thin text-right font-mono ">
              {profile.role}
            </span>
          </div>
        )}

        <div className="relative flex">
          <div className=" bg-gradient-to-t  from-gray-300 w-[40%]">
            <div className=" ">
              <div className="flex px-3 py-1">
                 <div className="">
                   {/* skills */}
                {skills?.filter((skill) => skill?.enabled).length > 0 && (
                <>
                    {skills.length != 0 && (
                      <div className="py-1">
                        <p className="text-black px-2 font-bold  heading  tracking-wider text-[16px] heading">
                          SKILLS
                        </p>
                        {skills.map((item) => (
                          <>
                            {item.enabled == true && (
                              <div key={item.name} className="ml-2">
                                <span className="text-[12px]  ">
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
                    </>
                )}
                    
                    {/* Languages */}
                    {languages?.filter((language)=>language?.enabled).length>0 && (
                      <div>
                        {languages.length != 0 && (
                          <div className="py-1">
                            <p className="text-black px-2 font-bold  heading  tracking-wider text-[16px] heading">
                              LANGUAGES
                            </p>
                            {languages.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <div key={item.name} className="ml-2">
                                    <li className="text-[12px]">
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
                    {/* awards */}
                    {awards?.filter((awards) => awards?.enabled).length > 0 && (
                      <div>
                        {awards.length != 0 && (
                          <div className="py-1">
                            <p className="text-black px-2 font-bold   heading tracking-wider text-[16px] heading">
                              AWARDS
                            </p>
                            {awards.map((item) => (
                              <>
                              {item.enabled && (
                              <div key={item.name} className="ml-2">
                                <li className="">
                                  <span className="text-[14px] font-semibold">
                                    {" "}
                                    {item.name}
                                  </span>
                                  <div className="pl-5">
                                    <p className="relative  text-[14px]">
                                      {item.awarder}
                                      <span className="absolute text-[10px] right-0">
                                        {" "}
                                        [{item.date.slice(0, 4)}]{" "}
                                      </span>
                                    </p>
                                    <p className="text-[12px] ">
                                      {item.summary.data}
                                    </p>
                                    <p className="text-[12px]">
                                      {item.summary.enabled}
                                    </p>
                                    <p>{item.enabled}</p>
                                  </div>
                                </li>
                              </div>
                              )}
                              </>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* hobbies */}
                {hobbies?.filter((hobbies) => hobbies?.enabled).length > 0 && (
                      <div>
                        {hobbies.length != 0 && (
                          <div className="py-1">
                            <p className="text-black  px-2 font-bold  heading  tracking-wider text-[16px]  heading">
                              HOBBIES
                            </p>
                            {hobbies.map((item) => (
                              <>
                              {item.enabled && (
                              <div className="ml-2" key={item.name}>
                                <li className="text-[12px]">{item.name}</li>
                                <p>{item.enabled}</p>
                              </div>
                              )}
                              </>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* projects */}
                    {projects?.filter((projects) => projects?.enabled).length > 0 && (

                      <div>
                        {projects.length != 0 && (
                          <div className=" py-1">
                            <p className="text-black  px-2 font-bold   heading tracking-wider text-[16px]  heading  ">
                              PROJECTS
                            </p>

                            {projects.map((item) => (
                              <>
                              {item.enabled && (
                              <div key={item.name} className="py-1">
                                <div className=" ml-2 text-black ">
                                  <p className="tracking-wide text-[14px] font-semibold">
                                    {item.name}
                                  </p>
                                  <p className="text-[12px]">
                                    [ {item.from.slice(0, 10)} ] - [{" "}
                                    {item.to.slice(0, 10)} ]
                                  </p>

                                  <p href={item.website}>
                                    <p className="text-[12px]">
                                      {item.website}
                                    </p>
                                  </p>
                                  <p className="pr-2 text-[10px]  ">
                                    {item.summary.data}
                                  </p>
                                  <p>{item.summary.enabled}</p>
                                  <p>{item.enabled}</p>
                                  <p className="p-2"> </p>
                                </div>
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
          <div className="w-[70%] py-2 px-3">
            {/* education */}
            {education?.filter((education) => education?.enabled).length > 0 && (
              <div>
                {education.length != 0 && (
                  <div className="py-1 ">
                    <p className=" text-black font-bold px-3 py-1 text-[16px]  heading  tracking-wide  heading">
                      EDUCATION
                    </p>
                    <hr></hr>
                    {education.map((item) => (
                       <>
                       {item.enabled && (
                      <div
                        key={item.institution}
                        className="text-[12px] p-2  text-black "
                      >
                        <p className="relative text-[14px] font-semibold text-black ">
                          {item.institution}
                          <span className="absolute font-normal text-[12px] right-3">
                            [{item.startDate.slice(0, 4)}-
                            {item.endDate.slice(0, 4)}]
                          </span>
                        </p>
                        <p>{item.typeOfDegree}</p>
                        <p>
                          {item.fieldOfStudy} - {item.gpa}
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

            {/* internship */}
            {work?.filter((work) => work?.enabled).length > 0 && (
              <div>
                {work.length != 0 && (
                  <>
                    <div className="py-1">
                      <p className=" text-black font-bold px-3 py-1 text-[16px]   heading tracking-wide heading">
                        INTERNSHIP
                      </p>
                      <hr></hr>
                      {work.map((item) => (
                        <>
                        {item.enabled && (
                        <div
                          key={item.company}
                          className="text-[12px] p-2 text-black "
                        >
                          <p className="relative font-semibold text-[14px] text-black ">
                            {item.company}
                            <span className="absolute font-normal text-[12px] right-0">
                              [{item.from.slice(0, 10)}] - [
                              {item.to.slice(0, 10)}]
                            </span>
                          </p>
                          <p>{item.designation}</p>
                          <p>{item.summary.data}</p>
                          {/* <p>{item.gpa}</p> */}
                          <p>{item.summary.enabled}</p>
                          <p>{item.enabled}</p>
                        </div>
                        )}
                        </>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            {/* certification */}

            {certifications?.filter((certifications) => certifications?.enabled).length > 0 && (
              <div>
                {certifications.length != 0 && (
                  <>
                    <div className="py-1">
                      <p className=" text-black font-bold px-3 py-1 text-[16px]   heading tracking-wider heading">
                        CERTIFICATION
                      </p>
                      <hr className=""></hr>
                      {certifications.map((item) => (
                        <>
                         {item.enabled && (
                        <div
                          key={item.title}
                          className="text-[12px] p-2 text-black"
                        >
                          <p className="relative font-semibold text-[14px]">
                            {item.title}{" "}
                            <span className="right-0 absolute font-normal text-[10px]">
                              [{item.date}]
                            </span>
                          </p>

                          <p>{item.issuer}</p>
                          <p>{item.summary.data}</p>
                          <p>{item.summary.enabled}</p>
                          <p>{item.enabled}</p>
                        </div>
                         )}
                         </>
                      ))}
                    </div>
                  </>
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
