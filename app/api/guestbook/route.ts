import { connectToDatabase } from "@/helpers/server-helpers";
import { NextResponse } from "next/server";
import prisma from '@/prisma';

export const POST = async (req: Request) => {
  const { email, name, message, ip } = await req.json();
  const ipjson = JSON.stringify(ip || '{}');
  try {
    if (!name || !message) return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    await connectToDatabase();
    const newMessage = await prisma.guestbook.create({
      data: {
        email,
        name,
        message,
        ip: ipjson
      }
    });
    return NextResponse.json({ message: "successful"}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "服务器错误，请稍后重试！" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }

}

export const GET = async () => {
  try {
    await connectToDatabase();
    const guestbook = await prisma.guestbook.findMany({
      orderBy: {
        createdAt: 'desc' // 按时间倒序排序
      }
    });
    return NextResponse.json({ guestbook: guestbook.map(item => { return { ...item, ip: JSON.parse(item.ip || '{}') } }) }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "服务器错误，请稍后重试！" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};