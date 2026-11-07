import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const contactLinks = [
  {
    label: 'Email',
    value: 'ninsiimasam256@gmail.com',
    href: 'mailto:ninsiimasam256@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/samuel-ninsiima',
    href: 'https://linkedin.com/in/samuel-ninsiima',
  },
  {
    label: 'GitHub',
    value: 'github.com/sa5muel-ol',
    href: 'https://github.com/sa5muel-ol',
  },
];

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          The fastest way to reach me is email or LinkedIn — I read both.
        </p>

        <div className="mt-10 flex flex-col gap-6 font-poppins">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="bg-eerieBlack py-4 px-6
              text-timberWolf rounded-lg font-medium
              hover:bg-battleGray hover:text-eerieBlack
              transition duration-[0.2s] ease-in-out">
              <span className="text-taupe text-[14px] block">
                {link.label}
              </span>
              {link.value}
            </a>
          ))}
        </div>

        <p className="mt-10 text-taupe text-[14px]">
          © 2026 Samuel Ninsiima
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
