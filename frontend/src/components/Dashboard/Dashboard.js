import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [activeNav, setActiveNav] = useState('dashboard');

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'courses', label: 'Courses', icon: '📚' },
        { id: 'students', label: 'Students', icon: '👥' },
        { id: 'assignments', label: 'Assignments', icon: '📝' },
        { id: 'calendar', label: 'Calendar', icon: '📅' },
        { id: 'settings', label: 'Settings', icon: '⚙️' }
    ];

    const stats = [
        { label: 'Total Students', value: '1,234' },
        { label: 'Active Courses', value: '42' },
        { label: 'Completion Rate', value: '89%' },
        { label: 'Total Revenue', value: '$12.4K' }
    ];

    const recentActivities = [
        {
            id: 1,
            title: 'New Student Enrollment',
            description: 'John Doe enrolled in Advanced JavaScript Course',
            time: '2 hours ago',
            icon: '👤'
        },
        {
            id: 2,
            title: 'Course Completion',
            description: 'Sarah Smith completed React Fundamentals',
            time: '4 hours ago',
            icon: '🎓'
        },
        {
            id: 3,
            title: 'New Assignment Posted',
            description: 'Web Development Basics - Week 3 Assignment',
            time: '6 hours ago',
            icon: '📝'
        }
    ];

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Sign Academy</h2>
                </div>
                <ul className="nav-items">
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
                            onClick={() => setActiveNav(item.id)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <div className="header">
                    <div className="header-left">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="header-right">
                        <div className="user-profile">
                            <div className="user-avatar">
                                👤
                            </div>
                            <span>Admin User</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="content">
                    {/* Stats Grid */}
                    <div className="dashboard-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="card stat-card">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity */}
                    <div className="card recent-activity">
                        <div className="card-header">
                            <h3 className="card-title">Recent Activity</h3>
                        </div>
                        <ul className="activity-list">
                            {recentActivities.map(activity => (
                                <li key={activity.id} className="activity-item">
                                    <div className="activity-icon">
                                        {activity.icon}
                                    </div>
                                    <div className="activity-details">
                                        <div className="activity-title">{activity.title}</div>
                                        <div className="activity-description">{activity.description}</div>
                                        <div className="activity-time">{activity.time}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
