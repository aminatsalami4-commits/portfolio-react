import React from 'react'


// import { useState } from "react";

// const projects = [

  
//   {
//     name: "Solar Solutions",
//     url: "https://solar-solutions-xi.vercel.app",
//   },
//   {
//     name: "Project Two",
//     url: "https://example.org",
//   },
//   {
//     name: "My Portfolio Site",
//     url: "https://yourdomain.com",
//   },
// ];

// const Portfolio = () => {
//   const [activeProject, setActiveProject] = useState(projects[0]);

//   return (
//     <div className="container-fluid min-vh-100">

//       <div className="mb-5">
//         <h3 className='text-danger text-center mb-0' style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px", paddingTop: "1rem"}}><b>Portfolio</b></h3>
//         <h2 className='text-white text-center'  style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}>A showcase of what I've built</h2>
//       </div>

//       <div className="row">

//         {/* LEFT SIDE - PROJECT LIST */}
//         <div className="col-3 border-end p-3 bg-dark text-white">
//           <h5 className="mb-3">My Works</h5>

//           <div className="list-group">
//             {projects.map((project, index) => (
//               <button
//                 key={index}
//                 className={`list-group-item list-group-item-action ${
//                   activeProject.name === project.name ? "active-danger" : ""
//                 }`}
//                 onClick={() => setActiveProject(project)}
//               >
//                 {project.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE - PREVIEW */}
//         <div className="col-9 p-0">
//           <div className="border-bottom p-2 bg-danger text-white">
//             {activeProject.name}
//           </div>

//           <iframe
//             src={activeProject.url}
//             title="project-preview"
//             className="w-100"
//             style={{ height: "95vh", border: "none" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Portfolio


const projects = [
  {
    name: "Solar Solutions",
    description: "A renewable energy landing page",
    image: "/image 20.png",
    url: "https://solar-solutions-xi.vercel.app",
  },

  {
    name: "E-commerce Store",
    description: "A modern e-commerce platform",
    image: "/Frame 694.png",
    url: "https://ecommerce2-hazel.vercel.app",
  },

  {
    name: "Portfolio App",
    description: "My personal developer portfolio",
    image: "/me-contact.jpg",
    url: "https://your-portfolio.vercel.app",
  },
];

const Portfolio = () => {
  return (
    <div className="min-vh-100 mt-5">
      <div>
          <h3 className='text-danger text-center mt-3 mb-0' style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px", paddingTop: "1rem"}}><b>Portfolio</b></h3>
            <h2 className='text-white text-center'  style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}>A showcase of what I've built</h2>
        </div>

      <div className="container py-4">
        <div className="row g-5 px-3">

          {projects.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card shadow-sm h-100">

                {/* Preview Image */}
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.name}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5>{project.name}</h5>
                  <p className="text-muted">{project.description}</p>

                  <button
                    className="btn btn-danger"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Open Live Project
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Portfolio