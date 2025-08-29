"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "motion/react";
import { User, Building, Mail, Calendar, LogOut, Shield, Settings } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/signin");
        }
    }, [status, router]);

    if (status === "loading") {
        return (
            <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-800 flex items-center justify-center">
                <div className="text-white text-xl">Cargando...</div>
            </div>
        );
    }

    if (!session) {
        return null;
    }

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-800">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <header className="bg-white/5 backdrop-blur-xl border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                7Pixels
                            </Link>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3 text-white">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{session.user?.name}</p>
                                        <p className="text-sm text-gray-400">{session.user?.email}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={handleSignOut}
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
                            Bienvenido, {session.user?.name}!
                        </h1>
                        <p className="text-xl text-gray-300">
                            Gestiona tu cuenta y proyectos desde tu panel personal
                        </p>
                    </motion.div>

                    {/* User Info Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                    <User className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Información Personal</h3>
                                    <p className="text-gray-400">Datos de tu cuenta</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-300"><span className="text-gray-400">Nombre:</span> {session.user?.name}</p>
                                <p className="text-gray-300"><span className="text-gray-400">Email:</span> {session.user?.email}</p>
                                <p className="text-gray-300"><span className="text-gray-400">Rol:</span> {session.user?.role || "Usuario"}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Estado de la Cuenta</h3>
                                    <p className="text-gray-400">Estado y permisos</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span className="text-green-400">Cuenta Activa</span>
                                </div>
                                <p className="text-gray-300">Tu cuenta está funcionando correctamente</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                    <Settings className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Acciones</h3>
                                    <p className="text-gray-400">Gestiona tu cuenta</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <button className="w-full py-2 px-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                                    Editar Perfil
                                </button>
                                <button className="w-full py-2 px-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                                    Cambiar Contraseña
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Acciones Rápidas</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Link
                                href="/contact"
                                className="p-4 bg-white/10 border border-white/20 rounded-xl text-center hover:bg-white/20 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-6 h-6 text-green-400" />
                                </div>
                                <p className="text-white font-medium">Contactar Soporte</p>
                            </Link>

                            <Link
                                href="/portfolio"
                                className="p-4 bg-white/10 border border-white/20 rounded-xl text-center hover:bg-white/20 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Building className="w-6 h-6 text-blue-400" />
                                </div>
                                <p className="text-white font-medium">Ver Portfolio</p>
                            </Link>

                            <Link
                                href="/"
                                className="p-4 bg-white/10 border border-white/20 rounded-xl text-center hover:bg-white/20 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Calendar className="w-6 h-6 text-purple-400" />
                                </div>
                                <p className="text-white font-medium">Inicio</p>
                            </Link>

                            <button className="p-4 bg-white/10 border border-white/20 rounded-xl text-center hover:bg-white/20 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Settings className="w-6 h-6 text-orange-400" />
                                </div>
                                <p className="text-white font-medium">Configuración</p>
                            </button>
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
