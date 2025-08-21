"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Zap, Laptop, Wrench, Rocket, Palette, X, HelpCircle, Users, Plus, Mail, ArrowUpRight } from 'lucide-react';
import ModernNavbar from '@/components/modern-navbar';
import Particles from '@/components/Particles';
import { useTranslations } from '@/hooks/useTranslations';
import { useTheme } from '@/contexts/ThemeContext';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar: React.ComponentType<{ className?: string; size?: number }>;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamPage = () => {
  const t = useTranslations();
  const { language } = useTheme();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  // Definir teamMembers después de que se inicialicen los hooks
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Piero",
      role: t.teamRoleCEO,
      description: t.teamMemberPiero,
      avatar: Target,
      skills: [t.teamSkillOperations, t.teamSkillStrategic, t.teamSkillBusiness, t.teamSkillLeadership, t.teamSkillProcess, t.teamSkillInnovation],
      social: {
        linkedin: "#",
        email: "piero@7pixels.es"
      }
    },
    {
      id: 2,
      name: "José",
      role: t.teamRoleCTO,
      description: t.teamMemberJose,
      avatar: Zap,
      skills: [t.teamSkillSoftware, t.teamSkillArchitecture, t.teamSkillFullStack, t.teamSkillTechnical, t.teamSkillStartup, t.teamSkillProduct, t.teamSkillMentoring, t.teamSkillInnovation],
      social: {
        linkedin: "#",
        github: "#",
        email: "jose@7pixels.es"
      }
    },
    {
      id: 3,
      name: language === "es" ? "¿Serás tú?" : "Will it be you?",
      role: t.teamRoleFuture,
      description: t.teamMemberFuture,
      avatar: HelpCircle,
      skills: [t.teamSkillYourSkills, t.teamSkillYourPassion, t.teamSkillYourVision, t.teamSkillInnovation, t.teamSkillCollaboration, t.teamSkillExcellence],
      social: {
        email: "careers@7pixels.es"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Modern Navbar */}
      <ModernNavbar />
      
      {/* Professional Background with Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-emerald-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        {/* Elegant Particles Effect */}
        <div className="absolute inset-0" style={{ width: '100%', height: '100vh' }}>
          <Particles
            particleColors={['#22c55e', '#10b981', '#059669', '#16a34a', '#15803d']}
            particleCount={200}
            particleSpread={20}
            speed={0.08}
            particleBaseSize={60}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
            particleHoverFactor={0.3}
            sizeRandomness={1.2}
            cameraDistance={15}
          />
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              {t.teamTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {t.teamSubtitle}
            </p>
          </motion.div>

          {/* Team Grid - Premium Design */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 mb-16 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(member)}
                className="group relative cursor-pointer h-[600px]"
              >
                {/* Card Background with Gradient */}
                <div className={`relative backdrop-blur-2xl rounded-3xl p-8 h-full transition-all duration-500 overflow-hidden flex flex-col ${
                  member.id === 3 
                    ? "bg-gradient-to-br from-purple-500/10 via-gray-800/20 to-gray-900/30 border-2 border-dashed border-purple-400/40 hover:border-purple-400/70 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-gradient-to-br hover:from-purple-500/20 hover:via-gray-700/30 hover:to-gray-800/40"
                    : "bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 hover:bg-gradient-to-br hover:from-green-500/10 hover:via-white/10 hover:to-transparent"
                }`}>
                  
                  {/* Floating Elements */}
                  <div className={`absolute top-4 right-4 w-20 h-20 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 ${
                    member.id === 3 
                      ? "bg-gradient-to-br from-purple-400/30 to-indigo-500/30" 
                      : "bg-gradient-to-br from-green-400/20 to-blue-500/20"
                  }`}></div>
                  <div className={`absolute bottom-4 left-4 w-16 h-16 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${
                    member.id === 3 
                      ? "bg-gradient-to-br from-indigo-400/30 to-purple-500/30" 
                      : "bg-gradient-to-br from-purple-400/20 to-green-500/20"
                  }`}></div>
                  
                  {/* Special "Join Us" indicator for future member */}
                  {member.id === 3 && (
                    <div className="absolute top-2 left-2 flex items-center space-x-1 text-purple-400 text-xs font-medium opacity-70">
                      <Plus size={12} />
                      <span>{t.teamOpenPosition}</span>
                    </div>
                  )}
                  
                  {/* Avatar Section */}
                  <div className="relative z-10 flex flex-col items-center text-center mb-6">
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center backdrop-blur-sm border shadow-lg ${
                        member.id === 3 
                          ? "bg-gradient-to-br from-purple-400/30 to-indigo-600/30 border-purple-400/40" 
                          : "bg-gradient-to-br from-green-400/30 to-green-600/30 border-green-400/30"
                      }`}>
                        <member.avatar size={42} className={`drop-shadow-lg ${
                          member.id === 3 ? "text-purple-400" : "text-green-400"
                        }`} />
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 w-24 h-24 rounded-full blur-md -z-10 transition-colors duration-500 ${
                        member.id === 3 
                          ? "bg-purple-400/20 group-hover:bg-purple-400/30" 
                          : "bg-green-400/20 group-hover:bg-green-400/30"
                      }`}></div>
                    </motion.div>
                    
                    {/* Member Info */}
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-green-100 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 border ${
                      member.id === 3 
                        ? "bg-gradient-to-r from-purple-500/20 to-indigo-600/20 text-purple-300 border-purple-500/30" 
                        : "bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border-green-500/30"
                    }`}>
                      {member.role}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                    {member.description}
                  </p>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-10">
                    {member.skills.slice(0, 4).map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="px-3 py-1.5 bg-white/10 text-gray-300 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10 hover:bg-green-500/20 hover:text-green-300 hover:border-green-500/30 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {member.skills.length > 4 && (
                      <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                        +{member.skills.length - 4} más
                      </span>
                    )}
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  {/* Contact Badge - Always at same position */}
                  {member.social.email && (
                    <div className="flex justify-center relative z-10">
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
                          member.id === 3
                            ? "bg-gradient-to-r from-purple-500/10 via-purple-400/20 to-purple-500/10 border border-purple-500/30 text-purple-400 hover:border-purple-400/50 hover:from-purple-500/20 hover:via-purple-400/30 hover:to-purple-500/20"
                            : "bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10 border border-green-500/30 text-green-400 hover:border-green-400/50 hover:from-green-500/20 hover:via-green-400/30 hover:to-green-500/20"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-sm font-medium">{t.teamContactButton}</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </motion.a>
                    </div>
                  )}

                  {/* Bottom highlight line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                    member.id === 3 
                      ? "bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" 
                      : "bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
                  }`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t.teamJoinTitle}
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.teamJoinDescription}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t.teamJoinButton}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center hover:bg-red-500/40 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Member Details */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
                    <selectedMember.avatar size={48} />
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-2 text-white">
                  {selectedMember.name}
                </h2>
                <p className="text-green-400 text-xl font-semibold mb-6">
                  {selectedMember.role}
                </p>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {selectedMember.description}
                </p>

                {/* All Skills */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {t.teamSpecialties}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {selectedMember.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Section */}
                {selectedMember.social.email && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {t.teamReadyToCollaborate}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {t.teamCollaborateDescription.replace('{name}', selectedMember.name.split(' ')[0])}
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <motion.a
                        href={`mailto:${selectedMember.social.email}`}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500/20 via-green-400/30 to-green-500/20 border border-green-500/40 rounded-full text-green-400 hover:border-green-400/60 hover:from-green-500/30 hover:via-green-400/40 hover:to-green-500/30 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-green-500/20"
                      >
                        <Mail size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-medium">{t.teamSendMessage}</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </motion.a>
                    </div>
                    
                    {/* Email Display */}
                    <div className="text-center">
                      <p className="text-xs text-gray-500 font-mono">
                        {selectedMember.social.email}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamPage;
