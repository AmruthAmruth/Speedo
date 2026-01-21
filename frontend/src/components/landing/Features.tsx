import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Bus, Building2, Shield, Zap, BarChart3, MapPinned, Clock } from 'lucide-react';

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const useCases = [
        {
            icon: Truck,
            title: 'Fleet Management',
            description: 'Track trucks, taxis, and delivery vehicles in real-time. Reduce fuel wastage and monitor driver behavior.',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Bus,
            title: 'Transport Companies',
            description: 'Verify route compliance and measure station stoppages for buses and public transport.',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: Building2,
            title: 'Logistics & Construction',
            description: 'Track machine usage time and identify idle equipment to maximize productivity.',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            icon: Shield,
            title: 'Government Services',
            description: 'Maintain vehicle movement history and conduct comprehensive trip audits.',
            gradient: 'from-green-500 to-emerald-500',
        },
    ];

    const features = [
        {
            icon: MapPinned,
            title: 'Visual Route Mapping',
            description: 'See exactly where vehicles traveled on interactive maps instead of raw coordinates.',
        },
        {
            icon: BarChart3,
            title: 'Distance Analytics',
            description: 'Automatically calculate total distance traveled with precision.',
        },
        {
            icon: Clock,
            title: 'Stop & Idle Detection',
            description: 'Track how long vehicles stopped and idled to reduce fuel waste.',
        },
        {
            icon: Zap,
            title: 'Overspeed Alerts',
            description: 'Get instant notifications when vehicles exceed speed limits.',
        },
    ];

    return (
        <section className="py-24 bg-neutral-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* How It Works Section */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-20"
                >
                    <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                        How It Works
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-6">
                        From Raw Data to{' '}
                        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            Clear Insights
                        </span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12">
                        Speedo transforms complex GPS coordinates into human-readable trip reports with visual maps and actionable analytics.
                    </motion.p>

                    {/* Process Flow */}
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
                        {[
                            { step: '1', title: 'GPS Data', desc: 'Raw coordinates' },
                            { step: '2', title: 'Processing', desc: 'AI analysis' },
                            { step: '3', title: 'Insights', desc: 'Visual reports' },
                        ].map((item, index) => (
                            <div key={item.step} className="flex items-center gap-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                                        {item.step}
                                    </div>
                                    <h3 className="mt-4 text-lg font-bold text-neutral-900">{item.title}</h3>
                                    <p className="text-sm text-neutral-600">{item.desc}</p>
                                </div>
                                {index < 2 && (
                                    <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300"></div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Key Features Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center mb-4">
                                <feature.icon className="w-7 h-7 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Use Cases Section */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-12"
                >
                    <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
                        Industry Applications
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-6">
                        Trusted by Industry Leaders
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12">
                        From fleet management to government services, Speedo powers mission-critical operations across industries.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {useCases.map((useCase) => (
                        <motion.div
                            key={useCase.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                    <useCase.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{useCase.title}</h3>
                                <p className="text-neutral-600 leading-relaxed">{useCase.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
