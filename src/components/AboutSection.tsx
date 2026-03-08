import { motion, type Easing } from "framer-motion";
import { Target, MapPin, Phone, Mail, Users, Rocket, Shield } from "lucide-react";

const ease: Easing = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease },
  }),
};

const values = [
  { icon: Rocket, title: "Innovation", desc: "We stay ahead with cutting-edge technologies and modern frameworks." },
  { icon: Shield, title: "Reliability", desc: "Delivering on time, every time — with quality you can trust." },
  { icon: Users, title: "Client First", desc: "Your success is our mission. We build lasting partnerships." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
            About Us
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-black text-primary mb-6">
            Who We Are
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed">
            Saym IT Solution is a forward-thinking IT company dedicated to building world-class digital products.
            With over 8 years of experience and 300+ successful projects, we turn ideas into impactful solutions.
          </motion.p>
        </motion.div>

        {/* Mission Banner */}
        <motion.div
          className="bg-primary rounded-2xl p-8 md:p-12 mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
              <Target className="w-7 h-7 text-secondary" />
            </div>
          </motion.div>
          <motion.p variants={fadeUp} custom={1} className="text-secondary font-heading font-semibold tracking-widest uppercase text-xs mb-3">
            Our Mission
          </motion.p>
          <motion.h3 variants={fadeUp} custom={2} className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground leading-snug max-w-2xl mx-auto">
            "Empowering businesses through elite digital solutions"
          </motion.h3>
        </motion.div>

        {/* Values */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              custom={i}
              className="glass rounded-xl p-8 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-7 h-7 text-secondary" />
              </div>
              <h4 className="font-heading text-xl font-bold text-primary mb-3">{v.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Office Info */}
        <motion.div
          className="bg-muted rounded-2xl p-8 md:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h4 variants={fadeUp} custom={0} className="font-heading text-xl font-bold text-primary mb-6 text-center">
            Our Office
          </motion.h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div variants={fadeUp} custom={1} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-primary text-sm">Address</p>
                <p className="text-muted-foreground text-sm">Bonomala Road, College Gate, Tongi, Gazipur</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={2} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-primary text-sm">Phone</p>
                <p className="text-muted-foreground text-sm">01616151002</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-primary text-sm">Email</p>
                <p className="text-muted-foreground text-sm">info@saymitsolution.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
