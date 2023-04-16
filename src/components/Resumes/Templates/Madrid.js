import React from "react";
import Link from "next/link";
import { useResumeContext } from "../../../context/ResumeContext";

import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";

export const Madrid = ({ componentRef }) => {
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
        <div className="grid grid-cols-11">
          <div className="col-span-8">
            <div className=" p-1 px-1 flex bg-gray-300 h-52">
              <img
                className="rounded-lg w-[130px] h-36  border-4 border-yellow-400  ml-4 mt-2 mr-1 "
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                src={profile?.image}
                alt="ProfilePhoto"
              />
              <div>
                <h1 className="text-3xl font-medium p-2 ">
                  {profile?.firstName} {profile?.lastName}
                </h1>
                <div>
                  <h1 className="m-1 mt-0 ml-2 text-sm font-medium text-yellow-400">
                    {profile?.role}
                  </h1>
                </div>
                {objective && (
                  <div>
                    <p className="text-xs p-2 pt-0 font-medium">{objective}</p>
                  </div>
                )}
              </div>
            </div>

            {work?.filter((work) => work?.enabled)?.length > 0 && (
              <div>
                <h1 className="font-medium text-2xl heading   ml-5 pt-4 mb-1 p-2">
                  Employement History
                </h1>
                {work
                  ?.filter((work) => work?.enabled === true)
                  .map((item) => (
                    <div>
                      <h1 className="font-medium text-lg ml-16 ">
                        {item.company}
                      </h1>
                      <h2 className="font-medium ml-16 text-sm text-yellow-400">
                        {item.from} - {item.to}
                      </h2>
                      <li className="ml-28 text-lg list-disc">
                        {item.designation}
                      </li>
                      <li className="ml-28  list-disc ">{item.website}</li>
                      {/* <p class="text-sm font-medium ml-14">{item.summary.data}</p> */}
                    </div>
                  ))}
              </div>
            )}
            {certifications?.filter((cer) => cer?.enabled)?.length > 0 && (
              <div>
                <h1 className="font-medium text-2xl heading   ml-5 pt-2 mb-1 p-2">
                  Certifications
                </h1>
                {certifications
                  ?.filter((cer) => cer?.enabled === true)
                  .map((item) => (
                    <div>
                      <h1 className="text-sm ml-16 font-medium">
                        {item.title}
                      </h1>
                      <h6 className="text-xs ml-16 font-medium text-yellow-400">
                        {item.date}
                      </h6>
                      <li className="text-sm  font-medium ml-28">
                        {item.summary.data}
                      </li>
                    </div>
                  ))}
              </div>
            )}
            {awards?.filter((awa) => awa?.enabled)?.length > 0 && (
              <div>
                <h1 className="font-medium text-2xl heading   ml-5 pt-2 mb-1 p-2">
                  Awards
                </h1>
                {awards
                  ?.filter((awa) => awa?.enabled === true)
                  .map((item) => (
                    <div>
                      <h1 className="font-medium ml-16">{item.name}</h1>
                      <h6 className="text-xs ml-16 font-medium text-yellow-400">
                        {item.date}
                      </h6>
                      <li className="ml-28 font-medium text-sm">
                        {item.summary.data}
                      </li>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="col-span-3">
            {social?.filter((soc) => soc?.enabled)?.length > 0 && (
              <div className="bg-blue-800 h-52">
                <h1 className="font-bold  text-lg heading   ml-12 pt-4 p-2">
                  Social Network
                </h1>
                {social
                  ?.filter((social) => social?.enabled === true)
                  .map((item) => (
                    <div className="ml-16 my-4 flex">
                      <img
                        src={"https://www." + item.network + ".com/favicon.ico"}
                        alt=""
                        className="w-8 h-8 border-4 ml-0 mr-0 rounded-full border-yellow-400 "
                      />
                      <Link href={item.url}>
                        <h1 className="ml-4">{item.username}</h1>
                      </Link>
                    </div>
                  ))}
              </div>
            )}
            <div class="bg-gray-300 h-[88%]">
              {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
                <div className="p-2">
                  <h1 className="font-bold text-lg ml-8 pt-4 heading   p-2">SKILLS</h1>
                  {skills
                    ?.filter((skill) => skill?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="font-medium ml-8 p-1">{item.name}</h1>
                        <h1 className="text-sm font-medium ml-9 ">
                          {item.level}
                        </h1>
                      </div>
                    ))}
                </div>
              )}
              {education?.filter((edu) => edu?.enabled)?.length > 0 && (
                <div className="p-2 px-0">
                  <h1 className="font-medium text-xl ml-6 heading   mb-0 p-2">
                    Education
                  </h1>
                  {education
                    ?.filter((edu) => edu?.enabled === true)
                    .map((item) => (
                      <div className="p-1">
                        <h1 className=" ml-6 text-sm font-medium">
                          {item.institution}
                        </h1>
                        <h6 className="text-xs ml-6 font-medium text-yellow-500">
                          {item.startDate} - {item.endDate}
                        </h6>
                        <li className="ml-10 text-normal font-medium">
                          {item.fieldOfStudy}
                        </li>
                      </div>
                    ))}
                </div>
              )}
              {hobbies?.filter((hob) => hob?.enabled)?.length > 0 && (
                <div className="p-2">
                  <h1 className="font-medium text-xl heading  ml-6 mb-0 p-2">
                    {" "}
                    Hobbies
                  </h1>
                  {hobbies
                    ?.filter((hob) => hob?.enabled === true)
                    .map((item) => (
                      <div>
                        <li className="font-normal ml-10 text">{item.name}</li>
                      </div>
                    ))}
                </div>
              )}
              {languages?.filter((lang) => lang?.enabled)?.length > 0 && (
                <div className="p-2">
                  <h1 className=" text-lg font-medium heading   ml-6 mb-0 p-2">
                    Languages
                  </h1>
                  {languages
                    ?.filter((lang) => lang?.enabled === true)
                    .map((item) => (
                      <div>
                        <li className="font-normal ml-10 tex-sm">
                          {item.name}
                        </li>
                      </div>
                    ))}
                </div>
              )}
              {projects?.filter((pro) => pro?.enabled)?.length > 0 && (
                <div className="p-2">
                  <h1 className=" text-lg font-medium heading  ml-6 ">Projects</h1>
                  {projects
                    ?.filter((pro) => pro?.enabled === true)
                    .map((item) => (
                      <div className="p-2">
                        <li className="font-medium ml-8 tex-lg">{item.name}</li>
                        <h6 className="text-xs ml-8 font-medium text-yellow-500">
                          {item.from} - {item.to}
                        </h6>
                      </div>
                    ))}
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
    </>
  );
};
