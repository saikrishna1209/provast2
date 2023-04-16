import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Vertical = ({ componentRef, filter = null }) => {
  const {
    profile,
    social,
    objective,
    education,
    awards,
    work,
    skills,
    hobbies,
    layout,
  } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-lg text-center capitalize font-bold text-gray-700 mb-2 pb-1";
  return (
    <div ref={componentRef} className="w-a4W bg-white mx-auto h-a4H my-5">
      {/* <div className='px-14 py-8 h-full' style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)` }}>
        <div className='w-full py-2 text-center border-b-2 border-slate-600 '>
          <span className='text-4xl not-italic font-bold text-gray-700 '>
            {rename(profile?.firstName)} {rename(profile?.lastName)}
          </span>
        </div>
        <div className='w-full border-gray-200 py-1 text-center mb-5'>
          <span className='text-sm italic font-semibold text-gray-700 '>
            <span className={`${filter?.removeEmail ? "blur" : ""} `}>{profile?.email}</span>{" "}
            <span className={`${filter?.removePhoneNumber ? "blur" : ""}`}>
              &middot; +91 - {profile?.phone}
            </span>
          </span>
        </div>
        {education?.filter((education) => education?.enabled)?.length > 0 && (
          <div className='w-full'>
            <h1 className={headingClass}>Education</h1>
            {education
              ?.filter((option) => option?.enabled === true)
              .map((option) => (
                <div key={option?._id} className='flex justify-between items-start mb-3 mt-2'>
                  <div className='leading-4'>
                    <h3
                      className={`${
                        option?.typeOfDegree !== "School / Intermediate" &&
                        filter?.removeCollegeName
                          ? "blur"
                          : ""
                      } text-lg font-semibold tracking-wide`}
                    >
                      {option?.institution}
                    </h3>
                    <span className='text-[13px]'>
                      {option?.fieldOfStudy}
                      <span className='text-sm'> &middot; {option?.gpa}</span>
                    </span>
                    {option?.summary?.enabled && (
                      <span className='markdown text-sm tracking-wide text-gray-700'>
                        <MarkdownRenderer>{option?.summary?.data}</MarkdownRenderer>
                      </span>
                    )}
                  </div>
                  <span className='text-xs font-bold tracking-wide'>
                    {new Date(option?.startDate).getFullYear()} -{" "}
                    {new Date(option?.endDate).getFullYear()}
                  </span>
                </div>
              ))}
          </div>
        )}
        <div className='my-8'>
          {work?.filter((option) => option?.enabled)?.length > 0 && (
            <div>
              <h4 className={headingClass}>Experience</h4>
              {work?.map((option) => {
                if (option?.enabled === true) {
                  return (
                    <div key={option?._id} className='mb-2'>
                      <div className='flex items-center justify-between'>
                        <div className='text-[15px] font-semibold flex flex-col'>
                          <span>{option?.company}</span>
                          <span className='text-[12px] capitalize font-base text-gray-600'>
                            {option?.designation}
                          </span>
                        </div>

                        <div className='text-xs font-bold text-gray-500'>
                          {`[${
                            months[new Date(option?.from?.substring(0, 10)).getMonth() + 1]
                          } ${new Date(option?.from?.substring(0, 10)).getFullYear()}] - [${
                            months[new Date(option?.to?.substring(0, 10)).getMonth() + 1]
                          } ${new Date(option?.to?.substring(0, 10)).getFullYear()}]`}
                        </div>
                      </div>

                      {option?.summary?.enabled && (
                        <div className='ml-3'>
                          &middot;{" "}
                          <span className='inline-block markdown text-xs capitalize'>
                            <MarkdownRenderer>{option?.summary?.data}</MarkdownRenderer>
                          </span>
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>

        <div>
          {certifications?.filter((certification) => certification?.enabled)?.length > 0 && (
            <div className='mt-4'>
              <h3
                // style={{ color: `rgba(${r}, ${g}, ${b}, ${a})` }}
                className={headingClass}
              >
                Certifications
              </h3>
              {certifications?.map((certification) => {
                if (certification?.enabled === true) {
                  return (
                    <div key={certification?._id} className='relative mb-2'>
                      <div className='text-[15px] font-semibold'>
                        {certification?.title},{" "}
                        <span className='text-[12px] font-base text-gray-500'>
                          {certification?.issuer}
                        </span>
                      </div>
                      <div className='absolute top-0 right-0 text-sm font-light'>
                        {new Date(certification?.date).getFullYear()}
                      </div>

                      <div className='markdown capitalize text-xs ml-3'>
                        <MarkdownRenderer>{certification?.summary?.data}</MarkdownRenderer>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}

          {awards?.filter((award) => award?.enabled)?.length > 0 && (
            <div className='w-full'>
              {awards
                ?.filter((award) => award?.enabled === true)
                .map((award) => (
                  <div key={award?._id} className='mb-2'>
                    <div className='flex items-center justify-between'>
                      <div className='text-[15px] font-semibold'>
                        <span className='italic text-xs text-slate-500'>Awarded - </span>
                        {award?.name},{" "}
                        <span className='text-[12px]  tracking-wide text-gray-500'>
                          by {award?.awarder}
                        </span>
                      </div>
                      <div className='text-xs font-bold text-gray-500'>
                        {new Date(award?.date).getFullYear()}
                      </div>
                    </div>

                    {award?.summary?.enabled && (
                      <div className='markdown  text-xs ml-3'>
                        <MarkdownRenderer>{award?.summary?.data}</MarkdownRenderer>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className='my-5'>
          {(skills?.filter((skill) => skill?.enabled)?.length > 0 ||
            languages?.filter((language) => language?.enabled)?.length > 0 ||
            hobbies?.filter((hobby) => hobby?.enabled)?.length > 0) && (
            <div>
              <h1 className={headingClass}>Skills & Interests</h1>
              {languages?.filter((language) => language?.enabled)?.length > 0 && (
                <div className='w-full '>
                  <div className='flex items-center'>
                    <h2 className='inline'>Languages: </h2>
                    <span className='ml-3 flex'>
                      {languages
                        ?.filter((language) => language?.enabled === true)
                        .map((language, index) => (
                          <span
                            key={language?._id}
                            className='flex justify-between items-center my-1'
                          >
                            <span className='text-[15px] capitalize font-semibold'>
                              {language?.name}{" "}
                            </span>
                            {index !== languages.length - 1 && " , "}
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              )}

              {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
                <div className='w-full '>
                  <div className='flex items-center'>
                    <h2 className='inline'>Skills: </h2>
                    <span className='ml-3 flex'>
                      {skills
                        ?.filter((skill) => skill?.enabled === true)
                        .map((skill, index) => (
                          <span key={skill._id} className='flex justify-between items-center my-1'>
                            <span className='text-[15px]  capitalize font-semibold'>
                              {skill?.name}{" "}
                            </span>
                            {index !== skills.length - 1 && " , "}
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              )}

              {hobbies?.filter((hobby) => hobby?.enabled)?.length > 0 && (
                <div className='w-full '>
                  <div className='flex items-center'>
                    <h2 className='inline'>Hobbies:</h2>

                    <span className='ml-3 flex'>
                      {hobbies
                        ?.filter((hobby) => hobby?.enabled === true)
                        .map((hobby, index) => (
                          <span key={hobby?._id}>
                            <span className='text-[14px] font-semibold inline'>{hobby?.name}</span>
                            {index !== hobbies.length - 1 && " , "}
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div> */}

      {/* <div
        className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
        id="largeResume"
      > */}

      <div className="relative">
        <div className="w-[205mm] h-40 bg-blue-500 absolute  z-0 mt-10">
          <h1 className="text-white ml-80 mt-8 text-5xl text-[25px]">
            {profile?.firstName} {profile?.lastName}
          </h1>
          <h6 className="text-white ml-80 mt-1 text-[16px] ">
            {profile?.role}
          </h6>
        </div>
        <div className="grid grid-cols-3">
          <div className="bg-slate-900 h-[292mm] ml-5 z-10">
            <img
              className="w-40 m-10 rounded-lg"
              //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
              src={profile?.image}
              alt="ProfilePhoto"
            />
            {skills?.filter((skills) => skills?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-2 border-white m-6 p-3">
                  <h1 className="font-medium text-lg text-white text-[16px] ">
                    SKILLS
                  </h1>
                  {skills
                    ?.filter((skills) => skills?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="font-normal   text-white text-[12px]">
                          {item.name}
                        </h1>
                        <li className="text-sm ml-4 text-white text-[12px]">
                          {item.level}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {social?.filter((social) => social?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-2 border-white m-6 p-3">
                  <h1 className="font-medium text-lg text-white text-[16px]">
                    SOCIAL
                  </h1>
                  {social
                    ?.filter((social) => social?.enabled === true)
                    .map((item) => (
                      <div className="ml-4 my-4 flex">
                        <img
                          src={
                            "https://www." + item.network + ".com/favicon.ico"
                          }
                          alt=""
                          className="w-5 h-5"
                        />
                        <Link href={item.url}>
                          <h1 className="ml-4 text-white text-[12px]">
                            {item.username}
                          </h1>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {awards?.filter((awards) => awards?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-2 border-white m-6 p-3">
                  <h1 className="font-medium text-lg text-white text-[16px]">
                    AWARDS
                  </h1>
                  {awards
                    ?.filter((awards) => awards?.enabled === true)
                    .map((item) => (
                      <div className="m-2">
                        <h1 className="text-white text-[12px]">
                          {item.awarder}
                        </h1>
                        <li className="text-white text-sm ml-4 text-[12px]">
                          {item.awarder}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {hobbies?.filter((hobbies) => hobbies?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-2 border-white m-6 p-3">
                  <h1 className="font-medium text-lg text-white text-[16px]">
                    HOBBIES
                  </h1>
                  {hobbies
                    ?.filter((hobbies) => hobbies?.enabled === true)
                    .map((item) => (
                      <div className="m-2">
                        <h1 className="text-white text-[12px]">{item.name}</h1>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div className="col-span-2">
            {objective && (
              <div>
                <div className="pt-48">
                  <div className="border-b-4 border-black m-4 p-5">
                    <h1 className="font-medium text-lg text-gray-600 text-[16px]">
                      ABOUT ME
                    </h1>
                    <p className="text-sm font-medium pt-1 text-[12px]">
                      {objective}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {work?.filter((wor) => wor?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-4 border-black m-4 p-2">
                  <h1 className="font-medium text-lg text-gray-600 text-[16px]">
                    WORK EXPERIENCE
                  </h1>
                  {work
                    ?.filter((wor) => wor?.enabled === true)
                    .map((item) => (
                      <div className="p-1">
                        <h1 className="font-medium ml-4 text-lg text-[12px]">
                          {item.company}
                        </h1>
                        <h2 className="font-medium text-xs ml-4 text-[12px]">
                          {item.from} - {item.to}
                        </h2>
                        <li className="ml-10 list-disc font-medium text-[12px]">
                          {item.designation}
                        </li>
                        <li className="ml-10 list-disc font-medium text-[12px]">
                          {item.website}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {education?.filter((education) => education?.enabled)?.length >
              0 && (
              <div>
                <div className="border-b-4 border-black m-4 p-2">
                  <h1 className="font-medium text-lg text-gray-600 text-[16px]">
                    EDUCATION
                  </h1>
                  {education
                    ?.filter((education) => education?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="font-medium ml-6 text-[12px]">
                          {item.institution}
                        </h1>
                        <h6 className="text-xs font-medium ml-6 text-[12px]">
                          {item.startDate} - {item.endDate}
                        </h6>
                        <li className="ml-8 font-medium text-[12px]">
                          {item.fieldOfStudy}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {awards?.filter((awards) => awards?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-4 border-black m-4 p-2">
                  <h1 className="font-medium text-lg text-gray-600 text-[16px]">
                    AWARDS
                  </h1>
                  {awards
                    ?.filter((awards) => awards?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="ml-8 text-normal font-medium text-[12px]">
                          {item.name}
                        </h1>
                        <li className="ml-12 text-sm font-medium text-[12px]">
                          {item.awarder}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
