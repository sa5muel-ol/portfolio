import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import projectsData from '../data/projects.json';

// Import all project images
const projectImages = {
  ...import.meta.glob('../assets/projects/*.png', { eager: true }),
  ...import.meta.glob('../assets/projects/*.jpg', { eager: true })
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectData = projectsData.projects.find(p => p.id === parseInt(id));
    if (projectData) {
      setProject({
        ...projectData,
        image: projectData.image ? (
          projectImages[`../assets/projects/${projectData.image}.png`]?.default ||
          projectImages[`../assets/projects/${projectData.image}.jpg`]?.default
        ) : ''
      });
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  const handleBackToProjects = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className={`${styles.sectionHeadTextLight}`}>Project not found</h2>
        <button
          onClick={handleBackToProjects}
          className="mt-4 text-taupe hover:text-timberWolf">
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-eerieBlack">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Project Details</p>
          <h3 className={`${styles.sectionHeadTextLight}`}>{project.name}</h3>
        </motion.div>

        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column - Image and Categories */}
            <div className="lg:w-1/2">
              {project.image ? (
                <div className="relative w-full h-[400px] overflow-hidden rounded-[24px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ) : (
                <div className="w-full h-[400px] bg-jetLight rounded-[24px] flex items-center justify-center">
                  <span className="text-timberWolf text-xl">No Image Available</span>
                </div>
              )}

              {/* Categories */}
              <div className="mt-4">
                <h3 className="text-timberWolf text-xl font-bold mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-jetLight px-3 py-1 rounded-full text-timberWolf text-sm">
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-timberWolf text-xl font-bold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-[14px] ${tag.color} font-medium`}>
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Project Details */}
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-timberWolf text-xl font-bold mb-2">Description</h3>
                  <p className="text-taupe">{project.description}</p>
                </div>

                {project.content && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-timberWolf text-xl font-bold mb-2">Problem</h3>
                      <p className="text-taupe">{project.content.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-timberWolf text-xl font-bold mb-2">Dataset</h3>
                      <p className="text-taupe">{project.content.dataset.Description}</p>
                      <a
                        href={project.content.dataset.Source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-timberWolf hover:text-eerieBlack mt-2 inline-block">
                        View Dataset Source →
                      </a>
                    </div>

                    <div>
                      <h3 className="text-timberWolf text-xl font-bold mb-2">Solution</h3>
                      <p className="text-taupe">{project.content.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-timberWolf text-xl font-bold mb-2">Tools & Packages</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.content.tools_and_packages.map((tool, index) => (
                          <span
                            key={index}
                            className="bg-jetLight px-3 py-1 rounded-full text-timberWolf text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-timberWolf text-xl font-bold mb-2">Target Industries</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.content.target_industries_sectors.map((industry, index) => (
                          <span
                            key={index}
                            className="bg-jetLight px-3 py-1 rounded-full text-timberWolf text-sm">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-timberWolf text-xl font-bold mb-2">Impact</h3>
                      <p className="text-taupe">{project.content.impact}</p>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex gap-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                        flex justify-center items-center cursor-pointer
                        sm:opacity-[0.9] opacity-[0.8]">
                      <img
                        src={github}
                        alt="source code"
                        className="w-4/5 h-4/5 object-contain"
                      />
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-demo flex justify-between 
                        sm:text-[16px] text-[14px] text-timberWolf 
                        font-bold font-beckman items-center py-5 pl-2 pr-3 
                        whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
                        w-[125px] h-[46px] rounded-[10px] glassmorphism 
                        hover:bg-battleGray hover:text-eerieBlack 
                        transition duration-[0.2s] ease-in-out"
                      onMouseOver={() => {
                        document
                          .querySelector('.btn-icon')
                          .setAttribute('src', pineappleHover);
                      }}
                      onMouseOut={() => {
                        document
                          .querySelector('.btn-icon')
                          .setAttribute('src', pineapple);
                      }}>
                      <img
                        src={pineapple}
                        alt="pineapple"
                        className="btn-icon sm:w-[34px] sm:h-[34px] 
                          w-[30px] h-[30px] object-contain"
                      />
                      LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-10">
        <button
          onClick={handleBackToProjects}
          className="text-taupe hover:text-timberWolf flex items-center gap-2">
          ← Back to Projects
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectDetails, 'project-details'); 