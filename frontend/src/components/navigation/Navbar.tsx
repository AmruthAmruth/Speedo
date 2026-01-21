import Button from '../forms/Button';

interface NavbarProps {
    onLoginClick?: () => void;
    className?: string;
}

const Navbar = ({ onLoginClick, className = '' }: NavbarProps) => {
    return (
        <nav className={`sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md ${className}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/30 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <span className="text-2xl font-black tracking-tight text-neutral-900 italic">
                            Speedo
                            <span className="text-primary-600">.</span>
                        </span>
                    </div>

                    {/* Actions Section */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={onLoginClick}
                            className="font-semibold shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
