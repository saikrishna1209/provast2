import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";

export const Ruby = ({ componentRef, filter = null }) => {
  const { profile, education, awards, projects, work, skills, hobbies, languages, layout } =
    useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-xl uppercase font-bold text-gray-700 border-b-2 border-black mb-2 pb-1";
  return (
    <div ref={componentRef} className='w-a4W bg-white mx-auto h-a4H my-5'>
      <div className='px-14 py-8 h-full' style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)` }}>
        <div className='w-full py-2 text-center'>
          <span className='text-4xl not-italic font-bold text-gray-700'>
            {rename(profile?.firstName)} {rename(profile?.lastName)}
          </span>
        </div>
        <div className='w-full border-gray-200 py-1 text-center mb-5'>
          <span className='text-sm italic font-semibold text-gray-700 '>
            <span className={`${filter?.removePhoneNumber ? "blur" : ""}`}>
              +91 - {profile?.phone}
            </span>{" "}
            <span className={`${filter?.removeEmail ? "blur" : ""} `}>
              &middot; {profile?.email}
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
                      <div>
                        <span className='font-semibold'>GPA : </span>
                        <span className='text-sm'>{option?.gpa}</span>
                      </div>
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
        <div className='my-5'>
          {work?.filter((option) => option?.enabled)?.length > 0 && (
            <div>
              <h4 className={headingClass}>WORK & LEADERSHIP EXPERIENCE</h4>
              {work?.map((option) => {
                if (option?.enabled === true) {
                  return (
                    <div key={option?._id} className='mb-2'>
                      <div className='flex items-center justify-between'>
                        <div className='text-[15px] font-semibold'>
                          <span className='italic text-xs text-slate-500'>Worked At - </span>
                          {option?.company},{" "}
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
                        <div className='markdown text-xs capitalize'>
                          <MarkdownRenderer>{option?.summary?.data}</MarkdownRenderer>
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          )}

          {projects?.filter((project) => project?.enabled)?.length > 0 && (
            <div className='mt-4'>
              <h4 className={headingClass}>Projects</h4>
              {projects
                ?.filter((project) => project?.enabled === true)
                .map((project) => (
                  <div key={project?._id} className='mb-2'>
                    <div>
                      <div className='flex justify-between'>
                        <div className='text-[15px] font-semibold'>
                          <span className='italic text-xs text-slate-500'>Project - </span>
                          {project?.name}
                        </div>
                        <div className='relative font-semibold text-sm '>
                          <div>{project?.website}</div>
                          <div className='absolute w-full bottom-1 left-0 border-t border-gray-500'></div>
                        </div>
                      </div>
                      {project?.summary?.enabled && (
                        <div className='markdown text-xs capitalize'>
                          <MarkdownRenderer>{project?.summary?.data}</MarkdownRenderer>
                        </div>
                      )}
                    </div>
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
              <h1 className={headingClass}>SKILLS, ACTIVITIES & INTERESTS</h1>
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
                              {language?.fluency && (
                                <span className='text-xs lowercase'>({language?.fluency})</span>
                              )}
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
                              {/* {skill?.level && (
                                <span className='text-xs lowercase'>
                                  ({skill?.level})
                                </span>
                              )} */}
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

        {awards?.filter((award) => award?.enabled)?.length > 0 && (
          <div className='w-full'>
            <h1 className={headingClass}>Awards</h1>
            {awards
              ?.filter((award) => award?.enabled === true)
              .map((award) => (
                <div key={award?._id} className='mb-2'>
                  <div className='flex items-center justify-between'>
                    <div className='text-[15px] font-semibold'>
                      {award?.name},{" "}
                      <span className='text-[12px]  tracking-wide text-gray-500'>
                        awarded by {award?.awarder}
                      </span>
                    </div>
                    <div className='text-xs font-bold text-gray-500'>
                      {new Date(award?.date).getFullYear()}
                    </div>
                  </div>

                  {award?.summary?.enabled && (
                    <div className='markdown  text-xs'>
                      <MarkdownRenderer>{award?.summary?.data}</MarkdownRenderer>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
