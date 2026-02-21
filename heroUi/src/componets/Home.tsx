import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Link as LinkIcon, Scissors } from 'lucide-react';

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    // Handle navbar background on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans tracking-[-0.02em] relative overflow-hidden">

            {/* Abstract Red Ambient Glow (Background) */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center relative">
                            <span className="text-black font-bold text-xl">S</span>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-black"></div>
                        </div>
                        <span className="font-bold text-xl">Shortnr</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                        <a href="#features" className="hover:text-red-500 transition-colors">Features</a>
                        <a href="#pricing" className="hover:text-red-500 transition-colors">Pricing</a>
                        <a href="#api" className="hover:text-red-500 transition-colors">API</a>
                        <a href="#changelog" className="hover:text-red-500 transition-colors">Changelog</a>
                    </div>

                    <div className="flex items-center gap-4 text-sm font-medium">
                        <button className="text-white hover:text-red-400 transition-colors">Sign in</button>
                        <button className="bg-red-700/80 hover:bg-red-600 text-white px-5 py-2 rounded-full backdrop-blur-sm border border-red-500/30 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(185,28,28,0.4)]">
                            Sign Up Free
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-700/30 text-red-200 text-sm mb-8 backdrop-blur-md"
                >
                    <span>✨ 10M+ Links Shortened Monthly</span>
                    <ArrowRight size={14} className="text-red-400" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-[100px] leading-tight font-bold mb-6 tracking-[-0.04em]"
                >
                    Shorten URLs. <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Track Performance.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Transform long, messy links into clean, trackable short URLs in seconds. Perfect for marketers, creators, and anyone who shares links.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(185,28,28,0.3)]">
                        Start Shortening — It's Free
                    </button>
                    <span className="text-sm text-gray-500">No credit card required</span>
                </motion.div>

                {/* URL Shortener Input Widget */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="max-w-3xl mx-auto mt-20 p-6 md:p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-red-900/40 shadow-[0_0_40px_rgba(69,10,10,0.5)]"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <LinkIcon size={20} className="text-gray-500" />
                            </div>
                            <input
                                type="url"
                                placeholder="Paste your long link here..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                required
                            />
                        </div>
                        <button className="bg-gradient-to-r from-red-700 to-red-900 text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 whitespace-nowrap">
                            <Scissors size={18} />
                            Shorten URL
                        </button>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5 text-center">
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">10M+</div>
                            <div className="text-xs text-red-400 font-medium tracking-wide uppercase">Links</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">5B+</div>
                            <div className="text-xs text-red-400 font-medium tracking-wide uppercase">Clicks</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                            <div className="text-xs text-red-400 font-medium tracking-wide uppercase">Uptime</div>
                        </div>
                    </div>
                </motion.div>

            </main>
        </div>
    );
}