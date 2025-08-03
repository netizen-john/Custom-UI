"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  BarChart3,
  Settings,
  MessageSquare,
  Users,
  DollarSign,
  Briefcase,
  Clock,
  TrendingUp,
  ChevronRight,
  Bell,
  Search,
  Filter,
  Download,
  Star,
  Zap,
} from "lucide-react";

const Dashboard = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [revenue, setRevenue] = useState(24560);
  const [users, setUsers] = useState(12348);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((prev) => prev + Math.floor(Math.random() * 100));
      if (Math.random() > 0.7) {
        setUsers((prev) => prev + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sidebarItems = [
    { icon: Home, label: "Home", active: false },
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Briefcase, label: "Reports", active: false },
    { icon: Settings, label: "Settings", active: false },
    { icon: MessageSquare, label: "Messages", active: false },
  ];

  const statsCards = [
    {
      title: "Total Users",
      value: users.toLocaleString(),
      icon: Users,
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      change: "+12.5%",
      changeType: "positive",
    },
    {
      title: "Revenue",
      value: `$${revenue.toLocaleString()}`,
      icon: DollarSign,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      change: "+8.2%",
      changeType: "positive",
      hasChart: true,
    },
    {
      title: "Active Projects",
      value: "56",
      icon: Briefcase,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      change: "+7.2%",
      changeType: "positive",
    },
    {
      title: "Pending Tasks",
      value: "142",
      icon: Clock,
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      change: "-3.1%",
      changeType: "negative",
    },
  ];

  return (
    <div className="h-[150vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative flex h-full">
        {/* Sidebar */}
        <div className="w-64 bg-black/20 backdrop-blur-xl border-r border-white/10">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group ${
                    item.active
                      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                      : "hover:bg-white/5"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      item.active
                        ? "text-purple-400"
                        : "text-gray-400 group-hover:text-white"
                    } transition-colors`}
                  />
                  <span
                    className={`font-medium ${
                      item.active
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    } transition-colors`}
                  >
                    {item.label}
                  </span>
                  {item.active && (
                    <ChevronRight className="w-4 h-4 text-purple-400 ml-auto" />
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* User Profile */}
          <div className="absolute bottom-6 left-6 right-6 ">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">JD</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">John Doe</p>
                  <p className="text-gray-400 text-xs">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-black/10 backdrop-blur-xl border-b border-white/10 px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                <p className="text-gray-400 mt-1">
                  Welcome back, here's what's happening
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  />
                </div>
                <button className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                  <Filter className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all relative">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </button>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 p-8 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCards.map((card, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    activeCard === index ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(0)}
                >
                  {/* Card */}
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${card.gradient} bg-opacity-20`}
                        >
                          <card.icon className="w-6 h-6 text-white" />
                        </div>
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            card.changeType === "positive"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {card.change}
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm font-medium">
                          {card.title}
                        </p>
                        <p className="text-3xl font-bold text-white mt-1">
                          {card.value}
                        </p>
                      </div>

                      {card.hasChart && (
                        <div className="mt-4 h-16 relative">
                          <svg className="w-full h-full" viewBox="0 0 200 60">
                            <defs>
                              <linearGradient
                                id="chartGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#10b981"
                                  stopOpacity="0.8"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#06b6d4"
                                  stopOpacity="0.8"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M10,50 Q30,30 50,35 T90,25 T130,30 T170,20 T190,15"
                              stroke="url(#chartGradient)"
                              strokeWidth="3"
                              fill="none"
                              className="animate-pulse"
                            />
                            <circle
                              cx="190"
                              cy="15"
                              r="4"
                              fill="#06b6d4"
                              className="animate-pulse"
                            >
                              <animate
                                attributeName="r"
                                values="3;5;3"
                                dur="2s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -left-full group-hover:left-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-1000 transform skew-x-12"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Performance Chart */}
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Performance Overview
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Last 30 days analytics
                    </p>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">Export</span>
                  </button>
                </div>

                <div className="h-64 relative">
                  <svg className="w-full h-full" viewBox="0 0 600 200">
                    <defs>
                      <linearGradient
                        id="areaGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#8b5cf6"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="#8b5cf6"
                          stopOpacity="0.1"
                        />
                      </linearGradient>
                    </defs>

                    {/* Grid Lines */}
                    {[...Array(5)].map((_, i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={40 + i * 30}
                        x2="600"
                        y2={40 + i * 30}
                        stroke="white"
                        strokeOpacity="0.1"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Area Chart */}
                    <path
                      d="M50,160 Q100,140 150,120 T250,100 T350,90 T450,80 T550,70 L550,180 L50,180 Z"
                      fill="url(#areaGradient)"
                    />

                    {/* Line Chart */}
                    <path
                      d="M50,160 Q100,140 150,120 T250,100 T350,90 T450,80 T550,70"
                      stroke="#8b5cf6"
                      strokeWidth="3"
                      fill="none"
                    />

                    {/* Data Points */}
                    {[
                      { x: 50, y: 160 },
                      { x: 150, y: 120 },
                      { x: 250, y: 100 },
                      { x: 350, y: 90 },
                      { x: 450, y: 80 },
                      { x: 550, y: 70 },
                    ].map((point, i) => (
                      <circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="5"
                        fill="#8b5cf6"
                        className="hover:r-7 transition-all cursor-pointer"
                      >
                        <animate
                          attributeName="r"
                          values="4;6;4"
                          dur="2s"
                          repeatCount="indefinite"
                          begin={`${i * 0.5}s`}
                        />
                      </circle>
                    ))}
                  </svg>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">
                    Recent Activity
                  </h3>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>

                <div className="space-y-4">
                  {[
                    {
                      action: "New user registered",
                      time: "2 min ago",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      action: "Payment received",
                      time: "5 min ago",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      action: "Project completed",
                      time: "12 min ago",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      action: "System backup",
                      time: "1 hour ago",
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
                    >
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${activity.color} rounded-full animate-pulse`}
                      ></div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors">
                          {activity.action}
                        </p>
                        <p className="text-gray-400 text-xs">{activity.time}</p>
                      </div>
                      <TrendingUp className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
