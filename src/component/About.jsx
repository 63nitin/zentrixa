import { motion } from "framer-motion";
import { FaServer, FaCode, FaShieldAlt, FaRocket } from "react-icons/fa";
import { FiCpu, FiDatabase, FiCloud, FiLayers } from "react-icons/fi";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20 max-w-4xl mx-auto"
        >
          <span className="text-green-600 font-semibold text-sm md:text-base tracking-wider">ABOUT ZENTRIXA</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Powering <span className="text-green-600">Digital Transformation</span> with Cutting-Edge Solutions
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative w-full"
          >
            <div className="relative group">
              <img 
                src="/assets/tech-team.jpg" // Replace with office image
                alt="Zentrixa Tech Team"
                className="w-full rounded-xl shadow-xl transform group-hover:scale-[1.01] transition-all duration-500 z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-green-400 rounded-xl z-0 hidden lg:block"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-5 -left-5 bg-green-600 text-white py-3 px-5 rounded-lg shadow-lg z-20 hidden lg:flex items-center gap-3">
              <FaRocket className="text-xl" />
              <div>
                <p className="font-bold text-lg">10+</p>
                <p className="text-xs">Years in Tech Innovation</p>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Zentrixa – Where <span className="text-green-600">Technology</span> Meets <span className="text-green-600">Business Excellence</span>
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At Zentrixa, we drive digital transformation through innovative software solutions, cloud infrastructure, and AI-powered platforms. from a long time, we've been helping businesses leverage technology to achieve operational excellence and competitive advantage in the digital age.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
              {[
                {
                  icon: <FaServer className="text-xl" />,
                  title: "Cloud Infrastructure",
                  desc: "Scalable and secure cloud solutions"
                },
                {
                  icon: <FaCode className="text-xl" />,
                  title: "Custom Software",
                  desc: "Tailored to your business needs"
                },
                {
                  icon: <FiCpu className="text-xl" />,
                  title: "AI & Machine Learning",
                  desc: "Intelligent automation solutions"
                },
                {
                  icon: <FaShieldAlt className="text-xl" />,
                  title: "Cyber Security",
                  desc: "Enterprise-grade protection"
                },
                {
                  icon: <FiDatabase className="text-xl" />,
                  title: "Big Data",
                  desc: "Actionable insights from data"
                },
                {
                  icon: <FiLayers className="text-xl" />,
                  title: "DevOps Services",
                  desc: "Streamlined development cycles"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-3 p-3 bg-gray-50 hover:bg-white rounded-lg transition-all shadow-sm hover:shadow-md"
                >
                  <div className="bg-green-100 p-2 rounded-lg text-green-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/contact"
                className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg shadow-md transition-all text-center text-sm sm:text-base"
              >
                Schedule a Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/solutions"
                className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-medium rounded-lg shadow-sm transition-all text-center text-sm sm:text-base"
              >
                Explore Solutions
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28"
        >
          <h3 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-8">
            Trusted by innovative companies worldwide
          </h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 items-center opacity-80 hover:opacity-100 transition-opacity">
            {["AWS", "Microsoft", "Google Cloud", "Docker", "Kubernetes", "React", "Node.js", "Python"].map((tech, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 font-medium text-sm sm:text-base"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;