import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";

import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";

export const Tokyo = ({ componentRef }) => {
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
        <div
          className="flex bg-red-700"
          style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})` }}
        >
          <img
            className="rounded-full p-6 w-48 h-48"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
            src={profile?.image}
            alt="ProfilePhoto"
          />
          <div className="m-1 py-12">
            <h1 className="text-3xl text-white font-semibold m-1">
              {profile?.firstName.toUpperCase()}{" "}
              {profile?.lastName.toUpperCase()}
            </h1>
            <h1 className="text-sm text-white m-1">{profile?.role}</h1>
          </div>
        </div>
        <div className="flex justify-around p-3 border-b-2">
          <div className="text-[12px] font-semibold">{profile?.email}</div>
          <div className="text-[12px] font-semibold">{profile?.phone}</div>
          {profile?.dob && (
            <div className="text-[12px] font-semibold">{profile?.dob}</div>
          )}
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 h-[234mm] border-r-2 py-6 px-8">
            {objective && (
              <div>
                <h1 className="heading text-[16px] font-bold">Profile</h1>
                <p className="text-[13px] ml-2">{objective}</p>
              </div>
            )}
            {work?.filter((work) => work?.enabled)?.length > 0 && (
              <div>
                <h1 className="heading text-[16px] font-bold mt-4 mb-1">
                  Employment History
                </h1>
                {work
                  ?.filter((work) => work?.enabled === true)
                  .map((item) => (
                    <div className="my-1 ml-2">
                      <div className="flex justify-between">
                        <span className="text-[13px] font-bold mt-1">
                          ● {item.company}
                          {" - "}
                          <span className="text-[12px] font-semibold">
                            {item.designation}
                          </span>
                        </span>
                        <p className="text-[12px] py-1 font-semibold text-gray-600">
                          ({item.from.slice(0, 4)} to {item.to.slice(0, 4)})
                        </p>
                      </div>
                      <p className="text-[12px] ml-3">{item.summary.data}</p>
                    </div>
                  ))}
              </div>
            )}

            {certifications?.filter((certifications) => certifications?.enabled)
              ?.length > 0 && (
              <div>
                <h1 className="heading text-[16px] font-bold mt-4 mb-1">
                  Certifications
                </h1>
                {certifications
                  ?.filter((certifications) => certifications?.enabled === true)
                  .map((item) => (
                    <div className="my-1 ml-2">
                      <div className="flex justify-between">
                        <span className="text-[13px] font-bold mt-1">
                          ● {item.title}
                        </span>
                        <p className="text-[12px] pt-1 font-semibold text-gray-600">
                          ({item.date.slice(0, 4)})
                        </p>
                      </div>
                      <div className="text-[12px] ml-3 font-semibold">
                        {item.issuer}
                      </div>
                      <div className="text-[12px] ml-3">
                        {item.summary.data}
                      </div>
                    </div>
                  ))}
              </div>
            )}
            {projects?.filter((project) => project?.enabled)?.length > 0 && (
              <div>
                <h1 className="heading text-[16px] font-bold mt-4 mb-1">
                  Projects
                </h1>
                {projects
                  ?.filter((project) => project?.enabled === true)
                  .map((item) => (
                    <div className="my-1 ml-2">
                      <div className="flex justify-between">
                        <div className="text-[13px] font-bold mt-1">
                          ● {item.name}
                        </div>
                        <p className="text-[12px] py-1 font-semibold text-gray-500">
                          ({item.from.slice(0, 4)} to {item.to.slice(0, 4)})
                        </p>
                      </div>
                      <div className="ml-3">
                        <div className="text-[12px] font-semibold">
                          {item.website}
                          <p className="text-[12px] font-normal">
                            {item.summary.data}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="py-6 px-4">
            {education?.filter((edu) => edu?.enabled)?.length > 0 && (
              <div>
                <h1 className="heading text-[16px] font-bold ">Education</h1>
                {education
                  ?.filter((edu) => edu?.enabled === true)
                  .map((item) => (
                    <div className="ml-2 py-0.5">
                      <div className="text-[13px] font-bold mt-1">
                        ● {item.institution}
                      </div>
                      <div className="text-[12px] ml-3 font-semibold">
                        {item.fieldOfStudy}
                      </div>
                      <p className="text-[12px] ml-3 font-semibold text-gray-600">
                        ({item.startDate.slice(0, 4)} to{" "}
                        {item.endDate.slice(0, 4)})
                      </p>
                      <p className="text-[12px] ml-3">{item.summary.data}</p>
                    </div>
                  ))}
              </div>
            )}
            {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
              <div>
                <h1 className="heading text-[16px] font-bold mt-3 mb-1">
                  Skills
                </h1>
                {skills
                  ?.filter((skill) => skill?.enabled === true)
                  .map((item) => (
                    <div className="ml-1">
                      <h1 className="text-[12px] font-semibold m-1">
                        ● {item.name} - {item.level}
                      </h1>
                    </div>
                  ))}
              </div>
            )}
            {social?.filter((social) => social?.enabled)?.length > 0 && (
              <div>
                <h1 className="heading text-[16px] font-bold mt-3 mb-1">
                  Social
                </h1>
                {social
                  ?.filter((social) => social?.enabled === true)
                  .map((item) => (
                    <div className="ml-1">
                      <h1 className="text-[12px] font-semibold m-1">
                        ● {item.network}
                      </h1>
                    </div>
                  ))}
              </div>
            )}
            {awards?.filter((award) => award?.enabled)?.length > 0 && (
              <div>
                <h1 className="heading text-[16px] font-bold mt-3 mb-1">
                  Awards
                </h1>
                <div className="ml-1">
                  {awards
                    ?.filter((award) => award?.enabled === true)
                    .map((item) => (
                      <div className="py-1">
                        <h1 className="text-[12px] font-bold relative">
                          ● {item.name}
                        </h1>
                        <p className="text-[12px] font-semibold ml-3">
                          {item.awarder}
                        </p>
                        <p className="text-[12px] ml-3">{item.summary.data}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {hobbies?.filter((hob) => hob?.enabled)?.length > 0 && (
              <div>
                <h1 className="heading text-[16px] font-bold mt-3 mb-1">
                  Hobbies
                </h1>
                {hobbies
                  ?.filter((hob) => hob?.enabled === true)
                  .map((item) => (
                    <div className="ml-1">
                      <h1 className="text-[12px] font-semibold m-1">
                        ● {item.name}
                      </h1>
                    </div>
                  ))}
              </div>
            )}
            {languages?.filter((lang) => lang?.enabled)?.length > 0 && (
              <div>
                <h1 className="heading text-[16px] font-bold mt-3 mb-1">
                  Languages
                </h1>
                {languages
                  ?.filter((lang) => lang?.enabled === true)
                  .map((item) => (
                    <div className="ml-1">
                      <h1 className="text-[12px] font-semibold m-1">
                        ● {item.name}
                      </h1>
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
