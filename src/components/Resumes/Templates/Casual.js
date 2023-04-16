import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Casual = ({ componentRef, filter = null }) => {
  const { profile, objective, education, work, skills, languages,projects,certifications, social,layout,hobbies,awards } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-xl captialize font-bold text-gray-700 border-b-2 border-black mb-2 pb-1";
  return (
    <div ref={componentRef} className='my-5 w-a4W bg-white mx-auto h-a4H'>
      <div className='py-2 px-2 h-full' >
        {console.log("profile",social)}


{/*         
        <div className='w-full py-2 text-center '>
          <span className='text-4xl not-italic font-bold text-gray-700 '>
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

        <div className='w-full'>
          <h1 className={headingClass}>Objective</h1>
          {objective && (
            <div className='w-full'>
              <h4 className='inline italic text-lg font-semibold '>Profile Summary</h4>
              <h4 className='markdown text-[13.5px] tracking-wide mt-3 mb-4'>
                <MarkdownRenderer>{objective}</MarkdownRenderer>
              </h4>
            </div>
          )}
        </div>

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
                      {option?.institution},{" "}
                      <span className='text-sm font-semibold'>
                        {new Date(option?.endDate).getFullYear()}
                      </span>
                    </h3>
                    <span className='text-[13px]'>
                      {option?.fieldOfStudy}
                      <span className='text-sm'> &middot; {option?.gpa}</span>
                    </span>
                    {option?.summary?.enabled && (
                      <div className='ml-2 flex items-center'>
                        <span>&middot;</span>
                        <span className='markdown inline-block text-sm tracking-wide text-gray-700'>
                          <MarkdownRenderer>{option?.summary?.data}</MarkdownRenderer>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className='my-5'>
          {(skills?.filter((skill) => skill?.enabled)?.length > 0 ||
            languages?.filter((language) => language?.enabled)?.length > 0) && (
            <div>
              <h1 className={headingClass}>Skills & Interests</h1>
              {languages?.filter((language) => language?.enabled)?.length > 0 && (
                <div className='w-full '>
                  <div className='flex items-center'>
                    <h2 className='inline'>Language Competencies: </h2>
                    <span className='ml-3 flex'>
                      {languages
                        ?.filter((language) => language?.enabled === true)
                        .map((language, index) => (
                          <span
                            key={language?._id}
                            className='flex justify-between items-center my-1'
                          >
                            <span className='text-xs capitalize font-semibold'>
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
                            <span className='text-xs  capitalize font-semibold'>
                              {skill?.name}{" "}
                            </span>
                            {index !== skills.length - 1 && " , "}
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div> */}



<div className="grid grid-cols-3">
            <div>
                <div className="col-span-1 bg-gray-300 h-[100%] w-[95%]">
                    <div>
                        <img
                    className="rounded-full w-[119px] ml-10 pt-3"
                    //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                    src={profile?.image}
                    alt="ProfilePhoto"
                  />
                    </div>
               
                  <div>
                    <h1 className="font-medium mx-8 my-2  text-lg  text-orange-800 mt-5 text-[16px]">Details</h1>
                    <h2 className=" font-medium mx-8  text-black text-[12px] ">Phone</h2>
                    <h6 className=" px-8 text-[12px]">{profile?.phone}</h6>
                    <h2 className=" font-medium px-8 text-[12px] text-black">Email</h2>
                    <h6 className=" px-8 text-[12px]">{profile?.email}</h6>
                    <h2 className=" font-medium px-8  text-black text-[12px]">Date Of Birth</h2>
                    <h6 className=" px-8 text-[12px]">{profile?.dob}</h6>
                  </div>
                 {skills?.filter((skill)=>skill?.enabled)?.length>0&&(
                   <div>
                   <h1 className="font-medium mx-8 my-0 text-orange-800 text-lg pt-5 text-[16px]">Skills</h1>
                   {skills?.filter(skill=>skill?.enabled===true).map((item)=>(
                    <div>
                    <h1 className="font-medium ml-8 text-[12px]">{item.name}</h1>
                    <h2 className="ml-8 text-[12px]">{item.level}</h2>
                </div>
                   ))}
                 </div>
                 )}
                  {social?.filter((social)=>social?.enabled)?.length>0 &&(
                    <div>
                    <h1 className="font-medium mx-8 my-0 text-orange-800 text-lg pt-5 text-[16px]">Social Network</h1>
                  {social?.filter(social=>social?.enabled===true).map((item)=>(
                     <div className="ml-8 my-4 flex text-[12px]">
                     <img src={"https://www."+item.network+".com/favicon.ico"} alt=""  className="w-5 h-5"/>
                     <Link href={item.url}><h1 className="ml-4 text-[12px]">{item.username}</h1></Link>
                 </div>
                  ))}
                  </div>
                  )}
                 {hobbies?.filter((hobbies)=>hobbies?.enabled)?.length>0 &&(
                   <div>
                   <h1 className="font-medium mx-8 text-lg text-orange-800 pt-5 text-[16px]">Hobbies</h1>
                   {hobbies?.filter(hobbies=>hobbies?.enabled===true).map((item)=>(
                    <div>
                    <h1 className="px-8 text-[12px]">{item.name}</h1>
                </div>
                   ))}
                   </div>
                 )}
                  {languages?.filter((languages)=>languages?.enabled)?.length>0 &&(
                    <div>
                    <h1 className="font-medium px-8 text-lg text-orange-800 pt-5 text-[16px]">Languages</h1>
                    {languages?.filter(languages=>languages?.enabled===true).map((item)=>(
                      <div>
                      <h1 className="px-8 text-[12px]">{item.name}</h1>
                  </div>
                    ))}
                    </div>
                  )}
                 
                  </div>
                </div>
                <div className="col-span-2 p-2 ">
                    <h1 className="mt-12 text-5xl text-[25px] font-semi-bold ">{profile?.firstName} {profile?.lastName}</h1>
                    <h2 className="font-medium mt-2 ">{profile?.role}</h2>
                   {objective &&(
                     <div>
                        <h1 className="font-medium text-orange-800 text-lg text-[16px] pt-12">Profile</h1>
                        <p className="text-[12px]">{objective}</p>
                    </div>
                   )}
                   {work?.filter((work)=>work?.enabled)?.length>0&&(
                     <div>
                     <h1 className="font-medium text-orange-800 text-lg pt-4 text-[16px]">Employement History</h1>
                    {work?.filter(work=>work?.enabled===true).map((item)=>(
                       <div>
                                 <h1 className="font-medium text-[12px]">{item.company}</h1>
                                 <h2 className="font-semibold text-xs text-[12px]">{item.from.slice(0,8)} - {item.to.slice(0,8)}</h2>
                                 <li className="ml-8 list-disc text-[12px]">{item.designation}</li>
                                 <li className="ml-8 list-disc text-[12px]">{item. website}</li>
                             </div>
                    ))}

                 </div>
                   )}
                   {education?.filter((education)=>education?.enabled)?.length>0 &&(
                     <div>
                     <h1 className="font-medium text-orange-800 text-lg pt-4 text-[16px]">Education</h1>
                    {education?.filter(education=>education?.enabled===true).map((item)=>(
                       <div>
                       <h1 className="font-medium text-[12px]">{item.institution}</h1>
                       <h6 className="text-xs font-semibold text-[12px]">{item.startDate.slice(0,8)} - {item.endDate.slice(0,8)}</h6>
                       <li className="px-8 text-[12px]">{item.fieldOfStudy}</li>
                   </div>
                    ))}
                 </div>
                   )}
                  {projects?.filter((projects)=>projects?.enabled)?.length>0 &&(
                      <div>
                      <h1 className="font-medium text-orange-800 text-lg pt-4 text-[16px]">Projects</h1>
                     {projects?.filter(projects=>projects?.enabled===true).map((item)=>(
                        <div>
                        <h2 className="font-medium text-[12px]">{item.name}</h2>
                        <h6 className="text-xs font-semibold     text-[12px]">{item.from.slice(0,4)} - {item.to.slice(0,4)}</h6>
                        <li className="text-sm px-8 text-[12px]">{item.website}</li>

                    </div>
                     ))}
                  </div>
                  )}
                    {certifications?.filter((certifications)=>certifications?.enabled)?.length>0 &&(
                      <div>
                      <h1 className="font-medium text-orange-800 text-lg pt-4 text-[16px]">Certifications</h1>
                     {certifications?.filter(certifications=>certifications?.enabled===true).map((item)=>(
                       <div>
                       <h2 className="font-medium text-[12px]">{item.name}</h2>
                       <h6 className="text-xs font-semibold text-[12px]">{item.from} - {item.to}</h6>
                       <li className="text-sm px-8 text-[12px]">{item.website}</li>
                      

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
  );
};
