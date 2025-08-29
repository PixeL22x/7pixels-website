"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Users, Settings, Shield, BarChart3, LogOut } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
    const { user, requireRole, logout } = useAuth();

    useEffect(() => {
        requireRole("admin", "/dashboard");
    }, [requireRole]);

    if (!user || user.role !== "admin") {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-800">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <header className="bg-white/5 backdrop-blur-xl border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                7Pixels Admin
                            </Link>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3 text-white">
                                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-red-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{user.name}</p>
                                        <p className="text-sm text-gray-400">Administrador</p>
                                    </div>
                                </div>

                                <button
                                    onClick={logout}
                                    className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-300 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Panel de Administración
                        </h1>
                        <p className="text-xl text-gray-300">
                            Gestiona usuarios, configuraciones y estadísticas del sistema
                        </p>
                    </motion.div>

                    {/* Admin Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                                    <Users className="w-6 h-6 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Gestión de Usuarios</h3>
                                    <p className="text-gray-400">Administra cuentas de usuario</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <button className="w-full py-2 px-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                                    Ver Usuarios
                                </button>
                                <button className="w-full py-2 px-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                                    Crear Usuario
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                    <BarChart3 className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Estadísticas</h3>
                                    <p className="text-gray-400">Analytics y métricas</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <button className="w-full py-2 px-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                                    Ver Analytics
                                </button>
                                <button className="w-full py-2 px-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                                    Reportes
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                    <Settings className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Configuración</h3>
                                    <p className="text-gray-400">Ajustes del sistema</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <button className="w-full py-2 px-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                                    Configuración General
                                </button>
                                <button className="w-full py-2 px-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                                    Seguridad
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Estadísticas Rápidas</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
                                <div className="text-gray-400">Usuarios Activos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400 mb-2">25</div>
                                <div className="text-gray-400">Proyectos Activos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                                <div className="text-gray-400">Satisfacción</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                                <div className="text-gray-400">Soporte</div>
                            </div>
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
