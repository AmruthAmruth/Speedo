import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'Features', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Demo', href: '#' },
            { name: 'API', href: '#' },
        ],
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Press Kit', href: '#' },
        ],
        resources: [
            { name: 'Documentation', href: '#' },
            { name: 'Help Center', href: '#' },
            { name: 'Community', href: '#' },
            { name: 'Contact', href: '#' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'GDPR', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: '#', label: 'Email' },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                Speedo
                            </h3>
                            <p className="text-neutral-400 mb-6 leading-relaxed">
                                Transform your GPS data into actionable insights. Industry-leading fleet management and vehicle tracking solution.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5 text-primary-400" />
                                    <span className="text-sm">123 Tech Street, San Francisco, CA</span>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                                    <Phone className="w-5 h-5 text-primary-400" />
                                    <span className="text-sm">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                                    <Mail className="w-5 h-5 text-primary-400" />
                                    <span className="text-sm">contact@speedo.com</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary-400/50 transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-primary-400 transition-colors" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h4 className="text-white font-bold mb-4 capitalize">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform transition-transform"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="border-t border-white/10 pt-12 mb-12"
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h4 className="text-2xl font-bold mb-3">Stay Updated</h4>
                        <p className="text-neutral-400 mb-6">Get the latest updates on features, industry insights, and special offers.</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-neutral-400 text-sm">
                        © {currentYear} Speedo. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-neutral-400">
                        <span className="flex items-center gap-2">
                            Made with <span className="text-red-500 animate-pulse">❤️</span> for Fleet Management
                        </span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
