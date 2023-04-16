import Image from "next/image";
import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import {FiMail} from "react-icons/fi"
import { BsTelephone} from "react-icons/bs";
import {VscDebugBreakpointLog} from "react-icons/vsc";
import {MdSchool} from "react-icons/md";
import {FaSquareFull} from "react-icons/fa";
import {BsFillAwardFill} from "react-icons/bs";
import {MdWork} from "react-icons/md"

import { useResumeContext } from "../../../context/ResumeContext";
import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";
export const Dublin = React.forwardRef(function NonCore({ componentRef }) {
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
  return (
    <div
      ref={componentRef}
      style={{ fontFamily: layout?.font }}
      className="flex my-5 w-a4W bg-white mx-auto h-a4H"
    >
      <div className="first w-[85mm] h-[297mm] bg-emerald-700">
            <div className="photobg bg-slate-300 w-[150px] h-[150px] relative top-16 left-16"></div>
            <div className="photo">
              <img
                src={profile?.image}
                className="w-[150px] h-[150px] relative top-[-95px] left-[75px]"
              ></img>
            </div>
            <div className="firstone w-[85mm] relative top-[-100px]">
              <div className="personal pt-5">
                <div className="dob pl-10 pt-3 text-white">
                <MdDateRange className="inline"></MdDateRange>
                  {/* <i className="bx bxs-calendar pr-4 text-lg text-white"></i> */}
                  <span className="text-base relative top-[2px] left-2 text-white">
                    {profile?.dob}
                  </span>
                </div>
                <div className="phone pl-10 pt-3 text-white">
                  <BsTelephone className="inline"></BsTelephone>
                  <span class="text-base relative top-[1px] left-2 text-white">
                    {profile?.phone}
                  </span>
                </div>
                <div className="mail pl-10 pt-3 pb-2 text-white">
                <FiMail className="inline"></FiMail>
                  <span class="text-base relative top-[1px] left-2 text-white">
                    {profile?.email}
                  </span>
                </div>
                {social?.filter((soc) => soc?.enabled)?.length > 0 && (
                <div className="social pl-10 pt-1 pb-2 flex">
                  {social
                    ?.filter((soc) => soc?.enabled === true)
                    .map((item) => (
                      <div className="pr-2">
                        <span>
                          <Link href={item.url}>
                            <img
                              src={
                                "https://www." +
                                item.network +
                                ".com/favicon.ico"
                              }
                              className="w-5 grayscale-[40%]"
                            ></img>
                          </Link>
                        </span>
                      </div>
                    ))}
                </div>
              )}
              </div>
              {education?.filter(edu=>edu?.enabled)?.length>0 && (
                <div className="education">
                <h2 className="text-center text-base  font-sans font-bold text-zinc-200">
                  E D U C A T I O N
                </h2>
                {education?.filter(edu=>edu?.enabled===true).map(item=>(
                      
                     <p className="pl-10 pr-5 pt-2 text-sm">
                      {/* <VscDebugBreakpointLog className="inline text-white"></VscDebugBreakpointLog> */}
                      {/* <MdSchool className="text-white inline text-lg relative right-1 bottom-[2px]"></MdSchool> */}

                     <span className="font-medium text-white">
                       ➣ {item.institution}
                     </span>
                     <span className="text-white"> in </span>
                     <span className="font-medium text-white">
                       {item.fieldOfStudy}
                       <br />({item.startDate.slice(0,4)} - {item.endDate.slice(0,4)})
                     </span>
                     <br />
                     <i className="bx bxs-graduation text-white"></i>
                     <span className="text-white">
                       {" "}
                       {item.typeOfDegree} in {item.fieldOfStudy} ({item.gpa})
                     </span>
                   </p>
                ))}
              </div>
              )}
              {certifications?.filter(cert=>cert?.enabled)?.length>0 && (
                <div className="certifications">
                <h2 className="text-center text-base font-sans font-bold pt-3 text-zinc-200 ">
                  C E R T I F I C A T I O N S
                </h2>
                {certifications?.filter(cert=>cert?.enabled===true).map((item) => (
                  <p className="pl-10 pr-5 pt-2 text-sm text-white">
                    {/* <FaSquareFull className="inline text-white text-[10px] relative right-1 bottom-[2px]"></FaSquareFull> */}
                    <span className="text-white">
                    ➣ {item.title} from {item.issuer}
                    </span>
                  </p>
                ))}
              </div>
              )}
              {skills?.filter(skill=>skill?.enabled)?.length>0 && (
                <div className="skills">
                <div className="pl-10">
                  <h2 className="text-center text-base  font-sans font-bold pt-5 pb-1 text-zinc-300">
                    S K I L L S
                  </h2>
                  {skills?.filter(skill=>skill?.enabled===true).map(item=>(
                <span className="pr-3 text-sm text-white">
                    {item.name}{" "}
                </span>
                  ))}
                </div>
              </div>
              )}
              {hobbies?.filter(hob=>hob?.enabled)?.length>0 && (
                <div className="hobbies">
                <div className="pl-10">
                  <h2 className="text-center text-base  font-sans font-bold pt-5 pb-1 text-zinc-300">
                    H O B B I E S
                  </h2>
                  {hobbies?.filter(hob=>hob?.enabled===true).map((item) => (
                    <span className="pr-2 text-sm text-white">
                      {item.name}{" "}
                    </span>
                  ))}
                </div>
              </div>
              )}
              {languages?.filter(lang=>lang?.enabled)?.length>0 && (
                <div className="languages">
                <div className="pl-10">
                  <h2 className="text-center text-base  font-sans font-bold pt-5 pb-1 text-zinc-300">
                    L A N G U A G E S
                  </h2>
                  {languages?.filter(lang=>lang?.enabled===true).map((item) => (
                    <span className="pr-2 text-sm text-white">
                      {item.name}{" "}
                    </span>
                  ))}
                </div>
              </div>
              )}
            </div>
          </div>
          <div className="second bg-emerald-100 w-[125mm] h-[297mm]">
            <div className="name">
              <div className="text-lg mx-20 mt-10 font-semibold border-b-[1px] border-gray-600 font-serif">
                <h1>{profile?.firstName.toUpperCase()}</h1>
                <h1>{profile?.lastName.toUpperCase()}</h1>
                <h2 className="text-base font-normal py-3">
                  {profile?.role}
                </h2>
              </div>
            </div>
            <div className="career-objective">
              <h2 className="text-center text-base heading font-sans font-bold pt-3">
                C A R E E R O B J E C T I V E
              </h2>
              <p className="pl-10 pr-5 pt-2 text-sm">{objective}</p>
            </div>
            {work?.filter(wor=>wor?.enabled)?.length>0 && (
                <div className="experience">
                <h2 className="text-center text-base heading font-sans font-bold pt-5">
                  E X P E R I E N C E
                </h2>
                {work?.filter(wor=>wor?.enabled===true).map((item) => (
                  <p className="pl-10 pr-5 pt-2 text-sm">
                    {/* <MdWork className="inline relative bottom-[2px] right-1 text-zinc-700"></MdWork> */}
                    <span className="font-medium text-sm pr-3">
                    ➣ {item.designation} in {item.company}
                    </span>
                    <br></br>({item.from.slice(0,4)} - {item.to.slice(0,4)})<br />
                    <Link href={item.website}>{item.website}</Link>
                    <br></br>
                    <span className="text-sm">{item.summary.data}</span>
                  </p>
                ))}
              </div>
            )}
            {projects?.filter(pro=>pro?.enabled)?.length>0 && (
                <div className="projects">
                <h2 className="text-center text-base heading font-sans font-bold pt-2 heading">
                  P R O J E C T S
                </h2>
                {projects?.filter(pro=>pro?.enabled===true).map((item) => (
                  <p className="pl-10 pr-5 pt-1 text-sm">
                    {/* <FaSquareFull className="inline text-zinc-700 text-[10px] relative right-1 bottom-[2px]"></FaSquareFull> */}
                    <span className="font-medium pr-3">➣ {item.name}</span> (
                      {item.from.slice(0,4)} - {item.to.slice(0,4)})<br />
                    <a href={item.website}>{item.website}</a>
                    <br></br>
                    <span className="text-sm">{item.summary.data}</span>
                  </p>
                ))}
              </div>
            )}
            {awards?.filter(awa=>awa?.enabled)?.length>0 && (
                <div className="awards">
                <h2 className="text-center text-base heading font-sans font-bold pt-2">
                  A W A R D S
                </h2>
                {awards?.filter(awa=>awa?.enabled===true).map((item) => (
                  <p className="pl-10 pr-5 pt-1 text-sm">
                    {/* <BsFillAwardFill className="inline relative right-1 bottom-[2px] text-zinc-700"></BsFillAwardFill> */}
                    <span className="font-medium">➣ {item.name}</span> from{" "}
                    {item.awarder}
                  </p>
                ))}
              </div>
            )}
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
});

// export default function Preview({ userInfo }) {
//   return (
//     userInfo && (
//           <hr />
//           <hr />
//         </div>
//
//           <hr />
//           <div>
//             <h3>Areas of Expertise</h3>
//             <div>
//               <h5>Tech skills:</h5> {userInfo.techSkills}
//             </div>
//             <h5>Non Tech Skills:</h5>
//             {userInfo.nonTechSkills &&
//               userInfo.nonTechSkills.map((nts) => {
//                 return (
//                   <div key={nts.id} id={nts.id}>
//                     <div>•{nts.nonTechSkill}</div>
//                   </div>
//                 );
//               })}
//           </div>
//           <hr />
//
//           <hr />
//         </div>
//       </div>
//     )
//   );
// }
