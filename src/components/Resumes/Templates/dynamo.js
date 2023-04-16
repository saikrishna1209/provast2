import React from "react";
import Link from "next/link";
import { useResumeContext } from "../../../context/ResumeContext";

import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";

export const Dynamo = ({ componentRef }) => {
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
    setdesign
  } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };

  const templateRef = document.getElementById("template");
  setdesign(templateRef)
  return (
    <>
      <div
        ref={componentRef}
        style={{ fontFamily: layout?.font }}
        className={`w-a4W bg-white mx-auto h-a4H my-5 flex`}
        id="template"
      >
        <div className="flex">
        <div className=" w-[35%] bg-gray-200 p-6 relative">
          <div className="bg-slate-800 w-36 h-[200px] absolute top-0 left-0">
            <img
              //   src="https://randomuser.me/api/portraits/men/40.jpg"
              src={profile?.image}
              alt=""
              className="w-36 h-36 mt-7 ml-10 border-8 border-white"
            />
          </div>
          <div className="mt-48">
            <h1 className="text-[16px] font-semibold heading tracking-[2px]">
              CONTACT
            </h1>
            <hr className="h-[2px] bg-black my-1" />
            {
              <>
                <div className="flex">
                  <span>
                    <img
                      src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                      className="w-5 h-5"
                    />
                  </span>
                  <h1 className="mx-4 text-[12px] ">{profile?.phone}</h1>
                </div>
                <div className="flex my-1">
                  <span>
                    <img
                      src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                      className="w-7 h-7"
                    />
                  </span>
                  <h1 className="mx-2 text-[12px] ">{profile?.email}</h1>
                </div>
                {social
                  ?.filter((social) => social?.enabled === true)
                  .map((item) => (
                    <div className="my-3 flex">
                      <span>
                        <img
                          src={
                            "https://www." + item.network + ".com/favicon.ico"
                          }
                          alt=""
                          srcset=""
                          className="w-5 grayscale-[40%]"
                        />
                      </span>

                      <Link href={item.url}>
                        <span className="mx-4 text-[12px]">
                          {item.username}
                        </span>
                      </Link>
                    </div>
                  ))}
              </>
            }
          </div>
          {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
            <div className="mt-4">
              <h1 className="text-[16px] font-semibold heading tracking-[2px]">
                SKILLS
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              {skills
                ?.filter((skill) => skill?.enabled === true)
                .map((item) => (
                  <li className="mx-4 text-[12px] ">{item.name}</li>
                ))}
            </div>
          )}

          {awards?.filter((awa) => awa?.enabled)?.length > 0 && (
            <div>
              <h1 className="text-[16px] font-semibold heading tracking-[2px]">
                AWARADS
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              {awards
                ?.filter((awa) => awa?.enabled === true)
                .map((item) => (
                  <div className="my-2">
                    <span className="font-semibold text-[12px]">
                      {item.name} ({item.date.slice(0, 4)})
                    </span>
                    <span className="mx-2 text-[12px]"></span>
                    <p className="mx-4 text-[12px]">
                      {item.summary.data.slice(0, 38)}
                    </p>
                  </div>
                ))}
            </div>
          )}
          {languages?.filter((lang) => lang?.enabled)?.length > 0 && (
            <div className="mt-4">
              <h1 className="text-[16px] font-semibold heading tracking-[2px]">
                LANGUAGES
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              {languages
                ?.filter((lang) => lang?.enabled === true)
                .map((item) => (
                  <p className="my-2 text-[12px]">{item.name}</p>
                ))}
            </div>
          )}
          {hobbies?.filter((hob) => hob?.enabled)?.length > 0 && (
            <div className="mt-4">
              <h1 className="text-[16px] font-semibold heading tracking-[2px]">
                HOBBIES
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              {hobbies
                ?.filter((hob) => hob?.enabled === true)
                .map((item) => (
                  <p className="my-2 text-[12px]">{item.name}</p>
                ))}
            </div>
          )}
        </div>
        <div className=" w-[70%] pt-10 px-5 ">
          <div>
            <h1 className="text-[25px] font-semibold tracking-wider">
              {profile?.firstName.toUpperCase()}
            </h1>
            <h1 className="text-[25px]  tracking-[4px] mt-2">
              {profile?.lastName.toUpperCase()}
            </h1>
            <h1 className="text-[20px]  tracking-[4px] mt-2">
              {profile?.role}
            </h1>
          </div>

          <div className="mt-12">
            {objective && (
              <div>
                <h1 className="text-[16px] font-bold heading tracking-[1px]">
                  OBJECTIVE
                </h1>
                <hr className="h-[2px] bg-black my-1" />
                <p className="text-[12px]">{objective}</p>
              </div>
            )}
            {work?.filter((work) => work?.enabled)?.length > 0 && (
              <div className="ml-1 mt-1">
                <h1 className="text-[16px] font-bold tracking-[1px] heading mt-5">
                  WORK
                </h1>
                <hr className="h-[2px] bg-black my-1" />
                {work
                  ?.filter((work) => work?.enabled === true)
                  .map((item) => (
                    <div className="flex">
                      <div className="pt-1">
                        <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                        <div className="w-1 bg-black h-32 m-1"></div>
                      </div>
                      <div className="ml-5 mt-1">
                        <p className="font-semibold text-[12px]">
                          {item.from.slice(0, 4)} - {item.to.slice(0, 4)}
                        </p>
                        <p className="tracking-[2px] my-1 text-[12px]">
                          {item.company}
                        </p>
                        <p className="font-bold text-[12px]">
                          {item.designation}
                        </p>
                        <p className="mb-4 text-[12px]">{item.summary.data}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            {education?.filter((edu) => edu?.enabled)?.length > 0 && (
              <div className="ml-1 mt-1">
                <h1 className="text-[16px] font-bold tracking-[1px] heading mt-3">
                  EDUCACTION
                </h1>
                <hr className="h-[2px] bg-black my-1" />
                {education
                  ?.filter((edu) => edu?.enabled === true)
                  .map((item) => (
                    <div className="flex">
                      <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-black h-28 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-[12px]">
                            {item.startDate.slice(0, 4)} -{" "}
                            {item.endDate.slice(0, 4)}
                          </p>
                          <p className="tracking-[2px] text-[12px]">
                            {item.institution}
                          </p>
                          <p className="font-bold text-[12px]">
                            {item.fieldOfStudy}
                          </p>
                          <p className="text-[12px]">{item.typeOfDegree}</p>
                          <p className="mb-4 text-[12px] font-semibold">
                            GPA-{item.gpa}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
        <style jsx> 
            {`
              .heading{
                color:rgba(${r},${g},${b},${a})
              }
              @media print {
                #template {
                  margin:10cm ;
                }
              }
            `}
    </style>

    </>
  );
};
