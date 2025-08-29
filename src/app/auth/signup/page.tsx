"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff, User, Building, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { signUpSchema } from "@/lib/zod";
import { ZodError } from "zod";

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        company: "",
        acceptTerms: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const validateForm = () => {
        try {
            signUpSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof ZodError) {
                const newErrors: { [key: string]: string } = {};
                // In Zod v4, we need to use error.issues instead of error.errors
                error.issues.forEach((issue) => {
                    if (issue.path && issue.path.length > 0) {
                        const fieldName = issue.path[0] as string;
                        newErrors[fieldName] = issue.message;
                    }
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setErrors({});

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    company: formData.company,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("¡Cuenta creada exitosamente! Redirigiendo al login...");
                setTimeout(() => {
                    router.push("/auth/signin");
                }, 2000);
            } else {
                setErrors({ general: data.error || "Error al crear la cuenta" });
            }
        } catch (error) {
            setErrors({ general: "Error de conexión. Inténtalo de nuevo." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData({ ...formData, [field]: value });
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors({ ...errors, [field]: "" });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-800 flex items-center justify-center p-4">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 w-full max-w-md">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <Link href="/" className="inline-block">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                            7Pixels
                        </h1>
                    </Link>
                    <p className="text-gray-400">Crea tu cuenta</p>
                </motion.div>

                {/* Sign Up Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                placeholder="Nombre completo"
                                className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300 ${errors.name ? "border-red-500/50" : "border-white/20"
                                    }`}
                                required
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder="tu@email.com"
                                className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300 ${errors.email ? "border-red-500/50" : "border-white/20"
                                    }`}
                                required
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                            )}
                        </div>

                        {/* Company Field */}
                        <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                                placeholder="Nombre de tu empresa (opcional)"
                                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                                placeholder="Contraseña (mín. 8 caracteres)"
                                className={`w-full pl-12 pr-12 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300 ${errors.password ? "border-red-500/50" : "border-white/20"
                                    }`}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={formData.confirmPassword}
                                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                placeholder="Confirmar contraseña"
                                className={`w-full pl-12 pr-12 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300 ${errors.confirmPassword ? "border-red-500/50" : "border-white/20"
                                    }`}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
                            )}
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start space-x-3">
                            <div className="flex items-center h-5">
                                <input
                                    id="acceptTerms"
                                    type="checkbox"
                                    checked={formData.acceptTerms}
                                    onChange={(e) => handleInputChange("acceptTerms", e.target.checked)}
                                    className="w-4 h-4 text-green-600 bg-white/10 border-white/20 rounded focus:ring-green-500 focus:ring-2"
                                    required
                                />
                            </div>
                            <div className="text-sm">
                                <label htmlFor="acceptTerms" className="text-gray-300">
                                    Acepto los{" "}
                                    <Link href="/terms" className="text-green-400 hover:text-green-300">
                                        términos y condiciones
                                    </Link>{" "}
                                    y la{" "}
                                    <Link href="/privacy" className="text-green-400 hover:text-green-300">
                                        política de privacidad
                                    </Link>
                                </label>
                                {errors.acceptTerms && (
                                    <p className="mt-1 text-sm text-red-400">{errors.acceptTerms}</p>
                                )}
                            </div>
                        </div>

                        {/* General Error */}
                        {errors.general && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300"
                            >
                                <AlertCircle className="w-5 h-5" />
                                {errors.general}
                            </motion.div>
                        )}

                        {/* Success Message */}
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2 p-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300"
                            >
                                <CheckCircle className="w-5 h-5" />
                                {success}
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
                        </button>
                    </form>

                    {/* Links */}
                    <div className="mt-6 text-center">
                        <div className="text-sm text-gray-400">
                            ¿Ya tienes cuenta?{" "}
                            <Link
                                href="/auth/signin"
                                className="text-green-400 hover:text-green-300 transition-colors duration-200 font-medium"
                            >
                                Inicia sesión aquí
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
