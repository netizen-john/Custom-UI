"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  Bell,
  User,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Globe,
  Zap,
  Sparkles,
  Heart,
  Star,
  TrendingUp,
  Shield,
  Award,
} from "lucide-react";

const ProGlassmorphismNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [notifications, setNotifications] = useState(2);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Products",
      hasDropdown: true,
      items: [
        { name: "Web Design", icon: Globe, desc: "Modern web solutions" },
        { name: "UI Kits", icon: Sparkles, desc: "Premium design systems" },
        { name: "Templates", icon: Zap, desc: "Ready-to-use layouts" },
        { name: "Icons", icon: Star, desc: "Crisp vector icons" },
      ],
    },
    {
      name: "Solutions",
      hasDropdown: true,
      items: [
        { name: "Enterprise", icon: Shield, desc: "Scale with confidence" },
        { name: "Startups", icon: TrendingUp, desc: "Launch faster" },
        { name: "Agencies", icon: Award, desc: "Client success tools" },
        { name: "Freelancers", icon: Heart, desc: "Solo creator tools" },
      ],
    },
    { name: "Pricing", hasDropdown: false },
    { name: "Resources", hasDropdown: false },
    { name: "Community", hasDropdown: false },
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      }`}
    >
      {/* Floating Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full ${
            isDark ? "bg-purple-500/20" : "bg-blue-400/20"
          } blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute top-40 right-20 w-96 h-96 rounded-full ${
            isDark ? "bg-pink-500/15" : "bg-purple-400/15"
          } blur-3xl animate-pulse delay-1000`}
        ></div>
        <div
          className={`absolute bottom-20 left-1/2 w-80 h-80 rounded-full ${
            isDark ? "bg-blue-500/10" : "bg-pink-400/10"
          } blur-3xl animate-pulse delay-2000`}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? `${
                isDark ? "bg-slate-900/80" : "bg-white/80"
              } backdrop-blur-xl border-b ${
                isDark ? "border-white/10" : "border-black/10"
              } shadow-2xl`
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div
                className={`w-8 h-8 rounded-lg bg-gradient-to-r ${
                  isDark
                    ? "from-purple-400 to-pink-400"
                    : "from-blue-500 to-purple-500"
                } flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span
                className={`text-xl font-bold bg-gradient-to-r ${
                  isDark
                    ? "from-white to-purple-200"
                    : "from-gray-800 to-purple-600"
                } bg-clip-text text-transparent`}
              >
                ProUI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onClick={() => {
                    if (item.hasDropdown) {
                      // Toggle active dropdown: close if already active
                      setActiveDropdown((prev) =>
                        prev === item.name ? "" : item.name
                      );
                    }
                  }}
                >
                  <button
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? "text-gray-300 hover:text-white hover:bg-white/10"
                        : "text-gray-700 hover:text-gray-900 hover:bg-black/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-80 rounded-2xl ${
                        isDark
                          ? "bg-slate-800/90 border-white/10"
                          : "bg-white/90 border-black/10"
                      } border backdrop-blur-xl shadow-2xl p-6 transform transition-all duration-300 opacity-100 scale-100`}
                    >
                      <div className="grid grid-cols-1 gap-4">
                        {item.items?.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                              isDark ? "hover:bg-white/10" : "hover:bg-black/5"
                            }`}
                          >
                            <div
                              className={`w-10 h-10 rounded-lg bg-gradient-to-r ${
                                isDark
                                  ? "from-purple-400/20 to-pink-400/20"
                                  : "from-blue-500/20 to-purple-500/20"
                              } flex items-center justify-center`}
                            >
                              <subItem.icon
                                className={`w-5 h-5 ${
                                  isDark ? "text-purple-300" : "text-purple-600"
                                }`}
                              />
                            </div>
                            <div>
                              <h3
                                className={`font-medium ${
                                  isDark ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {subItem.name}
                              </h3>
                              <p
                                className={`text-sm ${
                                  isDark ? "text-gray-400" : "text-gray-600"
                                }`}
                              >
                                {subItem.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <div
                className={`relative transition-all duration-300 ${
                  searchFocused ? "scale-105" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search anything..."
                  className={`w-64 h-10 pl-10 pr-4 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 ${
                    isDark
                      ? "bg-slate-800/50 border-white/20 text-white placeholder-gray-400 focus:ring-purple-400/50 focus:border-purple-400"
                      : "bg-white/50 border-black/20 text-gray-900 placeholder-gray-500 focus:ring-purple-500/50 focus:border-purple-500"
                  } backdrop-blur-xl`}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? "bg-white/10 text-yellow-400 hover:bg-white/20"
                    : "bg-black/10 text-gray-700 hover:bg-black/20"
                }`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Notifications */}
              <button
                className={`relative p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? "bg-white/10 text-gray-300 hover:bg-white/20"
                    : "bg-black/10 text-gray-700 hover:bg-black/20"
                }`}
              >
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                className={`relative p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? "bg-white/10 text-gray-300 hover:bg-white/20"
                    : "bg-black/10 text-gray-700 hover:bg-black/20"
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Profile */}
              <button
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-white/20"
                    : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-800 border border-black/20"
                }`}
              >
                <User className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? "bg-white/10 text-gray-300 hover:bg-white/20"
                    : "bg-black/10 text-gray-700 hover:bg-black/20"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden absolute top-16 left-0 right-0 ${
              isDark
                ? "bg-slate-900/95 border-white/10"
                : "bg-white/95 border-black/10"
            } border-t backdrop-blur-xl shadow-2xl`}
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <button
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isDark
                        ? "text-gray-300 hover:text-white hover:bg-white/10"
                        : "text-gray-700 hover:text-gray-900 hover:bg-black/5"
                    }`}
                  >
                    {item.name}
                  </button>
                </div>
              ))}

              {/* Mobile Search */}
              <div className="pt-4 border-t border-opacity-20">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                    isDark
                      ? "bg-slate-800/50 border-white/20 text-white placeholder-gray-400 focus:ring-purple-400/50"
                      : "bg-white/50 border-black/20 text-gray-900 placeholder-gray-500 focus:ring-purple-500/50"
                  } backdrop-blur-xl`}
                />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Demo Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${
              isDark
                ? "from-white via-purple-200 to-pink-200"
                : "from-gray-800 via-purple-600 to-pink-600"
            } bg-clip-text text-transparent`}
          >
            Glass-morphism
          </h1>
          <h2
            className={`text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r ${
              isDark
                ? "from-purple-300 to-pink-300"
                : "from-purple-700 to-pink-700"
            } bg-clip-text text-transparent`}
          >
            Pro Navbar
          </h2>
          <p
            className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Experience the future of navigation with our cutting-edge
            glass-morphism design. Featuring smooth animations, intelligent
            dropdowns, and pixel-perfect responsiveness.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Sparkles,
                title: "Glass Effect",
                desc: "Stunning backdrop blur with transparency",
              },
              {
                icon: Zap,
                title: "Smooth Animations",
                desc: "Buttery 60fps micro-interactions",
              },
              {
                icon: Shield,
                title: "Responsive Design",
                desc: "Perfect on every screen size",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/30 border-black/10 hover:bg-white/50"
                } border backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
              >
                <feature.icon
                  className={`w-12 h-12 mx-auto mb-4 ${
                    isDark ? "text-purple-400" : "text-purple-600"
                  }`}
                />
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProGlassmorphismNavbar;
