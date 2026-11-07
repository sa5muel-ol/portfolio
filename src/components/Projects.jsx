import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  category,
  tags,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="relative flex items-center justify-center min-w-[300px] 
      h-[420px] cursor-pointer card-shadow mx-4">
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
        h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      <div
        className="absolute bottom-0 p-8 justify-start w-full 
        flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
        <div className="absolute inset-0 flex justify-end m-3">
          {repo && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(repo, '_blank');
              }}
              className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                flex justify-center items-center cursor-pointer
                sm:opacity-[0.9] opacity-[0.8]">
              <img
                src={github}
                alt="source code"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-timberWolf text-sm font-medium">{category}</span>
          <h2
            className="font-bold sm:text-[32px] text-[24px] 
            text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
            {name}
          </h2>
          <p
            className="text-silver sm:text-[14px] text-[12px] 
            max-w-3xl sm:leading-[24px] leading-[18px]
            font-poppins tracking-[1px]">
            {description}
          </p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-[12px] ${tag.color} font-medium`}>
                  #{tag.name}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-4 mt-4">
          {demo && (
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                window.open(demo, '_blank');
              }}
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
            </button>
          )}
          <Link
            to={`/projects/${id}`}
            onClick={(e) => e.stopPropagation()}
            className="text-timberWolf hover:text-eerieBlack 
            font-bold font-beckman items-center py-5 pl-2 pr-3 
            whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
            w-[125px] h-[46px] rounded-[10px] glassmorphism 
            sm:mt-[22px] mt-[16px] hover:bg-battleGray 
            transition duration-[0.2s] ease-in-out flex justify-center">
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Filter active projects and map image names to actual image imports
    const activeProjects = projectsData.projects
      .filter(project => project.is_active)
      .map(project => ({
        ...project,
        image: project.image ? (
          projectImages[`../assets/projects/${project.image}.png`]?.default ||
          projectImages[`../assets/projects/${project.image}.jpg`]?.default
        ) : ''
      }));
    setProjects(activeProjects);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>
          Earlier Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          Case studies from my data science work — the modeling foundation
          behind the experimentation I run now.
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-20">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
            />
          ))}
        </Slider>
        
        {/* Custom Pagination Indicator */}
        <div className="flex justify-center items-center mt-8 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-timberWolf font-bold">{currentSlide + 1}</span>
            <span className="text-taupe">/</span>
            <span className="text-timberWolf font-bold">{projects.length}</span>
          </div>
          <div className="flex gap-1">
            {[...Array(projects.length)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-timberWolf w-4'
                    : 'bg-taupe opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
