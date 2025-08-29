import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { signUpSchema } from "@/lib/zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input data
    const validatedData = signUpSchema.parse(body);

    const { db } = await connectToDatabase();

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({
      email: validatedData.email.toLowerCase(),
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Ya existe una cuenta con este email" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 12);

    // Create user
    const newUser = {
      name: validatedData.name,
      email: validatedData.email.toLowerCase(),
      password: hashedPassword,
      company: validatedData.company || null,
      role: "visitor", // Default role
      status: "active",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("users").insertOne(newUser);

    // Remove password from response
    const { password, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      {
        message: "Usuario creado exitosamente",
        user: {
          id: result.insertedId.toString(),
          ...userWithoutPassword,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Signup error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Datos de entrada inválidos" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
