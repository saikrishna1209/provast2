import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Chrono = ({ componentRef, filter = null }) => {
  const {
    profile,
    social,
    objective,
    education,
    awards,
    certifications,
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
    <div ref={componentRef} className="w-a4W bg-white mx-auto h-a4H my-5 ">
      <div className="grid grid-cols-5 relative">
        <div className="col-span-2 border-2 border-solid border-black h-[270mm] ml-5 mt-24 ">
          <img
            className=" mt-4 w-52 h-52 absolute top-1 ml-10 border-2  border-gray-600 z-10"
            //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
            src={profile?.image}
            alt="ProfilePhoto"
          />

          <div> 
            <h1 className="text-black mt-36 ml-16  font-medium text-3xl">
              {profile?.firstName}
            </h1>
            <h1 className="text-black ml-16 font-medium text-3xl">
              {profile?.lastName}
            </h1>
            <h6 className="font-normal text-lg ml-16 pt-2">
              {profile?.role}
            </h6>
          </div>
          <div>
            <h1 className="font-semibold text-lg ml-16 pt-4 p-1 text-[16px]">Contact</h1>
            <li className="font-medium ml-20 text-[12px]">{profile?.email}</li>
            <li className="font-medium ml-20 text-[12px]">{profile?.phone}</li>
            <li className="font-medium ml-20 text-[12px]">{profile?.dob}</li>
          </div>
          {skills?.filter((skill)=>skill?.enabled)?.length>0&&(
            <div>
                <h1 className="font-semibold text-lg ml-16 pt-4 text-[16px]">Skills</h1>
               {skills?.filter(skill=>skill?.enabled===true).map((item)=>(
                <div>
                    <h1 className="font-semibold ml-16 p-2 text-[12px] ">{item.name}</h1>
                    <h1 className=" ml-16 px-2 text-[12px]">{item.level}</h1>
                  </div>
               ))}
              </div>
          )}
         {social?.filter((social)=>social?.enabled)?.length>0&&(
            <div>
                <h1 className="font-semibold  text-lg ml-16 pt-4 text-[16px]">
                  Social Network
                </h1>
               {social?.filter(social=>social?.enabled===true).map((item)=>(
                <div className="ml-20 my-4 flex text-[12px]">
                    <img
                      src={"https://www." + item.network + ".com/favicon.ico"}
                      alt=""
                      className="w-5 h-5"
                    />
                    <Link href={item.url}>
                      <h1 className="ml-4 text-[12px]">{item.username}</h1>
                    </Link>
                  </div>
               ))}
              </div>
         )}
          {hobbies?.filter((hobbies)=>hobbies?.enabled)?.length>0 &&(
            <div>
                <h1 className="font-semibold  text-lg ml-16 pt-2 text-[16px]">Hobbies</h1>
               {hobbies?.filter(hobbies=>hobbies?.enabled===true).map((item)=>(
                <div>
                    <h1 className="px-20 font-medium text-sm p-1 text-[12px]">{item.name}</h1>
                  </div>
               ))}
              </div>
          )}
          {languages?.filter((languages)=>languages?.enabled)?.length>0&&(
            <div>
                <h1 className="font-semibold  text-lg ml-16 pt-2">Languages</h1>
                 {languages?.filter(languages=>languages?.enabled===true).map((item)=>(
                     <div>
                      <h1 className="px-20 font-medium text-sm p-1">{item.name}</h1>
                    </div>
                 ))}
                </div>
          )}

        
      </div>
      <div className="col-span-3">
        {objective && (
            <div>
                <h1 className="font-semibold text-xl ml-8 mt-20 text-[16px]">About</h1>
                <p className="ml-8 p-2 pt-1 text-[12px]">{ objective}</p>
              </div>
        )}
          {education?.filter((education)=>education?.enabled)?.length>0&&(
            <div className="p-2 ">
                <h1 className="font-semibold text-xl ml-8 text-[16px] ">Education</h1>
               {education?.filter(education=>education?.enabled===true).map((item)=>(
                <div>
                    <h1 className="font-semibold ml-8 text-[12px]">{item.institution}
                    <h6 className="text-xs  font-medium  ml-80 text-[12px]">
                      {item.startDate.slice(0,4)} - {item.endDate.slice(0,4)}
                    </h6>
                    </h1>
                    <li className="ml-14 font-medium text-[12px]">{item.fieldOfStudy}</li>
                  </div>
               ))}
              </div>
          )}
         {work?.filter((work)=>work?.enabled)?.length>0 &&(
            <div className="p-2 px-0">
                <h1 className="font-semibold text-xl ml-8 pt-2 text-[16px]">
                  Work Experience
                </h1>
               {work?.filter(work=>work?.enabled===true).map((item)=>(
                <div className="p-1">
                    <h1 className="font-semibold ml-8 text-lg text-[12px]">{item.company}</h1>
                    <h2 className="font-medium text-xs ml-80 text-[12px]">
                      {item.from.slice(0,10)} - {item.to.slice(0,10)}
                    </h2>
                    <li className="ml-14 list-disc font-medium text-[12px]">
                      {item.designation}
                    </li>
                    <li className="ml-14 list-disc font-medium text-[12px]">
                      {item.website}
                    </li>
                  </div>
               ))}
              </div>
         )}
        {certifications?.filter((certifications)=>certifications.enabled)?.length>0 &&(
            <div>
                <h1 className="font-bold text-xl ml-8 pt-2 text-[16px] ">
                  Certifications
                </h1>
             {certifications?.filter(certifications=>certifications?.enabled===true).map((item)=>(
                <div>
                    <h1 className="ml-10 text-normal font-semibold text-[12px]">
                      {item.title}
                    </h1>
                    <li className="ml-14 text-sm font-medium text-[12px]">{item.issuer}</li>
                  </div>
             ))}
              </div>
            )}
     {awards?.filter((awards)=>awards.enabled)?.length>0 &&(
        <div>
            <h1 className="font-semibold text-xl ml-8 pt-2 text-[16px]">
                Awards
              </h1>
              {awards?.filter(awards=>awards?.enabled===true).map((item)=>(
                <div>
                    <h1 className="ml-8 text-normal font-semibold text-[12px]">
                      {item.name}
                    </h1>
                    <li className="ml-12 text-sm font-medium text-[12px]">{item.awarder}</li>
                  </div>
              ))}
            </div>
           
     )}
        </div>
    </div>
     </div>
  );
};



